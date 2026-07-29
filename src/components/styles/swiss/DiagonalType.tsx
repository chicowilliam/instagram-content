import { cn } from '@/lib/cn'

type DiagonalTypeProps = {
  children: string
  size?: number
  angle?: number
  className?: string
}

/** Type set on the rotated secondary grid that cuts across the poster. */
export function DiagonalType({
  children,
  size = 164,
  angle = 30,
  className,
}: DiagonalTypeProps) {
  return (
    <span
      className={cn(
        'inline-block origin-left font-display font-black uppercase',
        'leading-[0.8] tracking-[-0.02em] whitespace-nowrap',
        className,
      )}
      style={{ fontSize: size, transform: `rotate(${angle}deg)` }}
    >
      {children}
    </span>
  )
}
