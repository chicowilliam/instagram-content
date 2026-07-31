import { cn } from '@/lib/cn'
import { blur, opacity } from '@/design-system'
import {
  BackgroundLayer,
  backgroundAccents,
  type BackgroundAccent,
  type BackgroundProps,
} from './Layer'

type AuroraProps = BackgroundProps & {
  accent?: BackgroundAccent
  intensity?: 'soft' | 'medium' | 'bold'
}

const intensityMap = {
  soft: opacity.subtle,
  medium: opacity.soft,
  bold: opacity.muted,
} as const

/** Blurred light blobs. Creates depth without a visible gradient edge. */
export function Aurora({
  tone = 'light',
  accent = 'cool',
  intensity = 'medium',
  className,
}: AuroraProps) {
  const blobTone = tone === 'dark' ? 'bg-accent-400' : backgroundAccents[accent]

  return (
    <BackgroundLayer className={className}>
      <div className={cn('absolute inset-0', intensityMap[intensity])}>
        <div
          className={cn(
            'absolute -left-[15%] -top-[20%] size-[65%] rounded-full',
            blobTone,
            blur.aurora,
          )}
        />
        <div
          className={cn(
            'absolute -right-[10%] top-[10%] size-[50%] rounded-full',
            tone === 'dark' ? 'bg-accent-600' : 'bg-accent-200',
            blur.aurora,
          )}
        />
        <div
          className={cn(
            'absolute bottom-[-25%] left-[25%] size-[60%] rounded-full',
            tone === 'dark' ? 'bg-accent-700' : 'bg-surface-300',
            blur.aurora,
          )}
        />
      </div>
    </BackgroundLayer>
  )
}
