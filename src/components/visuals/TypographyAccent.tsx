import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'
import type { VisualProps } from './types'

type TypographyAccentProps = VisualProps & {
  children: ReactNode
  /** Word(s) that receive the electric accent */
  accent?: string
}

/**
 * Splits a headline and paints the accent phrase.
 * Pass the full string as children and the substring to highlight.
 */
export function TypographyAccent({
  className,
  children,
  accent,
  tone = 'dark',
}: TypographyAccentProps) {
  const text = typeof children === 'string' ? children : null

  if (!text || !accent || !text.includes(accent)) {
    return (
      <span
        className={cn(
          tone === 'dark' ? 'text-te-ink' : 'text-ink-950',
          className,
        )}
      >
        {children}
      </span>
    )
  }

  const [before, after] = text.split(accent)

  return (
    <span
      className={cn(
        tone === 'dark' ? 'text-te-ink' : 'text-ink-950',
        className,
      )}
    >
      {before}
      <span className="bg-gradient-to-r from-te-accent via-te-violet to-te-cyan bg-clip-text text-transparent">
        {accent}
      </span>
      {after}
    </span>
  )
}
