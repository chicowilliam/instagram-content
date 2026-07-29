import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'

type IconBoxProps = {
  children: ReactNode
  size?: 'sm' | 'md' | 'lg'
  tone?: 'soft' | 'outline' | 'dark'
  className?: string
}

const sizes = {
  sm: 'size-12 rounded-[14px]',
  md: 'size-16 rounded-[18px]',
  lg: 'size-20 rounded-[22px]',
} as const

const tones = {
  soft: 'bg-surface-100 text-ink-800',
  outline: 'bg-surface-0 text-ink-800 border border-surface-200 shadow-soft',
  dark: 'bg-ink-900 text-white',
} as const

export function IconBox({
  children,
  size = 'md',
  tone = 'soft',
  className,
}: IconBoxProps) {
  return (
    <div
      className={cn(
        'inline-flex items-center justify-center shrink-0',
        sizes[size],
        tones[tone],
        className,
      )}
    >
      {children}
    </div>
  )
}
