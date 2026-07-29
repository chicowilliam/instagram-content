import { useMemo } from 'react'
import { cn } from '@/lib/cn'

type BarcodeProps = {
  /** Any string — the bar pattern is derived deterministically from it */
  seed?: string
  bars?: number
  height?: number
  className?: string
}

export function Barcode({
  seed = 'KIVO',
  bars = 52,
  height = 56,
  className,
}: BarcodeProps) {
  const widths = useMemo(() => {
    let state = 2166136261
    for (const char of seed) {
      state = (state ^ char.charCodeAt(0)) * 16777619
      state >>>= 0
    }
    return Array.from({ length: bars }, () => {
      state = (state * 1103515245 + 12345) >>> 0
      return 1 + (state % 4)
    })
  }, [seed, bars])

  return (
    <div
      className={cn('flex items-end gap-[2px]', className)}
      style={{ height }}
      aria-hidden
    >
      {widths.map((width, index) => (
        <span
          key={index}
          className="h-full bg-current"
          style={{ width }}
        />
      ))}
    </div>
  )
}
