import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'
import { typography } from '@/design-system'

type BrowserMockupProps = {
  url?: string
  children?: ReactNode
  className?: string
}

export function BrowserMockup({
  url = 'app.example.com',
  children,
  className,
}: BrowserMockupProps) {
  return (
    <div
      className={cn(
        'overflow-hidden rounded-[24px] border border-surface-200 bg-surface-0 shadow-lift',
        className,
      )}
    >
      <div className="flex items-center gap-3 border-b border-surface-200 bg-surface-50 px-5 py-3.5">
        <div className="flex gap-1.5">
          <span className="size-2.5 rounded-full bg-surface-300" />
          <span className="size-2.5 rounded-full bg-surface-300" />
          <span className="size-2.5 rounded-full bg-surface-300" />
        </div>
        <div
          className={cn(
            'flex-1 rounded-full bg-surface-0 border border-surface-200 px-4 py-1.5 text-center',
            typography.caption,
            'normal-case tracking-normal text-ink-400 font-normal',
          )}
        >
          {url}
        </div>
      </div>
      <div className="min-h-[220px] bg-gradient-to-b from-surface-0 to-surface-50 p-8">
        {children ?? (
          <div className="flex h-full min-h-[180px] flex-col justify-center gap-4">
            <div className="h-3 w-2/5 rounded-full bg-surface-200" />
            <div className="h-3 w-4/5 rounded-full bg-surface-100" />
            <div className="h-3 w-3/5 rounded-full bg-surface-100" />
            <div className="mt-4 grid grid-cols-3 gap-3">
              <div className="h-20 rounded-2xl bg-accent-50 border border-accent-100" />
              <div className="h-20 rounded-2xl bg-surface-100 border border-surface-200" />
              <div className="h-20 rounded-2xl bg-surface-100 border border-surface-200" />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
