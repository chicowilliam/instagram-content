import {
  assertStageOrder,
  STAGE_META,
  type PipelineItem,
  type PipelineStage,
  type PipelineStatus,
} from './types'

/**
 * Pipeline registry.
 *
 * Every new theme starts here as status: 'ideas', stage: 'idea'.
 * Promote by editing status/stage — never skip the flow:
 * Ideas → Brief → Copy → React → Export → Published
 */
export const pipelineItems: PipelineItem[] = [
  {
    id: 'IDEA-001',
    title: 'Seu site decide em 3 segundos',
    theme:
      'O visitante decide se confia na empresa nos primeiros segundos — e a maioria dos sites locais perde essa chance.',
    status: 'ideas',
    stage: 'idea',
    series: 'Erros que afastam clientes',
    whyItMatters:
      'Empresários investem em presença digital, mas não sabem que a primeira impressão visual define confiança antes de qualquer argumento de venda.',
    businessReaction:
      '"Faz sentido… meu site parece improvisado mesmo."',
    shareability:
      'Frase forte + número (3 segundos) + reconhecimento imediato do problema.',
    createdAt: '2026-07-29',
    updatedAt: '2026-07-29',
  },
  {
    id: 'IDEA-002',
    title: 'Site bonito ≠ site que vende',
    theme:
      'Diferença entre um site feito para impressionar o dono e um site feito para converter o cliente.',
    status: 'ideas',
    stage: 'idea',
    series: 'Mitos sobre sites',
    whyItMatters:
      'Quebra o mito de que “visual moderno” sozinho resolve. Abre espaço para falar de clareza, hierarquia e caminho até o contato.',
    businessReaction:
      '"Eu achei que bastava ficar bonito."',
    shareability:
      'Título polarizador, fácil de salvar e mandar no WhatsApp do sócio.',
    createdAt: '2026-07-29',
    updatedAt: '2026-07-29',
  },
  {
    id: 'IDEA-003',
    title: '5 erros que fazem o cliente desistir',
    theme:
      'Checklist visual dos erros mais comuns em sites de comércios locais.',
    status: 'ideas',
    stage: 'idea',
    series: 'Erros que afastam clientes',
    whyItMatters:
      'Lista prática = alto potencial de salvamento. Posiciona Vinícius como quem enxerga o que o empresário não vê.',
    businessReaction:
      '"Marquei 3 desses no meu site."',
    shareability:
      'Formato lista + diagnóstico pessoal = comentário e compartilhamento.',
    createdAt: '2026-07-29',
    updatedAt: '2026-07-29',
  },
  {
    id: 'IDEA-004',
    title: 'Google ou Instagram: onde seu cliente te encontra?',
    theme:
      'Explicar presença digital completa sem jargão — busca, perfil e site trabalhando juntos.',
    status: 'ideas',
    stage: 'idea',
    series: 'Sites que funcionam',
    whyItMatters:
      'Muitos empresários tratam Instagram e site como mundos separados. Autoridade vem de conectar os dois.',
    businessReaction:
      '"Eu só posto no Instagram e acho que está resolvido."',
    shareability:
      'Comparação clara, útil para donos de clínica, restaurante e escritório.',
    createdAt: '2026-07-29',
    updatedAt: '2026-07-29',
  },
  {
    id: 'IDEA-005',
    title: 'O que um site profissional comunica sem falar',
    theme:
      'Como tipografia, espaço e organização transmitem confiança antes do texto.',
    status: 'ideas',
    stage: 'idea',
    series: 'Como eu faria…',
    whyItMatters:
      'Educa o olhar do empresário. Ele passa a avaliar sites com critério — e a valorizar o trabalho certo.',
    businessReaction:
      '"Nunca tinha reparado nisso."',
    shareability:
      'Conteúdo de autoridade com linguagem simples; bom para série.',
    createdAt: '2026-07-29',
    updatedAt: '2026-07-29',
  },
]

export function getPipelineItem(id: string) {
  return pipelineItems.find((item) => item.id === id)
}

export function itemsByStatus(status: PipelineStatus) {
  return pipelineItems.filter((item) => item.status === status)
}

export function itemsByStage(stage: PipelineStage) {
  return pipelineItems.filter((item) => item.stage === stage)
}

export function validatePipeline() {
  return pipelineItems.flatMap((item) =>
    assertStageOrder(item).map((issue) => `${item.id}: ${issue}`),
  )
}

export function stageProgress(stage: PipelineStage) {
  const meta = STAGE_META[stage]
  const total = Object.keys(STAGE_META).length - 1
  return { current: meta.order, total, label: meta.label }
}

/** Next free IDEA-XXX id */
export function nextIdeaId() {
  const max = pipelineItems.reduce((acc, item) => {
    const num = Number(item.id.replace(/\D/g, ''))
    return Number.isFinite(num) ? Math.max(acc, num) : acc
  }, 0)
  return `IDEA-${String(max + 1).padStart(3, '0')}`
}
