import { cn } from '@/lib/cn'
import { blur, opacity } from '@/design-system'
import {
  BackgroundLayer,
  backgroundAccents,
  type BackgroundAccent,
  type BackgroundProps,
} from './Layer'

type GlowProps = BackgroundProps & {
  accent?: BackgroundAccent
  position?: 'top' | 'center' | 'bottom'
}

const positions = {
  top: '-top-[25%] left-1/2 -translate-x-1/2',
  center: 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
  bottom: '-bottom-[25%] left-1/2 -translate-x-1/2',
} as const

/** Single soft halo. Anchors the focal point without competing with type. */
export function Glow({
  tone = 'light',
  accent = 'cool',
  position = 'top',
  className,
}: GlowProps) {
  return (
    <BackgroundLayer className={className}>
      <div
        className={cn(
          'absolute size-[70%] rounded-full',
          positions[position],
          tone === 'dark' ? 'bg-accent-400' : backgroundAccents[accent],
          blur.glow,
          tone === 'dark' ? opacity.soft : opacity.subtle,
        )}
      />
    </BackgroundLayer>
  )
}
