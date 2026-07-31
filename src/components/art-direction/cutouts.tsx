import type { CSSProperties, ReactNode } from 'react'
import { cn } from '@/lib/cn'
import { typeScale } from '@/design-system'
import { CutoutShadow } from './marks'

/**
 * ImageMask — campo de cor chapado atrás do protagonista.
 *
 * Princípio extraído do `Minimalist Hero` (21st #4582), onde um círculo amarelo
 * sólido atrás do recorte cria profundidade sem gradiente e sem sombra difusa.
 * Ver `docs/post-001-21st-research.md`.
 *
 * Nunca é gradiente: cor chapada é o que separa isto de um glow de SaaS.
 */
export function ImageMask({
  shape = 'circle',
  color = 'bg-signal-red',
  size = 620,
  className,
  style,
}: {
  shape?: 'circle' | 'arch' | 'block' | 'wedge'
  color?: string
  size?: number
  className?: string
  style?: CSSProperties
}) {
  const shapes: Record<string, CSSProperties> = {
    circle: { borderRadius: '9999px' },
    arch: { borderRadius: `${size / 2}px ${size / 2}px 0 0` },
    block: {},
    wedge: { clipPath: 'polygon(0 0, 100% 0, 100% 100%)' },
  }

  return (
    <div
      aria-hidden
      className={cn('pointer-events-none absolute', color, className)}
      style={{ width: size, height: size, ...shapes[shape], ...style }}
    />
  )
}

/**
 * EditorialCutout — palco do protagonista visual.
 *
 * Função na direção: aplica os quatro tratamentos que as referências usam em
 * qualquer objeto recortado — inclinação, sombra dura, dessaturação e sangria
 * fora do canvas. Centraliza esses gestos para que não sejam reinventados slide
 * a slide.
 */
export function EditorialCutout({
  children,
  angle = 0,
  width,
  monochrome = false,
  shadow = false,
  shadowColor,
  className,
  style,
}: {
  children: ReactNode
  angle?: number
  width?: number
  /** Dessatura o objeto, unificando-o à paleta da peça */
  monochrome?: boolean
  /** Sombra dura deslocada, como recorte colado em papel */
  shadow?: boolean
  shadowColor?: string
  className?: string
  style?: CSSProperties
}) {
  return (
    <div
      className={cn('relative', className)}
      style={{ width, transform: angle ? `rotate(${angle}deg)` : undefined, ...style }}
    >
      {shadow ? <CutoutShadow color={shadowColor} /> : null}
      <div className={cn('relative', monochrome && 'grayscale')}>{children}</div>
    </div>
  )
}

/**
 * BrowserCutout — janela de navegador como objeto de pôster.
 *
 * Diferente do `BrowserMockup` existente, que é um mockup limpo de produto:
 * este é feito para ser **recortado, inclinado e sangrado** dentro de uma
 * composição editorial. Proporções do chrome extraídas do princípio do Safari
 * (21st #1241) — semáforo à esquerda, URL em pílula ao centro, borda de 1px.
 *
 * É a tradução honesta do avião suíço e do capacete NX-07: nosso objeto
 * protagonista é um site, porque o assunto é site.
 */
export function BrowserCutout({
  children,
  url,
  width = 820,
  height,
  angle = 0,
  tone = 'light',
  className,
  style,
}: {
  children: ReactNode
  url: string
  width?: number
  height?: number
  angle?: number
  tone?: 'light' | 'dark'
  className?: string
  style?: CSSProperties
}) {
  const dark = tone === 'dark'

  return (
    <div
      className={cn(
        'overflow-hidden border',
        dark ? 'border-white/15 bg-[#131316]' : 'border-editorial-ink/15 bg-white',
        className,
      )}
      style={{
        width,
        height,
        borderRadius: 14,
        transform: angle ? `rotate(${angle}deg)` : undefined,
        ...style,
      }}
    >
      <div
        className={cn(
          'flex items-center gap-4 border-b px-5',
          dark ? 'border-white/10 bg-[#1c1c20]' : 'border-editorial-ink/10 bg-[#f6f5f3]',
        )}
        style={{ height: 46 }}
      >
        <div aria-hidden className="flex gap-2">
          {['#ff5f57', '#febc2e', '#28c840'].map((dot) => (
            <span
              key={dot}
              className="size-[11px] rounded-full"
              style={{ backgroundColor: dot }}
            />
          ))}
        </div>
        <div
          className={cn(
            'flex h-[26px] flex-1 items-center justify-center gap-2 rounded-full',
            dark ? 'bg-white/10' : 'bg-editorial-ink/[0.06]',
          )}
        >
          <svg width="11" height="11" viewBox="0 0 12 12" aria-hidden>
            <rect
              x="2.5"
              y="5"
              width="7"
              height="5.5"
              rx="1"
              fill={dark ? 'rgb(255 255 255 / 0.5)' : 'rgb(12 12 12 / 0.4)'}
            />
            <path
              d="M4 5V3.6a2 2 0 0 1 4 0V5"
              fill="none"
              strokeWidth="1.2"
              stroke={dark ? 'rgb(255 255 255 / 0.5)' : 'rgb(12 12 12 / 0.4)'}
            />
          </svg>
          <span
            className={cn(
              'font-mono text-[13px] tracking-[0.02em]',
              dark ? 'text-white/55' : 'text-editorial-ink/45',
            )}
          >
            {url}
          </span>
        </div>
        <span aria-hidden className="w-8" />
      </div>

      <div className="relative">{children}</div>
    </div>
  )
}

/**
 * WebAuditTag — rótulo de veredito colado na janela.
 *
 * Função na direção: identifica qual versão do site está sendo mostrada, sem
 * criar um card. Retângulo reto, cor chapada, mono em caixa alta.
 */
export function WebAuditTag({
  children,
  color = 'bg-signal-red',
  className,
}: {
  children: string
  color?: string
  className?: string
}) {
  return (
    <span
      className={cn(
        'inline-block px-4 py-2 text-white',
        typeScale.mono.xs,
        color,
        className,
      )}
    >
      {children}
    </span>
  )
}
