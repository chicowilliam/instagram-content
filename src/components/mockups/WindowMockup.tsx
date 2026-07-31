import { cn } from '@/lib/cn'
import { display } from '@/design-system'
import {
  MockupCanvas,
  MockupChrome,
  MockupShell,
  SkeletonPage,
  isDark,
  type MockupProps,
} from './primitives'

type WindowMockupProps = MockupProps & {
  title?: string
}

/** Generic desktop app window — no address bar. */
export function WindowMockup({
  title = 'Untitled',
  tone = 'light',
  children,
  className,
}: WindowMockupProps) {
  return (
    <MockupShell tone={tone} className={className}>
      <MockupChrome tone={tone} center>
        <span
          className={cn(
            display.monoSm,
            isDark(tone) ? 'text-white/45' : 'text-ink-400',
          )}
        >
          {title}
        </span>
      </MockupChrome>
      <MockupCanvas tone={tone} className="min-h-[220px]">
        {children ?? <SkeletonPage tone={tone} />}
      </MockupCanvas>
    </MockupShell>
  )
}
