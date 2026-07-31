import { CoverDarkTech } from './CoverDarkTech'
import { CoverEditorialColorful } from './CoverEditorialColorful'
import { CoverHybridPremium } from './CoverHybridPremium'
import { CoverGazuEditorial } from './swiss/CoverGazuEditorial'
import { CoverSwissDisruption } from './swiss/CoverSwissDisruption'
import { CoverCyberTechEditorial } from './swiss/CoverCyberTechEditorial'

export { CoverDarkTech } from './CoverDarkTech'
export { CoverEditorialColorful } from './CoverEditorialColorful'
export { CoverHybridPremium } from './CoverHybridPremium'
export { CoverGazuEditorial } from './swiss/CoverGazuEditorial'
export { CoverSwissDisruption } from './swiss/CoverSwissDisruption'
export { CoverCyberTechEditorial } from './swiss/CoverCyberTechEditorial'

/** Capas legadas — arquivadas para comparação, não são qualidade-alvo. */
export const coverVariants = [
  {
    id: 'dark-tech',
    label: 'Dark Tech (legado)',
    note: 'Direção anterior — navy + glow.',
    Component: CoverDarkTech,
    scores: {
      impacto: 7.2,
      leituraMobile: 7.5,
      originalidade: 6.8,
      coerencia: 7.0,
      reutilizacao: 7.4,
      exportacao: 8.5,
    },
  },
  {
    id: 'editorial-colorful',
    label: 'Editorial Colorful (legado)',
    note: 'Direção anterior — não usar como qualidade-alvo.',
    Component: CoverEditorialColorful,
    scores: {
      impacto: 7.0,
      leituraMobile: 7.6,
      originalidade: 7.2,
      coerencia: 6.5,
      reutilizacao: 6.8,
      exportacao: 8.4,
    },
  },
  {
    id: 'hybrid-premium',
    label: 'Hybrid Premium (legado)',
    note: 'Direção anterior — TrustMeter / glow / SaaS.',
    Component: CoverHybridPremium,
    scores: {
      impacto: 7.4,
      leituraMobile: 7.5,
      originalidade: 6.9,
      coerencia: 7.1,
      reutilizacao: 7.2,
      exportacao: 8.6,
    },
  },
] as const

export type CoverVariantId = (typeof coverVariants)[number]['id']

/**
 * Preview legado em `/post/001` e DefaultCover usam a capa aprovada.
 * Variantes B e C permanecem em `/post/001/variants` para referência.
 */
export const DefaultCover = CoverGazuEditorial

export type ScoreCard = {
  impacto: number
  originalidade: number
  legibilidade: number
  conexaoEmpresarios: number
  personalidade: number
  relacaoWeb: number
  potencialMarca: number
  qualidadeEstatica: number
  miniatura: number
  continuidade: number
}

export type SwissCoverVariant = {
  id: 'gazu-editorial' | 'swiss-disruption' | 'cyber-tech-editorial'
  letter: 'A' | 'B' | 'C'
  label: string
  mode: 'EDITORIAL_FASHION' | 'SWISS_DISRUPTION' | 'CYBER_TECHNICAL'
  note: string
  components: string[]
  Cover: typeof CoverGazuEditorial
  scores: ScoreCard
  notes: {
    impacto: string
    originalidade: string
    legibilidade: string
    conexao: string
    riscos: string
  }
}

export function variantAverage(scores: ScoreCard) {
  const values = Object.values(scores)
  return values.reduce((sum, value) => sum + value, 0) / values.length
}

/**
 * SWISS TECH EDITORIAL — três capas do Slide 1.
 *
 * Critério: nenhuma nota sem explicação. Nenhuma nota alta automática.
 * Média ≥ 8,5 = elegível. Abaixo disso, a variante precisa de revisão.
 *
 * A Fase 5 (cinco slides) só começa depois da escolha do usuário.
 */
