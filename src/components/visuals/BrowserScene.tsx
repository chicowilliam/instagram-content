import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'
import { BrowserMockup } from '@/components/mockups'
import { GlowSpot } from './GlowSpot'
import type { VisualProps } from './types'

type BrowserSceneProps = VisualProps & {
  children?: ReactNode
  url?: string
  rotate?: number
  withGlow?: boolean
}

/** Browser + glow + tilt — metaphor for “quality perceived before reading”. */
export function BrowserScene({
  className,
  children,
  url = 'suaempresa.com',
  rotate = -8,
  withGlow = true,
  tone = 'dark',
}: BrowserSceneProps) {
  return (
    <div className={cn('relative', className)}>
      {withGlow ? (
        <GlowSpot
          color="accent"
          size={380}
          className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      ) : null}
      <div
        className="relative drop-shadow-[0_36px_48px_rgb(0_0_0_/_0.5)]"
        style={{ transform: `perspective(1200px) rotateY(${rotate}deg) rotateX(4deg)` }}
      >
        <BrowserMockup
          url={url}
          tone={tone === 'dark' ? 'dark' : 'light'}
          className="w-full"
        >
          {children ?? <PremiumSiteSkeleton />}
        </BrowserMockup>
      </div>
    </div>
  )
}

function PremiumSiteSkeleton() {
  return (
    <div className="flex flex-col gap-4 p-5">
      <div className="flex items-center justify-between">
        <div className="h-2.5 w-20 rounded-full bg-te-accent/80" />
        <div className="flex gap-2">
          <div className="h-2 w-10 rounded-full bg-white/15" />
          <div className="h-2 w-10 rounded-full bg-white/15" />
          <div className="h-2 w-10 rounded-full bg-white/15" />
        </div>
      </div>
      <div className="mt-2 h-8 w-3/4 rounded-md bg-white/90" />
      <div className="h-3 w-1/2 rounded-full bg-white/25" />
      <div className="mt-2 grid grid-cols-3 gap-3">
        <div className="h-16 rounded-xl bg-te-accent/25 ring-1 ring-white/10" />
        <div className="h-16 rounded-xl bg-te-violet/20 ring-1 ring-white/10" />
        <div className="h-16 rounded-xl bg-te-cyan/15 ring-1 ring-white/10" />
      </div>
      <div className="mt-1 h-9 w-36 rounded-full bg-te-accent" />
    </div>
  )
}
