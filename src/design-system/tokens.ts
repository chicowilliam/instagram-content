/**
 * Design System tokens — Apple / Linear / Stripe / Vercel / Framer inspired.
 * Prefer these constants when composing new posts.
 */

export const formats = {
  /** Instagram feed square */
  square: { width: 1080, height: 1080, label: '1:1 Feed' },
  /** Instagram portrait feed (recommended) */
  portrait: { width: 1080, height: 1350, label: '4:5 Portrait' },
  /** Instagram story / reel cover */
  story: { width: 1080, height: 1920, label: '9:16 Story' },
} as const

export type PostFormat = keyof typeof formats

export const spacing = {
  /** Outer padding inside the post canvas */
  canvas: {
    square: 72,
    portrait: 80,
    story: 88,
  },
  stack: {
    xs: 12,
    sm: 16,
    md: 24,
    lg: 40,
    xl: 56,
    '2xl': 80,
  },
} as const

export const typography = {
  display: 'text-[72px] leading-[1.05] tracking-[-0.04em] font-semibold',
  h1: 'text-[56px] leading-[1.08] tracking-[-0.035em] font-semibold',
  h2: 'text-[40px] leading-[1.15] tracking-[-0.03em] font-semibold',
  h3: 'text-[28px] leading-[1.25] tracking-[-0.02em] font-medium',
  body: 'text-[22px] leading-[1.45] tracking-[-0.01em] font-normal',
  bodySm: 'text-[18px] leading-[1.5] tracking-[-0.005em] font-normal',
  caption: 'text-[15px] leading-[1.4] tracking-[0.02em] font-medium uppercase',
  serif: 'font-serif italic',
} as const

/** Oversized poster-scale type. Sizes assume a 1080px-wide canvas. */
export const display = {
  /** Full-width 4-letter wordmark */
  wordmark: 'font-display font-black text-[300px] leading-[0.78] tracking-[-0.045em]',
  /** Poster headline */
  poster: 'font-display font-black text-[150px] leading-[0.84] tracking-[-0.035em]',
  /** Secondary poster line */
  posterSm: 'font-display font-extrabold text-[96px] leading-[0.9] tracking-[-0.03em]',
  /** Numeric strip */
  numerals: 'font-display font-black text-[164px] leading-[0.8] tracking-[-0.02em]',
  /** Mono technical label */
  mono: 'font-mono text-[15px] leading-[1.35] tracking-[0.16em] uppercase',
  monoSm: 'font-mono text-[12px] leading-[1.35] tracking-[0.2em] uppercase',
  /** Hairline editorial caps */
  micro: 'text-[14px] leading-[1.8] tracking-[0.42em] uppercase font-medium',
} as const

export const surfaces = {
  light: 'bg-surface-0 text-ink-900',
  soft: 'gradient-soft text-ink-900',
  mesh: 'gradient-mesh text-ink-900',
  dark: 'gradient-dark text-white',
  editorial: 'surface-editorial text-ink-950',
  acid: 'bg-acid-black text-white',
  techwear: 'surface-techwear text-white',
  swiss: 'surface-swiss text-swiss-ink',
  /** Tech Editorial Premium — navy/graphite canvas for Instagram carousels */
  techEditorial: 'surface-tech-editorial text-te-ink',
} as const

export type Surface = keyof typeof surfaces

/**
 * Semantic color roles for Tech Editorial Premium.
 * Prefer these class names over raw hex in post compositions.
 */
export const techEditorial = {
  bg: 'bg-te-bg',
  bgElevated: 'bg-te-elevated',
  ink: 'text-te-ink',
  inkMuted: 'text-te-muted',
  inkFaint: 'text-te-faint',
  accent: 'text-te-accent',
  accentBg: 'bg-te-accent',
  violet: 'text-te-violet',
  violetBg: 'bg-te-violet',
  cyan: 'text-te-cyan',
  cyanBg: 'bg-te-cyan',
  border: 'border-te-border',
  glow: 'bg-te-glow',
  /** Minimum readable body size on 1080 canvases */
  minReadable: 'text-[27px] leading-[1.35] tracking-[-0.015em]',
  display: 'text-[64px] leading-[1.05] tracking-[-0.04em] font-semibold',
  displayLg: 'text-[72px] leading-[1.02] tracking-[-0.045em] font-semibold',
  h1: 'text-[48px] leading-[1.1] tracking-[-0.035em] font-semibold',
  h2: 'text-[36px] leading-[1.15] tracking-[-0.03em] font-semibold',
  label: 'font-mono text-[14px] leading-[1.4] tracking-[0.18em] uppercase',
} as const

/**
 * Visual languages available in the studio.
 * Each one is a self-contained set of rules — pick one per post, never mix.
 */
export const visualStyles = {
  premium: {
    label: 'Premium Minimal',
    note: 'Respiro, paleta neutra, bordas suaves.',
  },
  editorial: {
    label: 'Editorial Mono',
    note: 'Papel quente, wordmark gigante, caixa alta espaçada.',
  },
  acid: {
    label: 'Acid Bento',
    note: 'Preto absoluto, tiles neon, tipografia sticker.',
  },
  techwear: {
    label: 'Techwear HUD',
    note: 'Azul elétrico, rosa neon, dados técnicos sobrepostos.',
  },
  swiss: {
    label: 'Swiss Grotesk',
    note: 'Creme, vermelho sinal, grid rotacionado, numerais gigantes.',
  },
  techEditorial: {
    label: 'Tech Editorial Premium',
    note: 'Navy/grafite, tipografia quase branca, acentos elétricos controlados.',
  },
  editorialIntel: {
    label: 'Editorial Web Intelligence',
    note: 'Papel quente + ink, cobalt, signal orange; tipografia cartaz; zero card soup.',
  },
} as const

export type VisualStyle = keyof typeof visualStyles
