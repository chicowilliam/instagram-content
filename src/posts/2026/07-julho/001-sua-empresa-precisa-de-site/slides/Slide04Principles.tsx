import {
  AmbientPanel,
  BackgroundAccent,
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
 * Slide 04 — PRINCÍPIOS · NEO_Y2K_MODULAR controlado
 *
 * visualConcept: docs/post-001-visual-concepts.md
 * Três módulos com identidade própria — não três cards iguais.
 * Lime/magenta ≤ 10% da área.
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
              color="bg-electric-cobalt/[0.055]"
              className="top-0 right-[96px] h-full w-[180px]"
            />
            <FadedNumber tone="ink" className="right-[34px] bottom-[115px]">
              04
            </FadedNumber>
            <BackgroundAccent
              color="bg-hot-magenta"
              className="top-[116px] right-[64px]"
            />
          </>
        }
      />
      <HalftoneTexture scale={10} strength={0.08} className="text-white" />

      <div className="absolute top-[72px] left-[64px] right-[64px] flex items-start justify-between">
        <TechnicalLabel marker="04/05" tone="ink" accent="text-neon-lime">
          Princípios
        </TechnicalLabel>
        <TechnicalLabel tone="ink" size="xs">
          Y2K · detalhe 05%
        </TechnicalLabel>
      </div>

      {/* Título manifesto — tipografia como estrutura */}
      <div className="absolute top-[130px] left-[64px]">
        <p className={`${typeScale.display.md} text-white`}>CLAREZA.</p>
        <p className={`${typeScale.display.md} text-neon-lime`}>CUIDADO.</p>
        <p className={`${typeScale.display.md} text-signal-red`}>DIREÇÃO.</p>
      </div>

      {/*
        Três módulos irregulares:
        01 — bloco cobalt tipográfico (ângulo 0)
        02 — faixa lime com régua (forma alongada)
        03 — trapézio/ângulo com seta de ação
        Nenhum compartilha border-radius nem proporção.
      */}
      <div className="absolute top-[520px] left-[64px] right-[64px] bottom-[140px]">
        {/* 01 CLAREZA — retângulo duro cobalt */}
        <div className="absolute top-0 left-0 flex h-[280px] w-[420px] flex-col justify-between bg-electric-cobalt p-7">
          <span className={`${typeScale.mono.sm} text-white/60`}>01</span>
          <div>
            <p className={`${typeScale.display.sm} text-white`}>
              {copy.s4.principles[0].title}
            </p>
            <p className="mt-3 text-[28px] leading-[1.3] text-white/80">
              {copy.s4.principles[0].body}
            </p>
          </div>
          {/* Metáfora visual: hierarquia tipográfica limpa */}
          <div className="mt-4 flex flex-col gap-2">
            <span className="h-3 w-3/4 bg-white" />
            <span className="h-2 w-1/2 bg-white/40" />
          </div>
        </div>

        {/* 02 CUIDADO — módulo alongado lime, cantos zero */}
        <div className="absolute top-0 right-0 flex h-[160px] w-[460px] items-stretch overflow-hidden bg-neon-lime text-editorial-ink">
          <div className="flex w-[72px] items-center justify-center bg-editorial-ink text-neon-lime">
            <span className={`${typeScale.mono.md}`}>02</span>
          </div>
          <div className="flex flex-1 flex-col justify-center gap-2 px-6">
            <p className={`${typeScale.mono.md}`}>{copy.s4.principles[1].title}</p>
            <p className="text-[26px] leading-[1.3]">{copy.s4.principles[1].body}</p>
            {/* Metáfora: alinhamento / consistência */}
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

        {/* 03 DIREÇÃO — módulo angular vermelho */}
        <div
          className="absolute bottom-0 right-0 flex h-[280px] w-[460px] flex-col justify-between bg-signal-red p-7 text-white"
          style={{ clipPath: 'polygon(8% 0, 100% 0, 100% 100%, 0 100%)' }}
        >
          <div className="flex items-start justify-between pl-6">
            <span className={`${typeScale.mono.sm} text-white/70`}>03</span>
            <span
              aria-hidden
              className="size-10 border-2 border-hot-magenta bg-transparent"
            />
          </div>
          <div className="pl-6">
            <p className={`${typeScale.display.sm}`}>{copy.s4.principles[2].title}</p>
            <p className="mt-3 text-[28px] leading-[1.3] text-white/85">
              {copy.s4.principles[2].body}
            </p>
            {/* Metáfora: próximo passo evidente */}
            <div className="mt-5 flex items-center gap-3">
              <SwissRule weight={4} length={120} className="text-white" />
              <span className="text-[24px] font-semibold tracking-[-0.02em]">
                Contato →
              </span>
            </div>
          </div>
        </div>

        {/* Detalhe magenta pontual (≤5%) */}
        <span
          aria-hidden
          className="absolute bottom-[40px] left-[40px] size-6 bg-hot-magenta"
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
