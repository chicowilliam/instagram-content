import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { Story02Problem } from '@/posts/2026/07-julho/001-sua-empresa-precisa-de-site/slides/stories'
import { Story02ProblemV1 } from '@/posts/2026/07-julho/001-sua-empresa-precisa-de-site/slides/Story02Problem.v1'

const FULL_W = 1080
const FULL_H = 1920
const PREVIEW_SCALE = 0.28
const MOBILE_SCALE = 0.22

/**
 * Review do Story 02 — antes × depois × preview mobile.
 */
export function Post001StoryReviewPage() {
  return (
    <div className="min-h-screen bg-surface-100 px-6 py-10">
      <header className="mx-auto mb-10 max-w-[1400px]">
        <Link to="/post/001" className="text-sm text-ink-400 transition hover:text-ink-700">
          ← Preview Post 001
        </Link>
        <p className="mt-4 font-mono text-[11px] tracking-[0.14em] text-ink-300 uppercase">
          Story 02 · 1080×1920 · Aguardando aprovação
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-[-0.03em] text-ink-950">
          Story 02 — review
        </h1>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-500">
          Aura Estética (versão ruim), composição em quatro zonas, três marcadores
          curtos. Sem Casa Nôa.
        </p>
      </header>

      <div className="mx-auto flex max-w-[1400px] flex-wrap items-start gap-8">
        <Frame label="Anterior" scale={PREVIEW_SCALE}>
          <Story02ProblemV1 />
        </Frame>
        <Frame label="Corrigido" scale={PREVIEW_SCALE}>
          <Story02Problem />
        </Frame>
        <Frame label="Mobile preview" scale={MOBILE_SCALE}>
          <Story02Problem />
        </Frame>
      </div>
    </div>
  )
}

function Frame({
  children,
  scale,
  label,
}: {
  children: ReactNode
  scale: number
  label: string
}) {
  const frameW = FULL_W * scale
  const frameH = FULL_H * scale

  return (
    <div className="flex flex-col gap-3">
      <p className="font-mono text-[11px] tracking-[0.14em] text-ink-400 uppercase">
        {label}
      </p>
      <div
        className="relative overflow-hidden rounded-sm bg-white shadow-[0_8px_32px_rgb(0_0_0/0.08)]"
        style={{ width: frameW, height: frameH }}
      >
        <div
          className="origin-top-left"
          style={{
            width: FULL_W,
            height: FULL_H,
            transform: `scale(${scale})`,
          }}
        >
          {children}
        </div>
      </div>
    </div>
  )
}
