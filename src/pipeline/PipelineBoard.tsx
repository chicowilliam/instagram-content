import { Link } from 'react-router-dom'
import { cn } from '@/lib/cn'
import {
  itemsByStatus,
  STAGE_FLOW,
  STAGE_META,
  STATUS_META,
  type PipelineItem,
  type PipelineStatus,
} from '@/pipeline'

const columns: PipelineStatus[] = ['ideas', 'in_production', 'published']

export function PipelineBoard() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <header className="mb-12 flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-ink-400">
            Content Pipeline
          </p>
          <h1 className="text-4xl font-semibold tracking-[-0.03em] text-ink-950">
            Pipeline
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-ink-500">
            Todo tema nasce em Ideas. Só avança com Brief → Copy → React →
            Export → Published. Sem pular etapas.
          </p>
        </div>

        <FlowStrip />
      </header>

      <div className="grid gap-5 lg:grid-cols-3">
        {columns.map((status) => (
          <Column key={status} status={status} items={itemsByStatus(status)} />
        ))}
      </div>
    </div>
  )
}

function FlowStrip() {
  return (
    <ol className="flex flex-wrap items-center gap-2 text-xs font-medium uppercase tracking-[0.14em] text-ink-400">
      {STAGE_FLOW.map((stage, index) => (
        <li key={stage} className="flex items-center gap-2">
          {index > 0 ? <span className="text-ink-300">→</span> : null}
          <span
            className={cn(
              'rounded-full border px-3 py-1',
              stage === 'idea' && 'border-surface-300 bg-surface-50 text-ink-600',
              stage === 'published' &&
                'border-ink-900 bg-ink-950 text-white',
              stage !== 'idea' &&
                stage !== 'published' &&
                'border-surface-200 bg-white text-ink-500',
            )}
          >
            {STAGE_META[stage].label}
          </span>
        </li>
      ))}
    </ol>
  )
}

function Column({
  status,
  items,
}: {
  status: PipelineStatus
  items: PipelineItem[]
}) {
  const meta = STATUS_META[status]

  return (
    <section className="flex flex-col gap-4">
      <div className="flex items-end justify-between gap-3 border-b border-surface-200 pb-3">
        <div className="flex flex-col gap-1">
          <h2 className="text-sm font-medium tracking-[-0.01em] text-ink-900">
            {meta.label}
          </h2>
          <p className="text-xs leading-relaxed text-ink-400">
            {meta.description}
          </p>
        </div>
        <span className="font-mono text-xs text-ink-400">{items.length}</span>
      </div>

      <ul className="flex flex-col gap-3">
        {items.length === 0 ? (
          <li className="rounded-2xl border border-dashed border-surface-200 px-4 py-8 text-center text-sm text-ink-300">
            Vazio
          </li>
        ) : (
          items.map((item) => <IdeaCard key={item.id} item={item} />)
        )}
      </ul>
    </section>
  )
}

function IdeaCard({ item }: { item: PipelineItem }) {
  return (
    <li>
      <Link
        to={`/pipeline/${item.id}`}
        className="group flex flex-col gap-3 rounded-2xl border border-surface-200 bg-surface-0 p-4 shadow-soft transition hover:border-surface-300 hover:shadow-lift"
      >
        <div className="flex items-center justify-between gap-2">
          <span className="font-mono text-[11px] tracking-[0.08em] text-ink-400">
            {item.id}
          </span>
          <span className="rounded-full bg-surface-100 px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-[0.12em] text-ink-500">
            {STAGE_META[item.stage].label}
          </span>
        </div>

        <div className="flex flex-col gap-1.5">
          <h3 className="text-[15px] font-medium leading-snug tracking-[-0.01em] text-ink-900 group-hover:text-ink-950">
            {item.title}
          </h3>
          <p className="line-clamp-2 text-sm leading-relaxed text-ink-400">
            {item.theme}
          </p>
        </div>

        {item.series ? (
          <span className="text-[11px] uppercase tracking-[0.14em] text-ink-300">
            {item.series}
          </span>
        ) : null}
      </Link>
    </li>
  )
}
