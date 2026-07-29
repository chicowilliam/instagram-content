/**
 * Scaffold a new CMS post.
 *
 * Usage:
 *   npm run create-post -- --title "Quanto custa um site"
 *   npm run create-post -- --title "SEO local" --id 011
 */

import { mkdir, writeFile, access } from 'node:fs/promises'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..')

function arg(name: string) {
  const flag = process.argv.find((a) => a.startsWith(`--${name}=`))
  return flag?.split('=').slice(1).join('=')
}

function slugify(value: string) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

const MONTHS = [
  'janeiro',
  'fevereiro',
  'marco',
  'abril',
  'maio',
  'junho',
  'julho',
  'agosto',
  'setembro',
  'outubro',
  'novembro',
  'dezembro',
]

async function exists(path: string) {
  try {
    await access(path)
    return true
  } catch {
    return false
  }
}

async function main() {
  const title = arg('title')
  if (!title) {
    console.error('Uso: npm run create-post -- --title "Título do post"')
    process.exit(1)
  }

  const now = new Date()
  const year = String(now.getFullYear())
  const month = `${String(now.getMonth() + 1).padStart(2, '0')}-${MONTHS[now.getMonth()]}`
  const id = (arg('id') ?? '011').padStart(3, '0')
  const slug = slugify(title)
  const folderName = `${id}-${slug}`
  const folder = join(ROOT, 'src', 'posts', year, month, folderName)
  const relative = `${year}/${month}/${folderName}`
  const today = now.toISOString().slice(0, 10)

  if (await exists(folder)) {
    console.error(`Pasta já existe: ${relative}`)
    process.exit(1)
  }

  await mkdir(folder, { recursive: true })

  const meta = `import type { Brief, CopyDeck, PostMeta } from '@/cms/types'
import { generateCopy } from '@/captions/generate'

export const meta: PostMeta = {
  id: '${id}',
  slug: '${slug}',
  title: ${JSON.stringify(title)},
  category: 'geral',
  objective: 'educar',
  status: 'IDEA',
  template: 'lista',
  slideCount: 5,
  storyCount: 3,
  folder: '${relative}',
  createdAt: '${today}',
  updatedAt: '${today}',
}

export const brief: Brief = {
  objective: 'educar',
  audience: 'Empresários locais',
  problem: 'Definir no Brief',
  solution: 'Definir no Brief',
  cta: 'Salve este conteúdo.',
  slideCount: 5,
  category: 'geral',
  template: 'lista',
  primaryMetric: 'Salvamentos',
}

export const copy: CopyDeck = generateCopy(brief, meta.title)
`

  const postTsx = `import { PostCanvas, PostCarousel, PostStories } from '@/layouts'
import { Badge, CTA, Footer, Subtitle, Title } from '@/components/ui'
import { meta, copy } from './meta'

export default function Post() {
  return (
    <div className="flex flex-col gap-16">
      <PostCarousel>
        {copy.slides.map((slide) => (
          <PostCanvas
            key={slide.number}
            name={\`post\${meta.id}-slide\${slide.number}\`}
            format="portrait"
            surface="mesh"
          >
            <div className="flex h-full flex-col justify-between">
              <div className="flex flex-col gap-6">
                <Badge>{slide.purpose}</Badge>
                <Title size="h1">{slide.headline}</Title>
                {slide.body ? <Subtitle>{slide.body}</Subtitle> : null}
              </div>
              {slide.number === copy.slides.length ? (
                <CTA>{copy.reel.cta}</CTA>
              ) : (
                <Footer brand="Vinícius William" handle="Desenvolvimento Web" />
              )}
            </div>
          </PostCanvas>
        ))}
      </PostCarousel>

      <PostStories>
        {copy.stories.map((story) => (
          <PostCanvas
            key={story.number}
            name={\`post\${meta.id}-story\${story.number}\`}
            format="story"
            surface="soft"
          >
            <div className="flex h-full flex-col justify-between py-8">
              <Badge>{story.role}</Badge>
              <div className="flex flex-col gap-4">
                <Title size="h1">{story.headline}</Title>
                <Subtitle>{story.body}</Subtitle>
              </div>
              <Footer brand="Vinícius William" handle="Desenvolvimento Web" />
            </div>
          </PostCanvas>
        ))}
      </PostStories>
    </div>
  )
}
`

  await Promise.all([
    writeFile(join(folder, 'meta.ts'), meta),
    writeFile(
      join(folder, 'brief.md'),
      `# Brief — Post ${id}\n\n## Título\n${title}\n\n## Objetivo\n\n## Público\n\n## Problema\n\n## Solução\n\n## CTA\n\n## Slides\n5\n\n## Categoria\n\n## Template\nlista\n`,
    ),
    writeFile(
      join(folder, 'copy.md'),
      `# Copy — Post ${id}\n\nPreencher após o Brief. Use generateCopy() como base.\n`,
    ),
    writeFile(
      join(folder, 'strategy.md'),
      `# Strategy — Post ${id}\n\n## Por que este conteúdo existe\n\n## Reação esperada\n\n## Compartilhabilidade\n`,
    ),
    writeFile(join(folder, 'Post.tsx'), postTsx),
  ])

  console.log(`\n✓ Post criado em src/posts/${relative}/`)
  console.log(`
Arquivos:
  brief.md
  copy.md
  strategy.md
  meta.ts
  Post.tsx

Próximo passo:
  1. Preencher brief.md / meta.ts
  2. Registrar em src/posts/register.ts
  3. Avançar status: IDEA → BRIEF → COPY → DESIGN → REACT → PREVIEW → READY
`)
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
