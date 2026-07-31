import {
  AmbientPanel,
  BackgroundAccent,
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
 * Slide 03 — DEMONSTRAÇÃO · comparação diagonal
 *
 * visualConcept: docs/post-001-visual-concepts.md
 * Não é split lado a lado: um browser no fundo, outro atravessa.
 * Contraste lido antes do texto.
 */
export function Slide03Comparison() {
  return (
    <SlideShell>
      <BackgroundSystem
        ghostWord="PERCEPÇÃO"
        section=""
        atmosphere={
          <>
            <AmbientPanel className="top-[350px] right-0 h-[620px] w-[430px]" />
            <ShapeCut
              shape="circle"
              color="bg-electric-cobalt/[0.045]"
              className="-left-[170px] bottom-[150px] size-[430px]"
            />
            <EditorialBand
              color="bg-signal-red/12"
              className="top-[345px] right-[64px] left-[64px] h-px"
            />
            <FadedNumber className="right-[34px] bottom-[120px]">03</FadedNumber>
            <BackgroundAccent
              color="bg-electric-cobalt"
              className="top-[116px] right-[64px]"
            />
          </>
        }
      />

      <div className="absolute top-[72px] left-[64px] right-[64px] flex items-start justify-between">
        <div>
          <TechnicalLabel marker="03/05" className="mb-5">
            Comparação
          </TechnicalLabel>
          {copy.s3.lines.map((line) => (
            <p
              key={line}
              className={`${typeScale.display.sm} text-editorial-ink uppercase`}
            >
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

      {/* Versão A — fundo, maior, dessaturada, parcialmente escondida */}
      <div className="absolute top-[380px] -left-[40px]">
        <div className="relative">
          <WebAuditTag className="absolute -top-5 left-8 z-20">
            A — improvisada
          </WebAuditTag>
          <BrowserCutout
            url={siteUrl('cafeteria')}
            width={700}
            angle={-8}
            className="grayscale opacity-80"
          >
            <WebsiteFragment business="cafeteria" quality="improvised" />
          </BrowserCutout>
        </div>
      </div>

      {/* Versão B — atravessa em diagonal, nítida */}
      <div className="absolute top-[520px] left-[280px]">
        <div className="relative">
          <WebAuditTag color="bg-electric-cobalt" className="absolute -top-5 right-6 z-20">
            B — intencional
          </WebAuditTag>
          <BrowserCutout
            url={siteUrl('cafeteria')}
            width={680}
            angle={6}
            className="shadow-[18px_18px_0_0_#0c0c0c]"
          >
            <WebsiteFragment business="cafeteria" quality="intentional" />
          </BrowserCutout>
        </div>
      </div>

      {/* Fio vermelho de tensão entre as duas percepções */}
      <span
        aria-hidden
        className="absolute top-[640px] left-[200px] h-[4px] w-[280px] origin-left -rotate-[18deg] bg-signal-red"
      />

      <SignatureFooterMinimal
        current={3}
        total={TOTAL}
        category="Demonstração · ed. 001"
        className="absolute right-[64px] bottom-[46px] left-[64px]"
      />
    </SlideShell>
  )
}
