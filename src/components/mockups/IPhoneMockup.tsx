import { cn } from '@/lib/cn'
import {
  SkeletonBlock,
  SkeletonLine,
  isDark,
  type MockupProps,
} from './primitives'

type IPhoneMockupProps = MockupProps & {
  /** Screen background tone, independent from the device bezel */
  screenTone?: 'light' | 'dark'
  screenClassName?: string
}

/** Phone frame for mobile-first arguments. Static by design (export-safe). */
export function IPhoneMockup({
  tone = 'dark',
  screenTone = 'light',
  children,
  className,
  screenClassName,
}: IPhoneMockupProps) {
  return (
    <div
      className={cn(
        'relative w-[300px] rounded-[52px] border p-3 shadow-lift',
        isDark(tone)
          ? 'border-white/10 bg-ink-950'
          : 'border-surface-200 bg-surface-100',
        className,
      )}
    >
      <div
        className={cn(
          'relative overflow-hidden rounded-[42px]',
          screenTone === 'dark'
            ? 'bg-gradient-to-b from-ink-950 to-ink-900'
            : 'bg-gradient-to-b from-surface-0 to-surface-50',
          screenClassName,
        )}
      >
        <div className="flex justify-center pt-3">
          <span
            className={cn(
              'h-6 w-24 rounded-full',
              isDark(tone) ? 'bg-ink-950' : 'bg-ink-900/85',
            )}
          />
        </div>

        <div className="min-h-[440px] px-6 pb-8 pt-6">
          {children ?? <PhoneSkeleton tone={screenTone} />}
        </div>

        <div className="flex justify-center pb-2.5">
          <span
            className={cn(
              'h-1 w-28 rounded-full',
              screenTone === 'dark' ? 'bg-white/25' : 'bg-ink-300',
            )}
          />
        </div>
      </div>
    </div>
  )
}

function PhoneSkeleton({ tone }: { tone: 'light' | 'dark' }) {
  return (
    <div className="flex flex-col gap-4">
      <SkeletonLine width="w-3/5" tone={tone} strong />
      <SkeletonLine width="w-full" tone={tone} />
      <SkeletonLine width="w-4/5" tone={tone} />
      <SkeletonBlock tone={tone} accent className="mt-2 h-32" />
      <SkeletonBlock tone={tone} className="h-20" />
      <SkeletonBlock tone={tone} className="h-20" />
    </div>
  )
}
