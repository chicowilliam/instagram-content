import type { CSSProperties, ReactNode } from 'react'
import { cn } from '@/lib/cn'
import { typeScale } from '@/design-system'

/**
 * MassiveWord — palavra única em escala de pôster.
 *
 * Função na direção: é o elemento visual, não o título. Nasce da referência GAZU,
 * onde o wordmark ocupa a altura do hero e é ocluído pelo protagonista.
 *
 * `bleed` permite que a palavra seja cortada pelas bordas do canvas: o corte é
 * intencional e comunica escala maior que o quadro.
 */
export function MassiveWord({
  children,
  size = 'massive',
  bleed = false,
  outline = false,
  className,
  style,
}: {
  children: string
  size?: keyof typeof typeScale.display
  bleed?: boolean
  /** Vazado: só contorno. Usado quando a palavra fica atrás do protagonista. */
  outline?: boolean
  className?: string
  style?: CSSProperties
}) {
  return (
    <span
      aria-hidden
      className={cn(
        'block select-none uppercase',
        typeScale.display[size],
        bleed && 'whitespace-nowrap',
        outline && 'text-transparent [-webkit-text-stroke:3px_currentColor]',
        className,
      )}
      style={style}
    >
      {children}
    </span>
  )
}

/**
 * VerticalHeadline — texto rotacionado colado a uma borda.
 *
 * Função na direção: reproduz o `HELVETICA` vertical do pôster suíço, que
 * transforma tipografia em estrutura arquitetônica da composição.
 *
 * Regra de legibilidade: nunca carrega a mensagem principal, porque em miniatura
 * de feed (~270px) texto vertical é ilegível.
 */
export function VerticalHeadline({
  children,
  side = 'left',
  size = 'lg',
  className,
}: {
  children: string
  side?: 'left' | 'right'
  size?: keyof typeof typeScale.display
  className?: string
}) {
  return (
    <span
      aria-hidden
      className={cn(
        'block origin-center select-none whitespace-nowrap uppercase',
        typeScale.display[size],
        className,
      )}
      style={{
        writingMode: 'vertical-rl',
        transform: side === 'left' ? 'rotate(180deg)' : undefined,
      }}
    >
      {children}
    </span>
  )
}

/**
 * DiagonalHeadline — bloco de texto no eixo diagonal do modo.
 *
 * Função na direção: os numerais diagonais do pôster suíço criam um vetor que
 * reforça o movimento do objeto. O ângulo vem do modo, nunca é arbitrário.
 */
export function DiagonalHeadline({
  children,
  angle = -32,
  size = 'lg',
  className,
}: {
  children: string
  angle?: number
  size?: keyof typeof typeScale.display
  className?: string
}) {
  return (
    <span
      aria-hidden
      className={cn(
        'block origin-left select-none whitespace-nowrap uppercase',
        typeScale.display[size],
        className,
      )}
      style={{ transform: `rotate(${angle}deg)` }}
    >
      {children}
    </span>
  )
}

/**
 * OverlapHeadline — palco de três camadas.
 *
 * Função na direção: é o mecanismo que produz oclusão. Sem ele, palavra gigante
 * e protagonista ficariam lado a lado, e a composição perderia profundidade.
 *
 * `behind` fica atrás, `children` no meio (legível), `front` na frente.
 */
export function OverlapHeadline({
  behind,
  front,
  children,
  className,
}: {
  behind?: ReactNode
  front?: ReactNode
  children?: ReactNode
  className?: string
}) {
  return (
    <div className={cn('relative', className)}>
      {behind ? (
        <div className="pointer-events-none absolute inset-0 z-0">{behind}</div>
      ) : null}
      {children ? <div className="relative z-10">{children}</div> : null}
      {front ? (
        <div className="pointer-events-none absolute inset-0 z-20">{front}</div>
      ) : null}
    </div>
  )
}

/**
 * RotatedText — micro-rotação para textos curtos e etiquetas.
 *
 * Função na direção: no pôster suíço todo elemento rotacionado repete o mesmo
 * eixo. Este componente existe para que a rotação seja um token, não um número
 * solto espalhado pelos slides.
 */
export function RotatedText({
  children,
  angle = -90,
  className,
}: {
  children: ReactNode
  angle?: number
  className?: string
}) {
  return (
    <span
      className={cn('inline-block origin-center whitespace-nowrap', className)}
      style={{ transform: `rotate(${angle}deg)` }}
    >
      {children}
    </span>
  )
}

/**
 * TypeAsImage — camada tipográfica tratada como imagem de fundo.
 *
 * Função na direção: o princípio “tipografia funcionando como imagem” do pôster
 * suíço. A palavra é posicionada em coordenadas absolutas, sangra e pode ser
 * mascarada pelo protagonista.
 */
export function TypeAsImage({
  children,
  top,
  left,
  right,
  bottom,
  angle = 0,
  size = 'bleed',
  className,
}: {
  children: string
  top?: number | string
  left?: number | string
  right?: number | string
  bottom?: number | string
  angle?: number
  size?: keyof typeof typeScale.display
  className?: string
}) {
  return (
    <span
      aria-hidden
      className={cn(
        'pointer-events-none absolute select-none whitespace-nowrap uppercase',
        typeScale.display[size],
        className,
      )}
      style={{
        top,
        left,
        right,
        bottom,
        transform: angle ? `rotate(${angle}deg)` : undefined,
      }}
    >
      {children}
    </span>
  )
}

/**
 * EditorialCaption — texto de apoio da composição.
 *
 * Função na direção: nas quatro referências o texto de apoio é sempre pequeno,
 * discreto e afastado do display. Nunca compete com o protagonista.
 */
export function EditorialCaption({
  children,
  size = 'sm',
  className,
}: {
  children: ReactNode
  size?: keyof typeof typeScale.body
  className?: string
}) {
  return <p className={cn(typeScale.body[size], className)}>{children}</p>
}
