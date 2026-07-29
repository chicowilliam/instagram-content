import { cn } from '@/lib/cn'

type TechTitleProps = {
  children: string
  size?: number
  className?: string
}

/**
 * Wide technical headline with the angled accent wedge tucked into
 * the counter of the type.
 */
export function TechTitle({ children, size = 150, className }: TechTitleProps) {
  return (
    <div className={cn('relative inline-flex items-start', className)}>
      <span
        className="font-display font-black uppercase leading-[0.82] tracking-[-0.03em] text-white"
        style={{ fontSize: size }}
      >
        {children}
      </span>
      <span
        className="absolute bg-tech-yellow"
        style={{
          width: size * 0.14,
          height: size * 0.14,
          left: size * 0.52,
          bottom: size * 0.06,
          clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
        }}
      />
    </div>
  )
}
