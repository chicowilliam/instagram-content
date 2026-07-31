import { cn } from '@/lib/cn'
import { display } from '@/design-system'
import { MockupChrome, MockupShell, isDark, type MockupProps } from './primitives'

type EditorMockupProps = MockupProps & {
  filename?: string
  /** Plain lines rendered in mono type. Indentation is preserved. */
  lines?: readonly string[]
}

const defaultLines = [
  'export function Site() {',
  '  return (',
  '    <Presenca',
  '      clara',
  '      rapida',
  '      confiavel',
  '    />',
  '  )',
  '}',
]

/** Code editor frame — used for técnico/bastidores content. */
export function EditorMockup({
  filename = 'site.tsx',
  lines = defaultLines,
  tone = 'dark',
  children,
  className,
}: EditorMockupProps) {
  const dark = isDark(tone)

  return (
    <MockupShell tone={tone} className={className}>
      <MockupChrome tone={tone} center>
        <span className={cn(display.monoSm, dark ? 'text-white/45' : 'text-ink-400')}>
          {filename}
        </span>
      </MockupChrome>

      <div
        className={cn(
          'min-h-[240px] px-6 py-6',
          dark
            ? 'bg-gradient-to-b from-ink-950 to-ink-900'
            : 'bg-gradient-to-b from-surface-0 to-surface-50',
        )}
      >
        {children ?? (
          <pre className="flex flex-col gap-1.5 font-mono text-[15px] leading-[1.6]">
            {lines.map((line, index) => (
              <div key={`${index}-${line}`} className="flex gap-5">
                <span
                  className={cn(
                    'w-5 shrink-0 text-right tabular-nums',
                    dark ? 'text-white/25' : 'text-ink-300',
                  )}
                >
                  {index + 1}
                </span>
                <span className={dark ? 'text-white/80' : 'text-ink-800'}>
                  {line || ' '}
                </span>
              </div>
            ))}
          </pre>
        )}
      </div>
    </MockupShell>
  )
}
