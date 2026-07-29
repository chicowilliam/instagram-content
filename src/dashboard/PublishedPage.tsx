import { Link } from 'react-router-dom'
import { getCatalog } from '@/posts/catalog'

export function PublishedPage() {
  const published = getCatalog().filter((p) => p.status === 'PUBLISHED')

  return (
    <div className="px-8 py-10">
      <header className="mb-8 flex flex-col gap-2">
        <h1 className="text-3xl font-semibold tracking-[-0.03em] text-ink-950">
          Publicado
        </h1>
        <p className="text-sm text-ink-500">
          {published.length} conteúdos no ar.
        </p>
      </header>

      {published.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-surface-200 px-6 py-16 text-center text-sm text-ink-300">
          Nenhum post publicado ainda.
        </div>
      ) : (
        <ul className="flex flex-col gap-2">
          {published.map((post) => (
            <li key={post.id}>
              <Link
                to={`/posts/${post.id}`}
                className="flex items-center justify-between rounded-2xl border border-surface-200 bg-surface-0 px-5 py-4 transition hover:border-surface-300"
              >
                <div>
                  <p className="font-mono text-[11px] text-ink-300">{post.id}</p>
                  <p className="text-sm font-medium text-ink-900">{post.title}</p>
                </div>
                <span className="text-xs text-ink-400">
                  {post.publishedAt ?? post.updatedAt}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
