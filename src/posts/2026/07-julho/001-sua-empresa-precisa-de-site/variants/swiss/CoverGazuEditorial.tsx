import {
  AmbientPanel,
  AnnotationMark,
  BackgroundAccent,
  BackgroundSystem,
  BrowserCutout,
  CoordinatesLabel,
  EditorialBand,
  EditorialCaption,
  MassiveWord,
  ShadowPlane,
  ShapeCut,
  SignatureFooterMinimal,
  TechnicalLabel,
  WebsiteFragment,
  siteUrl,
} from '@/components/art-direction'
import { base, typeScale } from '@/design-system'
import { PosterFrame, cover } from './shared'

/** Composição GAZU — usada na variantes e no carrossel (via PosterFrame). */
export function GazuComposition() {
  return (
    <>
      <BackgroundSystem
        ghostWord="PRESENÇA"
        section="POST 001 · CONFIANÇA"
        atmosphere={
          <>
            <AmbientPanel className="top-0 right-[118px] h-full w-[164px]" />
            <ShapeCut
              shape="circle"
              color="bg-electric-cobalt/[0.055]"
              className="-right-[190px] top-[258px] size-[520px]"
            />
            <EditorialBand
              orientation="vertical"
              color="bg-editorial-ink/[0.055]"
              className="top-0 right-[278px] h-full w-px"
            />
            <BackgroundAccent className="top-[118px] right-[64px]" />
          </>
        }
      />

      <div className="absolute top-[58px] right-[72px] left-[72px] flex items-start justify-between">
        <TechnicalLabel marker="REF">Primeira impressão</TechnicalLabel>
        <CoordinatesLabel />
      </div>

      <div className="absolute top-[168px] left-[72px]">
        {cover.lines.map((line) => (
          <p
            key={line}
            className={`${typeScale.display.md} text-editorial-ink uppercase`}
          >
            {line}
          </p>
        ))}
        <p className={`${typeScale.serif.md} mt-1 text-editorial-ink/70`}>
          {cover.connector}
        </p>
      </div>

      <div className="absolute top-[428px] left-[-26px]">
        <MassiveWord size="massive" className="text-editorial-ink">
          {cover.keyword}
        </MassiveWord>
      </div>

      <span
        aria-hidden
        className="absolute top-[580px] left-[-26px] h-[9px] w-[430px] bg-signal-red"
      />

      <ShadowPlane
        className="top-[540px] right-[-38px] h-[520px] w-[600px]"
        style={{ transform: 'rotate(2deg)' }}
      />
      <div className="absolute top-[500px] right-[-60px]">
        <BrowserCutout
          url={siteUrl('cafeteria')}
          width={640}
          angle={2}
          className="grayscale shadow-[12px_20px_0_rgb(12_12_12_/_0.10)]"
        >
          <WebsiteFragment business="cafeteria" quality="intentional" />
        </BrowserCutout>
      </div>

      <div className="absolute top-[628px] left-[72px] w-[390px]">
        <EditorialCaption size="sm" className="text-editorial-ink/70">
          {cover.support}
        </EditorialCaption>
      </div>

      <AnnotationMark
        label={cover.annotation}
        length={120}
        className="absolute top-[832px] left-[72px]"
      />

      <SignatureFooterMinimal
        current={cover.slide}
        total={cover.total}
        category="Primeira impressão · ed. 001"
        className="absolute right-[72px] bottom-[52px] left-[72px]"
      />
    </>
  )
}

/**
 * VARIANTE A — GAZU EDITORIAL · modo EDITORIAL_FASHION
 * Capa aprovada do Post 001 (2026-07-30).
 */
export function CoverGazuEditorial() {
  return (
    <PosterFrame surface={base.paper}>
      <GazuComposition />
    </PosterFrame>
  )
}
