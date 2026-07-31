import type { ReactNode } from 'react'

export type VisualTone = 'dark' | 'light'

export type VisualProps = {
  className?: string
  tone?: VisualTone
}

export type VisualChildren = VisualProps & {
  children?: ReactNode
}
