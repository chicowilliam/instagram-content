import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'

export type BackgroundTone = 'light' | 'dark'

export type BackgroundProps = {
  tone?: BackgroundTone
  className?: string
}

/**
 * Every background is an absolutely positioned, non-interactive layer.
 * Put it as the first child of a `relative` container.
 *
 * Backgrounds are intentionally static — no animation — so Playwright
 * captures identical frames on every export run.
 */
export function BackgroundLayer({
  className,
  children,
}: {
  className?: string
  children?: ReactNode
}) {
  return (
    <div
      aria-hidden
      className={cn('pointer-events-none absolute inset-0 overflow-hidden', className)}
    >
      {children}
    </div>
  )
}

/** Shared accent palette so no background invents its own colors. */
export const backgroundAccents = {
  cool: 'bg-accent-400',
  deep: 'bg-accent-600',
  paper: 'bg-surface-200',
  ink: 'bg-ink-900',
} as const

export type BackgroundAccent = keyof typeof backgroundAccents
