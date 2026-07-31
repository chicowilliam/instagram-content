import { cn } from '@/lib/cn'
import { BackgroundLayer, type BackgroundProps } from './Layer'

/** Multi-point radial mesh. Reuses the canonical surface gradients. */
export function Mesh({ tone = 'light', className }: BackgroundProps) {
  return (
    <BackgroundLayer className={className}>
      <div
        className={cn(
          'absolute inset-0',
          tone === 'dark' ? 'gradient-dark' : 'gradient-mesh',
        )}
      />
    </BackgroundLayer>
  )
}
