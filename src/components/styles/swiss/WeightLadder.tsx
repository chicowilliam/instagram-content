import { cn } from '@/lib/cn'

type WeightLadderProps = {
  items: readonly string[]
  angle?: number
  className?: string
}

const weights = [
  'font-black',
  'font-bold',
  'font-semibold',
  'font-medium',
  'font-normal',
  'font-light',
]

/**
 * Descending weight specimen. Each row steps one weight lighter,
 * set flush-left against a rule.
 */
export function WeightLadder({
  items,
  angle = 30,
  className,
}: WeightLadderProps) {
  return (
    <div
      className={cn('inline-flex origin-left items-stretch gap-4', className)}
      style={{ transform: `rotate(${angle}deg)` }}
    >
      <span className="w-[6px] shrink-0 bg-swiss-ink" />
      <div className="flex flex-col">
        {items.map((item, index) => (
          <span
            key={item}
            className={cn(
              'font-display uppercase leading-[1.02] tracking-[-0.01em]',
              weights[Math.min(index, weights.length - 1)],
            )}
            style={{ fontSize: 34 - index * 2 }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
