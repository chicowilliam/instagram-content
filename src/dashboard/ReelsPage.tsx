import { Link } from 'react-router-dom'
import { getCatalog } from '@/posts/catalog'

export function ReelsPage() {
  const posts = getCatalog()

  return (
    <div className="px-8 py-10">
      <header className="mb-8 flex flex-col gap-2">
        <h1 className="text-3xl font-semibold tracking-[-0.03em] text-ink-950">
          Reels
        </h1>
        <p className="text-sm text-ink-500">
          Todo post gera roteiro automático: gancho, cenas, tempo, legenda e CTA.
        </p>
      </header>

      <ul className="flex flex-col gap-3">
        {posts.map((post) => (
          <li
            key={post.id}
            className="rounded-2xl border border-surface-200 bg-surface-0 px-5 py-4"
          >
            <div className="mb-3 flex items-center justify-between gap-4">
              <div>
                <p className="font-mono text-[11px] text-ink-300">{post.id}</p>
                <p className="text-sm font-medium text-ink-900">{post.title}</p>
              </div>
              <Link
                to={`/posts/${post.id}`}
                className="text-xs text-ink-600 underline underline-offset-4"
              >
                Ver pacote
              </Link>
            </div>
            <p className="text-sm text-ink-500">
              <span className="text-ink-300">Gancho · </span>
              {post.deliverables.reel.hook}
            </p>
            <p className="mt-1 text-sm text-ink-500">
              <span className="text-ink-300">CTA · </span>
              {post.deliverables.reel.closing}
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}
