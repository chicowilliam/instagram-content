import type { ReactNode } from 'react'
import { Link, useParams } from 'react-router-dom'
import {
  SignatureDomain,
  SignatureFooterMinimal,
  SignatureLabel,
} from '@/components/art-direction'
import { getPostById } from '@/posts/catalog'
import {
  swissCoverVariants,
  variantAverage,
  type ScoreCard,
} from '@/posts/2026/07-julho/001-sua-empresa-precisa-de-site/variants'

const FULL_W = 1080
const FULL_H = 1350
const FEED_W = 270
const FEED_H = 338
const FEED_SCALE = FEED_W / FULL_W
const MOBILE_SCALE = 0.32
const PROFILE_SCALE = 0.18

/**
 * Galeria comparativa — SWISS TECH EDITORIAL, três capas do Slide 1.
 * Sem data-slide / export: esta página é só decisão de direção.
 */
export function PostVariantsPage() {
  const { id } = useParams()
  const post = id ? getPostById(id) : undefined
  const is001 = id?.replace(/^post-?/i, '').padStart(3, '0') === '001'

  if (!post) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-surface-50 text-sm text-ink-400">
        Post não encontrado.{' '}
        <Link to="/posts" className="ml-2 underline">
          Voltar
        </Link>
      </div>
    )
  }

  if (!is001) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-surface-50 text-sm text-ink-400">
        Variantes Swiss Tech Editorial disponíveis apenas para o Post 001.{' '}
        <Link to={`/posts/${post.id}`} className="ml-2 underline">
          Detalhe
        </Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-surface-100 px-6 py-10">
      <header className="mx-auto mb-10 flex max-w-[1760px] flex-wrap items-end justify-between gap-4">
        <div className="flex max-w-3xl flex-col gap-2">
          <Link
            to={`/posts/${post.id}`}
            className="text-sm text-ink-400 transition hover:text-ink-700"
          >
            ← Post {post.id}
          </Link>
          <p className="font-mono text-[11px] tracking-[0.14em] uppercase text-ink-300">
            Swiss Tech Editorial · Direção aprovada
          </p>
          <h1 className="text-3xl font-semibold tracking-[-0.03em] text-ink-950">
            Capa A + sistema de assinatura
          </h1>
          <p className="text-sm leading-relaxed text-ink-500">
            A capa GAZU Editorial é a direção oficial. Abaixo estão três
            opções de assinatura, seguida do histórico das capas em 1080×1350,
            miniatura de feed, perfil e celular.
          </p>
        </div>
        <div className="flex flex-col items-end gap-2 text-right text-xs text-ink-400">
          <Link
            to={`/post/${post.id}`}
            className="rounded-full bg-ink-950 px-4 py-2 font-medium text-surface-0"
          >
            Preview atual
          </Link>
          <span>Análise: docs/reference-style-analysis.md</span>
          <span>Audit: docs/post-001-visual-audit.md</span>
          <span>21st: docs/post-001-21st-research.md</span>
          <span>Decisões: docs/post-001-art-decisions.md</span>
        </div>
      </header>

      <div className="mx-auto flex max-w-[1760px] flex-col gap-16">
        <SignatureOptions />

        {swissCoverVariants.map((variant) => {
          const mean = variantAverage(variant.scores)
          const pass = mean >= 8.5
          const { Cover } = variant

          return (
            <article
              key={variant.id}
              className={`rounded-[28px] border bg-surface-0 p-6 shadow-soft ${
                pass ? 'border-ink-900' : 'border-surface-200'
              }`}
            >
              <header className="mb-6 flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-[11px] tracking-[0.14em] uppercase text-ink-300">
                    {variant.letter} · {variant.mode}
                  </p>
                  <h2 className="mt-1 text-2xl font-semibold tracking-[-0.02em] text-ink-950">
                    {variant.label}
                  </h2>
                  <p className="mt-1 max-w-2xl text-sm text-ink-500">
                    {variant.note}
                  </p>
                  <p className="mt-3 text-[11px] uppercase tracking-[0.1em] text-ink-400">
                    Componentes: {variant.components.join(' · ')}
                  </p>
                </div>
                <div className="rounded-2xl bg-ink-950 px-5 py-3 text-right text-white">
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/45">
                    Média
                  </p>
                  <p className="font-mono text-3xl">{mean.toFixed(2)}</p>
                  <p className="mt-1 text-[11px] text-white/55">
                    {pass ? 'Elegível (≥ 8,5)' : 'Reprovado (< 8,5)'}
                  </p>
                </div>
              </header>

              <div className="grid gap-8 xl:grid-cols-[auto_1fr]">
                <ScaledFrame
                  label="1080 × 1350"
                  scale={0.42}
                  className="border border-surface-200"
                >
                  <Cover />
                </ScaledFrame>

                <aside className="flex flex-wrap gap-6">
                  <div>
                    <p className="mb-2 text-[11px] uppercase tracking-[0.14em] text-ink-400">
                      Miniatura feed ~270×338
                    </p>
                    <ScaledFrame
                      scale={FEED_SCALE}
                      width={FEED_W}
                      height={FEED_H}
                      className="border border-surface-200 shadow-soft"
                    >
                      <Cover />
                    </ScaledFrame>
                  </div>

                  <div>
                    <p className="mb-2 text-[11px] uppercase tracking-[0.14em] text-ink-400">
                      Mockup de perfil
                    </p>
                    <ProfileMockup>
                      <Cover />
                    </ProfileMockup>
                  </div>

                  <div>
                    <p className="mb-2 text-[11px] uppercase tracking-[0.14em] text-ink-400">
                      Escala celular (~32%)
                    </p>
                    <ScaledFrame
                      scale={MOBILE_SCALE}
                      className="border border-surface-200"
                    >
                      <Cover />
                    </ScaledFrame>
                  </div>
                </aside>
              </div>

              <div className="mt-6 grid gap-4 lg:grid-cols-5">
                <Note title="Impacto" body={variant.notes.impacto} />
                <Note title="Originalidade" body={variant.notes.originalidade} />
                <Note title="Legibilidade" body={variant.notes.legibilidade} />
                <Note title="Conexão" body={variant.notes.conexao} />
                <Note title="Riscos" body={variant.notes.riscos} />
              </div>

              <ScoreGrid scores={variant.scores} />
            </article>
          )
        })}
      </div>

      <footer className="mx-auto mt-12 max-w-[1760px] rounded-2xl border border-dashed border-surface-300 bg-surface-0 p-6 text-sm text-ink-600">
        <p className="font-medium text-ink-900">Capa aprovada</p>
        <p className="mt-2">
          <strong>A — GAZU Editorial</strong> é a capa oficial do Post 001. O
          carrossel completo (5 slides + 3 stories) está em{' '}
          <Link to={`/post/${post.id}`} className="underline">
            /post/{post.id}
          </Link>
          . Variantes B e C permanecem aqui só como referência.
        </p>
      </footer>
    </div>
  )
}

