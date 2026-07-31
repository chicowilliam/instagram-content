import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'
import { typeScale } from '@/design-system'
import { Barcode } from '@/components/styles/techwear/Barcode'
import type { ArtTone } from './types'

/**
 * Regra dura desta camada: toda etiqueta técnica carrega **dado real** da peça —
 * número do slide, formato do canvas, id do post, data, modo de arte.
 *
 * Serial inventado, coordenada geográfica falsa e percentual fictício são
 * proibidos pelo brief. A microtipografia é ficha técnica, não enfeite.
 */

const toneText: Record<ArtTone, string> = {
  paper: 'text-editorial-ink/65',
  ink: 'text-white/60',
  cobalt: 'text-white/75',
}

/**
 * TechnicalLabel — etiqueta mono com marcador.
 *
 * Função na direção: são as dezenas de micro-labels que cercam o objeto no
 * pôster NX-07 e dão a sensação de documento técnico.
 */
export function TechnicalLabel({
  children,
  marker,
  tone = 'paper',
  accent,
  size = 'sm',
  className,
}: {
  children: ReactNode
  /** Prefixo curto: `01`, `REF`, `MODE` */
  marker?: string
  tone?: ArtTone
  /** Classe de cor do marcador, quando ele deve puxar a atenção */
  accent?: string
  size?: keyof typeof typeScale.mono
  className?: string
}) {
  return (
    <span
      className={cn(
        'inline-flex items-baseline gap-3',
        typeScale.mono[size],
        toneText[tone],
        className,
      )}
    >
      {marker ? (
        <span className={cn('shrink-0', accent)}>{marker}</span>
      ) : null}
      <span>{children}</span>
    </span>
  )
}

/**
 * MicroTypeBlock — coluna de etiquetas alinhadas por uma régua vertical.
 *
 * Função na direção: no NX-07 a densidade só funciona porque as etiquetas estão
 * organizadas em colunas rígidas. Este componente impõe essa disciplina.
 */
