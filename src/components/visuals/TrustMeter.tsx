import { cn } from '@/lib/cn'
import { techEditorial } from '@/design-system'
import type { VisualProps } from './types'

type TrustMeterProps = VisualProps & {
  label?: string
  value?: number
  max?: number
}

/** Confidence gauge — metaphor for trust perceived in seconds. */
export function TrustMeter({
  className,
  label = 'Confiança',
  value = 92,
  max = 100,
  tone = 'dark',
}: TrustMeterProps) {
  const pct = Math.max(0, Math.min(100, (value / max) * 100))

  return (
    <div
      className={cn(
        'flex flex-col gap-4 rounded-2xl border p-6',
        tone === 'dark'
          ? 'border-te-border bg-te-elevated/80'
          : 'border-black/8 bg-white/90',
        className,
      )}
    >
      <div className="flex items-end justify-between gap-4">
        <span
          className={cn(
            techEditorial.label,
            tone === 'dark' ? 'text-te-faint' : 'text-ink-400',
          )}
        >
          {label}
        </span>
        <span
          className={cn(
            'text-[48px] font-semibold tracking-[-0.04em]',
            tone === 'dark' ? 'text-te-ink' : 'text-ink-950',
          )}
        >
          {value}
          <span className="text-[22px] text-te-accent">%</span>
        </span>
      </div>
      <div
        className={cn(
          'h-3 overflow-hidden rounded-full',
          tone === 'dark' ? 'bg-white/10' : 'bg-black/8',
        )}
      >
        <div
          className="h-full rounded-full bg-gradient-to-r from-te-accent via-te-violet to-te-cyan"
          style={{ width: `${pct}%` }}
        />
      </div>
      <div className="flex justify-between font-mono text-[12px] tracking-[0.14em] uppercase text-te-faint">
        <span>0</span>
        <span>Leitura em 3s</span>
        <span>{max}</span>
      </div>
    </div>
  )
}
