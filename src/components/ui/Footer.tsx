import { cn } from '@/lib/cn'
import { typography } from '@/design-system'

type FooterProps = {
  brand: string
  handle?: string
  className?: string
}

export function Footer({ brand, handle, className }: FooterProps) {
  return (
    <footer
      className={cn(
        'mt-auto flex items-center justify-between gap-4 border-t border-surface-200/80 pt-6',
        className,
      )}
    >
      <span className={cn(typography.bodySm, 'font-medium text-ink-800')}>
        {brand}
      </span>
      {handle ? (
        <span className={cn(typography.caption, 'text-ink-400')}>{handle}</span>
      ) : null}
    </footer>
  )
}
