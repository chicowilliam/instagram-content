import {
  BrandSignature,
  BrowserCutout,
  PaperGrain,
  TechnicalLabel,
  WebsiteFragment,
  siteUrl,
} from '@/components/art-direction'
import { typeScale } from '@/design-system'
import { SlideShell } from './shared'

/** Snapshot anterior do Story 02 — só para /post/001/story-review */
export function Story02ProblemV1() {
  return (
    <SlideShell>
      <PaperGrain strength={0.05} />
      <TechnicalLabel
        marker="STORY 02"
        accent="text-signal-red"
        className="absolute top-16 left-14"
      >
        Problema
      </TechnicalLabel>
      <div className="absolute top-[220px] left-14 right-14">
        <p className={`${typeScale.display.sm} text-editorial-ink uppercase`}>
          O problema não é ser pequeno.
        </p>
        <p className={`${typeScale.serif.lg} mt-4 text-signal-red`}>
          É parecer improvisado.
        </p>
      </div>
      <div className="absolute bottom-[200px] left-14 right-14">
        <BrowserCutout url={siteUrl('cafeteria')} width={560} angle={4}>
          <WebsiteFragment business="cafeteria" quality="improvised" />
        </BrowserCutout>
      </div>
      <BrandSignature className="absolute right-14 bottom-14 left-14" />
    </SlideShell>
  )
}
