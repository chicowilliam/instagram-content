/**
 * CMS content model.
 * Status flow is linear — never skip stages.
 */

export const CONTENT_STATUSES = [
  'IDEA',
  'BRIEF',
  'COPY',
  'DESIGN',
  'REACT',
  'PREVIEW',
  'READY',
  'PUBLISHED',
] as const

export type ContentStatus = (typeof CONTENT_STATUSES)[number]

export const STATUS_META: Record<
  ContentStatus,
  { label: string; order: number; description: string }
> = {
  IDEA: {
    label: 'Idea',
    order: 0,
    description: 'Tema capturado. Ainda sem brief.',
  },
  BRIEF: {
    label: 'Brief',
    order: 1,
    description: 'Objetivo, público, problema e CTA definidos.',
  },
  COPY: {
    label: 'Copy',
    order: 2,
    description: 'Textos por slide, stories, reel e legenda.',
  },
  DESIGN: {
    label: 'Design',
    order: 3,
    description: 'Template e estrutura visual escolhidos.',
  },
  REACT: {
    label: 'React',
    order: 4,
    description: 'Componente Post.tsx implementado.',
  },
  PREVIEW: {
    label: 'Preview',
    order: 5,
    description: 'Revisão visual no studio.',
  },
  READY: {
    label: 'Ready',
    order: 6,
    description: 'Pacote completo, pronto para exportar.',
  },
  PUBLISHED: {
    label: 'Published',
    order: 7,
    description: 'Exportado e publicado no Instagram.',
  },
}

export type ContentCategory =
  | 'confianca'
  | 'encontrabilidade'
  | 'experiencia'
  | 'conversao'
  | 'sistemas'
  | 'decisao'
  | 'bastidores'
  | 'geral'

export type ContentTemplate =
  | 'lista'
  | 'hero'
  | 'comparacao'
  | 'passo-a-passo'
  | 'timeline'
  | 'faq'
  | 'mitos'
  | 'checklist'
  | 'quote'
  | 'estatisticas'

export type ContentObjective =
  | 'educar'
  | 'autoridade'
  | 'compartilhamentos'
  | 'comentarios'
  | 'seguidores'
  | 'orcamento'

export type Brief = {
  objective: ContentObjective
  audience: string
  problem: string
  solution: string
  cta: string
  slideCount: number
  category: ContentCategory
  template: ContentTemplate
  primaryMetric: string
}

export type SlideCopy = {
  number: number
  purpose: string
  headline: string
  body?: string
}

export type StoryCopy = {
  number: 1 | 2 | 3
  role: 'gancho' | 'explicacao' | 'cta'
  headline: string
  body: string
}

export type ReelCopy = {
  hook: string
  duration: string
  scenes: { time: string; visual: string; voiceover: string; onScreen?: string }[]
  caption: string
  cta: string
}

export type HashtagSet = {
  high: string[]
  medium: string[]
  low: string[]
}

export type CopyDeck = {
  slides: SlideCopy[]
  stories: StoryCopy[]
  reel: ReelCopy
  caption: string
  pinnedComment: string
  suggestedTime: string
  hashtags: HashtagSet
}

export type PostMeta = {
  /** Zero-padded numeric id: "001" */
  id: string
  slug: string
  title: string
  category: ContentCategory
  objective: ContentObjective
  status: ContentStatus
  template: ContentTemplate
  slideCount: number
  storyCount: number
  /** Path relative to src/posts */
  folder: string
  createdAt: string
  updatedAt: string
  publishedAt?: string
  scheduledAt?: string
  week?: number
  series?: string
}

export type ContentIdea = {
  id: string
  title: string
  notes?: string
  tags: string[]
  status: 'open' | 'converted' | 'archived'
  createdAt: string
  convertedPostId?: string
}

export const CATEGORY_LABELS: Record<ContentCategory, string> = {
  confianca: 'Confiança',
  encontrabilidade: 'Ser encontrado',
  experiencia: 'Experiência',
  conversao: 'Conversão',
  sistemas: 'Sistemas',
  decisao: 'Decisão',
  bastidores: 'Bastidores',
  geral: 'Geral',
}

export const OBJECTIVE_LABELS: Record<ContentObjective, string> = {
  educar: 'Educar',
  autoridade: 'Autoridade',
  compartilhamentos: 'Compartilhamentos',
  comentarios: 'Comentários',
  seguidores: 'Seguidores',
  orcamento: 'Orçamento',
}

export const TEMPLATE_LABELS: Record<ContentTemplate, string> = {
  lista: 'Lista',
  hero: 'Hero',
  comparacao: 'Comparação',
  'passo-a-passo': 'Passo a Passo',
  timeline: 'Timeline',
  faq: 'FAQ',
  mitos: 'Mitos',
  checklist: 'Checklist',
  quote: 'Quote',
  estatisticas: 'Estatísticas',
}

export function assertStatusOrder(
  current: ContentStatus,
  next: ContentStatus,
): string | null {
  const from = STATUS_META[current].order
  const to = STATUS_META[next].order
  if (to === from) return null
  if (to === from + 1) return null
  if (to < from) {
    return `Não é possível voltar de ${current} para ${next} pelo fluxo automático.`
  }
  return `Não pule etapas: ${current} → ${next}. Avance uma a uma.`
}

export function nextStatus(status: ContentStatus): ContentStatus | null {
  const order = STATUS_META[status].order
  return CONTENT_STATUSES.find((s) => STATUS_META[s].order === order + 1) ?? null
}
