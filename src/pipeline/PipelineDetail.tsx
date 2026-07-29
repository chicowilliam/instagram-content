import { Link, Navigate, useParams } from 'react-router-dom'
import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'
import { getPostById } from '@/posts'
import {
  assertStageOrder,
  getPipelineItem,
  OBJECTIVE_LABELS,
  STAGE_FLOW,
  STAGE_META,
  STATUS_META,
  type PipelineItem,
  type PipelineStage,
} from '@/pipeline'

export function PipelineDetail() {
  const { id } = useParams()
  const item = id ? getPipelineItem(id) : undefined

  if (!item) {
    return <Navigate to="/pipeline" replace />
  }

  const issues = assertStageOrder(item)
  const linkedPost = item.postId ? getPostById(item.postId) : undefined

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <header className="mb-12 flex flex-col gap-6">
        <div className="flex items-center justify-between gap-4">
          <Link
            to="/pipeline"
            className="text-sm text-ink-400 transition hover:text-ink-700"
          >
            ← Pipeline
          </Link>
          <span className="font-mono text-xs text-ink-400">{item.id}</span>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap items-center gap-2">
            <StatusPill label={STATUS_META[item.status].label} tone="status" />
            <StatusPill label={STAGE_META[item.stage].label} tone="stage" />
            {item.series ? (
              <StatusPill label={item.series} tone="muted" />
            ) : null}
          </div>

          <h1 className="text-3xl font-semibold tracking-[-0.03em] text-ink-950 text-balance">
            {item.title}
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-ink-500">
            {item.theme}
          </p>
        </div>

        <StageTracker current={item.stage} />
      </header>

      {issues.length > 0 ? (
        <div className="mb-10 rounded-2xl border border-red-200 bg-red-50 px-5 py-4 text-sm text-red-800">
          <p className="mb-2 font-medium">Problemas de fluxo</p>
          <ul className="list-disc space-y-1 pl-5">
            {issues.map((issue) => (
              <li key={issue}>{issue}</li>
            ))}
          </ul>
        </div>
      ) : null}

      <div className="flex flex-col gap-10">
        <Section title="Estratégia">
          <Field label="Por que gera valor" value={item.whyItMatters} />
          <Field
            label="Como o empresário reagiria"
            value={item.businessReaction}
          />
          <Field
            label="Potencial de compartilhamento"
            value={item.shareability}
          />
        </Section>

        <Section title="Brief" locked={item.stage === 'idea'}>
          {item.brief ? (
            <div className="flex flex-col gap-4">
              <Field
                label="Objetivo"
                value={OBJECTIVE_LABELS[item.brief.objective]}
              />
              <Field
                label="Métrica principal"
                value={item.brief.primaryMetric}
              />
              <Field label="Público" value={item.brief.audience} />
              <Field label="Gancho" value={item.brief.hook} />
              <Field label="Narrativa" value={item.brief.narrative} />
              <Field label="CTA" value={item.brief.cta} />
              <Field label="Template" value={item.brief.template} />
              <Field
                label="Componentes"
                value={item.brief.components.join(' · ')}
              />
              <Field
                label="Slides"
                value={String(item.brief.slideCount)}
              />
            </div>
          ) : (
            <Empty
              text={
                item.stage === 'idea'
                  ? 'Promova para In Production e preencha o Brief.'
                  : 'Brief ainda não preenchido.'
              }
            />
          )}
        </Section>

        <Section
          title="Copy"
          locked={STAGE_META[item.stage].order < STAGE_META.copy.order}
        >
          {item.copy ? (
            <div className="flex flex-col gap-5">
              <Field label="Legenda" value={item.copy.caption} />
              <Field label="CTA" value={item.copy.cta} />
              <Field
                label="Comentário fixado"
                value={item.copy.pinnedComment}
              />
              <Field
                label="Horário sugerido"
                value={item.copy.suggestedTime}
              />
              <Field
                label="Hashtags"
                value={item.copy.hashtags.map((tag) => `#${tag}`).join(' ')}
              />
              <h3 className="text-sm font-medium text-ink-800">Carrossel</h3>
              <ol className="flex flex-col gap-3">
                {item.copy.slides.map((slide) => (
                  <li
                    key={slide.number}
                    className="rounded-2xl border border-surface-200 bg-surface-50 px-4 py-4"
                  >
                    <p className="mb-1 font-mono text-[11px] text-ink-400">
                      Slide {String(slide.number).padStart(2, '0')} ·{' '}
                      {slide.purpose}
                    </p>
                    <p className="text-[15px] font-medium text-ink-900">
                      {slide.headline}
                    </p>
                    {slide.body ? (
                      <p className="mt-1 text-sm leading-relaxed text-ink-500">
                        {slide.body}
                      </p>
                    ) : null}
                  </li>
                ))}
              </ol>
              <h3 className="text-sm font-medium text-ink-800">Stories</h3>
              <ol className="flex flex-col gap-3">
                {item.copy.stories.map((story) => (
                  <li
                    key={story.number}
                    className="rounded-2xl border border-surface-200 bg-surface-50 px-4 py-4"
                  >
                    <p className="mb-1 font-mono text-[11px] text-ink-400">
                      Story {String(story.number).padStart(2, '0')} ·{' '}
                      {story.purpose}
                    </p>
                    <p className="text-[15px] font-medium text-ink-900">
                      {story.headline}
                    </p>
                    {story.body ? (
                      <p className="mt-1 text-sm leading-relaxed text-ink-500">
                        {story.body}
                      </p>
                    ) : null}
                  </li>
                ))}
              </ol>
              <h3 className="text-sm font-medium text-ink-800">Reel</h3>
              <Field label="Gancho" value={item.copy.reel.hook} />
              <Field
                label="Cenas"
                value={item.copy.reel.scenes.join(' → ')}
              />
              <Field label="Encerramento" value={item.copy.reel.closing} />
            </div>
          ) : (
            <Empty text="Copy só depois do Brief aprovado." />
          )}
        </Section>

        <Section
          title="React"
          locked={STAGE_META[item.stage].order < STAGE_META.react.order}
        >
          {item.postId && linkedPost ? (
            <div className="flex flex-col gap-3">
              <Field label="Post ID" value={item.postId} />
              <Field label="Slug" value={linkedPost.slug} />
              <Link
                to={`/posts/${linkedPost.slug}`}
                className="text-sm font-medium text-ink-900 underline underline-offset-4"
              >
                Abrir layout →
              </Link>
            </div>
          ) : (
            <Empty text="Vincule um postId depois de criar o componente React." />
          )}
        </Section>

        <Section
          title="Export"
          locked={STAGE_META[item.stage].order < STAGE_META.export.order}
        >
          {item.postId ? (
            <div className="flex flex-col gap-2">
              <code className="rounded-xl bg-ink-950 px-4 py-3 font-mono text-sm text-white">
                npm run export-post -- post={item.postId}
              </code>
              <p className="text-sm text-ink-400">
                Saída em{' '}
                <code className="text-ink-600">
                  exports/post{item.postId}/
                </code>
              </p>
            </div>
          ) : (
            <Empty text="Disponível após o post React existir." />
          )}
        </Section>

        {item.notes ? (
          <Section title="Notas">
            <p className="text-sm leading-relaxed text-ink-500">{item.notes}</p>
          </Section>
        ) : null}

        <PromoteHelp item={item} />
      </div>
    </div>
  )
}

