/**
 * CMS export — Playwright.
 *
 *   npm run export           → todos os posts READY+
 *   npm run export -- 001    → apenas o post 001
 *
 * Output:
 *   exports/post-001/slide-01.png
 *   exports/post-001/stories/story-01.png
 *   exports/post-001/reel/roteiro.md
 *   exports/post-001/caption.md
 *   exports/post-001/hashtags.md
 *   exports/thumbnails/post-001.png
 */

import { spawn, type ChildProcess } from 'node:child_process'
import { copyFile, mkdir, rm, writeFile } from 'node:fs/promises'
import { createServer } from 'node:http'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { chromium, type Browser, type Locator } from 'playwright'

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const EXPORT_PORT = 5188
const SLIDE_WIDTH = 1080
const SLIDE_HEIGHT = 1350
const STORY_HEIGHT = 1920

type Deliverables = {
  objective: string
  primaryMetric: string
  cta: string
  pinnedComment: string
  suggestedTime: string
  caption: string
  hashtags: string[]
  reel: {
    hook: string
    scenes: {
      time: string
      visual: string
      voiceover: string
      onScreen?: string
    }[]
    closing: string
  }
}

function parseArgs(argv: string[]) {
  const fromFlag = argv.find((arg) => /^post=/i.test(arg))
  const fromDash = argv.find((arg) => /^--post=/i.test(arg))
  const positional = argv.find(
    (arg) =>
      !arg.startsWith('-') &&
      !/^post=/i.test(arg) &&
      (/^\d+$/.test(arg) || /^post-?\d+$/i.test(arg)),
  )
  const raw =
    fromFlag?.split('=')[1] ??
    fromDash?.split('=')[1] ??
    positional ??
    process.env.post ??
    process.env.POST ??
    ''

  if (!raw || raw === 'all') return { mode: 'all' as const }
  return {
    mode: 'one' as const,
    id: raw.replace(/^post-?/i, '').padStart(3, '0'),
  }
}

function folderName(id: string) {
  return `post-${id}`
}

async function findFreePort(preferred: number): Promise<number> {
  return new Promise((resolvePort, reject) => {
    const server = createServer()
    server.once('error', () => {
      const fallback = createServer()
      fallback.listen(0, '127.0.0.1', () => {
        const address = fallback.address()
        if (!address || typeof address === 'string') {
          reject(new Error('Não foi possível obter porta livre'))
          return
        }
        const port = address.port
        fallback.close(() => resolvePort(port))
      })
    })
    server.listen(preferred, '127.0.0.1', () => {
      server.close(() => resolvePort(preferred))
    })
  })
}

async function waitForServer(url: string, timeoutMs = 60_000) {
  const start = Date.now()
  while (Date.now() - start < timeoutMs) {
    try {
      const res = await fetch(url)
      if (res.ok || res.status === 404) return
    } catch {
      // booting
    }
    await new Promise((r) => setTimeout(r, 250))
  }
  throw new Error(`Servidor não respondeu a tempo: ${url}`)
}

function startVite(port: number): ChildProcess {
  const viteBin = join(ROOT, 'node_modules', 'vite', 'bin', 'vite.js')
  return spawn(
    process.execPath,
    [viteBin, '--host', '127.0.0.1', '--port', String(port), '--strictPort'],
    {
      cwd: ROOT,
      stdio: ['ignore', 'pipe', 'pipe'],
      env: { ...process.env, BROWSER: 'none' },
      windowsHide: true,
    },
  )
}

async function stopProcess(child: ChildProcess) {
  if (!child.pid || child.killed || child.exitCode !== null) return
  await new Promise<void>((resolveStop) => {
    const timer = setTimeout(() => {
      forceKill(child)
      resolveStop()
    }, 4000)
    child.once('exit', () => {
      clearTimeout(timer)
      resolveStop()
    })
    if (process.platform === 'win32') {
      spawn('taskkill', ['/pid', String(child.pid), '/T', '/F'], {
        stdio: 'ignore',
        windowsHide: true,
      })
    } else {
      child.kill('SIGTERM')
    }
  })
}

function forceKill(child: ChildProcess) {
  if (!child.pid) return
  if (process.platform === 'win32') {
    spawn('taskkill', ['/pid', String(child.pid), '/T', '/F'], {
      stdio: 'ignore',
      windowsHide: true,
    })
  } else {
    child.kill('SIGKILL')
  }
}

function reelMarkdown(data: Deliverables) {
  const scenes = data.reel.scenes
    .map(
      (scene, index) => `## Cena ${String(index + 1).padStart(2, '0')} · ${scene.time}

**Visual:** ${scene.visual}

**Locução:** ${scene.voiceover}
${scene.onScreen ? `\n**Texto na tela:** ${scene.onScreen}\n` : ''}`,
    )
    .join('\n')

  return `# Roteiro do Reel

**Objetivo:** ${data.objective}
**Métrica:** ${data.primaryMetric}
**Gancho:** ${data.reel.hook}

${scenes}
## Encerramento

${data.reel.closing}

**CTA:** ${data.cta}
`
}

async function listCandidateIds(): Promise<string[]> {
  // Posts registered in the CMS (expand as library grows).
  // Only packages with full carousel + stories will succeed.
  return Array.from({ length: 20 }, (_, i) => String(i + 1).padStart(3, '0'))
}

