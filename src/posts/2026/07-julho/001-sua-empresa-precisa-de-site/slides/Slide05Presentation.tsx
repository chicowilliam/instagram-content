import {
  AmbientPanel,
  BackgroundAccent,
  BackgroundSystem,
  EditorialCaption,
  EditorialBand,
  FadedNumber,
  MassiveWord,
  ShapeCut,
  SignatureFooterMinimal,
  TechnicalLabel,
} from '@/components/art-direction'
import { base, typeScale } from '@/design-system'
import { SlideShell, TOTAL, copy } from './shared'

/**
 * Slide 05 — APRESENTAÇÃO · EDITORIAL_FASHION
 *
 * visualConcept: docs/post-001-visual-concepts.md
 * Sem foto local → tipografia assume o protagonismo.
 * CTA discreto, sem pedido de orçamento.
 */
export function Slide05Presentation() {
  return (
    <SlideShell surface={base.ink} className="text-white">
      <BackgroundSystem
        tone="ink"
        ghostWord="AUTORIA"
        section=""
        atmosphere={
          <>
            <AmbientPanel
              color="bg-electric-cobalt/[0.07]"
              className="top-0 right-0 h-full w-[260px]"
            />
            <ShapeCut
              shape="arch"
              color="bg-white/[0.025]"
              className="-right-[130px] top-[190px] h-[520px] w-[360px]"
            />
            <EditorialBand
              color="bg-electric-cobalt/25"
              className="top-[500px] right-[260px] left-0 h-px"
            />
            <FadedNumber tone="ink" className="right-[28px] bottom-[110px]">
              05
            </FadedNumber>
            <BackgroundAccent
              color="bg-electric-cobalt"
              className="top-[116px] right-[64px]"
            />
          </>
        }
      />

      <div className="absolute top-[72px] left-[64px] right-[64px] flex items-start justify-between">
        <TechnicalLabel marker="05/05" tone="ink" accent="text-electric-cobalt">
          Apresentação
        </TechnicalLabel>
        <TechnicalLabel tone="ink" size="xs">
          viniciuswilliam.dev
        </TechnicalLabel>
      </div>

      {/* Nome como hero tipográfico — sangra pela esquerda */}
      <div className="absolute top-[180px] left-[-20px]">
        <MassiveWord size="massive" className="text-white">
          VINÍCIUS
        </MassiveWord>
      </div>
      <div className="absolute top-[340px] left-[64px]">
        <p
          className={`${typeScale.serif.xl} text-electric-cobalt`}
        >
          William
        </p>
      </div>

      {/* Único detalhe cobalt estrutural */}
      <span
        aria-hidden
        className="absolute top-[470px] left-[64px] h-[6px] w-[180px] bg-electric-cobalt"
      />

      <div className="absolute top-[520px] left-[64px] w-[820px]">
        <p className={`${typeScale.display.sm} text-white`}>{copy.s5.lead}</p>
        <p className={`${typeScale.body.lg} mt-4 text-white/70`}>
          {copy.s5.twist}
        </p>
      </div>

      <div className="absolute top-[780px] left-[64px] w-[720px]">
        {copy.s5.about.split('\n\n').map((block) => (
          <EditorialCaption
            key={block.slice(0, 24)}
            size="sm"
            className="mb-4 text-white/60"
          >
            {block}
          </EditorialCaption>
        ))}
      </div>

      {/* CTA sem botão agressivo — tipografia + underline */}
      <div className="absolute bottom-[140px] left-[64px]">
        <p
          className={`${typeScale.body.md} text-white underline decoration-electric-cobalt decoration-2 underline-offset-8`}
        >
          {copy.s5.cta}
        </p>
      </div>

      <SignatureFooterMinimal
        current={5}
        total={TOTAL}
        tone="ink"
        category="Apresentação · ed. 001"
        className="absolute right-[64px] bottom-[38px] left-[64px]"
      />
    </SlideShell>
  )
}
