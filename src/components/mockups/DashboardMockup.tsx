import { cn } from '@/lib/cn'
import { display } from '@/design-system'
import {
  MockupChrome,
  MockupShell,
  SkeletonBlock,
  SkeletonLine,
  isDark,
  type MockupProps,
} from './primitives'

export type DashboardMetric = {
  label: string
  value: string
}

type DashboardMockupProps = MockupProps & {
  title?: string
  metrics?: readonly DashboardMetric[]
}

const defaultMetrics: DashboardMetric[] = [
  { label: 'Contatos', value: '128' },
  { label: 'Orçamentos', value: '34' },
  { label: 'Conversão', value: '9,4%' },
]

/** Internal panel mockup — used for "sistemas e operação" content. */
export function DashboardMockup({
  title = 'Painel',
  metrics = defaultMetrics,
  tone = 'light',
  children,
  className,
}: DashboardMockupProps) {
  const dark = isDark(tone)

  return (
    <MockupShell tone={tone} className={className}>
      <MockupChrome tone={tone} center>
        <span className={cn(display.monoSm, dark ? 'text-white/45' : 'text-ink-400')}>
          {title}
        </span>
      </MockupChrome>

      <div className="flex min-h-[260px]">
        <aside
          className={cn(
            'flex w-[92px] shrink-0 flex-col gap-3 border-r p-4',
            dark ? 'border-white/10 bg-white/[0.03]' : 'border-surface-200 bg-surface-50',
          )}
        >
          {[0, 1, 2, 3, 4].map((row) => (
            <SkeletonLine
              key={row}
              width={row === 0 ? 'w-full' : 'w-3/4'}
              tone={tone}
              strong={row === 0}
            />
          ))}
        </aside>

        <div
          className={cn(
            'flex-1 p-6',
            dark
              ? 'bg-gradient-to-b from-ink-950 to-ink-900'
              : 'bg-gradient-to-b from-surface-0 to-surface-50',
          )}
        >
          {children ?? (
            <div className="flex flex-col gap-5">
              <div className="grid grid-cols-3 gap-3">
                {metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className={cn(
                      'flex flex-col gap-1.5 rounded-2xl border px-4 py-3.5',
                      dark
                        ? 'border-white/10 bg-white/5'
                        : 'border-surface-200 bg-surface-0',
                    )}
                  >
                    <span
                      className={cn(
                        'text-[11px] uppercase tracking-[0.14em]',
                        dark ? 'text-white/40' : 'text-ink-300',
                      )}
                    >
                      {metric.label}
                    </span>
                    <span
                      className={cn(
                        'text-2xl font-semibold tracking-[-0.02em]',
                        dark ? 'text-white' : 'text-ink-950',
                      )}
                    >
                      {metric.value}
                    </span>
                  </div>
                ))}
              </div>

              <SkeletonBlock tone={tone} accent className="h-28" />

              <div className="flex flex-col gap-2.5">
                <SkeletonLine width="w-4/5" tone={tone} />
                <SkeletonLine width="w-3/5" tone={tone} />
                <SkeletonLine width="w-2/3" tone={tone} />
              </div>
            </div>
          )}
        </div>
      </div>
    </MockupShell>
  )
}