export function MicroTypeBlock({
  title,
  items,
  tone = 'paper',
  align = 'left',
  className,
}: {
  title?: string
  items: readonly string[]
  tone?: ArtTone
  align?: 'left' | 'right'
  className?: string
}) {
  const rule = tone === 'paper' ? 'bg-editorial-ink/25' : 'bg-white/25'

  return (
    <div
      className={cn(
        'flex gap-4',
        align === 'right' && 'flex-row-reverse text-right',
        className,
      )}
    >
      <span aria-hidden className={cn('w-px shrink-0', rule)} />
      <div className="flex flex-col gap-2">
        {title ? (
          <span
            className={cn(
              typeScale.mono.sm,
              tone === 'paper' ? 'text-editorial-ink' : 'text-white',
            )}
          >
            {title}
          </span>
        ) : null}
        {items.map((item) => (
          <span key={item} className={cn(typeScale.mono.xs, toneText[tone])}>
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

/**
 * CoordinatesLabel — especificação do próprio canvas em formato de coordenada.
 *
 * Função na direção: ocupa o lugar visual das coordenadas geográficas do NX-07,
 * mas com informação verdadeira sobre a peça, em vez de latitude inventada.
 */
export function CoordinatesLabel({
  width = 1080,
  height = 1350,
  ratio = '4:5',
  tone = 'paper',
  className,
}: {
  width?: number
  height?: number
  ratio?: string
  tone?: ArtTone
  className?: string
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-3',
        typeScale.mono.xs,
        toneText[tone],
        className,
      )}
    >
      <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden>
        <circle cx="9" cy="9" r="7" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M9 0v18M0 9h18" stroke="currentColor" strokeWidth="1" />
      </svg>
      <span>
        {width}×{height} · {ratio}
      </span>
    </span>
  )
}

/**
 * BarcodeDecoration — código de barras com legenda de metadado real.
 *
 * Função na direção: é o detalhe gráfico mais memorável do NX-07. Reaproveita o
 * `Barcode` determinístico que já existe no projeto (mesmo seed, mesmo desenho
 * em todo export). A legenda mostra id do post e data, nunca um serial falso.
 */
export function BarcodeDecoration({
  seed,
  caption,
  height = 44,
  bars = 44,
  tone = 'paper',
  className,
}: {
  seed: string
  caption: string
  height?: number
  bars?: number
  tone?: ArtTone
  className?: string
}) {
  return (
    <div className={cn('flex flex-col items-end gap-2', className)}>
      <Barcode
        seed={seed}
        bars={bars}
        height={height}
        className={tone === 'paper' ? 'text-editorial-ink' : 'text-white'}
      />
      <span className={cn(typeScale.mono.xs, toneText[tone])}>{caption}</span>
    </div>
  )
}

/**
 * PosterNumber — numeral grande de pôster.
 *
 * Função na direção: o `MODEL 07` / `ISSUE 24` do NX-07 e os numerais do pôster
 * suíço. Numeral tratado como elemento gráfico, com rótulo minúsculo ao lado.
 */
export function PosterNumber({
  value,
  label,
  accent,
  tone = 'paper',
  className,
}: {
  value: string
  label?: string
  accent?: string
  tone?: ArtTone
  className?: string
}) {
  return (
    <div className={cn('flex flex-col gap-1', className)}>
      {label ? (
        <span className={cn(typeScale.mono.xs, toneText[tone])}>{label}</span>
      ) : null}
      <span
        className={cn(
          'font-display text-[96px] font-black leading-[0.8] tracking-[-0.05em]',
          accent ?? (tone === 'paper' ? 'text-editorial-ink' : 'text-white'),
        )}
      >
        {value}
      </span>
    </div>
  )
}

/**
 * SlideCounter — progressão do carrossel.
 *
 * Substitui `SlideProgress` da tentativa anterior: sem pílulas arredondadas,
 * usa traços retos, coerentes com a linguagem suíça.
 */
export function SlideCounter({
  current = 1,
  total = 5,
  tone = 'paper',
  accent = 'bg-signal-red',
  className,
}: {
  current?: number
  total?: number
  tone?: ArtTone
  accent?: string
  className?: string
}) {
  const idle = tone === 'paper' ? 'bg-editorial-ink/20' : 'bg-white/25'

  return (
    <div className={cn('flex items-center gap-4', className)}>
      <div aria-hidden className="flex items-center gap-1.5">
        {Array.from({ length: total }).map((_, index) => (
          <span
            key={index}
            className={cn('h-[3px]', index + 1 === current ? cn('w-8', accent) : cn('w-4', idle))}
          />
        ))}
      </div>
      <span className={cn(typeScale.mono.sm, toneText[tone])}>
        {String(current).padStart(2, '0')}/{String(total).padStart(2, '0')}
      </span>
    </div>
  )
}

/**
 * BrandSignature — assinatura discreta.
 *
 * Função na direção: o brief exige presença discreta, sem botão agressivo. Nos
 * quatro pôsteres a autoria vive em micro-escala numa borda.
 */
export function BrandSignature({
  name = 'Vinícius William',
  handle = '@viniciuswilliam.dev',
  tone = 'paper',
  rule = true,
  className,
}: {
  name?: string
  handle?: string
  tone?: ArtTone
  /** Fio superior separando a assinatura da composição */
  rule?: boolean
  className?: string
}) {
  return (
    <div
      className={cn(
        'flex items-baseline justify-between gap-6',
        rule && 'border-t pt-4',
        rule && (tone === 'paper' ? 'border-editorial-ink/20' : 'border-white/20'),
        typeScale.mono.xs,
        toneText[tone],
        className,
      )}
    >
      <span className={tone === 'paper' ? 'text-editorial-ink' : 'text-white'}>
        {name}
      </span>
      <span>{handle}</span>
    </div>
  )
}
