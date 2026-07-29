/**
 * Content pipeline — source of truth for every theme.
 *
 * Status (board columns):
 *   ideas → in_production → published
 *
 * Stage (mandatory production flow):
 *   idea → brief → copy → react → export → published
 *
 * Rule: every new theme starts in Ideas. Never jump stages.
 */

export type PipelineStatus = 'ideas' | 'in_production' | 'published'

export type PipelineStage =
  | 'idea'
  | 'brief'
  | 'copy'
  | 'react'
  | 'export'
  | 'published'

export type ContentObjective =
  | 'educate'
  | 'authority'
  | 'shares'
  | 'comments'
  | 'followers'
  | 'quote'

export type ContentTemplate =
  | 'hero'
  | 'list'
  | 'comparison'
  | 'timeline'
  | 'stats'
  | 'faq'
  | 'before_after'
  | 'quote'

export type SlideCopy = {
  number: number
  purpose: string
  headline: string
  body?: string
}

export type Brief = {
  objective: ContentObjective
  primaryMetric: string
  audience: string
  hook: string
  narrative: string
  cta: string
  template: ContentTemplate
  components: string[]
  slideCount: number
}

export type CopyDeck = {
  caption: string
  cta: string
  pinnedComment: string
  suggestedTime: string
  hashtags: string[]
  slides: SlideCopy[]
  stories: SlideCopy[]
  reel: {
    hook: string
    scenes: string[]
    closing: string
  }
}

export type PipelineItem = {
  /** IDEA-001 */
  id: string
  title: string
  /** One-line theme */
  theme: string
  status: PipelineStatus
  stage: PipelineStage
  series?: string
  /** Strategy fields — filled while still in Ideas / Brief */
  whyItMatters?: string
  businessReaction?: string
  shareability?: string
  brief?: Brief
  copy?: CopyDeck
  /** Linked React post id (e.g. "011") once stage ≥ react */
  postId?: string
  notes?: string
  createdAt: string
  updatedAt: string
}

export const STATUS_META: Record<
  PipelineStatus,
  { label: string; description: string }
> = {
  ideas: {
    label: 'Ideas',
    description: 'Temas novos. Ainda não entraram em produção.',
  },
  in_production: {
    label: 'In Production',
    description: 'Brief → Copy → React → Export.',
  },
  published: {
    label: 'Published',
    description: 'Aprovado, exportado e publicado no Instagram.',
  },
}

export const STAGE_META: Record<
  PipelineStage,
  { label: string; order: number; status: PipelineStatus }
> = {
  idea: { label: 'Idea', order: 0, status: 'ideas' },
  brief: { label: 'Brief', order: 1, status: 'in_production' },
  copy: { label: 'Copy', order: 2, status: 'in_production' },
  react: { label: 'React', order: 3, status: 'in_production' },
  export: { label: 'Export', order: 4, status: 'in_production' },
  published: { label: 'Published', order: 5, status: 'published' },
}

export const STAGE_FLOW: PipelineStage[] = [
  'idea',
  'brief',
  'copy',
  'react',
  'export',
  'published',
]

export const OBJECTIVE_LABELS: Record<ContentObjective, string> = {
  educate: 'Educar',
  authority: 'Gerar autoridade',
  shares: 'Gerar compartilhamentos',
  comments: 'Gerar comentários',
  followers: 'Gerar seguidores',
  quote: 'Gerar orçamento',
}

export function nextStage(stage: PipelineStage): PipelineStage | null {
  const index = STAGE_FLOW.indexOf(stage)
  if (index < 0 || index >= STAGE_FLOW.length - 1) return null
  return STAGE_FLOW[index + 1] ?? null
}

export function assertStageOrder(item: PipelineItem): string[] {
  const issues: string[] = []
  const expected = STAGE_META[item.stage].status
  if (item.status !== expected) {
    issues.push(
      `Status "${item.status}" não combina com stage "${item.stage}" (esperado: ${expected}).`,
    )
  }
  if (item.stage !== 'idea' && item.status === 'ideas') {
    issues.push('Só stage "idea" pode ficar em Ideas.')
  }
  if (
    (item.stage === 'copy' ||
      item.stage === 'react' ||
      item.stage === 'export' ||
      item.stage === 'published') &&
    !item.brief
  ) {
    issues.push('Brief obrigatório antes de Copy / React / Export / Published.')
  }
  if (
    (item.stage === 'react' ||
      item.stage === 'export' ||
      item.stage === 'published') &&
    !item.copy
  ) {
    issues.push('Copy obrigatória antes de React / Export / Published.')
  }
  if (item.copy) {
    if (item.copy.slides.length < 2) {
      issues.push('Carrossel obrigatório: mínimo de 2 slides.')
    }
    if (item.copy.stories.length === 0) {
      issues.push('Stories obrigatórios.')
    }
    if (
      !item.copy.caption ||
      !item.copy.cta ||
      !item.copy.pinnedComment ||
      !item.copy.suggestedTime ||
      item.copy.hashtags.length === 0
    ) {
      issues.push(
        'Legenda, CTA, comentário fixado, horário e hashtags são obrigatórios.',
      )
    }
    if (
      !item.copy.reel.hook ||
      item.copy.reel.scenes.length === 0 ||
      !item.copy.reel.closing
    ) {
      issues.push('Roteiro de Reel obrigatório.')
    }
  }
  if (
    (item.stage === 'export' || item.stage === 'published') &&
    !item.postId
  ) {
    issues.push('postId obrigatório a partir de Export.')
  }
  return issues
}
