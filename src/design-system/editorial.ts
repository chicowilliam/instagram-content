/**
 * Editorial Web Intelligence — semantic tokens for Instagram posts.
 * Prefer these over raw hex in post compositions.
 */

export const editorial = {
  ink: 'bg-editorial-ink text-editorial-paper',
  paper: 'bg-editorial-paper text-editorial-primary',
  inkFg: 'text-editorial-ink',
  paperFg: 'text-editorial-paper',
  cobalt: 'text-brand-cobalt',
  cobaltBg: 'bg-brand-cobalt',
  orange: 'text-signal-orange',
  orangeBg: 'bg-signal-orange',
  lime: 'text-signal-lime',
  limeBg: 'bg-signal-lime',
  muted: 'bg-editorial-muted',
  border: 'border-editorial-border',
  textPrimary: 'text-editorial-primary',
  textSecondary: 'text-editorial-secondary',
  /** Display scales tuned for 1080×1350 */
  displayXl: 'font-display text-[110px] font-black leading-[0.92] tracking-[-0.045em]',
  displayLg: 'font-display text-[92px] font-bold leading-[0.95] tracking-[-0.04em]',
  display: 'font-display text-[78px] font-bold leading-[0.98] tracking-[-0.035em]',
  h1: 'font-display text-[64px] font-semibold leading-[1.05] tracking-[-0.03em]',
  h2: 'font-display text-[52px] font-semibold leading-[1.08] tracking-[-0.03em]',
  body: 'text-[34px] leading-[1.35] tracking-[-0.015em]',
  bodySm: 'text-[31px] leading-[1.4] tracking-[-0.01em]',
  label: 'font-mono text-[23px] leading-[1.3] tracking-[0.12em] uppercase',
  footer: 'font-mono text-[21px] leading-[1.3] tracking-[0.1em] uppercase',
  serifAccent: 'font-serif italic',
} as const

export const editorialSurfaces = {
  paper: 'surface-editorial-intel text-editorial-primary',
  ink: 'surface-editorial-ink text-editorial-paper',
} as const
