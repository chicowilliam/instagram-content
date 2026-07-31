import { cn } from '@/lib/cn'

/**
 * AuraBadPromo — faixa de promoção + “Sobre” (segundo recorte útil).
 * Mantém estética inconsistente: script + condensed + botão mostarda.
 */

export function AuraBadPromo({ className }: { className?: string }) {
  return (
    <div className={cn('overflow-hidden bg-[#faf6f2] text-left select-none', className)}>
      <div className="border-y-2 border-[#c5a847] bg-[#e22d7e] px-6 py-5 text-center text-white">
        <p className="text-[10px] tracking-[0.2em]">★★★★★</p>
        <p className="mt-1 text-[18px] font-black tracking-[0.08em] uppercase">
          Promoção do mês
        </p>
        <p
          className="mt-1 text-[20px] leading-tight"
          style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}
        >
          Limpeza de pele + peeling com condição especial
        </p>
        <p className="mt-2 text-[9px] text-white/80">
          Válido apenas neste mês · consulte condições na clínica
        </p>
        <span className="mt-3 inline-block rounded-full bg-[#c5a847] px-5 py-2 text-[11px] font-bold text-white">
          EU QUERO
        </span>
      </div>

      <div className="grid grid-cols-[0.9fr_1.1fr] gap-5 px-6 py-6">
        <div className="relative min-h-[140px] bg-[#e8dce2]">
          <div className="absolute inset-4 border border-white/60 bg-[#f5eef2]" />
          <div className="absolute bottom-6 left-6 size-10 rounded-sm bg-[#e8b8c8]" />
        </div>
        <div>
          <p
            className="text-[22px] text-[#7a3a8a]"
            style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}
          >
            Sobre a clínica
          </p>
          <p className="mt-2 text-[10px] leading-[1.65] text-[#8a7a82]">
            Nossa clínica nasceu com o propósito de oferecer tratamentos de
            estética com carinho, qualidade e tecnologia. Contamos com uma
            equipe dedicada e um espaço pensado para o seu conforto.
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {['QUALIDADE', 'CARINHO', 'EXPERIÊNCIA'].map((label) => (
              <span
                key={label}
                className="rounded-full border border-[#e3d1b4] px-3 py-1 text-[8px] tracking-[0.12em] text-[#c5a847]"
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
