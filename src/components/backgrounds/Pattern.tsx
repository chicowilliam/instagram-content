import { cn } from '@/lib/cn'
import { opacity } from '@/design-system'
import { BackgroundLayer, type BackgroundProps } from './Layer'

export type PatternKind = 'dots' | 'grid' | 'stripes' | 'checker'

type PatternProps = BackgroundProps & {
  kind?: PatternKind
  fade?: boolean
}

const kinds: Record<PatternKind, { light: string; dark: string }> = {
  dots: { light: 'pattern-dots-light', dark: 'pattern-paper invert' },
  grid: { light: 'pattern-grid-light', dark: 'pattern-grid' },
  stripes: { light: 'pattern-stripes text-ink-300', dark: 'pattern-stripes text-white/20' },
  checker: { light: 'pattern-checker', dark: 'pattern-checker' },
}

/** Repeating texture. Keep it under a low opacity token. */
export function Pattern({
  tone = 'light',
  kind = 'dots',
  fade = true,
  className,
}: PatternProps) {
  return (
    <BackgroundLayer className={className}>
      <div
        className={cn(
          'absolute inset-0',
          tone === 'dark' ? kinds[kind].dark : kinds[kind].light,
          kind === 'checker' ? opacity.faint : opacity.strong,
          fade &&
            '[mask-image:radial-gradient(ellipse_70%_60%_at_50%_50%,black,transparent)]',
        )}
      />
    </BackgroundLayer>
  )
}
