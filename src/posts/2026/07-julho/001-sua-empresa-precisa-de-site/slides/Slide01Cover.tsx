import { base } from '@/design-system'
import { GazuComposition } from '../variants/swiss/CoverGazuEditorial'
import { SlideShell } from './shared'

/**
 * Slide 01 — capa aprovada (A · GAZU Editorial).
 * Mesma composição da página de variantes, em shell full-bleed do PostCanvas.
 */
export function Slide01Cover() {
  return (
    <SlideShell surface={base.paper}>
      <GazuComposition />
    </SlideShell>
  )
}