function SignatureOptions() {
  return (
    <section className="rounded-[28px] border border-surface-200 bg-surface-0 p-6 shadow-soft">
      <div className="mb-6">
        <p className="font-mono text-[11px] tracking-[0.14em] uppercase text-ink-300">
          Brand signature system
        </p>
        <h2 className="mt-1 text-2xl font-semibold tracking-[-0.02em] text-ink-950">
          Três opções de assinatura
        </h2>
        <p className="mt-1 text-sm text-ink-500">
          A opção A foi aplicada ao Post 001. Todas usam domínio sem @ para uma
          leitura mais autoral e menos utilitária.
        </p>
      </div>

      <div className="grid gap-5 xl:grid-cols-3">
        <SignatureOption label="A · Footer Minimal · aplicada" dark={false}>
          <SignatureFooterMinimal current={1} total={5} />
        </SignatureOption>
        <SignatureOption label="B · Signature Label" dark={false}>
          <SignatureLabel />
        </SignatureOption>
        <SignatureOption label="C · Signature Domain" dark>
          <SignatureDomain tone="ink" />
        </SignatureOption>
      </div>
    </section>
  )
}

function SignatureOption({
  label,
  dark,
  children,
}: {
  label: string
  dark: boolean
  children: ReactNode
}) {
  return (
    <div>
      <p className="mb-2 text-[11px] uppercase tracking-[0.14em] text-ink-400">
        {label}
      </p>
      <div
        className={`relative flex h-[220px] items-center p-8 ${
          dark ? 'bg-editorial-ink' : 'bg-editorial-cream'
        }`}
      >
        <div className="w-full">{children}</div>
      </div>
    </div>
  )
}

