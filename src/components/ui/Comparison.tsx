import { cn } from '@/lib/cn'
import { typography } from '@/design-system'

type ComparisonItem = {
  label: string
  points: readonly string[]
}

type ComparisonProps = {
  left: ComparisonItem
  right: ComparisonItem
  className?: string
}

export function Comparison({ left, right, className }: ComparisonProps) {
  return (
    <div className={cn('grid grid-cols-2 gap-4', className)}>
      <Column item={left} variant="muted" />
      <Column item={right} variant="emphasis" />
    </div>
  )
}

function Column({
  item,
  variant,
}: {
  item: ComparisonItem
  variant: 'muted' | 'emphasis'
}) {
  const isEmphasis = variant === 'emphasis'

  return (
    <div
      className={cn(
        'flex flex-col gap-5 rounded-[24px] border p-7',
        isEmphasis
          ? 'border-ink-900/10 bg-ink-950 text-white shadow-lift'
          : 'border-surface-200 bg-surface-50 text-ink-900',
      )}
    >
      <p
        className={cn(
          typography.caption,
          isEmphasis ? 'text-white/50' : 'text-ink-400',
        )}
      >
        {item.label}
      </p>
      <ul className="flex flex-col gap-3.5">
        {item.points.map((point) => (
          <li
            key={point}
            className={cn(
              typography.bodySm,
              'flex gap-3',
              isEmphasis ? 'text-white/90' : 'text-ink-600',
            )}
          >
            <span
              className={cn(
                'mt-2 size-1.5 shrink-0 rounded-full',
                isEmphasis ? 'bg-white/70' : 'bg-ink-300',
              )}
            />
            <span className="text-balance">{point}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
