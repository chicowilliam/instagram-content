import { cn } from '@/lib/cn'
import { BackgroundLayer, type BackgroundProps } from './Layer'

type GradientProps = BackgroundProps & {
  direction?: 'top' | 'bottom' | 'diagonal'
}

const directions = {
  top: 'bg-gradient-to-b',
  bottom: 'bg-gradient-to-t',
  diagonal: 'bg-gradient-to-br',
} as const

/** Discreet linear wash. Never a strong or saturated gradient. */
export function Gradient({
  tone = 'light',
  direction = 'top',
  className,
}: GradientProps) {
  return (
    <BackgroundLayer className={className}>
      <div
        className={cn(
          'absolute inset-0',
          directions[direction],
          tone === 'dark'
            ? 'from-ink-900 via-ink-950 to-ink-950'
            : 'from-surface-0 via-surface-50 to-surface-100',
        )}
      />
    </BackgroundLayer>
  )
}
