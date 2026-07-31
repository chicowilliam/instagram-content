import { cn } from '@/lib/cn'

/**
 * AuraGoodHero — versão intencional da mesma clínica (Aura Estética Avançada).
 *
 * Mesmo negócio, mesmo nicho, mesma área (hero). Hierarquia clara, um CTA,
 * tipografia consistente. Par visual do AuraBadHero para Slide 03.
 */

export function AuraGoodHero({ className }: { className?: string }) {
  return (
    <div className={cn('overflow-hidden bg-[#faf7f5] text-left select-none', className)}>
      <header className="flex items-center justify-between border-b border-[#eadfd8] bg-white px-7 py-4">
        <div>
          <p className="font-display text-[18px] font-semibold tracking-[-0.03em] text-[#2a1f24]">
            Aura Estética
          </p>
          <p className="mt-0.5 font-mono text-[9px] tracking-[0.16em] text-[#9a8a90] uppercase">
            Facial · Corporal · Belo Horizonte
          </p>
        </div>
        <nav className="flex items-center gap-6 text-[12px] text-[#6b5a62]">
          <span>Tratamentos</span>
          <span>Sobre</span>
          <span>Contato</span>
          <span className="bg-[#2a1f24] px-4 py-2.5 text-[12px] font-medium text-white">
            Agendar avaliação
          </span>
        </nav>
      </header>

      <div className="grid grid-cols-[1.05fr_0.95fr] items-stretch">
        <div className="flex flex-col justify-center gap-5 px-7 py-10">
          <p className="font-mono text-[10px] tracking-[0.18em] text-[#b08978] uppercase">
            Estética avançada com cuidado clínico
          </p>
          <h1 className="font-display text-[34px] leading-[1.08] font-semibold tracking-[-0.035em] text-[#2a1f24]">
            Tratamentos faciais e corporais com resultado e acolhimento.
          </h1>
          <p className="max-w-[360px] text-[13px] leading-[1.5] text-[#7a6a70]">
            Protocolos claros, equipe especializada e um próximo passo simples:
            agende sua avaliação.
          </p>
          <div className="flex items-center gap-4 pt-1">
            <span className="bg-[#2a1f24] px-5 py-3 text-[13px] font-medium text-white">
              Agendar avaliação
            </span>
            <span className="text-[13px] text-[#8a7a80] underline underline-offset-4">
              Ver tratamentos
            </span>
          </div>
        </div>

        <div className="relative min-h-[280px] bg-[#e8d8d4]">
          <div className="pointer-events-none absolute inset-0 pattern-halftone text-[#2a1f24]/15 opacity-40" />
          <div className="absolute inset-0 flex flex-col justify-between p-6">
            <span className="font-mono text-[10px] tracking-[0.16em] text-[#2a1f24]/40 uppercase">
              01 — Avaliação
            </span>
            <div>
              <p className="font-display text-[48px] leading-[0.9] font-black tracking-[-0.04em] text-[#2a1f24]/12">
                AURA
              </p>
              <p className="mt-2 max-w-[180px] text-[12px] leading-[1.4] text-[#2a1f24]/45">
                Rua das Acácias, 150 · Belo Horizonte
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
