import {
  AmbientPanel,
  AnnotationMark,
  BackgroundAccent,
  BackgroundSystem,
  BrowserCutout,
  CoordinatesLabel,
  EditorialBand,
  FadedNumber,
  ShadowPlane,
  ShapeCut,
  SignatureFooterMinimal,
  SwissRule,
  TechnicalLabel,
  VerticalHeadline,
  WebsiteFragment,
  siteUrl,
} from '@/components/art-direction'
import { typeScale } from '@/design-system'
import { SlideShell, TOTAL, copy } from './shared'

/**
 * Slide 02 — PROBLEMA · SWISS_DISRUPTION
 *
 * visualConcept: docs/post-001-visual-concepts.md
 * Hero: browser com site improvisado da mesma cafeteria.
 * Tensão: tipografia disciplinada × interface caótica.
 */
export function Slide02Problem() {
  return (
    <SlideShell>
      <BackgroundSystem
        ghostWord="DIAGNÓSTICO"
        section=""
        atmosphere={
          <>
            <AmbientPanel
              color="bg-signal-red/[0.055]"
              className="top-0 bottom-0 left-[132px] w-[58px]"
            />
            <ShapeCut
              shape="wedge"
              color="bg-editorial-ink/[0.035]"
              className="-right-[120px] top-[260px] size-[430px]"
            />
            <EditorialBand
              color="bg-signal-red/15"
              className="top-[438px] right-0 left-[190px] h-px"
            />
            <FadedNumber className="right-[34px] bottom-[118px]">02</FadedNumber>
            <BackgroundAccent
              color="bg-electric-cobalt"
              className="top-[120px] right-[64px]"
            />
          </>
        }
      />

      {/* IMPROVISADO — estrutura vertical, não mensagem principal */}
      <div className="absolute top-0 bottom-0 left-[8px] flex items-center">
        <VerticalHeadline side="left" size="lg" className="text-signal-red">
          {copy.s2.keyword}
        </VerticalHeadline>
      </div>

      {/* Mensagem horizontal — carrega a leitura na miniatura */}
      <div className="absolute top-[88px] left-[200px] right-[64px]">
        <TechnicalLabel marker="02/05" className="mb-6">
          Diagnóstico
        </TechnicalLabel>
        <p className={`${typeScale.display.sm} text-editorial-ink uppercase`}>
          {copy.s2.lead}
        </p>
        <p className={`${typeScale.display.sm} mt-2 text-editorial-ink uppercase`}>
          {copy.s2.punch}
        </p>
        <p className={`${typeScale.serif.lg} mt-1 text-signal-red`}>
          improvisado.
        </p>
      </div>

      <SwissRule
        weight={4}
        length={720}
        className="absolute top-[420px] left-[200px] text-editorial-ink"
      />
      <CoordinatesLabel className="absolute top-[398px] right-[64px]" />

      {/* Hero: site improvisado — anotações sobre a interface, sem cards */}
      <div className="absolute top-[460px] left-[180px]">
        <div className="relative">
          <ShadowPlane
            className="top-[24px] right-[-14px] bottom-[-18px] left-[22px]"
            style={{ transform: 'rotate(-4deg)' }}
          />
          <BrowserCutout
            url={siteUrl('cafeteria')}
            width={760}
            angle={-4}
            className="grayscale"
          >
            <WebsiteFragment business="cafeteria" quality="improvised" />
          </BrowserCutout>

          <AnnotationMark
            label="hierarquia fraca"
            length={110}
            className="absolute -top-2 left-8"
          />
          <AnnotationMark
            label="ação escondida"
            direction="left"
            length={100}
            className="absolute top-[200px] -right-4"
          />
          <AnnotationMark
            label="excesso de informação"
            length={130}
            className="absolute top-[320px] left-4"
          />
          <AnnotationMark
            label="contraste insuficiente"
            direction="left"
            length={120}
            className="absolute bottom-8 right-10"
          />

          {/* Único detalhe cobalt permitido */}
          <span
            aria-hidden
            className="absolute -bottom-3 -left-3 size-4 bg-electric-cobalt"
          />
        </div>
      </div>

      <SignatureFooterMinimal
        current={2}
        total={TOTAL}
        category="Diagnóstico · ed. 001"
        className="absolute right-[64px] bottom-[46px] left-[200px]"
      />
    </SlideShell>
  )
}
