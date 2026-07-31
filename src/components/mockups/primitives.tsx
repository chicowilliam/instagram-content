import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'

export type MockupTone = 'light' | 'dark'

export type MockupProps = {
  children?: ReactNode
  className?: string
  tone?: MockupTone
}

export function isDark(tone: MockupTone) {
  return tone === 'dark'
}

/** Window control dots shared by every chrome. */
export function TrafficLights({ tone = 'light' }: { tone?: MockupTone }) {
  return (
    <div className="flex gap-1.5">
      {[0, 1, 2].map((dot) => (
        <span
          key={dot}
          className={cn(
            'size-2.5 rounded-full',
            isDark(tone) ? 'bg-white/20' : 'bg-surface-300',
          )}
        />
      ))}
    </div>
  )
}

export function SkeletonLine({
  width = 'w-full',
  tone = 'light',
  strong,
  className,
}: {
  width?: string
  tone?: MockupTone
  strong?: boolean
  className?: string
}) {
  return (
    <div
      className={cn(
        'h-3 rounded-full',
        width,
        isDark(tone)
          ? strong
            ? 'bg-white/25'
            : 'bg-white/12'
          : strong
            ? 'bg-surface-300'
            : 'bg-surface-100',
        className,
      )}
    />
  )
}

export function SkeletonBlock({
  tone = 'light',
  accent,
  className,
}: {
  tone?: MockupTone
  accent?: boolean
  className?: string
}) {
  return (
    <div
      className={cn(
        'rounded-2xl border',
        isDark(tone)
          ? accent
            ? 'border-white/15 bg-white/10'
            : 'border-white/10 bg-white/5'
          : accent
            ? 'border-accent-100 bg-accent-50'
            : 'border-surface-200 bg-surface-100',
        className,
      )}
    />
  )
}

/** Outer shell used by browser, window, dashboard and editor chromes. */
export function MockupShell({
  tone = 'light',
  className,
  children,
}: MockupProps) {
  return (
    <div
      className={cn(
        'overflow-hidden rounded-[24px] border shadow-lift',
        isDark(tone)
          ? 'border-white/10 bg-ink-950'
          : 'border-surface-200 bg-surface-0',
        className,
      )}
    >
      {children}
    </div>
  )
}

/** Title bar with dots and an optional centered or leading label. */
export function MockupChrome({
  tone = 'light',
  center,
  children,
}: {
  tone?: MockupTone
  center?: boolean
  children?: ReactNode
}) {
  return (
    <div
      className={cn(
        'flex items-center gap-3 border-b px-5 py-3.5',
        isDark(tone)
          ? 'border-white/10 bg-white/[0.04]'
          : 'border-surface-200 bg-surface-50',
      )}
    >
      <TrafficLights tone={tone} />
      <div className={cn('flex-1', center && 'text-center')}>{children}</div>
    </div>
  )
}

export function MockupCanvas({
  tone = 'light',
  className,
  children,
}: MockupProps) {
  return (
    <div
      className={cn(
        'p-8',
        isDark(tone)
          ? 'bg-gradient-to-b from-ink-950 to-ink-900'
          : 'bg-gradient-to-b from-surface-0 to-surface-50',
        className,
      )}
    >
      {children}
    </div>
  )
}

/** Default placeholder used when a mockup receives no children. */
export function SkeletonPage({ tone = 'light' }: { tone?: MockupTone }) {
  return (
    <div className="flex h-full min-h-[180px] flex-col justify-center gap-4">
      <SkeletonLine width="w-2/5" tone={tone} strong />
      <SkeletonLine width="w-4/5" tone={tone} />
      <SkeletonLine width="w-3/5" tone={tone} />
      <div className="mt-4 grid grid-cols-3 gap-3">
        <SkeletonBlock tone={tone} accent className="h-20" />
        <SkeletonBlock tone={tone} className="h-20" />
        <SkeletonBlock tone={tone} className="h-20" />
      </div>
    </div>
  )
}
