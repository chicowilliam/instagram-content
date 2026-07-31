import {
  BrandSignature,
  BrowserCutout,
  MassiveWord,
  PaperGrain,
  TechnicalLabel,
  WebsiteFragment,
  siteUrl,
} from '@/components/art-direction'
import { base, typeScale } from '@/design-system'
import { SlideShell } from './shared'

/** Stories derivados — mesma identidade, ritmo diferente do carrossel. */

export function Story01Hook() {
  return (
    <SlideShell>
      <PaperGrain strength={0.05} />
      <TechnicalLabel marker="STORY 01" className="absolute top-16 left-14">
        Teste rápido
      </TechnicalLabel>
      <div className="absolute top-[200px] left-14 right-14">
        <p className={`${typeScale.display.md} text-editorial-ink uppercase`}>
          Abra o site da sua empresa agora.
        </p>
        <p className={`${typeScale.body.md} mt-8 text-editorial-ink/65`}>
          Em poucos segundos, a impressão já aconteceu.
        </p>
      </div>
      <div className="absolute bottom-[180px] left-14">
        <BrowserCutout url={siteUrl('cafeteria')} width={520} angle={-3} className="grayscale">
          <WebsiteFragment business="cafeteria" quality="intentional" />
        </BrowserCutout>
      </div>
      <BrandSignature className="absolute right-14 bottom-14 left-14" />
    </SlideShell>
  )
}

export function Story02Problem() {
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
        <BrowserCutout url={siteUrl('cafeteria')} width={560} angle={4} className="grayscale">
          <WebsiteFragment business="cafeteria" quality="improvised" />
        </BrowserCutout>
      </div>
      <BrandSignature className="absolute right-14 bottom-14 left-14" />
    </SlideShell>
  )
}

export function Story03Cta() {
  return (
    <SlideShell surface={base.ink} className="text-white">
      <TechnicalLabel
        marker="STORY 03"
        tone="ink"
        accent="text-electric-cobalt"
        className="absolute top-16 left-14"
      >
        Continuidade
      </TechnicalLabel>
      <div className="absolute top-[240px] left-[-12px]">
        <MassiveWord size="xl" className="text-white">
          CLAREZA
        </MassiveWord>
      </div>
      <div className="absolute top-[420px] left-14 right-14">
        <p className={`${typeScale.body.lg} text-white/75`}>
          Clareza. Cuidado. Direção.
        </p>
        <p
          className={`${typeScale.body.md} mt-10 text-white underline decoration-electric-cobalt decoration-2 underline-offset-8`}
        >
          Acompanhe os próximos conteúdos.
        </p>
      </div>
      <BrandSignature
        tone="ink"
        className="absolute right-14 bottom-14 left-14"
      />
    </SlideShell>
  )
}
