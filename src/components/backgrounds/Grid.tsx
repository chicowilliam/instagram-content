import { cn } from '@/lib/cn'
import { BackgroundLayer, type BackgroundProps } from './Layer'

type GridProps = BackgroundProps & {
  /** Fades the grid toward the edges so it never looks like graph paper. */
  fade?: boolean
}

/** Invisible-grid made visible. Hairlines only, never a boxed look. */
export function Grid({ tone = 'light', fade = true, className }: GridProps) {
  return (
    <BackgroundLayer className={className}>
      <div
        className={cn(
          'absolute inset-0',
          tone === 'dark' ? 'pattern-grid' : 'pattern-grid-light',
          fade &&
            '[mask-image:radial-gradient(ellipse_65%_55%_at_50%_45%,black,transparent)]',
        )}
      />
    </BackgroundLayer>
  )
}
