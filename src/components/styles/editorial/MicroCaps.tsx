import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'
import { display } from '@/design-system'

type MicroCapsProps = {
  children: ReactNode
  /** Draws the short editorial rule underneath */
  rule?: boolean
  align?: 'left' | 'right'
  className?: string
}

export function MicroCaps({
  children,
  rule,
  align = 'left',
  className,
}: MicroCapsProps) {
  return (
    <div
      className={cn(
        'flex flex-col gap-4',
        align === 'right' && 'items-end text-right',
        className,
      )}
    >
      <div className={cn(display.micro, 'text-ink-900')}>{children}</div>
      {rule ? <span className="h-px w-16 bg-ink-950/45" /> : null}
    </div>
  )
}
