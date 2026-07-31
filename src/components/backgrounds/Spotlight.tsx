import { cn } from '@/lib/cn'
import { BackgroundLayer, type BackgroundProps } from './Layer'

type SpotlightProps = BackgroundProps & {
  origin?: 'top' | 'top-left' | 'top-right'
}

const origins = {
  top: 'at 50% 0%',
  'top-left': 'at 15% 0%',
  'top-right': 'at 85% 0%',
} as const

/** Directional cone of light. Strong hierarchy cue for hero slides. */
export function Spotlight({
  tone = 'dark',
  origin = 'top',
  className,
}: SpotlightProps) {
  const color =
    tone === 'dark' ? 'rgb(255 255 255 / 0.14)' : 'rgb(69 90 117 / 0.10)'

  return (
    <BackgroundLayer className={className}>
      <div
        className={cn('absolute inset-0')}
        style={{
          background: `radial-gradient(ellipse 70% 55% ${origins[origin]}, ${color}, transparent 65%)`,
        }}
      />
    </BackgroundLayer>
  )
}
