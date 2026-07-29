/**
 * 12-month editorial calendar.
 *
 * Structure per week:
 *   1 objective · 1 primary metric · 3 carousels · 2 reels · derived stories
 *
 * Rules enforced by `validateCalendar()`:
 *   - 52 weeks, no gaps
 *   - exactly 3 carousels + 2 reels per week
 *   - no repeated subject across the whole year
 *   - every week declares how it connects to the next one
 */

export type PillarId =
  | 'confianca'
  | 'encontrabilidade'
  | 'experiencia'
  | 'conversao'
  | 'sistemas'
  | 'decisao'

export const PILLARS: Record<PillarId, { label: string; note: string }> = {
  confianca: {
    label: 'Confiança',
    note: 'Primeira impressão, credibilidade e percepção de qualidade.',
  },
  encontrabilidade: {
    label: 'Ser encontrado',
    note: 'Como o cliente chega até a empresa antes de conhecer a marca.',
  },
  experiencia: {
    label: 'Experiência',
    note: 'Celular, velocidade e conforto de uso.',
  },
  conversao: {
    label: 'Conversão',
    note: 'Transformar visita em contato, orçamento ou reserva.',
  },
  sistemas: {
    label: 'Sistemas',
    note: 'Operação, painéis e automação sob medida.',
  },
  decisao: {
    label: 'Decisão',
    note: 'Preço, contratação, processo e bastidores.',
  },
}

export type MonthPlan = {
  month: number
  theme: string
  promise: string
}

export const MONTHS: MonthPlan[] = [
  {
    month: 1,
    theme: 'Sua empresa já é avaliada na internet',
    promise: 'Fazer o empresário perceber a presença digital que já existe.',
  },
  {
    month: 2,
    theme: 'Primeira impressão e credibilidade',
    promise: 'Mostrar quais sinais visuais constroem ou destroem confiança.',
  },
  {
    month: 3,
    theme: 'Ser encontrado por quem procura',
    promise: 'Explicar como aparecer para quem já quer comprar.',
  },
  {
    month: 4,
    theme: 'O celular decide',
    promise: 'Provar que a experiência no celular define o resultado.',
  },
  {
    month: 5,
    theme: 'Velocidade e estabilidade',
    promise: 'Ligar lentidão e instabilidade a perda direta de cliente.',
  },
  {
    month: 6,
    theme: 'Transformar visitas em clientes',
    promise: 'Ensinar o caminho entre acessar o site e falar com a empresa.',
  },
  {
    month: 7,
    theme: 'Textos que vendem',
    promise: 'Mostrar que a escrita do site é parte da conversão.',
  },
  {
    month: 8,
    theme: 'Sistemas e operação',
    promise: 'Apresentar sistemas sob medida como ganho de tempo e controle.',
  },
  {
    month: 9,
    theme: 'Erros que custam caro',
    promise: 'Expor falhas comuns que afastam clientes silenciosamente.',
  },
  {
    month: 10,
    theme: 'Quanto custa e como escolher',
    promise: 'Dar critério para o empresário avaliar propostas e retorno.',
  },
  {
    month: 11,
    theme: 'Bastidores e processo',
    promise: 'Construir autoridade mostrando como o trabalho é conduzido.',
  },
  {
    month: 12,
    theme: 'Balanço e planejamento',
    promise: 'Fechar o ciclo e preparar o próximo ano com prioridades claras.',
  },
]

export type CalendarPiece = {
  title: string
  angle: string
}

export type CalendarWeek = {
  week: number
  month: number
  pillar: PillarId
  /** Specific objective for this week only */
  objective: string
  /** Single primary metric used to judge the week */
  metric: string
  /** How the five publications connect to each other */
  narrative: string
  carousels: CalendarPiece[]
  reels: CalendarPiece[]
  /** Interactive story angle that ties the week together */
  storyFocus: string
  /** Link to the following week */
  bridge: string
}

/**
 * Every publication generates stories from these three roles.
 * 5 publications × 3 stories = 15 stories per week.
 */
export const STORY_DERIVATION = [
  {
    kind: 'Teaser',
    purpose: 'Antecipa a publicação com a pergunta central.',
    template: 'Abre com o gancho e manda para o post/reel.',
  },
  {
    kind: 'Aprofundamento',
    purpose: 'Explica um único ponto que não coube na publicação.',
    template: 'Um slide, uma ideia, linguagem de conversa.',
  },
  {
    kind: 'Interação',
    purpose: 'Coleta resposta do empresário (enquete ou caixinha).',
    template: 'Pergunta fechada + convite para responder.',
  },
] as const

export function slugify(value: string) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}
