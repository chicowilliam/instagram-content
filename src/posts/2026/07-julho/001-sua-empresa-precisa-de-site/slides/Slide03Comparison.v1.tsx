import {
  AmbientPanel,
  BackgroundSystem,
  BrowserCutout,
  EditorialBand,
  FadedNumber,
  ShapeCut,
  SignatureFooterMinimal,
  TechnicalLabel,
  WebAuditTag,
  WebsiteFragment,
  siteUrl,
} from '@/components/art-direction'
import { typeScale } from '@/design-system'
import { SlideShell, TOTAL, copy } from './shared'

/** Snapshot anterior do Slide 03 — comparação com negócios diferentes (legado). */
export function Slide03ComparisonV1() {
  return (
    <SlideShell>
      <BackgroundSystem
        ghostWord="PERCEPÇÃO"
        section=""
        atmosphere={
          <>
            <AmbientPanel className="top-[360px] right-0 h-[640px] w-[400px]" />
            <ShapeCut
              shape="wedge"
              color="bg-editorial-ink/[0.045]"
              className="-left-[160px] bottom-[120px] size-[420px]"
            />
            <EditorialBand
              color="bg-signal-red/18"
              className="top-[338px] right-[56px] left-[56px] h-px"
            />
            <FadedNumber className="right-[34px] bottom-[120px]">03</FadedNumber>
          </>
        }
      />

      <div className="absolute top-[68px] left-[56px] right-[56px] z-20 flex items-start justify-between">
        <div>
          <TechnicalLabel marker="03/05" className="mb-5">
            Comparação
          </TechnicalLabel>
          {copy.s3.lines.map((line) => (
            <p key={line} className={`${typeScale.display.sm} text-editorial-ink uppercase`}>
              {line}
            </p>
          ))}
        </div>
      </div>

      <div className="absolute top-[370px] -left-[80px] z-10">
        <WebAuditTag className="absolute -top-6 left-20 z-30 bg-editorial-ink text-white">
          A — improvisada
        </WebAuditTag>
        <BrowserCutout
          url={siteUrl('cafeteria')}
          width={780}
          angle={-9}
          className="grayscale opacity-80"
        >
          <WebsiteFragment business="cafeteria" quality="improvised" />
        </BrowserCutout>
      </div>

      <div className="absolute top-[560px] left-[260px] z-20">
        <WebAuditTag className="absolute -top-6 right-8 z-30 bg-signal-red text-white">
          B — intencional
        </WebAuditTag>
        <BrowserCutout
          url={siteUrl('cafeteria')}
          width={720}
          angle={5}
          className="shadow-[20px_20px_0_0_#0c0c0c]"
        >
          <WebsiteFragment business="cafeteria" quality="intentional" />
        </BrowserCutout>
      </div>

      <SignatureFooterMinimal
        current={3}
        total={TOTAL}
        category="Demonstração · ed. 001"
        className="absolute right-[56px] bottom-[46px] left-[56px] z-40"
      />
    </SlideShell>
  )
}
