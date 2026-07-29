import type { Brief, CopyDeck, HashtagSet, StoryCopy } from '@/cms/types'

const BASE_HASHTAGS: HashtagSet = {
  high: ['empreendedorismo', 'negocios', 'marketingdigital'],
  medium: ['presencadigital', 'sitesprofissionais', 'pequenosnegocios'],
  low: ['desenvolvimentoweb', 'siteparaempresa', 'viniciuswilliam'],
}

/**
 * Generates a complete copy deck from a brief.
 * Slides stay short — never giant blocks.
 */
export function generateCopy(brief: Brief, title: string): CopyDeck {
  const slides = Array.from({ length: brief.slideCount }, (_, index) => {
    const number = index + 1
    if (number === 1) {
      return {
        number,
        purpose: 'Gancho',
        headline: brief.problem,
        body: 'Abertura direta. Uma frase. Sem explicação longa.',
      }
    }
    if (number === brief.slideCount) {
      return {
        number,
        purpose: 'CTA',
        headline: brief.cta,
        body: 'Convite claro para a próxima ação.',
      }
    }
    return {
      number,
      purpose: `Ponto ${number - 1}`,
      headline: brief.solution,
      body: 'Desenvolver um único ponto por slide.',
    }
  })

  const stories: StoryCopy[] = [
    {
      number: 1,
      role: 'gancho',
      headline: brief.problem,
      body: 'Pergunta ou provocação em uma linha.',
    },
    {
      number: 2,
      role: 'explicacao',
      headline: brief.solution,
      body: 'Um ponto que não coube no carrossel.',
    },
    {
      number: 3,
      role: 'cta',
      headline: brief.cta,
      body: 'Convite para salvar, comentar ou pedir diagnóstico.',
    },
  ]

  return {
    slides,
    stories,
    reel: {
      hook: brief.problem,
      duration: '15–20s',
      scenes: [
        {
          time: '00–03s',
          visual: 'Título limpo em tela.',
          voiceover: brief.problem,
          onScreen: brief.problem,
        },
        {
          time: '03–12s',
          visual: 'Demonstração do conceito em 2–3 cortes.',
          voiceover: brief.solution,
        },
        {
          time: '12–18s',
          visual: 'Tela final com CTA.',
          voiceover: brief.cta,
          onScreen: brief.cta,
        },
      ],
      caption: `${title}\n\n${brief.solution}\n\n${brief.cta}`,
      cta: brief.cta,
    },
    caption: `${brief.problem}\n\n${brief.solution}\n\n${brief.cta}`,
    pinnedComment: 'Qual ponto mais se aplica à sua empresa hoje?',
    suggestedTime: 'Terça-feira, 19h',
    hashtags: BASE_HASHTAGS,
  }
}

export function flattenHashtags(set: HashtagSet): string[] {
  return [...set.high, ...set.medium, ...set.low]
}

export function formatHashtagsMarkdown(set: HashtagSet): string {
  return [
    '# Hashtags',
    '',
    '## Alta concorrência',
    set.high.map((tag) => `#${tag}`).join(' '),
    '',
    '## Média',
    set.medium.map((tag) => `#${tag}`).join(' '),
    '',
    '## Baixa',
    set.low.map((tag) => `#${tag}`).join(' '),
    '',
  ].join('\n')
}
