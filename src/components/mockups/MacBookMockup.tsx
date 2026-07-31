import { cn } from '@/lib/cn'
import { SkeletonPage, isDark, type MockupProps } from './primitives'

type MacBookMockupProps = MockupProps & {
  screenTone?: 'light' | 'dark'
}

/** Laptop frame with hinge base — good for "site completo" narratives. */
export function MacBookMockup({
  tone = 'dark',
  screenTone = 'light',
  children,
  className,
}: MacBookMockupProps) {
  return (
    <div className={cn('flex w-full flex-col items-center', className)}>
      <div
        className={cn(
          'w-full rounded-[20px] border p-3 shadow-lift',
          isDark(tone)
            ? 'border-white/10 bg-ink-950'
            : 'border-surface-200 bg-surface-100',
        )}
      >
        <div
          className={cn(
            'overflow-hidden rounded-[12px] p-8',
            screenTone === 'dark'
              ? 'bg-gradient-to-b from-ink-950 to-ink-900'
              : 'bg-gradient-to-b from-surface-0 to-surface-50',
          )}
        >
          <div className="min-h-[260px]">
            {children ?? <SkeletonPage tone={screenTone} />}
          </div>
        </div>
      </div>

      <div
        className={cn(
          'h-3 w-[112%] rounded-b-[14px] border-x border-b',
          isDark(tone)
            ? 'border-white/10 bg-ink-900'
            : 'border-surface-200 bg-surface-200',
        )}
      />
      <div
        className={cn(
          'h-1.5 w-20 rounded-b-full',
          isDark(tone) ? 'bg-white/15' : 'bg-surface-300',
        )}
      />
    </div>
  )
}
