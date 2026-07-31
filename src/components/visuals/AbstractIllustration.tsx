import { cn } from '@/lib/cn'
import type { VisualProps } from './types'

type AbstractIllustrationProps = VisualProps & {
  variant?: 'nodes' | 'signal' | 'layers'
}

/** Deterministic SVG scene — quality / connection / structure metaphors. */
export function AbstractIllustration({
  className,
  variant = 'nodes',
  tone = 'dark',
}: AbstractIllustrationProps) {
  return (
    <svg
      viewBox="0 0 320 240"
      className={cn('h-auto w-full', className)}
      aria-hidden
    >
      {variant === 'nodes' ? <Nodes tone={tone} /> : null}
      {variant === 'signal' ? <Signal tone={tone} /> : null}
      {variant === 'layers' ? <Layers tone={tone} /> : null}
    </svg>
  )
}

function Nodes({ tone }: { tone: 'dark' | 'light' }) {
  const stroke = tone === 'dark' ? '#4f7cff' : '#36485e'
  const fill = tone === 'dark' ? '#8b5cf6' : '#4f7cff'
  return (
    <g>
      <path d="M40 180 C90 80, 140 80, 190 140 S280 200, 300 90" stroke={stroke} strokeWidth="2" fill="none" opacity="0.7" />
      <circle cx="60" cy="160" r="10" fill={fill} opacity="0.9" />
      <circle cx="150" cy="100" r="14" fill="#22d3ee" opacity="0.85" />
      <circle cx="230" cy="150" r="12" fill={stroke} />
      <circle cx="290" cy="95" r="8" fill="#f4f6fb" opacity="0.8" />
      <circle cx="150" cy="100" r="28" stroke={stroke} strokeWidth="1.5" fill="none" opacity="0.35" strokeDasharray="4 6" />
    </g>
  )
}

function Signal({ tone }: { tone: 'dark' | 'light' }) {
  const c = tone === 'dark' ? '#4f7cff' : '#455a75'
  return (
    <g fill="none" stroke={c} strokeWidth="2">
      <path d="M160 200 V40" opacity="0.35" />
      <path d="M120 180 C120 110, 200 110, 200 180" opacity="0.5" />
      <path d="M90 190 C90 80, 230 80, 230 190" opacity="0.35" />
      <path d="M60 200 C60 50, 260 50, 260 200" opacity="0.2" />
      <circle cx="160" cy="120" r="16" fill="#8b5cf6" stroke="none" />
    </g>
  )
}

function Layers({ tone }: { tone: 'dark' | 'light' }) {
  const a = tone === 'dark' ? '#4f7cff' : '#5b7391'
  return (
    <g>
      <rect x="50" y="40" width="180" height="110" rx="18" fill={a} opacity="0.25" />
      <rect x="70" y="65" width="180" height="110" rx="18" fill={a} opacity="0.45" />
      <rect x="90" y="90" width="180" height="110" rx="18" fill="#8b5cf6" opacity="0.7" />
      <rect x="110" y="120" width="90" height="14" rx="7" fill="#f4f6fb" opacity="0.85" />
      <rect x="110" y="145" width="56" height="14" rx="7" fill="#22d3ee" opacity="0.75" />
    </g>
  )
}
