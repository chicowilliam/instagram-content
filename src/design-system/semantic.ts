/**
 * Semantic token layer.
 *
 * Components never write raw utilities like `rounded-xl` or `p-6`.
 * They ask for intent — `radius.card`, `pad.canvas` — and this file decides
 * which primitive answers. Changing a decision here updates the whole system.
 *
 * Layering: component → semantic token → Tailwind scale → CSS variable.
 */

/** Corner language. Values map to --radius-* in styles/index.css. */
export const radius = {
  /** Inputs, chips, small controls */
  control: 'rounded-sm',
  /** Inner tiles nested inside cards */
  tile: 'rounded-md',
  /** Default card and mockup frame */
  card: 'rounded-lg',
  /** Large panels */
  panel: 'rounded-xl',
  /** Full canvas / hero surfaces */
  canvas: 'rounded-2xl',
  /** Device bezel */
  device: 'rounded-[52px]',
  /** Device screen inside a bezel */
  screen: 'rounded-[42px]',
  pill: 'rounded-full',
  none: 'rounded-none',
} as const

/** Vertical rhythm between stacked elements. */
export const stack = {
  xs: 'gap-2',
  sm: 'gap-3',
  md: 'gap-4',
  lg: 'gap-6',
  xl: 'gap-10',
  section: 'gap-14',
  chapter: 'gap-20',
} as const

/** Interior breathing room. */
export const pad = {
  control: 'px-3 py-1.5',
  chip: 'px-2.5 py-0.5',
  card: 'p-5',
  tile: 'p-6',
  canvas: 'p-8',
  page: 'px-8 py-10',
} as const

/** Elevation. Values map to --shadow-* tokens. */
export const shadow = {
  card: 'shadow-soft',
  raised: 'shadow-lift',
  inset: 'shadow-inset',
  none: 'shadow-none',
} as const

/** Depth blur. Used by background layers, never on text. */
export const blur = {
  edge: 'blur-[40px]',
  glow: 'blur-[80px]',
  aurora: 'blur-[120px]',
  veil: 'backdrop-blur-xl',
} as const

/** Layer intensity. Keeps texture and glow discreet. */
export const opacity = {
  ghost: 'opacity-[0.03]',
  faint: 'opacity-[0.06]',
  subtle: 'opacity-[0.12]',
  soft: 'opacity-25',
  muted: 'opacity-40',
  strong: 'opacity-70',
} as const

/** Hairline borders. Dark variants assume a dark surface underneath. */
export const border = {
  hairline: 'border border-surface-200',
  hairlineDark: 'border border-white/10',
  divider: 'border-b border-surface-200',
  dividerDark: 'border-b border-white/10',
  dashed: 'border border-dashed border-surface-200',
  none: 'border-0',
} as const

/** UI type roles for the CMS. Post canvases use `typography` / `display`. */
export const text = {
  pageTitle: 'text-3xl font-semibold tracking-[-0.03em] text-ink-950',
  sectionTitle: 'text-sm font-medium tracking-[-0.01em] text-ink-900',
  cardTitle: 'text-[15px] font-medium leading-snug tracking-[-0.01em] text-ink-950',
  body: 'text-sm leading-relaxed text-ink-500',
  label: 'text-[11px] uppercase tracking-[0.14em] text-ink-300',
  metric: 'text-3xl font-semibold tracking-[-0.03em] text-ink-950',
  mono: 'font-mono text-[11px] tracking-[0.08em] text-ink-300',
} as const

/**
 * Entrance animations (tailwindcss-animate).
 * CMS interface only — post canvases must stay static for Playwright.
 */
export const animation = {
  fade: 'animate-in fade-in duration-500',
  rise: 'animate-in fade-in slide-in-from-bottom-2 duration-500',
  scale: 'animate-in fade-in zoom-in-95 duration-300',
  slide: 'animate-in slide-in-from-left-2 fade-in duration-300',
  none: '',
} as const

/** Motion variants for the `motion` library. Same intent, JS-driven. */
export const motionPreset = {
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
  rise: {
    initial: { opacity: 0, y: 8 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
  scale: {
    initial: { opacity: 0, scale: 0.97 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
  },
} as const

export type Radius = keyof typeof radius
export type Stack = keyof typeof stack
export type Pad = keyof typeof pad
export type Shadow = keyof typeof shadow
export type Blur = keyof typeof blur
export type Opacity = keyof typeof opacity
export type Border = keyof typeof border
export type TextRole = keyof typeof text
export type Animation = keyof typeof animation
