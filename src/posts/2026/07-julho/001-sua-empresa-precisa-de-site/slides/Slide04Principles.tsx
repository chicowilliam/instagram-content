import {
  AmbientPanel,
  BackgroundSystem,
  FadedNumber,
  HalftoneTexture,
  SignatureFooterMinimal,
  SwissRule,
  TechnicalLabel,
} from '@/components/art-direction'
import { base, typeScale } from '@/design-system'
import { SlideShell, TOTAL, copy } from './shared'

/**
 * Slide 04 — PRINCÍPIOS · Swiss Editorial
 *
 * visualConcept:
 * - tópico: Clareza · Cuidado · Direção
 * - metáfora: três blocos tipográficos irregulares (não cards iguais)
 * - hero: tipografia manifesto + módulos de prova
 * - environment: ink + paper grain
 * - tensão: signal-red apenas
 * - paleta: swiss-classic (base ink)
 */
export function Slide04Principles() {
  return (
    <SlideShell surface={base.ink} className="text-white">
      <BackgroundSystem
        tone="ink"
        ghostWord="SISTEMA"
        section=""
        atmosphere={
          <>
            <AmbientPanel
              color="bg-signal-red/[0.07]"
              className="top-0 right-[96px] h-full w-[140px]"
            />
            <FadedNumber tone="ink" className="right-[34px] bottom-[115px]">
              04
            </FadedNumber>
          </>
        }
      />
      <HalftoneTexture scale={10} strength={0.06} className="text-white" />

      <div className="absolute top-[72px] left-[64px] right-[64px] flex items-start justify-between">
        <TechnicalLabel marker="04/05" tone="ink" accent="text-signal-red">
          Princípios
        </TechnicalLabel>
        <TechnicalLabel tone="ink" size="xs">
          Swiss · ed. 001
        </TechnicalLabel>
      </div>

      <div className="absolute top-[130px] left-[64px]">
        <p className={`${typeScale.display.md} text-white`}>CLAREZA.</p>
        <p className={`${typeScale.display.md} text-white/55`}>CUIDADO.</p>
        <p className={`${typeScale.display.md} text-signal-red`}>DIREÇÃO.</p>
      </div>

      {/*
        Três módulos irregulares — mesmos eixos, formas diferentes.
        Sem cards, sem rounded, sem neon.
      */}
      <div className="absolute top-[520px] left-[64px] right-[64px] bottom-[140px]">
        {/* 01 CLAREZA — bloco tipográfico */}
        <div className="absolute top-0 left-0 flex h-[280px] w-[420px] flex-col justify-between border border-white/20 bg-white/[0.06] p-7">
          <span className={`${typeScale.mono.sm} text-white/50`}>01</span>
          <div>
            <p className={`${typeScale.display.sm} text-white`}>
              {copy.s4.principles[0].title}
            </p>
            <p className="mt-3 text-[28px] leading-[1.3] text-white/75">
              {copy.s4.principles[0].body}
            </p>
          </div>
          <div className="mt-4 flex flex-col gap-2">
            <span className="h-3 w-3/4 bg-white" />
            <span className="h-2 w-1/2 bg-white/35" />
          </div>
        </div>

        {/* 02 CUIDADO — faixa alongada paper */}
        <div className="absolute top-0 right-0 flex h-[160px] w-[460px] items-stretch overflow-hidden bg-editorial-cream text-editorial-ink">
          <div className="flex w-[72px] items-center justify-center bg-editorial-ink text-editorial-cream">
            <span className={`${typeScale.mono.md}`}>02</span>
          </div>
          <div className="flex flex-1 flex-col justify-center gap-2 px-6">
            <p className={`${typeScale.mono.md}`}>{copy.s4.principles[1].title}</p>
            <p className="text-[26px] leading-[1.3]">{copy.s4.principles[1].body}</p>
            <div className="mt-1 flex gap-2">
              {[0, 1, 2, 3].map((i) => (
                <span
                  key={i}
                  className="size-3 border-2 border-editorial-ink"
                  style={{ opacity: 1 - i * 0.15 }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* 03 DIREÇÃO — wedge vermelho */}
        <div
          className="absolute bottom-0 right-0 flex h-[280px] w-[460px] flex-col justify-between bg-signal-red p-7 text-white"
          style={{ clipPath: 'polygon(8% 0, 100% 0, 100% 100%, 0 100%)' }}
        >
          <div className="flex items-start justify-between pl-6">
            <span className={`${typeScale.mono.sm} text-white/70`}>03</span>
            <span aria-hidden className="size-10 border-2 border-white/50" />
          </div>
          <div className="pl-6">
            <p className={`${typeScale.display.sm}`}>{copy.s4.principles[2].title}</p>
            <p className="mt-3 text-[28px] leading-[1.3] text-white/85">
              {copy.s4.principles[2].body}
            </p>
            <div className="mt-5 flex items-center gap-3">
              <SwissRule weight={4} length={120} className="text-white" />
              <span className="text-[24px] font-semibold tracking-[-0.02em]">
                Contato →
              </span>
            </div>
          </div>
        </div>

        <span
          aria-hidden
          className="absolute bottom-[40px] left-[40px] size-5 bg-signal-red"
        />
      </div>

      <SignatureFooterMinimal
        current={4}
        total={TOTAL}
        tone="ink"
        category="Princípios · ed. 001"
        className="absolute right-[64px] bottom-[38px] left-[64px]"
      />
    </SlideShell>
  )
}
