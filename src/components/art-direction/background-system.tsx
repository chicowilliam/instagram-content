import type { CSSProperties, ReactNode } from 'react'
import { cn } from '@/lib/cn'
import { typeScale } from '@/design-system'
import type { ArtTone } from './types'
import { CropMarks, PaperGrain } from './marks'

const toneRule: Record<ArtTone, string> = {
  paper: 'bg-editorial-ink/12',
  ink: 'bg-white/12',
  cobalt: 'bg-white/16',
}

const toneText: Record<ArtTone, string> = {
  paper: 'text-editorial-ink',
  ink: 'text-white',
  cobalt: 'text-white',
}

/** Camada 2: textura de papel local, quase invisível. */
export function PaperTexture({
  strength = 0.045,
  className,
}: {
  strength?: number
  className?: string
}) {
  return <PaperGrain strength={strength} className={className} />
}

/** Camada 2: grão neutro para superfícies ink/cobalt. */
export function GrainOverlay({
  strength = 0.035,
  className,
}: {
  strength?: number
  className?: string
}) {
  return (
    <div
      aria-hidden
      className={cn('pointer-events-none absolute inset-0 texture-noise mix-blend-soft-light', className)}
      style={{ opacity: strength }}
    />
  )
}

/** Camada 2: ruído de fibra mais largo, sem URL externa. */
export function NoiseOverlay({
  strength = 0.025,
  className,
}: {
  strength?: number
  className?: string
}) {
  return (
    <svg
      aria-hidden
      className={cn('pointer-events-none absolute inset-0 size-full', className)}
      style={{ opacity: strength }}
    >
      <filter id="editorial-noise">
        <feTurbulence baseFrequency="0.32" numOctaves="2" seed="17" stitchTiles="stitch" />
        <feColorMatrix type="saturate" values="0" />
      </filter>
      <rect width="100%" height="100%" filter="url(#editorial-noise)" />
    </svg>
  )
}

/** Camada 2 completa: combina fibra fina e imperfeição ampla. */
export function EditorialTexture({
  tone = 'paper',
  className,
}: {
  tone?: ArtTone
  className?: string
}) {
  return (
    <div aria-hidden className={cn('pointer-events-none absolute inset-0', className)}>
      {tone === 'paper' ? <PaperTexture /> : <GrainOverlay />}
      <NoiseOverlay strength={tone === 'paper' ? 0.018 : 0.028} />
    </div>
  )
}

/** Camada 3: grid editorial de 12 colunas, sem aparência de dashboard. */
export function EditorialGrid({
  tone = 'paper',
  columns = 12,
  inset = 64,
  className,
}: {
  tone?: ArtTone
  columns?: number
  inset?: number
  className?: string
}) {
  return (
    <div
      aria-hidden
      className={cn('pointer-events-none absolute top-0 bottom-0 opacity-[0.32]', className)}
      style={{
        left: inset,
        right: inset,
        backgroundImage: `repeating-linear-gradient(to right, currentColor 0 1px, transparent 1px calc(100% / ${columns}))`,
        color: tone === 'paper' ? 'rgb(12 12 12 / 0.09)' : 'rgb(255 255 255 / 0.09)',
      }}
    />
  )
}

/** Camada 3: cantos internos que marcam a área segura. */
export function CornerMarks({
  tone = 'paper',
  inset = 52,
  className,
}: {
  tone?: ArtTone
  inset?: number
  className?: string
}) {
  const color = tone === 'paper' ? 'border-editorial-ink/20' : 'border-white/20'
  return (
    <div aria-hidden className={cn('pointer-events-none absolute', className)} style={{ inset }}>
      {[
        'top-0 left-0 border-t border-l',
        'top-0 right-0 border-t border-r',
        'bottom-0 left-0 border-b border-l',
        'bottom-0 right-0 border-b border-r',
      ].map((position) => (
        <span key={position} className={cn('absolute size-4', color, position)} />
      ))}
    </div>
  )
}

/** Camada 3: rótulo de seção sem contêiner. */
export function SectionLabel({
  index,
  children,
  tone = 'paper',
  className,
}: {
  index: string
  children: ReactNode
  tone?: ArtTone
  className?: string
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-3',
        typeScale.mono.xs,
        tone === 'paper' ? 'text-editorial-ink/58' : 'text-white/58',
        className,
      )}
    >
      <span className={tone === 'paper' ? 'text-signal-red' : 'text-neon-lime'}>{index}</span>
      <span aria-hidden className={cn('h-px w-10', toneRule[tone])} />
      {children}
    </span>
  )
}

/** Camada 3: linha do sistema de rodapé. */
export function FooterRule({
  tone = 'paper',
  className,
}: {
  tone?: ArtTone
  className?: string
}) {
  return <span aria-hidden className={cn('block h-px w-full', toneRule[tone], className)} />
}

/** Camada 3: cruzes de registro de impressão. */
export function RegistrationMarks({
  tone = 'paper',
  className,
}: {
  tone?: ArtTone
  className?: string
}) {
  const positions = ['top-[118px] right-[38px]', 'bottom-[118px] left-[38px]']
  return (
    <>
      {positions.map((position) => (
        <svg
          key={position}
          aria-hidden
          width="22"
          height="22"
          viewBox="0 0 22 22"
          className={cn(
            'pointer-events-none absolute opacity-35',
            toneText[tone],
            position,
            className,
          )}
        >
          <circle cx="11" cy="11" r="6" fill="none" stroke="currentColor" />
          <path d="M11 0v22M0 11h22" stroke="currentColor" />
        </svg>
      ))}
    </>
  )
}

