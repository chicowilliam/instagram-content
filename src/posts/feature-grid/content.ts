export const content = {
  badge: 'Presença digital',
  title: 'Seu cliente percebe a qualidade antes de ler.',
  subtitle:
    'Três decisões visuais que aumentam a confiança na sua empresa.',
  /** Accent substring for TypographyAccent on the cover */
  titleAccent: 'qualidade',
  features: [
    {
      title: 'Clareza',
      description: 'O visitante entende rapidamente o que sua empresa oferece.',
      icon: 'spark',
      weight: 'hero' as const,
    },
    {
      title: 'Cuidado',
      description: 'Detalhes consistentes comunicam organização e profissionalismo.',
      icon: 'layers',
      weight: 'secondary' as const,
    },
    {
      title: 'Direção',
      description: 'O próximo passo — contato, reserva ou orçamento — fica evidente.',
      icon: 'zap',
      weight: 'accent' as const,
    },
  ],
  decisionSteps: [
    { label: 'Primeiro olhar', hint: 'Atenção' },
    { label: 'Sensação', hint: 'Confiança' },
    { label: 'Decisão', hint: 'Ação' },
  ],
  slides: {
    problem: {
      badge: 'Primeira impressão',
      title: 'Confiança não começa no preço.',
      subtitle:
        'Ela começa quando o cliente abre seu site e sente que encontrou uma empresa séria.',
    },
    solution: {
      badge: 'O que transmite confiança',
      title: 'Clareza. Cuidado. Direção.',
      subtitle:
        'Não são efeitos. São sinais de que sua empresa cuida da experiência do cliente.',
    },
    checklist: {
      badge: 'Checklist',
      title: 'Seu site responde isso em poucos segundos?',
      items: [
        'O que a empresa oferece?',
        'Por que confiar nela?',
        'Como entrar em contato?',
      ],
    },
    cta: {
      badge: 'Próximo passo',
      title: 'Revise seu site como se fosse um novo cliente.',
      subtitle:
        'Se ele precisar procurar demais, a experiência já começou com esforço.',
      cta: 'Salve este checklist.',
    },
  },
  stories: [
    {
      badge: 'Teste rápido',
      title: 'Abra o site da sua empresa agora.',
      subtitle: 'Em 3 segundos, fica claro o que você oferece?',
      footer: 'Story 01 · Observe sem explicar',
    },
    {
      badge: 'Confiança',
      title: 'O cliente vê organização antes de ver competência.',
      subtitle:
        'Clareza visual reduz dúvida e ajuda a empresa a parecer tão profissional quanto realmente é.',
      footer: 'Story 02 · Clareza gera confiança',
    },
    {
      badge: 'Checklist',
      title: 'Oferta clara. Motivo para confiar. Próximo passo.',
      subtitle: 'Se faltar um desses pontos, existe espaço para melhorar.',
      footer: 'Story 03 · Salve para revisar',
    },
  ],
  footer: {
    brand: 'Vinícius William',
    handle: 'Desenvolvimento Web',
  },
} as const
