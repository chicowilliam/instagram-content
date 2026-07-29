import { Link } from 'react-router-dom'
import { getCatalog } from '@/posts/catalog'

export function StoriesPage() {
  const posts = getCatalog()

  return (
    <div className="px-8 py-10">
      <header className="mb-8 flex flex-col gap-2">
        <h1 className="text-3xl font-semibold tracking-[-0.03em] text-ink-950">
          Stories
        </h1>
        <p className="text-sm text-ink-500">
          Todo post gera automaticamente 3 stories: Gancho · Explicação · CTA.
        </p>
      </header>

      <ul className="flex flex-col gap-3">
        {posts.map((post) => (
          <li
            key={post.id}
            className="flex items-center justify-between gap-4 rounded-2xl border border-surface-200 bg-surface-0 px-5 py-4"
          >
            <div>
              <p className="font-mono text-[11px] text-ink-300">{post.id}</p>
              <p className="text-sm font-medium text-ink-900">{post.title}</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-xs text-ink-400">
                {post.storyCount} stories · 1080×1920
              </span>
              <Link
                to={`/post/${post.id}`}
                className="text-xs text-ink-600 underline underline-offset-4"
              >
                Preview
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
