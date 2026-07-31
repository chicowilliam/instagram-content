import { Monitor, Moon, Sun } from 'lucide-react'
import { cn } from '@/lib/cn'
import { border, radius, stack, text } from '@/design-system'
import { useTheme, type ThemePreference } from '@/lib/theme'

const OPTIONS: {
  id: ThemePreference
  label: string
  icon: typeof Sun
}[] = [
  { id: 'light', label: 'Claro', icon: Sun },
  { id: 'dark', label: 'Escuro', icon: Moon },
  { id: 'system', label: 'Sistema', icon: Monitor },
]

type ThemeToggleProps = {
  variant?: 'compact' | 'panel'
  className?: string
}

export function ThemeToggle({ variant = 'compact', className }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme()

  if (variant === 'panel') {
    return (
      <div className={cn('flex flex-col', stack.sm, className)}>
        <p className={text.label}>Tema</p>
        <div
          className={cn(
            'grid grid-cols-3 gap-1 bg-surface-50 p-1',
            radius.card,
            border.hairline,
          )}
        >
          {OPTIONS.map((option) => {
            const Icon = option.icon
            const active = theme === option.id
            return (
              <button
                key={option.id}
                type="button"
                onClick={() => setTheme(option.id)}
                className={cn(
                  'flex flex-col items-center gap-1.5 px-3 py-3 text-xs transition',
                  radius.tile,
                  active
                    ? 'bg-surface-0 text-ink-950 shadow-soft'
                    : 'text-ink-400 hover:text-ink-700',
                )}
              >
                <Icon className="size-4" strokeWidth={1.5} />
                {option.label}
              </button>
            )
          })}
        </div>
      </div>
    )
  }

  return (
    <div
      className={cn(
        'grid grid-cols-3 gap-0.5 bg-surface-50 p-0.5',
        radius.control,
        border.hairline,
        className,
      )}
      role="group"
      aria-label="Tema"
    >
      {OPTIONS.map((option) => {
        const Icon = option.icon
        const active = theme === option.id
        return (
          <button
            key={option.id}
            type="button"
            title={option.label}
            aria-label={option.label}
            aria-pressed={active}
            onClick={() => setTheme(option.id)}
            className={cn(
              'flex items-center justify-center py-1.5 transition',
              radius.control,
              active
                ? 'bg-surface-0 text-ink-950 shadow-soft'
                : 'text-ink-400 hover:text-ink-700',
            )}
          >
            <Icon className="size-3.5" strokeWidth={1.5} />
          </button>
        )
      })}
    </div>
  )
}
