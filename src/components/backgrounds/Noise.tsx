import { cn } from '@/lib/cn'
import { opacity } from '@/design-system'
import { BackgroundLayer, type BackgroundProps } from './Layer'

type NoiseProps = BackgroundProps & {
  strength?: 'ghost' | 'faint' | 'subtle'
}

/** Film grain. Removes the flat, digital look from large flat areas. */
export function Noise({ tone = 'light', strength = 'faint', className }: NoiseProps) {
  return (
    <BackgroundLayer className={className}>
      <div
        className={cn(
          'absolute inset-0 texture-noise',
          opacity[strength],
          tone === 'dark' && 'invert',
        )}
      />
    </BackgroundLayer>
  )
}
