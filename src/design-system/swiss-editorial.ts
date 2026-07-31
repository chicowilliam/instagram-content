/**
 * SWISS EDITORIAL — Palette System
 *
 * Contrato: docs/swiss-editorial-analysis.md
 * Regra: base neutra + 1 cor principal + tensão opcional.
 * Um carrossel escolhe UMA família; todos os slides respeitam a mesma.
 */

export type SwissPaletteId =
  | 'swiss-classic'
  | 'cobalt-editorial'
  | 'editorial-orange'
  | 'burgundy-premium'
  | 'monochrome-editorial'
  | 'acid-contrast'

export type SwissPalette = {
  readonly id: SwissPaletteId
  readonly label: string
  /** Uso permitido */
  readonly usage: string
  readonly paper: string
  readonly ink: string
  readonly accent: string
  readonly support: string
  readonly muted: string
  readonly line: string
  readonly textPrimary: string
  readonly textSecondary: string
  /** Classes Tailwind de superfície */
  readonly surface: string
  readonly inkClass: string
  readonly accentClass: string
  readonly accentBg: string
  readonly supportClass: string
}

/**
 * Tokens globais espelhados em CSS (`--paper`, `--ink`, …).
 * Preferir estes nomes nos posts Swiss Editorial.
 */
export const swissTokens = {
  paper: 'var(--paper)',
  ink: 'var(--ink)',
  signalRed: 'var(--signal-red)',
  cobalt: 'var(--cobalt)',
  burntOrange: 'var(--burnt-orange)',
  burgundy: 'var(--burgundy)',
  acidLime: 'var(--acid-lime)',
  mutedTeal: 'var(--muted-teal)',
  mutedGray: 'var(--muted-gray)',
  lineSubtle: 'var(--line-subtle)',
  textPrimary: 'var(--text-primary)',
  textSecondary: 'var(--text-secondary)',
} as const

export const swissPalettes: Record<SwissPaletteId, SwissPalette> = {
  'swiss-classic': {
    id: 'swiss-classic',
    label: 'Swiss Classic',
    usage: 'Default do Post 001 e carrosséis educativos de autoridade.',
    paper: '#f1ece1',
    ink: '#0c0c0c',
    accent: '#c4141c',
    support: '#8a8378',
    muted: '#e6e0d4',
    line: 'rgb(12 12 12 / 0.14)',
    textPrimary: '#14120f',
    textSecondary: '#5c574e',
    surface: 'bg-editorial-cream',
    inkClass: 'text-editorial-ink',
    accentClass: 'text-signal-red',
    accentBg: 'bg-signal-red',
    supportClass: 'text-muted-gray',
  },
  'cobalt-editorial': {
    id: 'cobalt-editorial',
    label: 'Cobalt Editorial',
    usage: 'Posts de estrutura / técnica explicada sem cyber.',
    paper: '#f1ece1',
    ink: '#0c0c0c',
    accent: '#0b33f0',
    support: '#8a8378',
    muted: '#e4e2ea',
    line: 'rgb(12 12 12 / 0.14)',
    textPrimary: '#14120f',
    textSecondary: '#5c574e',
    surface: 'bg-editorial-cream',
    inkClass: 'text-editorial-ink',
    accentClass: 'text-electric-cobalt',
    accentBg: 'bg-electric-cobalt',
    supportClass: 'text-muted-gray',
  },
  'editorial-orange': {
    id: 'editorial-orange',
    label: 'Editorial Orange',
    usage: 'Conexão, bastidores, tom mais humano.',
    paper: '#f3eee6',
    ink: '#0c0c0c',
    accent: '#c45a1a',
    support: '#3d6b66',
    muted: '#e8e2d8',
    line: 'rgb(12 12 12 / 0.14)',
    textPrimary: '#14120f',
    textSecondary: '#5c574e',
    surface: 'bg-editorial-cream',
    inkClass: 'text-editorial-ink',
    accentClass: 'text-burnt-orange',
    accentBg: 'bg-burnt-orange',
    supportClass: 'text-muted-teal',
  },
  'burgundy-premium': {
    id: 'burgundy-premium',
    label: 'Burgundy Premium',
    usage: 'Fechamentos, apresentação, tom premium.',
    paper: '#f2ebe3',
    ink: '#0c0c0c',
    accent: '#6e1f2c',
    support: '#8a8178',
    muted: '#e7dfd6',
    line: 'rgb(12 12 12 / 0.14)',
    textPrimary: '#14120f',
    textSecondary: '#5c574e',
    surface: 'bg-editorial-cream',
    inkClass: 'text-editorial-ink',
    accentClass: 'text-burgundy',
    accentBg: 'bg-burgundy',
    supportClass: 'text-muted-gray',
  },
  'monochrome-editorial': {
    id: 'monochrome-editorial',
    label: 'Monochrome Editorial',
    usage: 'Quando a foto/mockup carrega o contraste sozinho.',
    paper: '#f0efec',
    ink: '#0d0d0d',
    accent: '#0d0d0d',
    support: '#7a7a7a',
    muted: '#e4e3df',
    line: 'rgb(13 13 13 / 0.16)',
    textPrimary: '#0d0d0d',
    textSecondary: '#5a5a5a',
    surface: 'bg-editorial-cream',
    inkClass: 'text-editorial-ink',
    accentClass: 'text-editorial-ink',
    accentBg: 'bg-editorial-ink',
    supportClass: 'text-muted-gray',
  },
  'acid-contrast': {
    id: 'acid-contrast',
    label: 'Acid Contrast',
    usage: 'Uso restrito: 1 detalhe por post. Nunca layout inteiro.',
    paper: '#0a0a0a',
    ink: '#f5f5f5',
    accent: '#b8ff2e',
    support: '#8a8a8a',
    muted: '#1a1a1a',
    line: 'rgb(255 255 255 / 0.18)',
    textPrimary: '#f5f5f5',
    textSecondary: '#a3a3a3',
    surface: 'bg-editorial-ink',
    inkClass: 'text-white',
    accentClass: 'text-neon-lime',
    accentBg: 'bg-neon-lime',
    supportClass: 'text-white/50',
  },
} as const

/** Post 001 — família fixa */
export const POST_001_PALETTE: SwissPaletteId = 'swiss-classic'

export function getSwissPalette(id: SwissPaletteId = POST_001_PALETTE): SwissPalette {
  return swissPalettes[id]
}
