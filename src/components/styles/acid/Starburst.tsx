import { cn } from '@/lib/cn'

type StarburstProps = {
  size?: number
  points?: number
  className?: string
}

/** Spiky vector burst used as a graphic accent on the loud tiles. */
export function Starburst({ size = 120, points = 12, className }: StarburstProps) {
  const outer = 50
  const inner = 19
  const coords = Array.from({ length: points * 2 }, (_, i) => {
    const radius = i % 2 === 0 ? outer : inner
    const angle = (Math.PI * i) / points - Math.PI / 2
    return `${50 + radius * Math.cos(angle)},${50 + radius * Math.sin(angle)}`
  }).join(' ')

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={cn('shrink-0', className)}
      aria-hidden
    >
      <polygon points={coords} fill="currentColor" />
    </svg>
  )
}
