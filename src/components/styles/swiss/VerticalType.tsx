import { cn } from '@/lib/cn'

type VerticalTypeProps = {
  children: string
  size?: number
  /** Width of the edge rail the word is centred in */
  rail?: number
  /** bottom-to-top (default) or top-to-bottom */
  direction?: 'up' | 'down'
  className?: string
}

/**
 * Rotated grotesque word running along the edge of the poster.
 * Renders inside a fixed-width rail so the rotated glyphs stay anchored
 * to the edge instead of drifting with the unrotated layout box.
 */
export function VerticalType({
  children,
  size = 128,
  rail,
  direction = 'up',
  className,
}: VerticalTypeProps) {
  return (
    <div className="relative h-full" style={{ width: rail ?? size }}>
      <span
        className={cn(
          'absolute left-1/2 top-1/2 font-display font-black uppercase',
          'leading-[0.82] tracking-[-0.03em] whitespace-nowrap',
          className,
        )}
        style={{
          fontSize: size,
          transform: `translate(-50%, -50%) rotate(${direction === 'up' ? -90 : 90}deg)`,
        }}
      >
        {children}
      </span>
    </div>
  )
}
