import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'

export type AcidColor =
  | 'lime'
  | 'blue'
  | 'orange'
  | 'violet'
  | 'yellow'
  | 'pink'
  | 'white'
  | 'black'

const fills: Record<AcidColor, string> = {
  lime: 'bg-acid-lime text-acid-black',
  blue: 'bg-acid-blue text-white',
  orange: 'bg-acid-orange text-acid-black',
  violet: 'bg-acid-violet text-white',
  yellow: 'bg-acid-yellow text-acid-black',
  pink: 'bg-acid-pink text-acid-black',
  white: 'bg-white text-acid-black',
  black: 'bg-acid-black text-white',
}

type AcidTileProps = {
  children?: ReactNode
  color?: AcidColor
  /** Hard outline, as used on the darker tiles */
  outline?: boolean
  /** Removes the inner padding so media can bleed to the tile edges */
  bare?: boolean
  className?: string
}

export function AcidTile({
  children,
  color = 'white',
  outline,
  bare,
  className,
}: AcidTileProps) {
  return (
    <div
      className={cn(
        'relative flex flex-col overflow-hidden rounded-[18px]',
        bare ? 'p-0' : 'p-5',
        fills[color],
        outline && 'ring-2 ring-white/25',
        className,
      )}
    >
      {children}
    </div>
  )
}
