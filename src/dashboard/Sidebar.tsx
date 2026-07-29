import { NavLink } from 'react-router-dom'
import { cn } from '@/lib/cn'
import { CMS_NAV } from '@/cms/nav'
import { libraryStats } from '@/posts/catalog'
import { openIdeas } from '@/ideas'

const icons: Record<string, string> = {
  grid: '▦',
  layers: '☰',
  lightbulb: '◇',
  layout: '▤',
  smartphone: '▣',
  film: '▶',
  download: '↓',
  check: '✓',
  calendar: '◷',
  settings: '⚙',
}

export function Sidebar() {
  const stats = libraryStats()
  const ideas = openIdeas().length

  return (
    <aside className="flex h-screen w-60 shrink-0 flex-col border-r border-surface-200 bg-surface-0">
      <div className="flex flex-col gap-1 border-b border-surface-200 px-5 py-6">
        <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-ink-300">
          Internal CMS
        </p>
        <h1 className="text-[15px] font-semibold tracking-[-0.02em] text-ink-950">
          Content Studio
        </h1>
        <p className="text-xs text-ink-400">
          {stats.total} posts · {ideas} ideias
        </p>
      </div>

      <nav className="flex flex-1 flex-col gap-0.5 overflow-y-auto px-3 py-4">
        {CMS_NAV.map((item) => (
          <NavLink
            key={item.id}
            to={item.path}
            end={item.path === '/'}
            className={({ isActive }) =>
              cn(
                'flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition',
                isActive
                  ? 'bg-ink-950 text-white'
                  : 'text-ink-500 hover:bg-surface-50 hover:text-ink-900',
              )
            }
          >
            <span className="w-4 text-center text-xs opacity-70">
              {icons[item.icon] ?? '•'}
            </span>
            {item.label}
          </NavLink>
        ))}
      </nav>

      <div className="border-t border-surface-200 px-5 py-4">
        <p className="text-[11px] leading-relaxed text-ink-300">
          Fluxo: Idea → Brief → Copy → Design → React → Preview → Ready →
          Published
        </p>
      </div>
    </aside>
  )
}
