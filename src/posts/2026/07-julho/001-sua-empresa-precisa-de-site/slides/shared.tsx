import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'
import { base } from '@/design-system'

export const TOTAL = 5 as const

/** Shell full-bleed para uso dentro de PostCanvas (padding 0). */
export function SlideShell({
  children,
  surface = base.paper,
  className,
}: {
  children: ReactNode
  surface?: string
  className?: string
}) {
  return (
    <div
      className={cn(
        'relative h-full w-full overflow-hidden',
        surface,
        className,
      )}
    >
      {children}
    </div>
  )
}

export const copy = {
  s1: {
    lines: ['Antes de ler,', 'seu cliente já formou'],
    connector: 'uma',
    keyword: 'IMPRESSÃO',
    support: 'A apresentação da sua empresa também comunica.',
  },
  s2: {
    lead: 'O problema não é ser pequeno.',
    punch: 'É parecer',
    keyword: 'IMPROVISADO',
    annotations: [
      { id: '01', label: 'hierarquia fraca', top: 120, left: 40 },
      { id: '02', label: 'ação escondida', top: 280, left: 420 },
      { id: '03', label: 'excesso de informação', top: 380, left: 20 },
      { id: '04', label: 'contraste insuficiente', top: 520, left: 360 },
    ],
  },
  s3: {
    lines: ['Mesmo negócio.', 'Duas percepções.'],
    labels: [
      '01 — mensagem',
      '02 — hierarquia',
      '03 — ação',
      '04 — percepção',
    ],
  },
  s4: {
    principles: [
      {
        id: '01',
        title: 'CLAREZA',
        body: 'Mensagem principal legível.',
        tone: 'cobalt' as const,
      },
      {
        id: '02',
        title: 'CUIDADO',
        body: 'Consistência visual e detalhes.',
        tone: 'lime' as const,
      },
      {
        id: '03',
        title: 'DIREÇÃO',
        body: 'Próximo passo evidente.',
        tone: 'red' as const,
      },
    ],
  },
  s5: {
    lead: 'Eu desenvolvo sites.',
    twist: 'Mas o objetivo nunca é apenas entregar páginas.',
    about:
      'Eu sou Vinícius William.\n\nNeste perfil, vou mostrar como design, tecnologia e estratégia ajudam empresas a construir uma presença digital mais forte.',
    cta: 'Acompanhe os próximos conteúdos.',
    handle: '@viniciuswilliam.dev',
  },
} as const
