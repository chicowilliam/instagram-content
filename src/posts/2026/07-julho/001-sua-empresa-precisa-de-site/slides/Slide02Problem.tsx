import {
  AmbientPanel,
  AnnotationMark,
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
 * Slide 02 — DIAGNÓSTICO · Swiss Editorial
 *
 * visualConcept:
 * - tópico: parecer improvisado
 * - metáfora: site ruim como prova visual (não print lavado)
 * - hero: CafeBadWebsite em crop grande, atravessando o tipo
 * - environment: paper swiss-classic + estrutura editorial
 * - tensão: tipografia disciplinada × interface amadora densa
 * - paleta: swiss-classic (paper / ink / signal-red) — sem cobalt
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

      {/* Coluna vertical estrutural */}
      <div className="absolute top-0 bottom-0 left-[8px] flex items-center">
        <VerticalHeadline side="left" size="lg" className="text-signal-red">
          {copy.s2.keyword}
        </VerticalHeadline>
      </div>

      {/* Mensagem — carrega na miniatura */}
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

      {/*
        Hero: crop grande do BAD website.
        Sem grayscale / opacity fraca — o site precisa ser feio e presente.
        Tipografia display atravessa parcialmente o frame (oclusão Swiss).
      */}
      <div className="absolute top-[430px] -left-[20px] z-10">
        <div className="relative">
          <ShadowPlane
            className="top-[28px] right-[-18px] bottom-[-22px] left-[28px]"
            style={{ transform: 'rotate(-5deg)' }}
          />

          {/* Palavra fantasma atrás/através — profundidade editorial */}
          <span
            aria-hidden
            className={`${typeScale.display.md} pointer-events-none absolute -top-8 right-8 z-0 text-editorial-ink/[0.07] uppercase`}
          >
            SITE
          </span>

          <BrowserCutout
            url={siteUrl('cafeteria')}
            width={920}
            angle={-5}
            className="relative z-10 shadow-[0_24px_60px_rgb(12_12_12/0.18)]"
          >
            <WebsiteFragment business="cafeteria" quality="improvised" />
          </BrowserCutout>

          {/* Anotações fortes — tinta editorial, não chips UI */}
          <AnnotationMark
            label="hierarquia fraca"
            length={130}
            className="absolute -top-1 left-16 z-30"
          />
          <AnnotationMark
            label="ação escondida"
            direction="left"
            length={120}
            className="absolute top-[210px] -right-2 z-30"
          />
          <AnnotationMark
            label="excesso de informação"
            length={150}
            className="absolute top-[340px] left-10 z-30"
          />
          <AnnotationMark
            label="contraste insuficiente"
            direction="left"
            length={140}
            className="absolute bottom-10 right-16 z-30"
          />

          {/* Único ponto de tensão vermelha — swiss-classic */}
          <span
            aria-hidden
            className="absolute -bottom-4 -left-4 z-30 size-5 bg-signal-red"
          />
        </div>
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
