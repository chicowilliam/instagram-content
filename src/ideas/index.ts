import type { ContentIdea } from '@/cms/types'

/**
 * Ideas inbox — every theme starts here before becoming a post.
 */
export const ideas: ContentIdea[] = [
  {
    id: 'IDEA-001',
    title: 'Quanto custa um site',
    notes: 'Quebrar a faixa de preço e o que está incluso.',
    tags: ['preço', 'decisão'],
    status: 'open',
    createdAt: '2026-07-01',
  },
  {
    id: 'IDEA-002',
    title: 'Instagram vs Site',
    notes: 'Aluguel vs imóvel digital.',
    tags: ['confiança', 'redes sociais'],
    status: 'open',
    createdAt: '2026-07-02',
  },
  {
    id: 'IDEA-003',
    title: 'Landing Page',
    notes: 'Quando uma página única converte melhor que o site.',
    tags: ['conversão', 'campanha'],
    status: 'open',
    createdAt: '2026-07-03',
  },
  {
    id: 'IDEA-004',
    title: 'SEO para negócios locais',
    notes: 'Aparecer quando o cliente pesquisa serviço + cidade.',
    tags: ['encontrabilidade', 'google'],
    status: 'open',
    createdAt: '2026-07-04',
  },
  {
    id: 'IDEA-005',
    title: 'Google Meu Negócio',
    notes: 'Campos que a maioria deixa vazio.',
    tags: ['google', 'local'],
    status: 'open',
    createdAt: '2026-07-05',
  },
  {
    id: 'IDEA-006',
    title: 'IA no site da empresa',
    notes: 'O que ajuda e o que só enfeita.',
    tags: ['ia', 'tendência'],
    status: 'open',
    createdAt: '2026-07-06',
  },
  {
    id: 'IDEA-007',
    title: 'Lovable e builders prontos',
    notes: 'Quando serve e quando limita o negócio.',
    tags: ['ferramentas', 'decisão'],
    status: 'open',
    createdAt: '2026-07-07',
  },
  {
    id: 'IDEA-008',
    title: 'React para empresários',
    notes: 'Explicar o valor sem jargão técnico.',
    tags: ['tecnologia', 'educar'],
    status: 'open',
    createdAt: '2026-07-08',
  },
  {
    id: 'IDEA-009',
    title: 'Performance e velocidade',
    notes: 'Site lento = cliente perdido.',
    tags: ['experiência', 'velocidade'],
    status: 'open',
    createdAt: '2026-07-09',
  },
  {
    id: 'IDEA-010',
    title: 'Sites para restaurantes',
    notes: 'Cardápio, reserva e pedido direto.',
    tags: ['nicho', 'restaurantes'],
    status: 'open',
    createdAt: '2026-07-10',
  },
  {
    id: 'IDEA-011',
    title: 'Sites para clínicas',
    notes: 'Confiança, agendamento e privacidade.',
    tags: ['nicho', 'clínicas'],
    status: 'open',
    createdAt: '2026-07-11',
  },
  {
    id: 'IDEA-012',
    title: 'Sites para academias',
    notes: 'Planos, horários e matrícula online.',
    tags: ['nicho', 'academias'],
    status: 'open',
    createdAt: '2026-07-12',
  },
  {
    id: 'IDEA-013',
    title: 'Sites para advogados',
    notes: 'Autoridade, áreas de atuação e contato discreto.',
    tags: ['nicho', 'advogados'],
    status: 'open',
    createdAt: '2026-07-13',
  },
]

export function openIdeas() {
  return ideas.filter((idea) => idea.status === 'open')
}

export function getIdea(id: string) {
  return ideas.find((idea) => idea.id === id)
}
