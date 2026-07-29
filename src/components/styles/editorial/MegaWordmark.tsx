import { cn } from '@/lib/cn'
import { display } from '@/design-system'

type MegaWordmarkProps = {
  children: string
  /** Shrinks the type so long words still fit the canvas width */
  size?: number
  className?: string
}

/**
 * Full-bleed grotesque wordmark. Sits behind the subject photo so the
 * silhouette breaks the letterforms — the signature editorial move.
 */
export function MegaWordmark({ children, size, className }: MegaWordmarkProps) {
  return (
    <span
      className={cn(
        display.wordmark,
        'block w-full text-center whitespace-nowrap select-none text-ink-950',
        className,
      )}
      style={size ? { fontSize: size } : undefined}
    >
      {children}
    </span>
  )
}
