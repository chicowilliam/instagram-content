import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'
import { typography } from '@/design-system'
import { IconBox } from './IconBox'

type FeatureCardProps = {
  title: string
  description: string
  icon?: ReactNode
  className?: string
}

export function FeatureCard({
  title,
  description,
  icon,
  className,
}: FeatureCardProps) {
  return (
    <div
      className={cn(
        'flex flex-col gap-5 rounded-[24px] border border-surface-200 bg-surface-0/80 p-7 shadow-soft',
        className,
      )}
    >
      {icon ? <IconBox tone="outline">{icon}</IconBox> : null}
      <div className="flex flex-col gap-2">
        <h3 className={cn(typography.h3, 'text-ink-950')}>{title}</h3>
        <p className={cn(typography.bodySm, 'text-ink-500 text-balance')}>
          {description}
        </p>
      </div>
    </div>
  )
}
