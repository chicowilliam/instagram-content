import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'
import { typography } from '@/design-system'

type BadgeProps = {
  children: ReactNode
  tone?: 'neutral' | 'accent' | 'dark'
  className?: string
}

const tones = {
  neutral: 'bg-surface-100 text-ink-600 border-surface-200',
  accent: 'bg-accent-50 text-accent-700 border-accent-100',
  dark: 'bg-ink-900 text-white border-ink-900',
} as const

export function Badge({ children, tone = 'neutral', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 rounded-full border px-4 py-1.5',
        typography.caption,
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  )
}
