import { cn } from '@/lib/cn'
import type { VisualProps } from './types'

type CodeFragmentProps = VisualProps & {
  lines?: string[]
}

const defaults = [
  'interface Presence {',
  '  clarity: true',
  '  trust: "felt"',
  '  next: "contact"',
  '}',
]

/** Decorative code block — signals craft without becoming the message. */
export function CodeFragment({
  className,
  lines = defaults,
  tone = 'dark',
}: CodeFragmentProps) {
  return (
    <div
      className={cn(
        'overflow-hidden rounded-2xl border font-mono text-[15px] leading-[1.7]',
        tone === 'dark'
          ? 'border-te-border bg-black/40 text-te-muted'
          : 'border-black/8 bg-ink-950 text-white/70',
        className,
      )}
    >
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-2.5">
        <span className="size-2.5 rounded-full bg-[#ff5f57]" />
        <span className="size-2.5 rounded-full bg-[#febc2e]" />
        <span className="size-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-2 text-[12px] tracking-[0.14em] uppercase text-white/35">
          presence.ts
        </span>
      </div>
      <pre className="px-5 py-4">
        {lines.map((line, i) => (
          <div key={i} className="flex gap-4">
            <span className="w-4 shrink-0 text-right text-white/25">{i + 1}</span>
            <code>
              {line.includes('true') || line.includes('"') ? (
                <Highlighted line={line} />
              ) : (
                line
              )}
            </code>
          </div>
        ))}
      </pre>
    </div>
  )
}

function Highlighted({ line }: { line: string }) {
  const parts = line.split(/(".*?"|true)/g)
  return (
    <>
      {parts.map((part, i) => {
        if (part === 'true') {
          return (
            <span key={i} className="text-te-cyan">
              {part}
            </span>
          )
        }
        if (part.startsWith('"')) {
          return (
            <span key={i} className="text-te-accent">
              {part}
            </span>
          )
        }
        return <span key={i}>{part}</span>
      })}
    </>
  )
}
