import { cn } from '@/lib/cn'
import { typography } from '@/design-system'
import {
  MockupCanvas,
  MockupChrome,
  MockupShell,
  SkeletonPage,
  isDark,
  type MockupProps,
} from './primitives'

type BrowserMockupProps = MockupProps & {
  url?: string
}

export function BrowserMockup({
  url = 'app.example.com',
  tone = 'light',
  children,
  className,
}: BrowserMockupProps) {
  return (
    <MockupShell tone={tone} className={className}>
      <MockupChrome tone={tone}>
        <div
          className={cn(
            'rounded-full border px-4 py-1.5 text-center',
            typography.caption,
            'font-normal normal-case tracking-normal',
            isDark(tone)
              ? 'border-white/10 bg-white/5 text-white/50'
              : 'border-surface-200 bg-surface-0 text-ink-400',
          )}
        >
          {url}
        </div>
      </MockupChrome>
      <MockupCanvas tone={tone} className="min-h-[220px]">
        {children ?? <SkeletonPage tone={tone} />}
      </MockupCanvas>
    </MockupShell>
  )
}
