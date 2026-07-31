import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'

/** Canvas do carrossel. Fonte única — nenhuma variante redeclara. */
export const CANVAS = { width: 1080, height: 1350 } as const

/**
 * Copy do Slide 1. Idêntica nas três variantes: o que muda é a direção de arte,
 * não a mensagem. Isso torna a comparação honesta.
 */
export const cover = {
  lines: ['Antes de ler,', 'seu cliente já formou'],
  connector: 'uma',
  keyword: 'IMPRESSÃO',
  support: 'A apresentação da sua empresa também comunica.',
  annotation: 'os 3 primeiros segundos',
  slide: 1,
  total: 5,
  postId: 'POST 001',
  date: '30.07.2026',
} as const

/**
 * PosterFrame — moldura de 1080×1350 para composição absoluta.
 *
 * Posts nesta direção são pôsteres, não layouts de fluxo: cada elemento tem
 * coordenada. `data-post-canvas` mantém o lock de tokens claros para que o dark
 * mode do CMS não contamine a peça.
 */
export function PosterFrame({
  children,
  surface,
  className,
}: {
  children: ReactNode
  surface: string
  className?: string
}) {
  return (
    <div
      data-post-canvas
      className={cn('relative overflow-hidden', surface, className)}
      style={{ width: CANVAS.width, height: CANVAS.height }}
    >
      {children}
    </div>
  )
}
