import { cn } from '@/lib/cn'

type StickerTextProps = {
  children: string
  size?: number
  /** Heavy black stroke + hard drop shadow */
  weight?: 'heavy' | 'light'
  className?: string
}

/** Chunky outlined display type — the sticker layer of the acid style. */
export function StickerText({
  children,
  size = 56,
  weight = 'heavy',
  className,
}: StickerTextProps) {
  return (
    <span
      className={cn(
        'font-display font-black uppercase leading-[0.9] tracking-[-0.02em]',
        weight === 'heavy' ? 'sticker-outline' : 'sticker-outline-light',
        className,
      )}
      style={{ fontSize: size }}
    >
      {children}
    </span>
  )
}
