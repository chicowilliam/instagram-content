import { cn } from '@/lib/cn'
import { display } from '@/design-system'
import { ImageSlot } from '@/components/ui'

type CategoryItem = {
  label: string
  caption: string
  image?: string
}

type CategoryStripProps = {
  items: readonly CategoryItem[]
  className?: string
}

/** Inverted black band with thumbnail + label pairs. */
export function CategoryStrip({ items, className }: CategoryStripProps) {
  return (
    <div
      className={cn(
        'flex items-stretch gap-10 bg-ink-950 px-12 py-10 text-white',
        className,
      )}
    >
      {items.map((item) => (
        <div key={item.label} className="flex flex-1 items-center gap-5">
          <ImageSlot
            src={item.image}
            hint=""
            tone="dark"
            grayscale
            className="h-[124px] w-[92px] shrink-0"
          />
          <div className="flex flex-col gap-2">
            <span className={cn(display.mono, 'text-white tracking-[0.24em]')}>
              {item.label}
            </span>
            <span className="text-[16px] leading-[1.4] text-white/55">
              {item.caption}
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}
