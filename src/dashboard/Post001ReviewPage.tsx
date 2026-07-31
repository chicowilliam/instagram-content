import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import {
  Slide02Problem,
  Slide03Comparison,
} from '@/posts/2026/07-julho/001-sua-empresa-precisa-de-site/slides'
import { Slide02ProblemV1 } from '@/posts/2026/07-julho/001-sua-empresa-precisa-de-site/slides/Slide02Problem.v1'
import { Slide03ComparisonV1 } from '@/posts/2026/07-julho/001-sua-empresa-precisa-de-site/slides/Slide03Comparison.v1'

const FULL_W = 1080
const FULL_H = 1350
const FEED_SCALE = 270 / FULL_W
const PREVIEW_SCALE = 0.38

/**
 * Review cirúrgica — Slides 02 e 03 do Post 001.
 * Antes × depois × miniatura de feed.
 */
export function Post001ReviewPage() {
  return (
    <div className="min-h-screen bg-surface-100 px-6 py-10">
      <header className="mx-auto mb-10 max-w-[1600px]">
        <Link to="/post/001" className="text-sm text-ink-400 transition hover:text-ink-700">
          ← Preview Post 001
        </Link>
        <p className="mt-4 font-mono text-[11px] tracking-[0.14em] text-ink-300 uppercase">
          Correção cirúrgica · Aguardando aprovação
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-[-0.03em] text-ink-950">
          Slides 02 e 03 — review
        </h1>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-500">
          Mesma empresa nas duas versões (Aura Estética). Hierarquia limpa, um
          screenshot no diagnóstico, split editorial na comparação. Miniatura ≈
          270×338.
        </p>
      </header>

      <div className="mx-auto flex max-w-[1600px] flex-col gap-16">
        <ReviewBlock
          title="Slide 02 — Diagnóstico"
          before={<Slide02ProblemV1 />}
          after={<Slide02Problem />}
        />
        <ReviewBlock
          title="Slide 03 — Comparação"
          before={<Slide03ComparisonV1 />}
          after={<Slide03Comparison />}
        />
      </div>
    </div>
  )
}

function ReviewBlock({
  title,
  before,
  after,
}: {
  title: string
  before: ReactNode
  after: ReactNode
}) {
  return (
    <section>
      <h2 className="mb-6 text-xl font-semibold tracking-[-0.02em] text-ink-900">
        {title}
      </h2>
      <div className="flex flex-wrap items-start gap-8">
        <Frame label="Anterior" scale={PREVIEW_SCALE}>
          {before}
        </Frame>
        <Frame label="Corrigido" scale={PREVIEW_SCALE}>
          {after}
        </Frame>
        <Frame label="Miniatura feed" scale={FEED_SCALE}>
          {after}
        </Frame>
      </div>
    </section>
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
