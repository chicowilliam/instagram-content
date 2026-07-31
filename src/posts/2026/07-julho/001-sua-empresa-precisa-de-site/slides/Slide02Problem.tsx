import {
  EditorialTexture,
  EditorialGrid,
  CropMarks,
  SignatureFooterMinimal,
} from '@/components/art-direction'
import { typeScale } from '@/design-system'
import { SlideShell, TOTAL, copy } from './shared'

/** Asset final de diagnóstico UX (anotações já bakeadas na imagem). */
export const AURA_UX_DIAGNOSTIC_SRC = '/assets/post-001/aura-ux-diagnostic.png'

/**
 * Slide 02 — DIAGNÓSTICO
 *
 * Hierarquia: título → imagem única completa → assinatura.
 * Sem anotações React: a imagem já contém o diagnóstico.
 */
export function Slide02Problem() {
  return (
    <SlideShell className="bg-editorial-cream">
      <EditorialTexture tone="paper" />
      <EditorialGrid tone="paper" inset={48} className="opacity-30" />
      <CropMarks inset={28} />

      {/* ÁREA SUPERIOR ~20–22% — título compacto */}
      <div className="absolute top-[52px] right-[56px] left-[56px] z-20">
        <p className="mb-4 font-mono text-[21px] tracking-[0.18em] text-editorial-ink/50 uppercase">
          02/05 · Diagnóstico
        </p>
        <p className={`${typeScale.display.sm} leading-[0.95] text-editorial-ink`}>
          {copy.s2.lead}
        </p>
        <p className={`${typeScale.display.sm} mt-1 leading-[0.95] text-editorial-ink`}>
          É parecer{' '}
          <span className={`${typeScale.serif.md} text-signal-red`}>improvisado.</span>
        </p>
      </div>

      {/* ÁREA VISUAL ~65% — asset único, sem moldura/anotações extras */}
      <div className="absolute top-[300px] right-[36px] bottom-[140px] left-[36px] z-10 flex items-center justify-center">
        <img
          src={AURA_UX_DIAGNOSTIC_SRC}
          alt="Diagnóstico UX — Aura Estética Avançada"
          className="max-h-full max-w-full object-contain shadow-[0_10px_28px_rgb(12_12_12/0.10)]"
          draggable={false}
        />
      </div>

      <SignatureFooterMinimal
        current={2}
        total={TOTAL}
        domain="viniciuswilliam.dev"
        category="Diagnóstico · ed. 001"
        className="absolute right-[56px] bottom-[46px] left-[56px] z-40"
      />
    </SlideShell>
  )
}
