import { cn } from '@/lib/cn'
import type { VisualProps } from './types'

type GlowSpotProps = VisualProps & {
  color?: 'accent' | 'violet' | 'cyan'
  size?: number
}

const colors = {
  accent: 'bg-te-accent',
  violet: 'bg-te-violet',
  cyan: 'bg-te-cyan',
} as const

/** Localized glow behind a focal element. One per composition. */
export function GlowSpot({
  className,
  color = 'accent',
  size = 420,
}: GlowSpotProps) {
  return (
    <div
      aria-hidden
      className={cn(
        'pointer-events-none absolute rounded-full blur-3xl',
        colors[color],
        'opacity-40',
        className,
      )}
      style={{ width: size, height: size }}
    />
  )
}
