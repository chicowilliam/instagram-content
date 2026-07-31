import { cn } from '@/lib/cn'
import { typeScale } from '@/design-system'
import type { ArtTone } from './types'

/**
 * CropMarks — marcas de corte de impressão.
 *
 * Função na direção: declara que a peça é um impresso editorial, não uma tela.
 * Cantos em L finos, nunca moldura fechada.
 */
export function CropMarks({
  inset = 28,
  tone = 'paper',
  className,
}: {
  inset?: number
  tone?: ArtTone
  className?: string
}) {
  const color = tone === 'paper' ? 'border-editorial-ink/30' : 'border-white/30'

  return (
    <div
      aria-hidden
      className={cn('pointer-events-none absolute', className)}
      style={{ inset }}
    >
      {[
        'top-0 left-0 border-t border-l',
        'top-0 right-0 border-t border-r',
        'bottom-0 left-0 border-b border-l',
        'bottom-0 right-0 border-b border-r',
      ].map((position) => (
        <span key={position} className={cn('absolute size-8', color, position)} />
      ))}
    </div>
  )
}

/**
 * SwissRule — fio estrutural do grid.
 *
 * Função na direção: no pôster suíço a barra preta não é separador, é peso.
 * Por isso a espessura é explícita e pode chegar a vários pixels.
 */
export function SwissRule({
  orientation = 'horizontal',
  weight = 3,
  length = '100%',
  angle,
  className,
}: {
  orientation?: 'horizontal' | 'vertical'
  weight?: number
  length?: number | string
  angle?: number
  className?: string
}) {
  const horizontal = orientation === 'horizontal'

  return (
    <span
      aria-hidden
      className={cn('block shrink-0 bg-current', className)}
      style={{
        width: horizontal ? length : weight,
        height: horizontal ? weight : length,
        transform: angle ? `rotate(${angle}deg)` : undefined,
        transformOrigin: 'left center',
      }}
    />
  )
}

/**
 * PaperGrain — grão de papel multiplicado sobre a base.
 *
 * Função na direção: o creme do pôster suíço tem textura de impressão. Sem grão,
 * a base chapada lê como `background-color` de site.
 */
export function PaperGrain({
  strength = 0.05,
  className,
}: {
  strength?: number
  className?: string
}) {
  return (
    <div
      aria-hidden
      className={cn(
        'pointer-events-none absolute inset-0 texture-paper-grain',
        className,
      )}
      style={{ opacity: strength }}
    />
  )
}

/**
 * HalftoneTexture — retícula de meio-tom.
 *
 * Função na direção: dá tratamento de impressso ao protagonista e permite
 * escurecer área sem recorrer a gradiente.
 */
export function HalftoneTexture({
  scale = 8,
  strength = 0.16,
  className,
}: {
  /** Passo da retícula em px */
  scale?: number
  strength?: number
  className?: string
}) {
  return (
    <div
      aria-hidden
      className={cn('pointer-events-none absolute inset-0 pattern-halftone', className)}
      style={{ backgroundSize: `${scale}px ${scale}px`, opacity: strength }}
    />
  )
}

/**
 * AnnotationMark — anotação de revisão sobre a interface.
 *
 * Função na direção: é o que transforma um mockup em **análise**. Comunica que
 * existe alguém olhando o site com critério — exatamente o posicionamento do
 * perfil. Linha + rótulo, sem caixa.
 */
export function AnnotationMark({
  label,
  direction = 'right',
  length = 140,
  className,
}: {
  label: string
  direction?: 'right' | 'left' | 'down'
  length?: number
  className?: string
}) {
  const rotation = { right: 0, left: 180, down: 90 }[direction]

  return (
    <div className={cn('flex items-center gap-3 text-signal-red', className)}>
      {direction === 'left' ? (
        <span className={cn(typeScale.mono.xs, 'order-2')}>{label}</span>
      ) : null}
      <svg
        width={length}
        height="14"
        viewBox={`0 0 ${length} 14`}
        fill="none"
        aria-hidden
        style={{ transform: `rotate(${rotation}deg)` }}
        className="shrink-0"
      >
        <line x1="0" y1="7" x2={length - 10} y2="7" stroke="currentColor" strokeWidth="2" />
        <path
          d={`M${length - 12} 1 L${length} 7 L${length - 12} 13`}
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
      {direction !== 'left' ? (
        <span className={cn(typeScale.mono.xs, 'whitespace-nowrap')}>{label}</span>
      ) : null}
    </div>
  )
}

/**
 * CutoutShadow — sombra dura de recorte.
 *
 * Função na direção: recorte colado em papel projeta sombra **deslocada e sem
 * blur**. Sombra difusa é linguagem de card de SaaS, que o brief proíbe.
 */
export function CutoutShadow({
  offsetX = 18,
  offsetY = 18,
  color = 'bg-editorial-ink',
  className,
}: {
  offsetX?: number
  offsetY?: number
  color?: string
  className?: string
}) {
  return (
    <div
      aria-hidden
      className={cn('pointer-events-none absolute inset-0', color, className)}
      style={{ transform: `translate(${offsetX}px, ${offsetY}px)` }}
    />
  )
}
