/**
 * SWISS EDITORIAL — direção de arte dos posts.
 *
 * Contrato: docs/swiss-editorial-analysis.md
 * Identidade: Swiss Editorial somente.
 * Paletas: `swiss-editorial.ts` (6 famílias). Post 001 = swiss-classic.
 *
 * Este arquivo governa apenas as peças de Instagram.
 * O chrome do CMS continua usando `tokens.ts` / `semantic.ts`.
 */

/**
 * Três funções tipográficas. O contraste entre elas é a identidade.
 *
 * Escalas calibradas para o canvas de 1080×1350: nenhum texto significativo
 * abaixo de 21px, porque a miniatura do feed reduz para ~270×338 (25%).
 */
export const typeScale = {
  /**
   * DISPLAY SANS — Archivo. Palavras enormes e títulos principais.
   * `bleed` é para palavra usada como elemento de fundo, podendo ser cortada.
   */
  display: {
    bleed: 'font-display font-black leading-[0.78] tracking-[-0.055em] text-[220px]',
    massive: 'font-display font-black leading-[0.82] tracking-[-0.05em] text-[168px]',
    xl: 'font-display font-black leading-[0.86] tracking-[-0.045em] text-[132px]',
    lg: 'font-display font-bold leading-[0.9] tracking-[-0.04em] text-[108px]',
    md: 'font-display font-bold leading-[0.94] tracking-[-0.035em] text-[88px]',
    sm: 'font-display font-bold leading-[1] tracking-[-0.03em] text-[68px]',
  },

  /**
   * EDITORIAL SERIF — Instrument Serif. Uma palavra ou frase curta de contraste.
   * Proibido em parágrafo. O itálico é o gesto.
   */
  serif: {
    massive: 'font-serif italic font-normal leading-[0.84] tracking-[-0.02em] text-[172px]',
    xl: 'font-serif italic font-normal leading-[0.88] tracking-[-0.015em] text-[136px]',
    lg: 'font-serif italic font-normal leading-[0.95] tracking-[-0.01em] text-[104px]',
    md: 'font-serif italic font-normal leading-[1.02] text-[64px]',
    inline: 'font-serif italic font-normal',
  },

  /**
   * TECH MONO — Geist Mono. Números, etiquetas, códigos, progresso.
   * Sempre caixa alta com tracking largo: é ficha técnica, não texto.
   */
  mono: {
    lg: 'font-mono uppercase leading-[1.2] tracking-[0.14em] text-[34px]',
    md: 'font-mono uppercase leading-[1.25] tracking-[0.16em] text-[27px]',
    sm: 'font-mono uppercase leading-[1.3] tracking-[0.18em] text-[23px]',
    xs: 'font-mono uppercase leading-[1.3] tracking-[0.2em] text-[21px]',
  },

  /** Corpo de apoio — Geist. Nunca compete com o display. */
  body: {
    lg: 'font-sans leading-[1.3] tracking-[-0.02em] text-[46px]',
    md: 'font-sans leading-[1.35] tracking-[-0.015em] text-[38px]',
    sm: 'font-sans leading-[1.4] tracking-[-0.01em] text-[31px]',
  },
} as const

/**
 * Paleta semântica. Espelha os tokens CSS de `styles/index.css`.
 * Regra por slide: uma base + uma cor principal + no máximo uma tensão.
 */
export const palette = {
  ink: 'text-editorial-ink',
  inkBg: 'bg-editorial-ink',
  paper: 'text-editorial-cream',
  paperBg: 'bg-editorial-cream',
  red: 'text-signal-red',
  redBg: 'bg-signal-red',
  cobalt: 'text-electric-cobalt',
  cobaltBg: 'bg-electric-cobalt',
  lime: 'text-neon-lime',
  limeBg: 'bg-neon-lime',
  magenta: 'text-hot-magenta',
  magentaBg: 'bg-hot-magenta',
  gray: 'text-muted-gray',
  border: 'border-editorial-border',
} as const

