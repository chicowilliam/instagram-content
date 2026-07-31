import { cn } from '@/lib/cn'
import { Eye, Heart, MousePointerClick } from 'lucide-react'
import type { ReactNode } from 'react'
import { techEditorial } from '@/design-system'
import { ConnectionLines } from './ConnectionLines'
import type { VisualProps } from './types'

export type DecisionStep = {
  label: string
  hint?: string
  icon?: ReactNode
}

type DecisionFlowProps = VisualProps & {
  steps?: DecisionStep[]
  emphasize?: number
}

const defaults: DecisionStep[] = [
  { label: 'Primeiro olhar', hint: 'Atenção', icon: <Eye strokeWidth={1.5} className="size-7" /> },
  { label: 'Sensação', hint: 'Confiança', icon: <Heart strokeWidth={1.5} className="size-7" /> },
  { label: 'Decisão', hint: 'Ação', icon: <MousePointerClick strokeWidth={1.5} className="size-7" /> },
]

/** Connected decision path with unequal visual weight. */
export function DecisionFlow({
  className,
  steps = defaults,
  emphasize = 1,
  tone = 'dark',
}: DecisionFlowProps) {
  return (
    <div className={cn('relative flex flex-col gap-5', className)}>
      <ConnectionLines className="absolute top-[28%] right-8 left-8 hidden h-px md:block" />
      <div className="relative grid grid-cols-3 items-end gap-3">
        {steps.map((step, index) => {
          const hot = index === emphasize
          const scale = hot
            ? 'min-h-[240px] -translate-y-2'
            : index === 0
              ? 'min-h-[168px]'
              : 'min-h-[196px]'
          return (
            <div
              key={step.label}
              className={cn(
                'relative flex flex-col justify-between rounded-[28px] border p-5',
                scale,
                hot
                  ? 'border-te-accent/50 bg-te-accent text-white shadow-[0_20px_50px_rgb(79_124_255_/_0.35)]'
                  : tone === 'dark'
                    ? 'border-te-border bg-te-elevated/90 text-te-ink'
                    : 'border-black/8 bg-white text-ink-900',
              )}
            >
              <div className="flex items-start justify-between gap-2">
                <span
                  className={cn(
                    'font-mono text-[42px] leading-none tracking-[-0.04em]',
                    hot ? 'text-white/40' : 'text-te-faint',
                  )}
                >
                  0{index + 1}
                </span>
                <span className={hot ? 'text-white' : 'text-te-accent'}>
                  {step.icon}
                </span>
              </div>
              <div className="flex flex-col gap-2">
                {step.hint ? (
                  <span
                    className={cn(
                      techEditorial.label,
                      hot ? 'text-white/55' : 'text-te-faint',
                    )}
                  >
                    {step.hint}
                  </span>
                ) : null}
                <p
                  className={cn(
                    'text-[27px] font-semibold tracking-[-0.02em]',
                    hot ? 'text-white' : tone === 'dark' ? 'text-te-ink' : 'text-ink-950',
                  )}
                >
                  {step.label}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
