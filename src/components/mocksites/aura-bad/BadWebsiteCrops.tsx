import type { CSSProperties, ReactNode } from 'react'
import { cn } from '@/lib/cn'
import { typeScale } from '@/design-system'
import { AnnotationMark, CropMarks } from '@/components/art-direction/marks'
import { AuraBadHero } from './AuraBadHero'
import { AuraBadContact } from './AuraBadContact'
import { AuraBadPromo } from './AuraBadPromo'

/**
 * BadWebsiteFrame — moldura Swiss Editorial para qualquer recorte de site ruim.
 *
 * Gestos: barra vermelha overlay (Protect), sombra dura, ângulo, crop marks.
 * Sem grayscale / opacity fraca — o print precisa ter presença.
 */
export function BadWebsiteFrame({
  children,
  width = 880,
  angle = -4,
  showCropMarks = true,
  redBar = true,
  chrome = true,
  url = 'auraestetica.com.br',
  className,
  style,
}: {
  children: ReactNode
  width?: number
  angle?: number
  showCropMarks?: boolean
  redBar?: boolean
  chrome?: boolean
  url?: string
  className?: string
  style?: CSSProperties
}) {
  return (
    <div
      className={cn('relative', className)}
      style={{
        width,
        transform: angle ? `rotate(${angle}deg)` : undefined,
        ...style,
      }}
    >
      <span
        aria-hidden
        className="absolute top-4 -right-3 bottom-[-14px] left-5 -z-10 bg-editorial-ink"
      />

      <div className="relative overflow-hidden border-[3px] border-editorial-ink bg-white shadow-[0_20px_50px_rgb(12_12_12/0.16)]">
        {chrome ? (
          <div className="flex items-center gap-3 border-b border-editorial-ink/15 bg-[#f3f0eb] px-4 py-2.5">
            <div className="flex gap-1.5">
              <span className="size-2.5 rounded-full bg-editorial-ink/25" />
              <span className="size-2.5 rounded-full bg-editorial-ink/25" />
              <span className="size-2.5 rounded-full bg-editorial-ink/25" />
            </div>
            <span className={cn(typeScale.mono.xs, 'truncate text-editorial-ink/45')}>
              {url}
            </span>
          </div>
        ) : null}

        <div className="relative">{children}</div>

        {redBar ? (
          <span
            aria-hidden
            className="pointer-events-none absolute top-0 bottom-0 left-[38%] w-[72px] bg-signal-red mix-blend-multiply opacity-55"
          />
        ) : null}

        {showCropMarks ? (
          <CropMarks inset={10} className="pointer-events-none z-20" />
        ) : null}
      </div>
    </div>
  )
}

/** Hero da Aura — crop editorial (nav + headline + CTAs). */
export function BadWebsiteHeroCrop({
  width = 880,
  angle = -4,
  focus = 'ctas',
  className,
}: {
  width?: number
  angle?: number
  focus?: 'full' | 'ctas' | 'nav'
  className?: string
}) {
  const crop: Record<string, string> = {
    full: 'h-auto',
    ctas: 'max-h-[420px]',
    nav: 'max-h-[280px]',
  }

  return (
    <BadWebsiteFrame width={width} angle={angle} className={className}>
      <div className={cn('overflow-hidden', crop[focus])}>
        <AuraBadHero />
      </div>
    </BadWebsiteFrame>
  )
}

/** Formulário/contato da Aura. */
export function BadWebsiteContactCrop({
  width = 760,
  angle = 3,
  className,
}: {
  width?: number
  angle?: number
  className?: string
}) {
  return (
    <BadWebsiteFrame
      width={width}
      angle={angle}
      redBar={false}
      url="auraestetica.com.br/contato"
      className={className}
    >
      <AuraBadContact />
    </BadWebsiteFrame>
  )
}

/** Promo/sobre — asset auxiliar para comparação futura. */
export function BadWebsitePromoCrop({
  width = 760,
  angle = -2,
  className,
}: {
  width?: number
  angle?: number
  className?: string
}) {
  return (
    <BadWebsiteFrame
      width={width}
      angle={angle}
      redBar={false}
      url="auraestetica.com.br"
      className={className}
    >
      <div className="max-h-[360px] overflow-hidden">
        <AuraBadPromo />
      </div>
    </BadWebsiteFrame>
  )
}

export type BadAnnotation = {
  label: string
  direction?: 'right' | 'left' | 'down'
  length?: number
  className?: string
}

const defaultHeroAnnotations: BadAnnotation[] = [
  {
    label: 'excesso de opções',
    length: 140,
    className: 'absolute -top-1 left-10 z-30',
  },
  {
    label: 'hierarquia fraca',
    direction: 'left',
    length: 130,
    className: 'absolute top-[150px] -right-2 z-30',
  },
  {
    label: 'CTA competindo',
    length: 150,
    className: 'absolute top-[280px] left-6 z-30',
  },
  {
    label: 'estética inconsistente',
    direction: 'left',
    length: 160,
    className: 'absolute bottom-8 right-8 z-30',
  },
]

/**
 * AnnotatedBadWebsite — crop + anotações Swiss.
 * Default: hero da Aura com os 4 diagnósticos do Slide 2.
 */
export function AnnotatedBadWebsite({
  variant = 'hero',
  width = 900,
  angle = -5,
  annotations = defaultHeroAnnotations,
  className,
}: {
  variant?: 'hero' | 'contact' | 'promo'
  width?: number
  angle?: number
  annotations?: BadAnnotation[]
  className?: string
}) {
  return (
    <div className={cn('relative', className)}>
      {variant === 'hero' ? (
        <BadWebsiteHeroCrop width={width} angle={angle} focus="ctas" />
      ) : null}
      {variant === 'contact' ? (
        <BadWebsiteContactCrop width={width} angle={angle} />
      ) : null}
      {variant === 'promo' ? (
        <BadWebsitePromoCrop width={width} angle={angle} />
      ) : null}

      {annotations.map((item) => (
        <AnnotationMark
          key={item.label}
          label={item.label}
          direction={item.direction}
          length={item.length}
          className={item.className}
        />
      ))}

      <span
        aria-hidden
        className="absolute -bottom-3 -left-3 z-30 size-5 bg-signal-red"
      />
    </div>
  )
}
