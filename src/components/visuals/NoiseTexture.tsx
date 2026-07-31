import { cn } from '@/lib/cn'
import { Noise } from '@/components/backgrounds'
import type { VisualProps } from './types'

/** Film grain overlay — deterministic SVG texture, export-safe. */
export function NoiseTexture({
  className,
  tone = 'dark',
  strength = 'faint',
}: VisualProps & { strength?: 'ghost' | 'faint' | 'subtle' }) {
  return (
    <Noise
      tone={tone}
      strength={strength}
      className={cn('z-[1]', className)}
    />
  )
}