function ScaledFrame({
  children,
  scale,
  width,
  height,
  label,
  className,
}: {
  children: ReactNode
  scale: number
  width?: number
  height?: number
  label?: string
  className?: string
}) {
  const frameW = width ?? FULL_W * scale
  const frameH = height ?? FULL_H * scale

  return (
    <div>
      {label ? (
        <p className="mb-2 text-[11px] uppercase tracking-[0.14em] text-ink-400">
          {label}
        </p>
      ) : null}
      <div
        className={`overflow-hidden bg-surface-50 ${className ?? ''}`}
        style={{ width: frameW, height: frameH }}
      >
        <div
          style={{
            width: FULL_W,
            height: FULL_H,
            transform: `scale(${scale})`,
            transformOrigin: 'top left',
          }}
        >
          {children}
        </div>
      </div>
    </div>
  )
}

/** Mockup simples de grade de perfil Instagram — 3 colunas, a capa na primeira. */
function ProfileMockup({ children }: { children: ReactNode }) {
  const cell = FULL_W * PROFILE_SCALE
  const cellH = FULL_H * PROFILE_SCALE

  return (
    <div
      className="overflow-hidden rounded-2xl border border-surface-200 bg-white p-3 shadow-soft"
      style={{ width: cell * 3 + 28 }}
    >
      <div className="mb-3 flex items-center gap-3 px-1">
        <span className="size-9 rounded-full bg-ink-950" />
        <div>
          <p className="text-[11px] font-semibold text-ink-900">
            viniciuswilliam.dev
          </p>
          <p className="text-[10px] text-ink-400">Desenvolvimento web</p>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-1">
        <div className="overflow-hidden" style={{ width: cell, height: cellH }}>
          <div
            style={{
              width: FULL_W,
              height: FULL_H,
              transform: `scale(${PROFILE_SCALE})`,
              transformOrigin: 'top left',
            }}
          >
            {children}
          </div>
        </div>
        {[0, 1].map((index) => (
          <div
            key={index}
            className="bg-surface-100"
            style={{ width: cell, height: cellH }}
          />
        ))}
      </div>
    </div>
  )
}

function Note({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-2xl border border-surface-200 bg-surface-50 p-4">
      <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-ink-400">
        {title}
      </p>
      <p className="mt-2 text-sm leading-relaxed text-ink-700">{body}</p>
    </div>
  )
}

function ScoreGrid({ scores }: { scores: ScoreCard }) {
  return (
    <dl className="mt-5 grid grid-cols-2 gap-2 md:grid-cols-5">
      {Object.entries(scores).map(([key, value]) => (
        <div
          key={key}
          className={`rounded-xl px-3 py-2 ${
            value < 8.5 ? 'bg-red-50 text-red-800' : 'bg-surface-50 text-ink-800'
          }`}
        >
          <dt className="text-[10px] uppercase tracking-[0.1em] text-ink-400">
            {key}
          </dt>
          <dd className="font-mono text-lg">{value.toFixed(1)}</dd>
        </div>
      ))}
    </dl>
  )
}