export const swissCoverVariants: SwissCoverVariant[] = [
  {
    id: 'gazu-editorial',
    letter: 'A',
    label: 'GAZU EDITORIAL',
    mode: 'EDITORIAL_FASHION',
    note: 'Papel quente, palavra IMPRESSÃO em escala de wordmark, browser monocromático ocluindo a tipografia, um único fio vermelho.',
    components: [
      'MassiveWord',
      'BrowserCutout',
      'WebsiteFragment',
      'PaperGrain',
      'CropMarks',
      'AnnotationMark',
      'SlideCounter',
      'BrandSignature',
    ],
    Cover: CoverGazuEditorial,
    scores: {
      impacto: 8.6,
      originalidade: 8.8,
      legibilidade: 9.1,
      conexaoEmpresarios: 9.0,
      personalidade: 8.7,
      relacaoWeb: 9.2,
      potencialMarca: 9.0,
      qualidadeEstatica: 9.3,
      miniatura: 8.4,
      continuidade: 9.2,
    },
    notes: {
      impacto:
        'A palavra gigante para o scroll, mas a monocromia é mais quieta que B e C. Em feed barulhento pode precisar de um segundo olhar.',
      originalidade:
        'Longe do SaaS navy/glow. Risco residual de parecer “moda minimalista” se o browser não for imediatamente lido como site de negócio.',
      legibilidade:
        'Título e suporte legíveis em escala plena. Em ~270px a palavra IMPRESSÃO ainda domina; a anotação some (aceitável).',
      conexao:
        'O site da cafeteria dentro do browser é o que conecta com empresário. Sem ele, a peça seria só tipografia de moda.',
      riscos:
        'Continuidade alta — o modo Editorial Fashion escala bem para o Slide 5. Miniatura é o ponto mais fraco: monocromia perde tensão em 25%.',
    },
  },
  {
    id: 'swiss-disruption',
    letter: 'B',
    label: 'SWISS DISRUPTION',
    mode: 'SWISS_DISRUPTION',
    note: 'Papel, vermelho e preto. IMPRESSÃO vertical, cunha preta, browser inclinado no eixo do modo, escada tipográfica de critérios.',
    components: [
      'VerticalHeadline',
      'DiagonalHeadline',
      'ImageMask',
      'BrowserCutout',
      'WebsiteFragment',
      'SwissRule',
      'MicroTypeBlock',
      'SlideCounter',
      'BrandSignature',
    ],
    Cover: CoverSwissDisruption,
    scores: {
      impacto: 9.2,
      originalidade: 9.3,
      legibilidade: 8.3,
      conexaoEmpresarios: 8.7,
      personalidade: 9.4,
      relacaoWeb: 9.0,
      potencialMarca: 9.1,
      qualidadeEstatica: 9.2,
      miniatura: 8.1,
      continuidade: 8.5,
    },
    notes: {
      impacto:
        'Vermelho + tipografia vertical + cunha preta criam tensão imediata. É a mais “pôster” das três.',
      originalidade:
        'Mais distante de qualquer template de Instagram. Poucos perfis de desenvolvimento web usam linguagem suíça real.',
      legibilidade:
        'A palavra vertical é ilegível na miniatura — isso é o risco estrutural do modo. A mensagem horizontal (“Antes de ler…”) carrega a leitura; a vertical é estrutura, não conteúdo.',
      conexao:
        'O browser da clínica ainda ancora o tema. A escada MENSAGEM/HIERARQUIA/AÇÃO/PERCEPÇÃO fala a linguagem de quem avalia presença digital.',
      riscos:
        'Continuidade média: se todos os slides forem assim, o perfil vira campanha suíça e perde a variedade. Miniatura é o ponto mais fraco das três.',
    },
  },
  {
    id: 'cyber-tech-editorial',
    letter: 'C',
    label: 'CYBER TECH EDITORIAL',
    mode: 'CYBER_TECHNICAL',
    note: 'Cobalto chapado, magenta, browser dark central, colunas de microtipografia com dados reais, barcode e numeral 01.',
    components: [
      'MassiveWord',
      'BrowserCutout',
      'WebsiteFragment',
      'BarcodeDecoration',
      'MicroTypeBlock',
      'PosterNumber',
      'CoordinatesLabel',
      'CutoutShadow',
      'SlideCounter',
      'BrandSignature',
    ],
    Cover: CoverCyberTechEditorial,
    scores: {
      impacto: 9.0,
      originalidade: 8.9,
      legibilidade: 8.6,
      conexaoEmpresarios: 8.2,
      personalidade: 9.1,
      relacaoWeb: 9.3,
      potencialMarca: 8.8,
      qualidadeEstatica: 9.1,
      miniatura: 8.8,
      continuidade: 8.0,
    },
    notes: {
      impacto:
        'Cobalto saturado + palavra branca gigante param o scroll. Miniatura favorece porque a cor chapada sobrevive à redução.',
      originalidade:
        'Mais próxima da referência NX-07, mas o objeto é um site — não um capacete. Evita o cosplay cyberpunk.',
      legibilidade:
        'Título branco sobre cobalto funciona. Microtipografia some na miniatura (esperado). Risco: densidade técnica pode parecer “para programador”.',
      conexao:
        'É a mais frágil com o público empresário. Cobalto + magenta + barcode comunicam tecnologia, mas podem intimidar quem não é da área. O browser do escritório mitiga, não elimina.',
      riscos:
        'Continuidade baixa: se o perfil inteiro for assim, afasta o público. Funciona como slide de energia pontual, não como linguagem permanente.',
    },
  },
]
