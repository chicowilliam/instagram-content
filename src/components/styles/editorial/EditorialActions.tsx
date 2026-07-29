import { cn } from '@/lib/cn'
import { display } from '@/design-system'

type EditorialActionsProps = {
  primary: string
  secondary?: string
  className?: string
}

/** Solid slab button paired with an underlined text link. */
export function EditorialActions({
  primary,
  secondary,
  className,
}: EditorialActionsProps) {
  return (
    <div className={cn('flex items-center gap-10', className)}>
      <span
        className={cn(
          display.monoSm,
          'bg-ink-950 px-9 py-5 text-white tracking-[0.22em]',
        )}
      >
        {primary}
      </span>
      {secondary ? (
        <span
          className={cn(
            display.monoSm,
            'border-b border-ink-950/60 pb-1.5 text-ink-900 tracking-[0.22em]',
          )}
        >
          {secondary}
        </span>
      ) : null}
    </div>
  )
}
