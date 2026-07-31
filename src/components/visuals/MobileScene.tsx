import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'
import { IPhoneMockup } from '@/components/mockups'
import { GlowSpot } from './GlowSpot'
import type { VisualProps } from './types'

type MobileSceneProps = VisualProps & {
  children?: ReactNode
  withGlow?: boolean
}

/** Phone frame scene for story compositions and mobile metaphors. */
export function MobileScene({
  className,
  children,
  withGlow = true,
  tone = 'dark',
}: MobileSceneProps) {
  return (
    <div className={cn('relative inline-flex', className)}>
      {withGlow ? (
        <GlowSpot
          color="violet"
          size={260}
          className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      ) : null}
      <IPhoneMockup
        tone={tone === 'dark' ? 'dark' : 'light'}
        screenTone="light"
        className="relative"
      >
        {children}
      </IPhoneMockup>
    </div>
  )
}
