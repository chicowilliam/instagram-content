import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'

type AcidChipProps = {
  children: ReactNode
  className?: string
}

/** Small pill label with the hard black keyline used across the tiles. */
export function AcidChip({ children, className }: AcidChipProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border-2 border-acid-black px-3 py-1',
        'font-mono text-[13px] font-medium uppercase tracking-[0.14em]',
        className,
      )}
    >
      {children}
    </span>
  )
}
