import { cn } from '@/lib/cn'
import type { VisualProps } from './types'

type DecorativeArrowProps = VisualProps & {
  label?: string
  length?: number
}

/** Directional cue toward CTA / next action. */
export function DecorativeArrow({
  className,
  label,
  length = 160,
}: DecorativeArrowProps) {
  return (
    <div className={cn('inline-flex flex-col items-start gap-2', className)}>
      {label ? (
        <span className="font-mono text-[13px] tracking-[0.16em] uppercase text-te-faint">
          {label}
        </span>
      ) : null}
      <svg
        width={length}
        height="28"
        viewBox={`0 0 ${length} 28`}
        fill="none"
        aria-hidden
      >
        <path
          d={`M2 14 H${length - 18}`}
          stroke="currentColor"
          strokeWidth="2"
          className="text-te-accent"
        />
        <path
          d={`M${length - 28} 4 L${length - 4} 14 L${length - 28} 24`}
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
          className="text-te-accent"
        />
      </svg>
    </div>
  )
}
