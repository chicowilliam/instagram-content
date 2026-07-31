import {
  AmbientPanel,
  BrandSignature,
  BrowserCutout,
  CropMarks,
  EditorialGrid,
  EditorialTexture,
  FadedNumber,
  MassiveWord,
  PaperGrain,
  TechnicalLabel,
  WebsiteFragment,
  siteUrl,
} from '@/components/art-direction'
import { ComparisonBrowser } from '@/components/mocksites/aura-bad/AuraComparisonShots'
import { AuraBadHero } from '@/components/mocksites/aura-bad/AuraBadHero'
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

/**
 * Story 02 — PROBLEMA · Swiss Editorial vertical (1080×1920)
 *
 * Quatro zonas: cabeçalho → título → cena Aura ruim → fechamento.
 * Sem Casa Nôa. Sem parágrafos extras.
 */
export function Story02Problem() {
  return (
    <SlideShell className="bg-editorial-cream">
      <EditorialTexture tone="paper" />
      <EditorialGrid tone="paper" inset={40} className="opacity-35" />
      <CropMarks inset={24} />

      <AmbientPanel
        color="bg-signal-red"
        className="top-0 bottom-0 left-0 w-[14px]"
      />
      <AmbientPanel
        color="bg-signal-red/[0.08]"
        className="top-0 bottom-0 left-[14px] w-[22px]"
      />
      <span
        aria-hidden
        className="absolute top-[720px] right-0 h-[180px] w-[48px] bg-editorial-ink"
      />
      <FadedNumber className="pointer-events-none top-[820px] right-[12px] opacity-[0.07]">
        02
      </FadedNumber>

      <p
        aria-hidden
        className="pointer-events-none absolute top-[300px] left-[-4px] origin-top-left -rotate-90 font-display text-[110px] font-black leading-none tracking-[-0.05em] text-editorial-ink/[0.055] uppercase"
      >
        Improviso
      </p>

      {/* ZONA 1 — CABEÇALHO */}
      <div className="absolute top-[56px] right-[56px] left-[56px] z-20">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="font-mono text-[26px] tracking-[0.2em] text-signal-red uppercase">
              Story 02
            </p>
            <p className="mt-2 font-mono text-[26px] tracking-[0.18em] text-editorial-ink/55 uppercase">
              Diagnóstico
            </p>
          </div>
          <p className="font-mono text-[26px] tracking-[0.16em] text-editorial-ink/40">
            02/05
          </p>
        </div>
        <span className="mt-5 block h-px w-full bg-editorial-ink/20" />
      </div>

      {/* ZONA 2 — TÍTULO */}
      <div className="absolute top-[200px] right-[56px] left-[56px] z-20">
        <p className="font-display text-[76px] leading-[0.92] font-black tracking-[-0.04em] text-editorial-ink uppercase">
          O problema não é ser pequeno.
        </p>
        <p className="mt-5 font-display text-[72px] leading-[0.92] font-bold tracking-[-0.03em] text-editorial-ink">
          É parecer{' '}
          <span className="font-serif text-[88px] font-normal italic text-signal-red">
            improvisado.
          </span>
        </p>
        <span className="mt-8 block h-[4px] w-[160px] bg-signal-red" />
      </div>

      {/* ZONA 3 — CENA VISUAL Aura ruim (hero ampliado) */}
      <div className="absolute top-[580px] right-[20px] left-[20px] z-10 h-[980px]">
        <span
          aria-hidden
          className="absolute top-[420px] -right-2 -left-2 z-0 h-[72px] bg-editorial-ink/[0.06]"
        />
        <span
          aria-hidden
          className="absolute top-[456px] right-0 left-0 z-0 h-px bg-editorial-ink/20"
        />

        <div className="relative z-10 flex h-full items-start justify-center pt-2">
          <div
            className="origin-top"
            style={{ transform: 'rotate(-1.2deg) scale(1.08)' }}
          >
            <ComparisonBrowser
              url="auraestetica.com.br"
              width={960}
              angle={0}
              border="border-editorial-ink"
            >
              {/* Recorte hero ampliado — menu + título + imagem + CTAs */}
              <div className="h-[820px] overflow-hidden">
                <div
                  className="origin-top-left"
                  style={{
                    width: 960,
                    transform: 'scale(1.55)',
                    transformOrigin: 'top left',
                  }}
                >
                  <AuraBadHero />
                </div>
              </div>
            </ComparisonBrowser>
          </div>
        </div>

        <div className="absolute top-4 right-0 z-30 flex flex-col items-end gap-1">
          <span className="bg-signal-red px-2.5 py-1 font-mono text-[26px] tracking-[0.12em] text-white">
            01
          </span>
          <span className="font-mono text-[26px] tracking-[0.1em] text-editorial-ink uppercase">
            Menu demais
          </span>
          <span className="mt-1 h-px w-14 bg-signal-red" />
        </div>

        <div className="absolute top-[460px] left-0 z-30">
          <span className="font-mono text-[26px] tracking-[0.12em] text-signal-red">
            02
          </span>
          <p className="mt-1 max-w-[220px] font-mono text-[26px] leading-[1.15] tracking-[0.08em] text-editorial-ink uppercase">
            Hierarquia fraca
          </p>
          <span className="mt-2 block size-2.5 bg-signal-red" />
        </div>

        <div className="absolute right-2 bottom-8 z-30 text-right">
          <span className="font-mono text-[26px] tracking-[0.12em] text-signal-red">
            03
          </span>
          <p className="mt-1 max-w-[260px] font-mono text-[26px] leading-[1.15] tracking-[0.08em] text-editorial-ink uppercase">
            CTA sem prioridade
          </p>
        </div>
      </div>

      {/* ZONA 4 — FECHAMENTO */}
      <div className="absolute right-[56px] bottom-[48px] left-[56px] z-20">
        <span className="mb-6 block h-px w-full bg-editorial-ink/20" />
        <p className="font-display text-[42px] leading-[1.15] font-semibold tracking-[-0.03em] text-editorial-ink">
          Funciona.
          <br />
          Mas não transmite confiança.
        </p>
        <p className="mt-5 font-mono text-[28px] tracking-[0.08em] text-signal-red uppercase">
          Próximo story: o que está errado →
        </p>
        <div className="mt-8 flex items-end justify-between gap-4">
          <div>
            <p className="font-mono text-[22px] tracking-[0.14em] text-editorial-ink uppercase">
              Vinícius William
            </p>
            <p className="mt-1 font-mono text-[22px] tracking-[0.16em] text-editorial-ink/45 uppercase">
              viniciuswilliam.dev
            </p>
          </div>
          <p className="font-mono text-[22px] tracking-[0.14em] text-editorial-ink/35">
            02/05
          </p>
        </div>
      </div>
    </SlideShell>
  )
}

export function Story03Cta() {
  return (
    <SlideShell surface={base.ink} className="text-white">
      <TechnicalLabel
        marker="STORY 03"
        tone="ink"
        accent="text-signal-red"
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
          className={`${typeScale.body.md} mt-10 text-white underline decoration-signal-red decoration-2 underline-offset-8`}
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
