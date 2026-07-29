import { Link } from 'react-router-dom'
import { libraryStats } from '@/posts/catalog'
import { openIdeas } from '@/ideas'
import { calendarTotals } from '@/calendar'
import { STATUS_META, type ContentStatus } from '@/cms/types'
import { getCatalog } from '@/posts/catalog'

export function DashboardPage() {
  const stats = libraryStats()
  const ideas = openIdeas().length
  const calendar = calendarTotals()
  const recent = getCatalog().slice(-5).reverse()

  return (
    <div className="px-8 py-10">
      <header className="mb-10 flex flex-col gap-2">
        <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-ink-300">
          Biblioteca de Conteúdo
        </p>
        <h1 className="text-3xl font-semibold tracking-[-0.03em] text-ink-950">
          Dashboard
        </h1>
        <p className="max-w-xl text-sm leading-relaxed text-ink-500">
          CMS interno de produção. Ideia → Brief → Copy → Layout → React →
          Preview → Exportação → Publicação.
        </p>
      </header>

      <section className="mb-10 grid gap-px overflow-hidden rounded-2xl border border-surface-200 bg-surface-200 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Total de Posts" value={stats.total} to="/posts" />
        <StatCard label="Publicados" value={stats.published} to="/published" />
        <StatCard
          label="Em Produção"
          value={stats.inProduction}
          to="/posts"
        />
        <StatCard label="Agendados" value={stats.scheduled} to="/posts" />
        <StatCard label="Stories" value={stats.stories} to="/stories" />
        <StatCard label="Reels" value={stats.reels} to="/reels" />
        <StatCard label="Slides" value={stats.slides} to="/posts" />
        <StatCard label="Ideias abertas" value={ideas} to="/ideas" />
      </section>

      <div className="grid gap-8 lg:grid-cols-2">
        <section className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-medium text-ink-900">Recentes</h2>
            <Link
              to="/posts"
              className="text-xs text-ink-400 transition hover:text-ink-700"
            >
              Ver todos
            </Link>
          </div>
          <ul className="flex flex-col gap-2">
            {recent.length === 0 ? (
              <Empty>Nenhum post na biblioteca.</Empty>
            ) : (
              recent.map((post) => (
                <li key={post.id}>
                  <Link
                    to={`/posts/${post.id}`}
                    className="flex items-center justify-between gap-3 rounded-2xl border border-surface-200 bg-surface-0 px-4 py-3 transition hover:border-surface-300"
                  >
                    <div className="flex flex-col gap-0.5">
                      <span className="font-mono text-[11px] text-ink-300">
                        {post.id}
                      </span>
                      <span className="text-sm font-medium text-ink-900">
                        {post.title}
                      </span>
                    </div>
                    <StatusPill status={post.status} />
                  </Link>
                </li>
              ))
            )}
          </ul>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="text-sm font-medium text-ink-900">Ano editorial</h2>
          <div className="rounded-2xl border border-surface-200 bg-surface-0 px-5 py-5">
            <dl className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <dt className="text-ink-300">Semanas</dt>
                <dd className="text-xl font-semibold text-ink-950">
                  {calendar.weeks}
                </dd>
              </div>
              <div>
                <dt className="text-ink-300">Publicações planejadas</dt>
                <dd className="text-xl font-semibold text-ink-950">
                  {calendar.publications}
                </dd>
              </div>
              <div>
                <dt className="text-ink-300">Carrosséis</dt>
                <dd className="text-xl font-semibold text-ink-950">
                  {calendar.carousels}
                </dd>
              </div>
              <div>
                <dt className="text-ink-300">Reels</dt>
                <dd className="text-xl font-semibold text-ink-950">
                  {calendar.reels}
                </dd>
              </div>
            </dl>
            <Link
              to="/calendar"
              className="mt-5 inline-block text-xs text-ink-500 underline underline-offset-4 hover:text-ink-900"
            >
              Abrir calendário de 12 meses
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}

function StatCard({
  label,
  value,
  to,
}: {
  label: string
  value: number
  to: string
}) {
  return (
    <Link
      to={to}
      className="flex flex-col gap-2 bg-surface-0 px-5 py-5 transition hover:bg-surface-50"
    >
      <span className="text-[11px] uppercase tracking-[0.14em] text-ink-300">
        {label}
      </span>
      <span className="text-3xl font-semibold tracking-[-0.03em] text-ink-950">
        {value}
      </span>
    </Link>
  )
}

function StatusPill({ status }: { status: ContentStatus }) {
  return (
    <span className="rounded-full bg-surface-100 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-[0.12em] text-ink-500">
      {STATUS_META[status].label}
    </span>
  )
}

function Empty({ children }: { children: string }) {
  return (
    <li className="rounded-2xl border border-dashed border-surface-200 px-4 py-8 text-center text-sm text-ink-300">
      {children}
    </li>
  )
}
