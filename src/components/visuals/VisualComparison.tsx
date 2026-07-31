import { cn } from '@/lib/cn'
import type { VisualProps } from './types'

type VisualComparisonProps = VisualProps & {
  leftLabel?: string
  rightLabel?: string
  leftNote?: string
  rightNote?: string
}

/** Side-by-side interface contrast — weak vs strong first impression. */
export function VisualComparison({
  className,
  leftLabel = 'Confuso',
  rightLabel = 'Claro',
  leftNote = 'Ruído visual',
  rightNote = 'Hierarquia',
  tone = 'dark',
}: VisualComparisonProps) {
  return (
    <div className={cn('grid grid-cols-2 gap-4', className)}>
      <Panel
        tone={tone}
        variant="weak"
        label={leftLabel}
        note={leftNote}
      />
      <Panel
        tone={tone}
        variant="strong"
        label={rightLabel}
        note={rightNote}
      />
    </div>
  )
}

function Panel({
  tone,
  variant,
  label,
  note,
}: {
  tone: 'dark' | 'light'
  variant: 'weak' | 'strong'
  label: string
  note: string
}) {
  const strong = variant === 'strong'
  return (
    <div
      className={cn(
        'flex flex-col gap-4 rounded-2xl border p-5',
        strong
          ? 'border-te-accent/40 bg-gradient-to-b from-te-accent/20 to-transparent'
          : tone === 'dark'
            ? 'border-white/8 bg-white/5'
            : 'border-black/8 bg-black/[0.03]',
      )}
    >
      <div className="flex flex-col gap-2">
        {strong ? (
          <>
            <div className="h-3 w-2/3 rounded-full bg-te-ink" />
            <div className="h-2 w-1/2 rounded-full bg-te-muted/60" />
            <div className="mt-2 h-8 w-28 rounded-full bg-te-accent" />
          </>
        ) : (
          <>
            <div className="h-2 w-full rounded-full bg-white/15" />
            <div className="h-2 w-4/5 rounded-full bg-white/10" />
            <div className="h-2 w-3/5 rounded-full bg-white/10" />
            <div className="mt-1 grid grid-cols-4 gap-1">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="h-6 rounded bg-white/8" />
              ))}
            </div>
          </>
        )}
      </div>
      <div>
        <p className="text-[27px] font-semibold tracking-[-0.02em] text-te-ink">
          {label}
        </p>
        <p className="mt-1 font-mono text-[13px] tracking-[0.12em] uppercase text-te-faint">
          {note}
        </p>
      </div>
    </div>
  )
}
