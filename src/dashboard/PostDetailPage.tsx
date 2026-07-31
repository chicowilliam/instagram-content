import { Link, useParams } from 'react-router-dom'
import {
  CATEGORY_LABELS,
  CONTENT_STATUSES,
  OBJECTIVE_LABELS,
  STATUS_META,
  TEMPLATE_LABELS,
} from '@/cms/types'
import { getPostById } from '@/posts/catalog'
import { ExportModeProvider } from '@/lib/export-mode'

export function PostDetailPage() {
  const { id } = useParams()
  const post = id ? getPostById(id) : undefined

  if (!post) {
    return (
      <div className="px-8 py-16 text-sm text-ink-400">
        Post não encontrado. <Link to="/posts">Voltar</Link>
      </div>
    )
  }

  return (
    <div className="px-8 py-10">
      <header className="mb-8 flex flex-wrap items-start justify-between gap-4">
        <div className="flex flex-col gap-2">
          <Link
            to="/posts"
            className="text-xs text-ink-400 transition hover:text-ink-700"
          >
            ← Posts
          </Link>
          <p className="font-mono text-[11px] tracking-[0.1em] text-ink-300">
            POST {post.id}
          </p>
          <h1 className="text-3xl font-semibold tracking-[-0.03em] text-ink-950">
            {post.title}
          </h1>
          <p className="text-sm text-ink-500">
            {CATEGORY_LABELS[post.category]} ·{' '}
            {OBJECTIVE_LABELS[post.objective]} ·{' '}
            {TEMPLATE_LABELS[post.template]}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Link
            to={`/post/${post.id}`}
            className="rounded-full bg-ink-950 px-4 py-2 text-xs font-medium text-surface-0"
          >
            Preview
          </Link>
          {post.id === '001' ? (
            <Link
              to={`/post/${post.id}/variants`}
              className="rounded-full border border-surface-300 bg-surface-0 px-4 py-2 text-xs font-medium text-ink-700"
            >
              Variantes de capa
            </Link>
          ) : null}
          <code className="rounded-full border border-surface-200 px-4 py-2 font-mono text-xs text-ink-500">
            npm run export -- {post.id}
          </code>
        </div>
      </header>

      <section className="mb-10">
        <h2 className="mb-3 text-sm font-medium text-ink-900">Status</h2>
        <ol className="flex flex-wrap gap-2">
          {CONTENT_STATUSES.map((status) => {
            const active = STATUS_META[status].order <= STATUS_META[post.status].order
            const current = status === post.status
            return (
              <li
                key={status}
                className={`rounded-full border px-3 py-1 text-[11px] uppercase tracking-[0.12em] ${
                  current
                    ? 'border-ink-900 bg-ink-950 text-surface-0'
                    : active
                      ? 'border-surface-300 bg-surface-100 text-ink-600'
                      : 'border-surface-200 text-ink-300'
                }`}
              >
                {STATUS_META[status].label}
              </li>
            )
          })}
        </ol>
      </section>

      <div className="grid gap-8 lg:grid-cols-2">
        <section className="flex flex-col gap-3">
          <h2 className="text-sm font-medium text-ink-900">Pacote</h2>
          <dl className="rounded-2xl border border-surface-200 bg-surface-0 p-5 text-sm">
            <Row label="Objetivo" value={post.deliverables.objective} />
            <Row label="Métrica" value={post.deliverables.primaryMetric} />
            <Row label="CTA" value={post.deliverables.cta} />
            <Row label="Comentário fixado" value={post.deliverables.pinnedComment} />
            <Row label="Horário" value={post.deliverables.suggestedTime} />
            <Row label="Slides" value={String(post.slideCount)} />
            <Row label="Stories" value={String(post.storyCount)} />
            <Row label="Pasta" value={post.folder} />
          </dl>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-sm font-medium text-ink-900">Preview</h2>
          <div className="overflow-hidden rounded-2xl border border-surface-200 bg-surface-100 p-4">
            <div className="origin-top-left scale-[0.28]">
              <ExportModeProvider value={false}>
                <post.Component />
              </ExportModeProvider>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1 border-b border-surface-100 py-3 last:border-0">
      <dt className="text-[11px] uppercase tracking-[0.12em] text-ink-300">
        {label}
      </dt>
      <dd className="leading-relaxed text-ink-700">{value}</dd>
    </div>
  )
}
