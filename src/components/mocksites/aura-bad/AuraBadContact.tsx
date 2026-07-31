import { cn } from '@/lib/cn'

/**
 * AuraBadContact — recorte do formulário/contato do site ruim.
 *
 * CTA “Enviar” fraco, mapa placeholder, tipografia apertada —
 * material para comparação futura, não para redesenho.
 */

export function AuraBadContact({ className }: { className?: string }) {
  return (
    <div className={cn('overflow-hidden bg-[#faf0f4] text-left select-none', className)}>
      <div className="grid grid-cols-[1.1fr_0.9fr] gap-5 px-6 py-7">
        <div>
          <p className="text-[12px] font-bold tracking-[0.06em] text-[#7a3a8a] uppercase">
            Preencha o formulário abaixo para entrar em contato
          </p>
          <div className="mt-4 flex flex-col gap-2.5">
            {['Nome', 'Telefone', 'E-mail'].map((label) => (
              <div
                key={label}
                className="border border-[#d8c8d0] bg-white px-3 py-2.5 text-[11px] text-[#b0a0a8]"
              >
                {label}
              </div>
            ))}
            <div className="flex items-center justify-between border border-[#d8c8d0] bg-white px-3 py-2.5 text-[11px] text-[#6b5a62]">
              <span>Limpeza de pele</span>
              <span className="text-[#aaa]">▾</span>
            </div>
            <div className="h-16 border border-[#d8c8d0] bg-white px-3 py-2.5 text-[11px] text-[#b0a0a8]">
              Mensagem
            </div>
            <span className="w-fit bg-[#c8c0c4] px-4 py-1.5 text-[11px] text-white">
              Enviar
            </span>
          </div>
          <p className="mt-3 text-[9px] leading-[1.5] text-[#a898a0]">
            WhatsApp (31) 99999-9999 · @auraestetica · Rua das Acácias, 150 — BH/MG
          </p>
        </div>

        <div>
          <div
            className="flex aspect-[4/3] items-center justify-center border border-[#d0c0c8] bg-[#e4e0e2] text-center"
            style={{
              backgroundImage:
                'repeating-linear-gradient(-45deg,#d8d4d6 0 8px,#e4e0e2 8px 16px)',
            }}
          >
            <p className="max-w-[180px] px-3 text-[10px] leading-[1.4] text-[#7a7078]">
              Mapa da localização — Rua das Acácias, 150 — Belo Horizonte, MG
            </p>
          </div>
          <p className="mt-2 text-[10px] text-[#8a7a82]">
            Seg a Sáb · 9h às 19h · Domingos sob agendamento
          </p>
        </div>
      </div>
    </div>
  )
}
