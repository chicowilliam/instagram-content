import { cn } from '@/lib/cn'
import { typography } from '@/design-system'

type StatisticProps = {
  value: string
  label: string
  hint?: string
  className?: string
}

export function Statistic({ value, label, hint, className }: StatisticProps) {
  return (
    <div className={cn('flex flex-col gap-2', className)}>
      <p className={cn(typography.display, 'text-ink-950')}>{value}</p>
      <p className={cn(typography.body, 'font-medium text-ink-800')}>{label}</p>
      {hint ? (
        <p className={cn(typography.bodySm, 'text-ink-400 max-w-[24ch]')}>
          {hint}
        </p>
      ) : null}
    </div>
  )
}
