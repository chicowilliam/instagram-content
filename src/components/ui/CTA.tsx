import { cn } from '@/lib/cn'
import { typography } from '@/design-system'

type CTAProps = {
  label: string
  hint?: string
  className?: string
}

export function CTA({ label, hint, className }: CTAProps) {
  return (
    <div className={cn('flex flex-col items-start gap-3', className)}>
      <div
        className={cn(
          'inline-flex items-center rounded-full bg-ink-950 px-8 py-4 text-white shadow-soft',
          typography.bodySm,
          'font-medium tracking-[-0.01em]',
        )}
      >
        {label}
      </div>
      {hint ? (
        <p className={cn(typography.bodySm, 'text-ink-400')}>{hint}</p>
      ) : null}
    </div>
  )
}
