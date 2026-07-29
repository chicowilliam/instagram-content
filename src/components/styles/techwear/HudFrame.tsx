import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'

type HudFrameProps = {
  children?: ReactNode
  /** Corner bracket length in px */
  bracket?: number
  className?: string
}

/** Thin keyline box with corner brackets — the HUD container primitive. */
export function HudFrame({ children, bracket = 18, className }: HudFrameProps) {
  const corners = [
    'left-0 top-0 border-l-2 border-t-2',
    'right-0 top-0 border-r-2 border-t-2',
    'left-0 bottom-0 border-l-2 border-b-2',
    'right-0 bottom-0 border-r-2 border-b-2',
  ]

  return (
    <div className={cn('relative border border-white/25', className)}>
      {corners.map((corner) => (
        <span
          key={corner}
          className={cn('absolute border-tech-pink', corner)}
          style={{ width: bracket, height: bracket }}
        />
      ))}
      {children}
    </div>
  )
}
