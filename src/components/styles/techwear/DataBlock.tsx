import { cn } from '@/lib/cn'
import { display } from '@/design-system'

type DataBlockProps = {
  label: string
  value: string
  /** Extra rows rendered beneath the value */
  lines?: readonly string[]
  accent?: boolean
  align?: 'left' | 'right'
  className?: string
}

/** Label / value pair in the technical readout language of the HUD. */
export function DataBlock({
  label,
  value,
  lines,
  accent,
  align = 'left',
  className,
}: DataBlockProps) {
  return (
    <div
      className={cn(
        'flex flex-col gap-1.5',
        align === 'right' && 'items-end text-right',
        className,
      )}
    >
      <span className={cn(display.monoSm, 'text-white/55')}>{label}</span>
      <span
        className={cn(
          'font-display font-bold text-[34px] leading-[1] tracking-[-0.02em]',
          accent ? 'text-tech-pink' : 'text-white',
        )}
      >
        {value}
      </span>
      {lines?.map((line) => (
        <span key={line} className={cn(display.monoSm, 'text-white/70')}>
          {line}
        </span>
      ))}
    </div>
  )
}