/** Camada 4: painel de contraste que ancora uma região do canvas. */
export function AmbientPanel({
  className,
  color = 'bg-editorial-ink/[0.035]',
  style,
}: {
  className?: string
  color?: string
  style?: CSSProperties
}) {
  return <div aria-hidden className={cn('pointer-events-none absolute', color, className)} style={style} />
}

/** Camada 4: palavra fantasma, sempre secundária à mensagem. */
export function GhostWord({
  children,
  tone = 'paper',
  angle = 0,
  className,
}: {
  children: string
  tone?: ArtTone
  angle?: number
  className?: string
}) {
  return (
    <span
      aria-hidden
      className={cn(
        'pointer-events-none absolute select-none whitespace-nowrap font-display text-[190px] font-black leading-none tracking-[-0.06em] uppercase',
        tone === 'paper' ? 'text-editorial-ink/[0.035]' : 'text-white/[0.045]',
        className,
      )}
      style={{ transform: angle ? `rotate(${angle}deg)` : undefined }}
    >
      {children}
    </span>
  )
}

/** Camada 4: faixa editorial chapada ou translúcida. */
export function EditorialBand({
  orientation = 'horizontal',
  color = 'bg-signal-red',
  className,
}: {
  orientation?: 'horizontal' | 'vertical'
  color?: string
  className?: string
}) {
  return (
    <span
      aria-hidden
      className={cn(
        'pointer-events-none absolute',
        orientation === 'horizontal' ? 'h-3' : 'w-3',
        color,
        className,
      )}
    />
  )
}

/** Camada 4: sombra projetada separada do objeto, com blur editorial. */
export function ShadowPlane({
  className,
  style,
}: {
  className?: string
  style?: CSSProperties
}) {
  return (
    <div
      aria-hidden
      className={cn(
        'pointer-events-none absolute bg-editorial-ink/16 blur-[22px]',
        className,
      )}
      style={style}
    />
  )
}

/** Camada 4: forma grande cortada pelas bordas. */
export function ShapeCut({
  shape = 'circle',
  color = 'bg-electric-cobalt/[0.08]',
  className,
}: {
  shape?: 'circle' | 'wedge' | 'arch'
  color?: string
  className?: string
}) {
  const shapeClass = {
    circle: 'rounded-full',
    wedge: '[clip-path:polygon(0_0,100%_0,100%_100%)]',
    arch: 'rounded-t-full',
  }[shape]
  return <div aria-hidden className={cn('pointer-events-none absolute', shapeClass, color, className)} />
}

/** Camada 4: bloco de pôster reto para criar zonas de contraste. */
export function PosterBlock({
  children,
  className,
}: {
  children?: ReactNode
  className?: string
}) {
  return <div className={cn('absolute', className)}>{children}</div>
}

/** Camada 4: numeral editorial desbotado. */
export function FadedNumber({
  children,
  tone = 'paper',
  className,
}: {
  children: string
  tone?: ArtTone
  className?: string
}) {
  return (
    <span
      aria-hidden
      className={cn(
        'pointer-events-none absolute font-display text-[240px] font-black leading-none tracking-[-0.06em]',
        tone === 'paper' ? 'text-editorial-ink/[0.04]' : 'text-white/[0.05]',
        className,
      )}
    >
      {children}
    </span>
  )
}

/** Camada 4: acento pequeno e controlado. */
export function BackgroundAccent({
  color = 'bg-signal-red',
  className,
}: {
  color?: string
  className?: string
}) {
  return <span aria-hidden className={cn('pointer-events-none absolute size-3', color, className)} />
}

/**
 * Sistema de fundo em quatro camadas:
 * base (no SlideShell) → textura → estrutura → atmosfera.
 */
export function BackgroundSystem({
  tone = 'paper',
  ghostWord,
  section = 'POST 001',
  atmosphere,
  children,
  className,
}: {
  tone?: ArtTone
  ghostWord?: string
  section?: string
  atmosphere?: ReactNode
  children?: ReactNode
  className?: string
}) {
  return (
    <div aria-hidden className={cn('pointer-events-none absolute inset-0 overflow-hidden', className)}>
      {/* 2 · textura */}
      <EditorialTexture tone={tone} />

      {/* 3 · estrutura */}
      <EditorialGrid tone={tone} />
      <CropMarks tone={tone} inset={30} />
      <CornerMarks tone={tone} />
      <RegistrationMarks tone={tone} />
      {section ? (
        <span
          className={cn(
            'absolute top-[104px] left-[64px]',
            typeScale.mono.xs,
            tone === 'paper' ? 'text-editorial-ink/28' : 'text-white/28',
          )}
        >
          {section}
        </span>
      ) : null}

      {/* 4 · atmosfera */}
      {ghostWord ? <GhostWord tone={tone} className="-right-10 bottom-[150px]">{ghostWord}</GhostWord> : null}
      {atmosphere}
      {children}
    </div>
  )
}
