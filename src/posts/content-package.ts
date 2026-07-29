export type ReelScript = {
  hook: string
  scenes: readonly {
    time: string
    visual: string
    voiceover: string
    onScreen?: string
  }[]
  closing: string
}

export type ContentDeliverables = {
  objective: string
  primaryMetric: string
  cta: string
  pinnedComment: string
  suggestedTime: string
  caption: string
  hashtags: readonly string[]
  reel: ReelScript
}

/**
 * Keeps the package mandatory in every registry entry.
 * Real content should replace these template values during Brief and Copy.
 */
export function templateDeliverables(
  title: string,
  description: string,
): ContentDeliverables {
  return {
    objective: 'Educar e construir autoridade',
    primaryMetric: 'Salvamentos',
    cta: 'Salve para consultar quando precisar.',
    pinnedComment: 'Qual ponto mais chamou sua atenção?',
    suggestedTime: 'Terça-feira, 19h',
    caption: `${title}\n\n${description}\n\nSalve para consultar quando precisar.`,
    hashtags: ['presencadigital', 'negocios', 'sitesprofissionais'],
    reel: {
      hook: title,
      scenes: [
        {
          time: '00–03s',
          visual: 'Título em tela com movimento discreto.',
          voiceover: title,
          onScreen: title,
        },
        {
          time: '03–12s',
          visual: 'Demonstração visual do conceito.',
          voiceover: description,
        },
        {
          time: '12–15s',
          visual: 'Tela final limpa com CTA.',
          voiceover: 'Salve para consultar quando precisar.',
          onScreen: 'Salve este conteúdo',
        },
      ],
      closing: 'Salve este conteúdo.',
    },
  }
}