/** Bases chapadas. Sem gradiente — gradiente é atalho proibido. */
export const base = {
  paper: 'surface-ste-paper',
  ink: 'surface-ste-ink',
  cobalt: 'surface-ste-cobalt',
} as const

/**
 * Modos de composição Swiss Editorial.
 * CYBER / Y2K mantidos só como legado de tipagem — não usar em posts novos.
 */
export type ArtMode =
  | 'EDITORIAL_FASHION'
  | 'SWISS_DISRUPTION'
  /** @deprecated Fora da identidade Swiss Editorial */
  | 'CYBER_TECHNICAL'
  /** @deprecated Fora da identidade Swiss Editorial */
  | 'NEO_Y2K_MODULAR'

interface ModeSpec {
  readonly label: string
  /** Classe de superfície da base */
  readonly surface: string
  /** Cor do texto sobre a base */
  readonly foreground: string
  /** Cor principal do modo */
  readonly accent: string
  /** Única cor de tensão permitida */
  readonly tension: string
  /** Ângulo canônico do modo — rotações se repetem, nunca são aleatórias */
  readonly angle: number
  /** Fração do canvas que o protagonista visual deve ocupar */
  readonly imageShare: readonly [number, number]
  readonly rules: readonly string[]
}

export const modes: Record<ArtMode, ModeSpec> = {
  EDITORIAL_FASHION: {
    label: 'Editorial Fashion',
    surface: base.paper,
    foreground: palette.ink,
    accent: palette.ink,
    tension: palette.red,
    angle: 0,
    imageShare: [0.45, 0.7],
    rules: [
      'Preto, branco e cinza. Cor apenas como detalhe mínimo.',
      'Uma palavra em escala gigante como elemento visual.',
      'Recorte atravessa a tipografia — oclusão obrigatória.',
      'Espaço negativo generoso e intencional.',
    ],
  },
  SWISS_DISRUPTION: {
    label: 'Swiss Disruption',
    surface: base.paper,
    foreground: palette.ink,
    accent: palette.red,
    tension: palette.cobalt,
    angle: -32,
    imageShare: [0.35, 0.55],
    rules: [
      'Base papel, preto e vermelho. Azul só em um detalhe.',
      'Assimetria radical: massa nas bordas, centro respirando.',
      'Texto vertical ou diagonal, sempre no mesmo eixo repetido.',
      'Vermelho é tensão estrutural, nunca enfeite.',
    ],
  },
  CYBER_TECHNICAL: {
    label: 'Cyber Technical',
    surface: base.cobalt,
    foreground: 'text-white',
    accent: palette.magenta,
    tension: palette.lime,
    angle: -45,
    imageShare: [0.5, 0.7],
    rules: [
      'Cor saturada chapada com objeto protagonista escuro no centro.',
      'Microtipografia mono organizada em colunas rígidas.',
      'Toda etiqueta técnica carrega dado real — nunca serial inventado.',
      'Sem texto decorativo em outro idioma.',
    ],
  },
  NEO_Y2K_MODULAR: {
    label: 'Neo Y2K Modular',
    surface: base.ink,
    foreground: 'text-white',
    accent: palette.lime,
    tension: palette.magenta,
    angle: -8,
    imageShare: [0.4, 0.6],
    rules: [
      'Fundo preto, módulos irregulares com identidade própria.',
      'Cor viva em no máximo 10% da área.',
      'Módulo nunca é card corporativo: cada um muda de forma.',
      'Usado como slide de energia, jamais como linguagem do perfil.',
    ],
  },
}

/**
 * Orçamento de composição — verificável, para não repetir o card soup anterior.
 */
export const budget = {
  /** Máximo de elementos com border-radius convencional por slide */
  maxRoundedElements: 2,
  /** Corpo mínimo de qualquer texto significativo, em px de canvas */
  minTextSize: 21,
  /** Corpo mínimo do título principal */
  minHeadlineSize: 80,
  /** Área máxima ocupada por cor viva nos modos Y2K/Cyber */
  maxVividShare: 0.1,
} as const
