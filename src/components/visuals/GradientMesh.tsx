import { cn } from '@/lib/cn'
import { BackgroundLayer } from '@/components/backgrounds'
import type { VisualProps } from './types'

/** Multi-point mesh tuned for Tech Editorial Premium. */
export function GradientMesh({ className, tone = 'dark' }: VisualProps) {
  return (
    <BackgroundLayer className={className}>
      <div
        className={cn(
          'absolute -top-[10%] -left-[15%] size-[70%] rounded-full blur-3xl',
          tone === 'dark' ? 'bg-te-accent/35' : 'bg-te-accent/20',
        )}
      />
      <div
        className={cn(
          'absolute top-[35%] -right-[20%] size-[65%] rounded-full blur-3xl',
          tone === 'dark' ? 'bg-te-violet/30' : 'bg-te-violet/18',
        )}
      />
      <div
        className={cn(
          'absolute -bottom-[15%] left-[20%] size-[55%] rounded-full blur-3xl',
          tone === 'dark' ? 'bg-te-cyan/20' : 'bg-te-cyan/12',
        )}
      />
    </BackgroundLayer>
  )
}
