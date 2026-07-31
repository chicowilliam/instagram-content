import { cn } from '@/lib/cn'
import { Pattern } from '@/components/backgrounds'
import type { VisualProps } from './types'

/** Subtle dot field for editorial depth. */
export function DotPattern({ className, tone = 'dark' }: VisualProps) {
  return (
    <Pattern
      kind="dots"
      tone={tone}
      className={cn(
        tone === 'dark' ? 'opacity-[0.35]' : 'opacity-[0.55]',
        className,
      )}
    />
  )
}