async function exportOne(id: string, baseUrl: string, browser: Browser) {
  const exportUrl = `${baseUrl}/export/${id}`
  const outDir = join(ROOT, 'exports', folderName(id))
  const storiesDir = join(outDir, 'stories')
  const reelDir = join(outDir, 'reel')
  const thumbDir = join(ROOT, 'exports', 'thumbnails')
  const storiesRoot = join(ROOT, 'exports', 'stories', folderName(id))
  const reelsRoot = join(ROOT, 'exports', 'reels', folderName(id))

  console.log(`\n→ Post ${id}`)

  const page = await browser.newPage({
    viewport: { width: SLIDE_WIDTH + 80, height: STORY_HEIGHT + 80 },
    deviceScaleFactor: 1,
  })

  try {
    await page.goto(exportUrl, { waitUntil: 'networkidle', timeout: 60_000 })

    if ((await page.locator('[data-export-error]').count()) > 0) {
      throw new Error(await page.locator('[data-export-error]').innerText())
    }

    await page.evaluate(async () => {
      await document.fonts.ready
    })
    await new Promise((r) => setTimeout(r, 500))

    const carousel = page.locator('[data-slide-kind="carousel"]')
    const stories = page.locator('[data-slide-kind="stories"]')
    const carouselCount = await carousel.count()
    const storiesCount = await stories.count()

    if (carouselCount < 2) {
      throw new Error(`Carrossel incompleto (${carouselCount} slides).`)
    }
    if (storiesCount === 0) {
      throw new Error('Nenhum Story encontrado.')
    }

    const raw = await page.locator('[data-export-deliverables]').textContent()
    if (!raw) throw new Error('Deliverables ausentes.')
    const deliverables = JSON.parse(raw) as Deliverables

    await rm(outDir, { recursive: true, force: true })
    await Promise.all([
      mkdir(outDir, { recursive: true }),
      mkdir(storiesDir, { recursive: true }),
      mkdir(reelDir, { recursive: true }),
      mkdir(thumbDir, { recursive: true }),
      mkdir(storiesRoot, { recursive: true }),
      mkdir(reelsRoot, { recursive: true }),
    ])

    async function shot(
      locator: Locator,
      count: number,
      directory: string,
      prefix: string,
      height: number,
      mirrorDir?: string,
    ) {
      for (let i = 0; i < count; i++) {
        const item = locator.nth(i)
        await item.scrollIntoViewIfNeeded()
        const box = await item.boundingBox()
        if (!box) throw new Error(`${prefix} ${i + 1} sem box`)
        if (
          Math.round(box.width) !== SLIDE_WIDTH ||
          Math.round(box.height) !== height
        ) {
          throw new Error(
            `${prefix} ${i + 1}: ${Math.round(box.width)}×${Math.round(box.height)} (esperado ${SLIDE_WIDTH}×${height})`,
          )
        }
        const filename = `${prefix}-${String(i + 1).padStart(2, '0')}.png`
        const path = join(directory, filename)
        await item.screenshot({
          path,
          type: 'png',
          animations: 'disabled',
          caret: 'hide',
          scale: 'css',
        })
        if (mirrorDir) {
          await copyFile(path, join(mirrorDir, filename))
        }
        console.log(`  ✓ ${filename}`)
      }
    }

    await shot(carousel, carouselCount, outDir, 'slide', SLIDE_HEIGHT)
    await shot(
      stories,
      storiesCount,
      storiesDir,
      'story',
      STORY_HEIGHT,
      storiesRoot,
    )

    // Thumbnail = first carousel slide
    await copyFile(
      join(outDir, 'slide-01.png'),
      join(thumbDir, `${folderName(id)}.png`),
    )
    console.log(`  ✓ thumbnails/${folderName(id)}.png`)

    await writeFile(join(reelDir, 'roteiro.md'), reelMarkdown(deliverables))
    await writeFile(
      join(reelsRoot, 'roteiro.md'),
      reelMarkdown(deliverables),
    )
    await writeFile(
      join(outDir, 'caption.md'),
      `# Legenda\n\n${deliverables.caption}\n\n## CTA\n\n${deliverables.cta}\n\n## Comentário fixado\n\n${deliverables.pinnedComment}\n\n## Horário\n\n${deliverables.suggestedTime}\n`,
    )
    await writeFile(
      join(outDir, 'hashtags.md'),
      `# Hashtags\n\n${deliverables.hashtags.map((t) => `#${t}`).join(' ')}\n`,
    )

    await writeFile(
      join(outDir, 'manifest.json'),
      JSON.stringify(
        {
          id,
          folder: folderName(id),
          slides: carouselCount,
          stories: storiesCount,
          exportedAt: new Date().toISOString(),
        },
        null,
        2,
      ),
    )

    console.log(`✓ exports/${folderName(id)}/`)
  } finally {
    await page.close()
  }
}

async function main() {
  const args = parseArgs(process.argv.slice(2))
  const port = await findFreePort(EXPORT_PORT)
  const baseUrl = `http://127.0.0.1:${port}`
  const vite = startVite(port)
  let browser: Browser | undefined

  try {
    await waitForServer(baseUrl)
    browser = await chromium.launch({ headless: true })

    const ids =
      args.mode === 'one' ? [args.id] : await listCandidateIds()

    if (ids.length === 0) {
      throw new Error('Nenhum post encontrado para exportar.')
    }

    console.log(`Exportando…`)
    let ok = 0
    for (const id of ids) {
      try {
        await exportOne(id, baseUrl, browser)
        ok += 1
      } catch (error) {
        if (args.mode === 'one') throw error
        const message = error instanceof Error ? error.message : String(error)
        console.log(`  · ${id} ignorado — ${message}`)
      }
    }
    if (ok === 0) {
      throw new Error('Nenhum post exportado com sucesso.')
    }
    console.log(`\n✓ ${ok} post(s) exportado(s).`)
  } finally {
    await browser?.close()
    await stopProcess(vite)
  }
}

main().catch((error: unknown) => {
  console.error('\n✗ Export falhou')
  console.error(error instanceof Error ? error.message : error)
  process.exit(1)
})
