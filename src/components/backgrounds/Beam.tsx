import { cn } from '@/lib/cn'
import { blur, opacity } from '@/design-system'
import { BackgroundLayer, type BackgroundProps } from './Layer'

type BeamProps = BackgroundProps & {
  angle?: 'left' | 'right'
}

/** Angled light streak. Adds asymmetry — never center it. */
export function Beam({ tone = 'dark', angle = 'right', className }: BeamProps) {
  return (
    <BackgroundLayer className={className}>
      <div
        className={cn(
          'absolute -top-[30%] h-[160%] w-[38%]',
          angle === 'right'
            ? 'right-[8%] rotate-[18deg]'
            : 'left-[8%] -rotate-[18deg]',
          tone === 'dark'
            ? 'bg-gradient-to-b from-white/25 via-white/10 to-transparent'
            : 'bg-gradient-to-b from-accent-200 via-accent-100 to-transparent',
          blur.edge,
          tone === 'dark' ? opacity.soft : opacity.muted,
        )}
      />
    </BackgroundLayer>
  )
}
