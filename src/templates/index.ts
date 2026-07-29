import type { ContentTemplate } from '@/cms/types'
import { TEMPLATE_LABELS } from '@/cms/types'

export type TemplateDefinition = {
  id: ContentTemplate
  label: string
  description: string
  bestFor: string
  defaultSlides: number
  components: string[]
}

export const TEMPLATES: TemplateDefinition[] = [
  {
    id: 'lista',
    label: TEMPLATE_LABELS.lista,
    description: 'Pontos numerados com hierarquia clara.',
    bestFor: 'Checklists, erros, princípios.',
    defaultSlides: 5,
    components: ['Badge', 'Title', 'Subtitle', 'FeatureCard', 'CTA', 'Footer'],
  },
  {
    id: 'hero',
    label: TEMPLATE_LABELS.hero,
    description: 'Afirmação forte + apoio curto.',
    bestFor: 'Posicionamento e abertura de série.',
    defaultSlides: 4,
    components: ['Badge', 'Title', 'Subtitle', 'CTA', 'Footer'],
  },
  {
    id: 'comparacao',
    label: TEMPLATE_LABELS.comparacao,
    description: 'Dois caminhos lado a lado.',
    bestFor: 'Antes/depois, amador/profissional.',
    defaultSlides: 4,
    components: ['Badge', 'Title', 'Comparison', 'CTA', 'Footer'],
  },
  {
    id: 'passo-a-passo',
    label: TEMPLATE_LABELS['passo-a-passo'],
    description: 'Sequência numerada de ações.',
    bestFor: 'Processos e tutoriais curtos.',
    defaultSlides: 6,
    components: ['Badge', 'Title', 'Timeline', 'CTA', 'Footer'],
  },
  {
    id: 'timeline',
    label: TEMPLATE_LABELS.timeline,
    description: 'Linha do tempo com marcos.',
    bestFor: '90 dias, jornada do cliente.',
    defaultSlides: 5,
    components: ['Badge', 'Title', 'Timeline', 'CTA', 'Footer'],
  },
  {
    id: 'faq',
    label: TEMPLATE_LABELS.faq,
    description: 'Perguntas e respostas curtas.',
    bestFor: 'Objeções e dúvidas recorrentes.',
    defaultSlides: 5,
    components: ['Badge', 'Title', 'FAQ', 'CTA', 'Footer'],
  },
  {
    id: 'mitos',
    label: TEMPLATE_LABELS.mitos,
    description: 'Mito × realidade.',
    bestFor: 'Quebrar crenças do mercado.',
    defaultSlides: 5,
    components: ['Badge', 'Title', 'Comparison', 'CTA', 'Footer'],
  },
  {
    id: 'checklist',
    label: TEMPLATE_LABELS.checklist,
    description: 'Lista verificável de itens.',
    bestFor: 'Auditorias e ações práticas.',
    defaultSlides: 4,
    components: ['Badge', 'Title', 'Checklist', 'CTA', 'Footer'],
  },
  {
    id: 'quote',
    label: TEMPLATE_LABELS.quote,
    description: 'Citação editorial com autoria.',
    bestFor: 'Autoridade e compartilhamento.',
    defaultSlides: 3,
    components: ['Quote', 'Badge', 'Footer'],
  },
  {
    id: 'estatisticas',
    label: TEMPLATE_LABELS.estatisticas,
    description: 'Números grandes com contexto.',
    bestFor: 'Prova e impacto.',
    defaultSlides: 4,
    components: ['Statistic', 'Title', 'Subtitle', 'CTA', 'Footer'],
  },
]

export function getTemplate(id: ContentTemplate) {
  return TEMPLATES.find((t) => t.id === id)
}

/** Picks a template from brief signals — never invents a new layout. */
export function pickTemplate(input: {
  objective: string
  problem: string
  slideCount: number
}): ContentTemplate {
  const text = `${input.objective} ${input.problem}`.toLowerCase()
  if (text.includes('compar') || text.includes('vs') || text.includes('antes'))
    return 'comparacao'
  if (text.includes('mito') || text.includes('verdade')) return 'mitos'
  if (text.includes('passo') || text.includes('como ')) return 'passo-a-passo'
  if (text.includes('pergunta') || text.includes('dúvida') || text.includes('faq'))
    return 'faq'
  if (text.includes('check') || text.includes('lista') || text.includes('audito'))
    return 'checklist'
  if (text.includes('número') || text.includes('dado') || text.includes('%'))
    return 'estatisticas'
  if (text.includes('citação') || text.includes('frase')) return 'quote'
  if (text.includes('cronograma') || text.includes('timeline') || text.includes('90'))
    return 'timeline'
  if (input.slideCount <= 3) return 'hero'
  return 'lista'
}
