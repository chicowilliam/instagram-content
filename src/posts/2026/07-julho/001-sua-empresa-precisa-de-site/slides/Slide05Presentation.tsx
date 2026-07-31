import {
  AmbientPanel,
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
 * Slide 05 — APRESENTAÇÃO · Swiss Editorial
 *
 * visualConcept:
 * - tópico: autoria Vinícius William
 * - metáfora: nome como pôster / marca tipográfica
 * - hero: VINÍCIUS display + William serif
 * - environment: ink + banda vermelha
 * - tensão: signal-red pontual
 * - paleta: swiss-classic (base ink)
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
              color="bg-signal-red/[0.08]"
              className="top-0 right-0 h-full w-[220px]"
            />
            <ShapeCut
              shape="arch"
              color="bg-white/[0.03]"
              className="-right-[130px] top-[190px] h-[520px] w-[360px]"
            />
            <EditorialBand
              color="bg-signal-red/30"
              className="top-[500px] right-[220px] left-0 h-px"
            />
            <FadedNumber tone="ink" className="right-[28px] bottom-[110px]">
              05
            </FadedNumber>
          </>
        }
      />

      <div className="absolute top-[72px] left-[64px] right-[64px] flex items-start justify-between">
        <TechnicalLabel marker="05/05" tone="ink" accent="text-signal-red">
          Apresentação
        </TechnicalLabel>
        <TechnicalLabel tone="ink" size="xs">
          viniciuswilliam.dev
        </TechnicalLabel>
      </div>

      <div className="absolute top-[180px] left-[-20px]">
        <MassiveWord size="massive" className="text-white">
          VINÍCIUS
        </MassiveWord>
      </div>
      <div className="absolute top-[340px] left-[64px]">
        <p className={`${typeScale.serif.xl} text-signal-red`}>William</p>
      </div>

      <span
        aria-hidden
        className="absolute top-[470px] left-[64px] h-[6px] w-[180px] bg-signal-red"
      />

      <div className="absolute top-[520px] left-[64px] w-[820px]">
        <p className={`${typeScale.display.sm} text-white`}>{copy.s5.lead}</p>
        <p className={`${typeScale.body.lg} mt-4 text-white/70`}>{copy.s5.twist}</p>
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

      <div className="absolute bottom-[140px] left-[64px]">
        <p
          className={`${typeScale.body.md} text-white underline decoration-signal-red decoration-2 underline-offset-8`}
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
