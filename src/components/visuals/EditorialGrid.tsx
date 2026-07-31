import { cn } from '@/lib/cn'
import { Grid } from '@/components/backgrounds'
import type { VisualProps } from './types'

/** Hairline editorial grid — Swiss poster structure without clutter. */
export function EditorialGrid({ className, tone = 'dark' }: VisualProps) {
  return (
    <Grid
      tone={tone}
      className={cn(
        tone === 'dark' ? 'opacity-40' : 'opacity-60',
        className,
      )}
    />
  )
}
