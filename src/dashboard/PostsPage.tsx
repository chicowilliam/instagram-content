import { Link } from 'react-router-dom'
import {
  CATEGORY_LABELS,
  OBJECTIVE_LABELS,
  STATUS_META,
  TEMPLATE_LABELS,
  type ContentStatus,
} from '@/cms/types'
import { getCatalog, type CatalogEntry } from '@/posts/catalog'
import { cn } from '@/lib/cn'

export function PostsPage() {
  const posts = getCatalog()

  return (
    <div className="px-8 py-10">
      <header className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div className="flex flex-col gap-2">
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-ink-300">
            Biblioteca
          </p>
          <h1 className="text-3xl font-semibold tracking-[-0.03em] text-ink-950">
            Posts
          </h1>
          <p className="text-sm text-ink-500">
            {posts.length} conteúdos · cada um com pacote completo
          </p>
        </div>
        <p className="rounded-full border border-surface-200 bg-surface-0 px-4 py-2 text-xs text-ink-400">
          Novo post: <code className="font-mono text-ink-700">npm run create-post</code>
        </p>
      </header>

      {posts.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-surface-200 px-6 py-16 text-center text-sm text-ink-300">
          Nenhum post. Crie o primeiro com o comando acima.
        </div>
      ) : (
        <ul className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </ul>
      )}
    </div>
  )
}

function PostCard({ post }: { post: CatalogEntry }) {
  return (
    <li className="flex flex-col gap-4 rounded-2xl border border-surface-200 bg-surface-0 p-5 shadow-soft">
      <div className="flex items-start justify-between gap-3">
        <div className="flex flex-col gap-1">
          <span className="font-mono text-[11px] tracking-[0.08em] text-ink-300">
            {post.id}
          </span>
          <h2 className="text-[15px] font-medium leading-snug tracking-[-0.01em] text-ink-950">
            {post.title}
          </h2>
        </div>
        <StatusBadge status={post.status} />
      </div>

      <dl className="grid grid-cols-2 gap-3 text-xs">
        <Field label="Categoria" value={CATEGORY_LABELS[post.category]} />
        <Field label="Objetivo" value={OBJECTIVE_LABELS[post.objective]} />
        <Field label="Template" value={TEMPLATE_LABELS[post.template]} />
        <Field label="Slides" value={String(post.slideCount)} />
        <Field label="Criado" value={post.createdAt} />
        <Field label="Editado" value={post.updatedAt} />
      </dl>

      <div className="mt-auto flex flex-wrap gap-2 border-t border-surface-100 pt-4">
        <Action to={`/post/${post.id}`}>Visualizar</Action>
        <Action to={`/posts/${post.id}`}>Editar</Action>
        <Action to={`/exports?post=${post.id}`}>Exportar</Action>
        <span className="rounded-full border border-surface-100 px-3 py-1.5 text-[11px] text-ink-300">
          Duplicar
        </span>
        <span className="rounded-full border border-surface-100 px-3 py-1.5 text-[11px] text-ink-300">
          Excluir
        </span>
      </div>
    </li>
  )
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-0.5">
      <dt className="uppercase tracking-[0.12em] text-ink-300">{label}</dt>
      <dd className="text-ink-700">{value}</dd>
    </div>
  )
}

function StatusBadge({ status }: { status: ContentStatus }) {
  return (
    <span
      className={cn(
        'shrink-0 rounded-full px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-[0.12em]',
        status === 'PUBLISHED' && 'bg-ink-950 text-white',
        status === 'READY' && 'bg-emerald-50 text-emerald-800',
        status !== 'PUBLISHED' &&
          status !== 'READY' &&
          'bg-surface-100 text-ink-500',
      )}
    >
      {STATUS_META[status].label}
    </span>
  )
}

function Action({
  to,
  children,
}: {
  to: string
  children: string
}) {
  return (
    <Link
      to={to}
      className="rounded-full border border-surface-200 px-3 py-1.5 text-[11px] font-medium text-ink-600 transition hover:border-surface-300 hover:text-ink-950"
    >
      {children}
    </Link>
  )
}
