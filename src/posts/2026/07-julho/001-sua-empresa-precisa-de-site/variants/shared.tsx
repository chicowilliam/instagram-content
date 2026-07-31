import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'
import { techEditorial } from '@/design-system'

export type CoverContent = {
  badge: string
  title: string
  subtitle: string
  brand: string
  handle: string
}

export function CoverShell({
  children,
  className,
  padding = 80,
}: {
  children: ReactNode
  className?: string
  padding?: number
}) {
  return (
    <div
      className={cn(
        'relative flex h-full w-full flex-col overflow-hidden',
        className,
      )}
      style={{ padding }}
    >
      {children}
    </div>
  )
}

export function CoverBadge({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <span
      className={cn(
        'inline-flex w-fit items-center rounded-full border px-4 py-2',
        techEditorial.label,
        className,
      )}
    >
      {children}
    </span>
  )
}

export function CoverSignature({
  brand,
  handle,
  className,
}: {
  brand: string
  handle: string
  className?: string
}) {
  return (
    <div
      className={cn(
        'flex items-center justify-between border-t pt-6',
        techEditorial.label,
        className,
      )}
    >
      <span>{brand}</span>
      <span>{handle}</span>
    </div>
  )
}

export function CarouselCue({ className }: { className?: string }) {
  return (
    <div className={cn('flex items-center gap-2', className)}>
      <span className="size-2 rounded-full bg-te-accent" />
      <span className="size-2 rounded-full bg-white/25" />
      <span className="size-2 rounded-full bg-white/25" />
      <span className="size-2 rounded-full bg-white/25" />
      <span className="size-2 rounded-full bg-white/25" />
      <span className="ml-2 font-mono text-[12px] tracking-[0.16em] uppercase text-te-faint">
        01 / 05
      </span>
    </div>
  )
}
