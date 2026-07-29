import { cn } from '@/lib/cn'
import { display } from '@/design-system'

type MeterBarProps = {
  label: string
  /** 0 to 10 */
  value: number
  segments?: number
  className?: string
}

export function MeterBar({
  label,
  value,
  segments = 10,
  className,
}: MeterBarProps) {
  return (
    <div className={cn('flex items-center gap-3', className)}>
      <span className={cn(display.monoSm, 'w-10 text-white/70')}>{label}</span>
      <div className="flex gap-[3px]">
        {Array.from({ length: segments }, (_, index) => (
          <span
            key={index}
            className={cn(
              'h-2.5 w-2.5',
              index < value ? 'bg-tech-pink' : 'bg-white/20',
            )}
          />
        ))}
      </div>
    </div>
  )
}
