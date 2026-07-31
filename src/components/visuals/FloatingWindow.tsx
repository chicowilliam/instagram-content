import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'
import { WindowMockup } from '@/components/mockups'
import type { VisualProps } from './types'

type FloatingWindowProps = VisualProps & {
  children?: ReactNode
  title?: string
  rotate?: number
  float?: boolean
}

/** Window mockup with optional perspective tilt — depth without animation. */
export function FloatingWindow({
  className,
  children,
  title = 'preview',
  rotate = -6,
  float = true,
  tone = 'dark',
}: FloatingWindowProps) {
  return (
    <div
      className={cn(
        'relative',
        float && 'drop-shadow-[0_40px_60px_rgb(0_0_0_/_0.45)]',
        className,
      )}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <WindowMockup
        tone={tone === 'dark' ? 'dark' : 'light'}
        title={title}
        className="w-full"
      >
        {children}
      </WindowMockup>
    </div>
  )
}
