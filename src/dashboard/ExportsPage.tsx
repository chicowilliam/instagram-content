import { Link, useSearchParams } from 'react-router-dom'
import { getCatalog, getPostById } from '@/posts/catalog'

export function ExportsPage() {
  const [params] = useSearchParams()
  const focus = params.get('post')
  const focused = focus ? getPostById(focus) : undefined
  const posts = getCatalog()

  return (
    <div className="px-8 py-10">
      <header className="mb-8 flex flex-col gap-2">
        <h1 className="text-3xl font-semibold tracking-[-0.03em] text-ink-950">
          Exportações
        </h1>
        <p className="max-w-xl text-sm text-ink-500">
          Playwright exporta PNG em qualidade máxima. Carrossel 1080×1350.
          Stories 1080×1920. Thumbnails automáticos.
        </p>
      </header>

      {focused ? (
        <div className="mb-8 rounded-2xl border border-ink-900 bg-ink-950 px-5 py-4 text-sm text-white">
          Exportar <strong>{focused.id}</strong> — {focused.title}
          <pre className="mt-3 font-mono text-xs text-white/70">
            npm run export -- {focused.id}
          </pre>
        </div>
      ) : null}

      <div className="mb-8 grid gap-3 sm:grid-cols-2">
        <Command
          title="Exportar todos"
          command="npm run export"
          note="Gera o pacote completo de cada post READY ou superior."
        />
        <Command
          title="Exportar um post"
          command="npm run export -- 001"
          note="Saída em exports/post-001/ com slides, stories e markdown."
        />
      </div>

      <ul className="flex flex-col gap-2">
        {posts.map((post) => (
          <li
            key={post.id}
            className="flex items-center justify-between gap-4 rounded-2xl border border-surface-200 bg-surface-0 px-5 py-3"
          >
            <div>
              <span className="font-mono text-[11px] text-ink-300">
                {post.id}
              </span>
              <p className="text-sm text-ink-900">{post.title}</p>
            </div>
            <div className="flex items-center gap-3">
              <code className="hidden font-mono text-[11px] text-ink-400 sm:block">
                exports/post-{post.id}/
              </code>
              <Link
                to={`/exports?post=${post.id}`}
                className="text-xs text-ink-600 underline underline-offset-4"
              >
                Selecionar
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

function Command({
  title,
  command,
  note,
}: {
  title: string
  command: string
  note: string
}) {
  return (
    <div className="rounded-2xl border border-surface-200 bg-surface-0 p-5">
      <h2 className="text-sm font-medium text-ink-900">{title}</h2>
      <pre className="mt-3 rounded-xl bg-surface-50 px-4 py-3 font-mono text-xs text-ink-700">
        {command}
      </pre>
      <p className="mt-3 text-xs text-ink-400">{note}</p>
    </div>
  )
}
