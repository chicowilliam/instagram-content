import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'
import { typography } from '@/design-system'

type TitleProps = {
  children: ReactNode
  size?: 'display' | 'h1' | 'h2'
  className?: string
  serif?: boolean
}

const sizeMap = {
  display: typography.display,
  h1: typography.h1,
  h2: typography.h2,
} as const

export function Title({ children, size = 'h1', className, serif }: TitleProps) {
  return (
    <h1
      className={cn(
        sizeMap[size],
        'text-balance text-ink-950',
        serif && typography.serif,
        className,
      )}
    >
      {children}
    </h1>
  )
}
