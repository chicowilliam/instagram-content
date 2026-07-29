import type { Brief, CopyDeck, PostMeta } from '@/cms/types'

export const meta: PostMeta = {
  id: '001',
  slug: 'sua-empresa-precisa-de-site',
  title: 'Seu cliente percebe a qualidade antes de ler',
  category: 'confianca',
  objective: 'autoridade',
  status: 'READY',
  template: 'lista',
  slideCount: 5,
  storyCount: 3,
  folder: '2026/07-julho/001-sua-empresa-precisa-de-site',
  createdAt: '2026-07-01',
  updatedAt: '2026-07-29',
  series: 'Fundamentos · Semana 01',
  week: 1,
}

export const brief: Brief = {
  objective: 'autoridade',
  audience: 'Empresários locais que já têm ou precisam de presença digital',
  problem: 'O cliente avalia a empresa pelo site antes de ler qualquer argumento.',
  solution:
    'Clareza, cuidado e direção — três sinais visuais que constroem confiança.',
  cta: 'Salve para revisar a presença digital da sua empresa.',
  slideCount: 5,
  category: 'confianca',
  template: 'lista',
  primaryMetric: 'Salvamentos',
}

export const copy: CopyDeck = {
  slides: [
    {
      number: 1,
      purpose: 'Gancho',
      headline: 'Seu cliente percebe a qualidade antes de ler.',
      body: 'Três decisões visuais que aumentam a confiança na sua empresa.',
    },
    {
      number: 2,
      purpose: 'Problema',
      headline: 'Confiança não começa no preço.',
      body: 'Ela começa quando o cliente abre seu site e sente que encontrou uma empresa séria.',
    },
    {
      number: 3,
      purpose: 'Solução',
      headline: 'Clareza. Cuidado. Direção.',
      body: 'Não são efeitos. São sinais de que sua empresa cuida da experiência.',
    },
    {
      number: 4,
      purpose: 'Checklist',
      headline: 'Seu site responde isso em poucos segundos?',
      body: 'O que oferece? Por que confiar? Como entrar em contato?',
    },
    {
      number: 5,
      purpose: 'CTA',
      headline: 'Revise seu site como se fosse um novo cliente.',
      body: 'Se ele precisar procurar demais, a experiência já começou com esforço.',
    },
  ],
  stories: [
    {
      number: 1,
      role: 'gancho',
      headline: 'Abra o site da sua empresa agora.',
      body: 'Em 3 segundos, fica claro o que você oferece?',
    },
    {
      number: 2,
      role: 'explicacao',
      headline: 'O cliente vê organização antes de ver competência.',
      body: 'Clareza visual reduz dúvida.',
    },
    {
      number: 3,
      role: 'cta',
      headline: 'Oferta clara. Motivo para confiar. Próximo passo.',
      body: 'Salve para revisar.',
    },
  ],
  reel: {
    hook: 'Seu cliente percebe a qualidade antes de ler o texto.',
    duration: '18s',
    scenes: [
      {
        time: '00–03s',
        visual: 'Tela limpa; a frase entra em duas linhas.',
        voiceover: 'Seu cliente percebe a qualidade antes mesmo de ler o texto.',
        onScreen: 'A confiança começa no primeiro olhar.',
      },
      {
        time: '03–08s',
        visual: 'Card 1: hierarquia e organização.',
        voiceover: 'Primeiro: organização. Ele precisa entender rapidamente onde está.',
        onScreen: '01 · Clareza',
      },
      {
        time: '08–13s',
        visual: 'Card 2: detalhes de interface.',
        voiceover: 'Depois: cuidado. Detalhes consistentes mostram profissionalismo.',
        onScreen: '02 · Cuidado',
      },
      {
        time: '13–18s',
        visual: 'Card 3: caminho até contato.',
        voiceover: 'Por fim: direção. O próximo passo precisa ser óbvio.',
        onScreen: '03 · Direção',
      },
    ],
    caption:
      'Seu cliente não avalia o código do seu site. Ele percebe clareza, cuidado e facilidade.',
    cta: 'Salve e revise esses três pontos no seu site.',
  },
  caption:
    'Seu cliente não avalia o código do seu site. Ele percebe clareza, cuidado e facilidade.\n\nUma presença digital confiável começa com três decisões: organizar a informação, cuidar dos detalhes e facilitar o próximo passo.\n\nSalve para revisar a presença digital da sua empresa.',
  pinnedComment:
    'Qual destes três pontos sua empresa mais precisa melhorar hoje?',
  suggestedTime: 'Terça-feira, 19h',
  hashtags: {
    high: ['empreendedorismo', 'negocios', 'marketingdigital'],
    medium: ['presencadigital', 'sitesprofissionais', 'experienciadocliente'],
    low: ['desenvolvimentoweb', 'siteparaempresa', 'viniciuswilliam'],
  },
}
