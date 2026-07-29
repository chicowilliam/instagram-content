import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'
import { typography } from '@/design-system'

type QuoteProps = {
  children: ReactNode
  author?: string
  role?: string
  className?: string
}

export function Quote({ children, author, role, className }: QuoteProps) {
  return (
    <figure className={cn('flex flex-col gap-8', className)}>
      <blockquote
        className={cn(
          typography.h2,
          typography.serif,
          'text-ink-950 text-balance',
        )}
      >
        “{children}”
      </blockquote>
      {(author || role) && (
        <figcaption className="flex flex-col gap-1">
          {author ? (
            <span className={cn(typography.bodySm, 'font-medium text-ink-800')}>
              {author}
            </span>
          ) : null}
          {role ? (
            <span className={cn(typography.bodySm, 'text-ink-400')}>{role}</span>
          ) : null}
        </figcaption>
      )}
    </figure>
  )
}
