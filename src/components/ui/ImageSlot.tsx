import { cn } from '@/lib/cn'
import { display } from '@/design-system'

type ImageSlotProps = {
  /** Drop a file in /public and reference it, e.g. "/subject.png" */
  src?: string
  alt?: string
  /** Shown inside the placeholder while no image is set */
  hint?: string
  tone?: 'light' | 'dark'
  grayscale?: boolean
  className?: string
  imageClassName?: string
}

/**
 * Photo placeholder that still looks intentional when empty,
 * so a post can be composed and reviewed before the asset exists.
 *
 * Base classes deliberately omit `position` so callers stay free to
 * place the slot absolutely without the utilities fighting each other.
 */
export function ImageSlot({
  src,
  alt = '',
  hint = 'Image',
  tone = 'light',
  grayscale,
  className,
  imageClassName,
}: ImageSlotProps) {
  if (src) {
    return (
      <div className={cn('overflow-hidden', className)}>
        <img
          src={src}
          alt={alt}
          className={cn(
            'h-full w-full object-cover',
            grayscale && 'grayscale contrast-115',
            imageClassName,
          )}
        />
      </div>
    )
  }

  const isDark = tone === 'dark'

  return (
    <div
      className={cn(
        'flex items-center justify-center overflow-hidden',
        isDark
          ? 'bg-black/35 pattern-grid text-white/45'
          : 'bg-black/[0.055] pattern-paper text-black/35',
        className,
      )}
    >
      <span className={display.monoSm}>{hint}</span>
    </div>
  )
}
