import {
  AmbientPanel,
  BackgroundSystem,
  CoordinatesLabel,
  EditorialBand,
  FadedNumber,
  ShapeCut,
  SignatureFooterMinimal,
  SwissRule,
  TechnicalLabel,
  VerticalHeadline,
} from '@/components/art-direction'
import { AnnotatedBadWebsite } from '@/components/mocksites'
import { typeScale } from '@/design-system'
import { SlideShell, TOTAL, copy } from './shared'

/** Snapshot anterior do Slide 02 — só para /post/001/review */
export function Slide02ProblemV1() {
  return (
    <SlideShell>
      <BackgroundSystem
        ghostWord="DIAGNÓSTICO"
        section=""
        atmosphere={
          <>
            <AmbientPanel
              color="bg-signal-red/[0.06]"
              className="top-0 bottom-0 left-[120px] w-[52px]"
            />
            <ShapeCut
              shape="wedge"
              color="bg-editorial-ink/[0.04]"
              className="-right-[140px] top-[240px] size-[460px]"
            />
            <EditorialBand
              color="bg-signal-red/20"
              className="top-[428px] right-0 left-[176px] h-px"
            />
            <FadedNumber className="right-[34px] bottom-[118px]">02</FadedNumber>
          </>
        }
      />

      <div className="absolute top-0 bottom-0 left-[8px] flex items-center">
        <VerticalHeadline side="left" size="lg" className="text-signal-red">
          {copy.s2.keyword}
        </VerticalHeadline>
      </div>

      <div className="absolute top-[78px] left-[188px] right-[56px] z-20">
        <TechnicalLabel marker="02/05" className="mb-5">
          Diagnóstico
        </TechnicalLabel>
        <p className={`${typeScale.display.sm} text-editorial-ink uppercase`}>
          {copy.s2.lead}
        </p>
        <p className={`${typeScale.display.sm} mt-1 text-editorial-ink uppercase`}>
          {copy.s2.punch}
        </p>
        <p className={`${typeScale.serif.lg} mt-0 text-signal-red`}>improvisado.</p>
      </div>

      <SwissRule
        weight={4}
        length={640}
        className="absolute top-[412px] left-[188px] z-20 text-editorial-ink"
      />
      <CoordinatesLabel className="absolute top-[390px] right-[56px] z-20" />

      <div className="absolute top-[448px] -left-[40px] z-10">
        <span
          aria-hidden
          className={`${typeScale.display.md} pointer-events-none absolute -top-10 right-16 z-0 text-editorial-ink/[0.07] uppercase`}
        >
          SITE
        </span>
        <AnnotatedBadWebsite variant="hero" width={940} angle={-5} className="relative z-10" />
      </div>

      <SignatureFooterMinimal
        current={2}
        total={TOTAL}
        category="Diagnóstico · ed. 001"
        className="absolute right-[56px] bottom-[46px] left-[188px] z-40"
      />
    </SlideShell>
  )
}
