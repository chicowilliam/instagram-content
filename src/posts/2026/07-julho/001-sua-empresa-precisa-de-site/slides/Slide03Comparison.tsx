import {
  CropMarks,
  EditorialGrid,
  EditorialTexture,
  SignatureFooterMinimal,
} from '@/components/art-direction'
import {
  AuraBadHeroShot,
  AuraGoodHeroShot,
} from '@/components/mocksites/aura-bad/AuraComparisonShots'
import { typeScale } from '@/design-system'
import { SlideShell, TOTAL, copy } from './shared'

/**
 * Slide 03 — COMPARAÇÃO (correção cirúrgica)
 *
 * Mesma empresa: Aura Estética Avançada (ruim × boa).
 * Split editorial ~45/55, sem sobreposição excessiva, ângulo ≤ 2°.
 */
export function Slide03Comparison() {
  return (
    <SlideShell className="bg-editorial-cream">
      <EditorialTexture tone="paper" />
      <EditorialGrid tone="paper" inset={56} className="opacity-35" />
      <CropMarks inset={36} />

      {/* Título */}
      <div className="absolute top-[56px] right-[56px] left-[56px] z-20">
        <p className="mb-5 font-mono text-[21px] tracking-[0.18em] text-editorial-ink/50 uppercase">
          03/05 · Comparação
        </p>
        {copy.s3.lines.map((line) => (
          <p key={line} className={`${typeScale.display.sm} text-editorial-ink`}>
            {line}
          </p>
        ))}
        <p className="mt-4 font-mono text-[22px] tracking-[0.1em] text-editorial-ink/45 uppercase">
          Mesmas informações. Outra hierarquia.
        </p>
      </div>

      {/* Eixos */}
      <div className="absolute top-[320px] right-[56px] left-[56px] z-20 flex flex-wrap gap-x-6 gap-y-2 border-y border-editorial-ink/15 py-3">
        {['01 Mensagem', '02 Hierarquia', '03 Ação', '04 Percepção'].map((axis) => (
          <span
            key={axis}
            className="font-mono text-[21px] tracking-[0.12em] text-editorial-ink/55 uppercase"
          >
            {axis}
          </span>
        ))}
      </div>

      {/* Split 45 / 55 */}
      <div className="absolute top-[400px] right-[48px] left-[48px] z-10 grid grid-cols-[0.9fr_1.1fr] items-start gap-6">
        {/* A — ruim */}
        <div className="relative">
          <span className="mb-3 inline-block bg-signal-red px-3 py-1.5 font-mono text-[22px] tracking-[0.14em] text-white uppercase">
            A — Improvisada
          </span>
          <AuraBadHeroShot width={440} angle={-1} />
          <ul className="mt-4 space-y-1.5 font-mono text-[20px] tracking-[0.06em] text-editorial-ink/70 uppercase">
            <li>· Mensagem disputada</li>
            <li>· Múltiplos CTAs</li>
            <li>· Excesso de estilos</li>
          </ul>
        </div>

        {/* Divisor */}
        <span
          aria-hidden
          className="absolute top-10 bottom-10 left-1/2 w-px -translate-x-1/2 bg-editorial-ink/20"
        />

        {/* B — boa */}
        <div className="relative pt-2">
          <span className="mb-3 inline-block bg-editorial-ink px-3 py-1.5 font-mono text-[22px] tracking-[0.14em] text-white uppercase">
            B — Intencional
          </span>
          <AuraGoodHeroShot width={500} angle={1} />
          <ul className="mt-4 space-y-1.5 font-mono text-[20px] tracking-[0.06em] text-editorial-ink/70 uppercase">
            <li>· Proposta clara</li>
            <li>· CTA principal evidente</li>
            <li>· Linguagem consistente</li>
          </ul>
        </div>
      </div>

      {/* Frase auxiliar */}
      <p className="absolute bottom-[130px] left-[56px] z-20 max-w-[520px] font-mono text-[24px] leading-[1.35] tracking-[0.04em] text-editorial-ink uppercase">
        Mesma empresa.
        <br />
        Mesmo conteúdo.
        <br />
        Outra percepção.
      </p>

      <SignatureFooterMinimal
        current={3}
        total={TOTAL}
        domain="viniciuswilliam.dev"
        category="Comparação · ed. 001"
        className="absolute right-[56px] bottom-[46px] left-[56px] z-40"
      />
    </SlideShell>
  )
}
