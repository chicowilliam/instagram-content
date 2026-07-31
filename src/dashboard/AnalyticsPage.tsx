import { useMemo, type ReactNode } from 'react'
import { border, pad, radius, stack, text } from '@/design-system'
import { cn } from '@/lib/cn'
import { getCatalog } from '@/posts/catalog'
import {
  CATEGORY_LABELS,
  STATUS_META,
  TEMPLATE_LABELS,
  type ContentCategory,
  type ContentStatus,
  type ContentTemplate,
} from '@/cms/types'
import { ideas } from '@/ideas'
import { STORY_DERIVATION } from '@/calendar'

export function AnalyticsPage() {
  const posts = getCatalog()

  const data = useMemo(() => {
    const published = posts.filter((p) => p.status === 'PUBLISHED')
    const slides = posts.reduce((sum, p) => sum + p.slideCount, 0)
    const stories = posts.reduce((sum, p) => sum + p.storyCount, 0)

    const byCategory = new Map<ContentCategory, number>()
    const byTemplate = new Map<ContentTemplate, number>()
    const byStatus = new Map<ContentStatus, number>()
    for (const post of posts) {
      byCategory.set(post.category, (byCategory.get(post.category) ?? 0) + 1)
      byTemplate.set(post.template, (byTemplate.get(post.template) ?? 0) + 1)
      byStatus.set(post.status, (byStatus.get(post.status) ?? 0) + 1)
    }

    const tags = new Map<string, number>()
    for (const idea of ideas) {
      for (const tag of idea.tags) {
        tags.set(tag, (tags.get(tag) ?? 0) + 1)
      }
    }

    return {
      published: published.length,
      slides,
      stories,
      reels: posts.length,
      averageSlides: posts.length ? (slides / posts.length).toFixed(1) : '0',
      byCategory: [...byCategory].sort((a, b) => b[1] - a[1]),
      byTemplate: [...byTemplate].sort((a, b) => b[1] - a[1]),
      byStatus: [...byStatus].sort(
        (a, b) => STATUS_META[a[0]].order - STATUS_META[b[0]].order,
      ),
      tags: [...tags].sort((a, b) => b[1] - a[1]),
    }
  }, [posts])

  return (
    <div className={pad.page}>
      <header className={cn('mb-10 flex flex-col', stack.xs)}>
        <p className={text.label}>Interno</p>
        <h1 className={text.pageTitle}>Analytics</h1>
        <p className={cn(text.body, 'max-w-xl')}>
          Volume e composição da biblioteca. Métricas de desempenho do Instagram
          entram quando houver registro manual por publicação.
        </p>
      </header>

      <section
        className={cn(
          'mb-10 grid gap-px overflow-hidden bg-surface-200 sm:grid-cols-3 lg:grid-cols-6',
          radius.card,
          border.hairline,
        )}
      >
        <Metric label="Posts" value={posts.length} />
        <Metric label="Publicados" value={data.published} />
        <Metric label="Slides" value={data.slides} />
        <Metric label="Média de slides" value={data.averageSlides} />
        <Metric label="Stories" value={data.stories} />
        <Metric label="Reels" value={data.reels} />
      </section>

      <div className="grid gap-8 lg:grid-cols-2">
        <Panel title="Categorias">
          <Bars
            rows={data.byCategory.map(([key, count]) => ({
              label: CATEGORY_LABELS[key],
              count,
            }))}
            total={posts.length}
          />
        </Panel>

        <Panel title="Templates">
          <Bars
            rows={data.byTemplate.map(([key, count]) => ({
              label: TEMPLATE_LABELS[key],
              count,
            }))}
            total={posts.length}
          />
        </Panel>

        <Panel title="Etapas do fluxo">
          <Bars
            rows={data.byStatus.map(([key, count]) => ({
              label: STATUS_META[key].label,
              count,
            }))}
            total={posts.length}
          />
        </Panel>

        <Panel title="Tags das ideias">
          <div className="flex flex-wrap gap-2">
            {data.tags.map(([tag, count]) => (
              <span
                key={tag}
                className={cn(
                  'bg-surface-100 text-sm text-ink-600',
                  radius.pill,
                  pad.control,
                )}
              >
                {tag}
                <span className="ml-2 font-mono text-[11px] text-ink-400">
                  {count}
                </span>
              </span>
            ))}
          </div>
        </Panel>
      </div>

      <p className={cn('mt-10', text.body)}>
        Cada publicação gera {STORY_DERIVATION.length} stories por regra de
        derivação, totalizando {data.stories} stories previstos na biblioteca
        atual.
      </p>
    </div>
  )
}

function Metric({ label, value }: { label: string; value: number | string }) {
  return (
    <div className={cn('flex flex-col bg-surface-0', stack.xs, pad.card)}>
      <span className={text.label}>{label}</span>
      <span className={text.metric}>{value}</span>
    </div>
  )
}

function Panel({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className={cn('flex flex-col', stack.md)}>
      <h2 className={text.sectionTitle}>{title}</h2>
      <div className={cn('bg-surface-0', radius.card, border.hairline, pad.card)}>
        {children}
      </div>
    </section>
  )
}

function Bars({
  rows,
  total,
}: {
  rows: { label: string; count: number }[]
  total: number
}) {
  if (rows.length === 0) {
    return <p className={text.body}>Sem dados.</p>
  }

  const max = Math.max(...rows.map((row) => row.count))

  return (
    <ul className={cn('flex flex-col', stack.sm)}>
      {rows.map((row) => (
        <li key={row.label} className="flex flex-col gap-1.5">
          <div className="flex items-baseline justify-between gap-3">
            <span className="text-sm text-ink-700">{row.label}</span>
            <span className="font-mono text-[11px] text-ink-400">
              {row.count}
              {total > 0 ? ` · ${Math.round((row.count / total) * 100)}%` : ''}
            </span>
          </div>
          <div className={cn('h-1.5 bg-surface-100', radius.pill)}>
            <div
              className={cn('h-full bg-ink-900', radius.pill)}
              style={{ width: `${(row.count / max) * 100}%` }}
            />
          </div>
        </li>
      ))}
    </ul>
  )
}
