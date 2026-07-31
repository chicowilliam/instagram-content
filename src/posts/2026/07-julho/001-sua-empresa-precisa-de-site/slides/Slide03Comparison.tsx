import {
  AmbientPanel,
  AnnotationMark,
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

/**
 * Slide 03 — COMPARAÇÃO · Swiss Editorial
 *
 * visualConcept:
 * - tópico: mesmo negócio, duas percepções
 * - metáfora: sobreposição diagonal bad × good
 * - hero: dois browsers em escalas diferentes (não side-by-side)
 * - environment: paper + banda + cunha
 * - tensão: fio vermelho entre as duas versões
 * - paleta: swiss-classic apenas
 */
export function Slide03Comparison() {
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
        <div className="flex flex-col items-end gap-2 pt-2">
          {copy.s3.labels.map((label) => (
            <TechnicalLabel key={label} size="xs">
              {label}
            </TechnicalLabel>
          ))}
        </div>
      </div>

      {/* A — improvisada: maior, atrás, parcialmente cortada pela borda */}
      <div className="absolute top-[370px] -left-[80px] z-10">
        <div className="relative">
          <WebAuditTag className="absolute -top-6 left-20 z-30 bg-editorial-ink text-white">
            A — improvisada
          </WebAuditTag>
          <BrowserCutout
            url={siteUrl('cafeteria')}
            width={780}
            angle={-9}
            className="shadow-[14px_18px_0_0_rgb(12_12_12/0.12)]"
          >
            <WebsiteFragment business="cafeteria" quality="improvised" />
          </BrowserCutout>
          <AnnotationMark
            label="parece amador"
            length={100}
            className="absolute top-[40px] left-[420px] z-30"
          />
        </div>
      </div>

      {/* B — intencional: atravessa em diagonal, nítida, sobreposta */}
      <div className="absolute top-[560px] left-[260px] z-20">
        <div className="relative">
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
          <AnnotationMark
            label="hierarquia clara"
            direction="left"
            length={110}
            className="absolute top-[60px] -right-2 z-30"
          />
        </div>
      </div>

      {/* Fio de tensão entre as duas percepções */}
      <span
        aria-hidden
        className="absolute top-[620px] left-[180px] z-30 h-[5px] w-[300px] origin-left -rotate-[16deg] bg-signal-red"
      />

      {/* Microcopy editorial */}
      <p
        className={`${typeScale.mono.xs} absolute top-[500px] right-[56px] z-20 max-w-[160px] text-right text-editorial-ink/55`}
      >
        Mesma cafeteria.
        <br />
        Só muda o cuidado.
      </p>

      <SignatureFooterMinimal
        current={3}
        total={TOTAL}
        category="Demonstração · ed. 001"
        className="absolute right-[56px] bottom-[46px] left-[56px] z-40"
      />
    </SlideShell>
  )
}