function StageTracker({ current }: { current: PipelineStage }) {
  const currentOrder = STAGE_META[current].order

  return (
    <ol className="grid grid-cols-3 gap-2 sm:grid-cols-6">
      {STAGE_FLOW.map((stage) => {
        const order = STAGE_META[stage].order
        const done = order < currentOrder
        const active = order === currentOrder

        return (
          <li
            key={stage}
            className={cn(
              'rounded-xl border px-2 py-3 text-center',
              active && 'border-ink-900 bg-ink-950 text-white',
              done && 'border-surface-200 bg-surface-50 text-ink-700',
              !done && !active && 'border-surface-200 text-ink-300',
            )}
          >
            <span className="block font-mono text-[10px] opacity-60">
              {String(order).padStart(2, '0')}
            </span>
            <span className="text-[11px] font-medium uppercase tracking-[0.08em]">
              {STAGE_META[stage].label}
            </span>
          </li>
        )
      })}
    </ol>
  )
}

function Section({
  title,
  children,
  locked,
}: {
  title: string
  children: ReactNode
  locked?: boolean
}) {
  return (
    <section
      className={cn(
        'flex flex-col gap-4 border-t border-surface-200 pt-8',
        locked && 'opacity-55',
      )}
    >
      <h2 className="text-lg font-medium tracking-[-0.01em] text-ink-900">
        {title}
        {locked ? (
          <span className="ml-2 text-xs font-normal uppercase tracking-[0.14em] text-ink-300">
            bloqueado
          </span>
        ) : null}
      </h2>
      {children}
    </section>
  )
}

function Field({ label, value }: { label: string; value?: string }) {
  if (!value) {
    return (
      <div>
        <p className="mb-1 text-[11px] uppercase tracking-[0.14em] text-ink-300">
          {label}
        </p>
        <p className="text-sm text-ink-300">—</p>
      </div>
    )
  }

  return (
    <div>
      <p className="mb-1 text-[11px] uppercase tracking-[0.14em] text-ink-300">
        {label}
      </p>
      <p className="text-sm leading-relaxed text-ink-700">{value}</p>
    </div>
  )
}

function Empty({ text }: { text: string }) {
  return (
    <p className="rounded-2xl border border-dashed border-surface-200 px-4 py-6 text-sm text-ink-300">
      {text}
    </p>
  )
}

function StatusPill({
  label,
  tone,
}: {
  label: string
  tone: 'status' | 'stage' | 'muted'
}) {
  return (
    <span
      className={cn(
        'rounded-full px-3 py-1 text-[11px] font-medium uppercase tracking-[0.12em]',
        tone === 'status' && 'bg-ink-950 text-white',
        tone === 'stage' && 'bg-surface-100 text-ink-600',
        tone === 'muted' && 'bg-transparent text-ink-400',
      )}
    >
      {label}
    </span>
  )
}

function PromoteHelp({ item }: { item: PipelineItem }) {
  const tips: Record<PipelineStage, string> = {
    idea: `Para promover: em src/pipeline/items.ts, mude status para "in_production" e stage para "brief". Depois preencha o objeto brief.`,
    brief: `Próximo: stage "copy" + objeto copy com os slides.`,
    copy: `Próximo: crie o post React, registre o id em posts/index.ts e defina postId + stage "react".`,
    react: `Próximo: rode npm run export-post -- post=${item.postId ?? 'XXX'} e avance stage para "export".`,
    export: `Após aprovação: status "published", stage "published".`,
    published: `Conteúdo publicado. Não reabra sem criar uma nova ideia.`,
  }

  return (
    <section className="rounded-2xl border border-surface-200 bg-surface-50 px-5 py-5">
      <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.14em] text-ink-400">
        Próximo passo
      </p>
      <p className="text-sm leading-relaxed text-ink-600">{tips[item.stage]}</p>
    </section>
  )
}
