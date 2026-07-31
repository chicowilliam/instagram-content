import type { Brief, CopyDeck, PostMeta } from '@/cms/types'

export const meta: PostMeta = {
  id: '001',
  slug: 'sua-empresa-precisa-de-site',
  title: 'Antes de ler, seu cliente já formou uma impressão',
  category: 'confianca',
  objective: 'autoridade',
  status: 'READY',
  template: 'lista',
  slideCount: 5,
  storyCount: 3,
  folder: '2026/07-julho/001-sua-empresa-precisa-de-site',
  createdAt: '2026-07-01',
  updatedAt: '2026-07-30',
  series: 'Fundamentos · Semana 01',
  week: 1,
}

export const brief: Brief = {
  objective: 'autoridade',
  audience: 'Empresários locais que já têm ou precisam de presença digital',
  problem:
    'O cliente forma uma impressão da empresa pelo site antes de ler qualquer argumento — e sites improvisados afastam.',
  solution:
    'Mostrar que clareza, cuidado e direção transformam a percepção do mesmo negócio.',
  cta: 'Acompanhe os próximos conteúdos.',
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
      headline: 'Antes de ler, seu cliente já formou uma impressão.',
      body: 'A apresentação da sua empresa também comunica.',
    },
    {
      number: 2,
      purpose: 'Problema',
      headline: 'O problema não é ser pequeno. É parecer improvisado.',
      body: 'Hierarquia fraca, ação escondida, excesso de informação, contraste insuficiente.',
    },
    {
      number: 3,
      purpose: 'Demonstração',
      headline: 'Mesmo negócio. Duas percepções.',
      body: 'Versão improvisada versus versão intencional do mesmo site.',
    },
    {
      number: 4,
      purpose: 'Princípios',
      headline: 'Clareza. Cuidado. Direção.',
      body: 'Três sinais que constroem confiança na presença digital.',
    },
    {
      number: 5,
      purpose: 'Apresentação',
      headline: 'Eu desenvolvo sites. Mas o objetivo nunca é apenas entregar páginas.',
      body: 'Design, tecnologia e estratégia para uma presença digital mais forte.',
    },
  ],
  stories: [
    {
      number: 1,
      role: 'gancho',
      headline: 'Abra o site da sua empresa agora.',
      body: 'Em poucos segundos, a impressão já aconteceu.',
    },
    {
      number: 2,
      role: 'explicacao',
      headline: 'O problema não é ser pequeno.',
      body: 'É parecer improvisado.',
    },
    {
      number: 3,
      role: 'cta',
      headline: 'Clareza. Cuidado. Direção.',
      body: 'Acompanhe os próximos conteúdos.',
    },
  ],
  reel: {
    hook: 'Antes de ler, seu cliente já formou uma impressão.',
    duration: '18s',
    scenes: [
      {
        time: '00–03s',
        visual: 'Palavra IMPRESSÃO gigante com browser atravessando.',
        voiceover: 'Antes de ler, seu cliente já formou uma impressão.',
        onScreen: 'Primeira impressão',
      },
      {
        time: '03–08s',
        visual: 'Site improvisado com anotações vermelhas.',
        voiceover: 'O problema não é ser pequeno. É parecer improvisado.',
        onScreen: 'Improvisado',
      },
      {
        time: '08–13s',
        visual: 'Dois browsers do mesmo negócio se sobrepondo.',
        voiceover: 'Mesmo negócio. Duas percepções.',
        onScreen: 'A × B',
      },
      {
        time: '13–18s',
        visual: 'Clareza, Cuidado, Direção + assinatura.',
        voiceover: 'Clareza, cuidado e direção. Acompanhe os próximos conteúdos.',
        onScreen: 'Vinícius William',
      },
    ],
    caption:
      'Antes de ler, seu cliente já formou uma impressão.\n\nA apresentação digital da sua empresa também comunica.',
    cta: 'Acompanhe os próximos conteúdos.',
  },
  caption:
    'Antes de ler, seu cliente já formou uma impressão.\n\nO problema não é ser pequeno. É parecer improvisado.\n\nMesmo negócio, duas percepções — a diferença está na intenção do design.\n\nClareza. Cuidado. Direção.\n\nNeste perfil, vou mostrar como design, tecnologia e estratégia ajudam empresas a construir uma presença digital mais forte.\n\nAcompanhe os próximos conteúdos.',
  pinnedComment:
    'Olhando o site da sua empresa hoje: ele parece intencional ou improvisado?',
  suggestedTime: 'Terça-feira, 19h',
  hashtags: {
    high: ['empreendedorismo', 'negocios', 'marketingdigital'],
    medium: ['presencadigital', 'sitesprofissionais', 'experienciadocliente'],
    low: ['desenvolvimentoweb', 'siteparaempresa', 'viniciuswilliam'],
  },
}
