import { useState, type ReactNode } from 'react'
import { cn } from '@/lib/cn'
import { AuraBadHero } from './AuraBadHero'
import { AuraGoodHero } from './AuraGoodHero'

/**
 * Assets de comparação Aura Estética.
 *
 * Preferência: PNGs em /assets/comparisons/
 * Fallback: componentes React da mesma empresa (nunca Casa Nôa).
 */

export const AURA_BAD_HERO_SRC = '/assets/comparisons/aura-estetica-bad-hero.png'
export const AURA_GOOD_HERO_SRC = '/assets/comparisons/aura-estetica-good-hero.png'

function ShotImage({
  src,
  fallback,
  alt,
  className,
}: {
  src: string
  fallback: ReactNode
  alt: string
  className?: string
}) {
  const [mode, setMode] = useState<'img' | 'fallback'>('img')

  if (mode === 'fallback') {
    return <div className={className}>{fallback}</div>
  }

  return (
    <img
      src={src}
      alt={alt}
      className={cn('block h-auto w-full object-cover object-top', className)}
      onError={() => setMode('fallback')}
    />
  )
}

/** Moldura de browser simples — sem colagem, sombra discreta, ângulo ≤ 2°. */
export function ComparisonBrowser({
  children,
  url,
  width,
  angle = 0,
  border = 'border-editorial-ink',
  muted = false,
  className,
}: {
  children: ReactNode
  url: string
  width: number
  angle?: number
  border?: string
  muted?: boolean
  className?: string
}) {
  return (
    <div
      className={cn(
        'overflow-hidden border-[3px] bg-white shadow-[0_12px_32px_rgb(12_12_12/0.12)]',
        border,
        muted && 'saturate-[0.55]',
        className,
      )}
      style={{
        width,
        transform: angle ? `rotate(${angle}deg)` : undefined,
      }}
    >
      <div className="flex items-center gap-3 border-b border-editorial-ink/10 bg-[#f4f1ec] px-4 py-2">
        <div className="flex gap-1.5">
          <span className="size-2.5 rounded-full bg-editorial-ink/20" />
          <span className="size-2.5 rounded-full bg-editorial-ink/20" />
          <span className="size-2.5 rounded-full bg-editorial-ink/20" />
        </div>
        <span className="truncate font-mono text-[16px] tracking-[0.08em] text-editorial-ink/45 uppercase">
          {url}
        </span>
      </div>
      <div className="relative overflow-hidden">{children}</div>
    </div>
  )
}

export function AuraBadHeroShot({
  width = 860,
  angle = -1,
  className,
}: {
  width?: number
  angle?: number
  className?: string
}) {
  return (
    <ComparisonBrowser
      url="auraestetica.com.br"
      width={width}
      angle={angle}
      border="border-signal-red"
      muted
      className={className}
    >
      <div className="max-h-[480px] overflow-hidden">
        <ShotImage
          src={AURA_BAD_HERO_SRC}
          alt="Aura Estética — hero improvisado"
          fallback={<AuraBadHero />}
        />
      </div>
    </ComparisonBrowser>
  )
}

export function AuraGoodHeroShot({
  width = 860,
  angle = 1,
  className,
}: {
  width?: number
  angle?: number
  className?: string
}) {
  return (
    <ComparisonBrowser
      url="auraestetica.com.br"
      width={width}
      angle={angle}
      border="border-editorial-ink"
      className={className}
    >
      <div className="max-h-[480px] overflow-hidden">
        <ShotImage
          src={AURA_GOOD_HERO_SRC}
          alt="Aura Estética — hero intencional"
          fallback={<AuraGoodHero />}
        />
      </div>
    </ComparisonBrowser>
  )
}
