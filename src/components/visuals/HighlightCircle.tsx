import { cn } from '@/lib/cn'
import type { VisualChildren } from './types'

type HighlightCircleProps = VisualChildren & {
  size?: number
  dashed?: boolean
}

/** Editorial focus ring — marks the inspection point. */
export function HighlightCircle({
  className,
  children,
  size = 120,
  dashed = true,
}: HighlightCircleProps) {
  return (
    <div
      className={cn(
        'relative inline-flex items-center justify-center',
        className,
      )}
      style={{ width: size, height: size }}
    >
      <div
        aria-hidden
        className={cn(
          'absolute inset-0 rounded-full border-2 border-te-accent/70',
          dashed && 'border-dashed',
        )}
      />
      <div
        aria-hidden
        className="absolute -inset-2 rounded-full border border-te-cyan/30"
      />
      {children}
    </div>
  )
}
