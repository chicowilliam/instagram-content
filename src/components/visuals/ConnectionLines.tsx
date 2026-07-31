import { cn } from '@/lib/cn'
import type { VisualProps } from './types'

type ConnectionLinesProps = VisualProps & {
  direction?: 'horizontal' | 'vertical'
}

/** Soft connector between stages — progression without UI chrome. */
export function ConnectionLines({
  className,
  direction = 'horizontal',
}: ConnectionLinesProps) {
  return (
    <div
      aria-hidden
      className={cn(
        'pointer-events-none',
        direction === 'horizontal'
          ? 'h-px w-full bg-gradient-to-r from-transparent via-te-accent/50 to-transparent'
          : 'h-full w-px bg-gradient-to-b from-transparent via-te-accent/50 to-transparent',
        className,
      )}
    />
  )
}
