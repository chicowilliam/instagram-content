import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'
import { typography } from '@/design-system'

type SubtitleProps = {
  children: ReactNode
  size?: 'body' | 'bodySm'
  className?: string
  muted?: boolean
}

export function Subtitle({
  children,
  size = 'body',
  className,
  muted = true,
}: SubtitleProps) {
  return (
    <p
      className={cn(
        size === 'body' ? typography.body : typography.bodySm,
        'text-balance max-w-[34ch]',
        muted ? 'text-ink-500' : 'text-ink-700',
        className,
      )}
    >
      {children}
    </p>
  )
}
