import { cn } from '@/lib/cn'

/**
 * AuraBadHero — recorte da hero do site ruim (Aura Estética).
 *
 * Não é uma versão melhorada: preserva nav excessiva, 4 CTAs competindo,
 * tipografia inconsistente e hierarquia fraca. Serve como matéria-prima
 * visual para crops Swiss Editorial — não como template de produto.
 */

export function AuraBadHero({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'overflow-hidden bg-[#f7eef2] text-left select-none',
        className,
      )}
    >
      {/* Header — excesso de opções */}
      <header className="flex items-center justify-between gap-3 border-b border-[#e8d5dc] bg-white px-5 py-3">
        <div className="min-w-0 shrink-0">
          <p
            className="truncate text-[22px] leading-none font-normal text-[#d63384]"
            style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontStyle: 'italic' }}
          >
            Aura Estética Avançada
          </p>
          <p className="mt-1 text-[8px] tracking-[0.12em] text-[#9a8a90] uppercase">
            Estética facial e corporal · Belo Horizonte - MG
          </p>
        </div>
        <nav className="flex flex-wrap items-center justify-end gap-x-2.5 gap-y-1 text-[9px] text-[#6b5a62]">
          {[
            'INÍCIO',
            'Sobre',
            'Serviços',
            'Tratamentos',
            'PROMOÇÕES',
            'Galeria',
            'Profissionais',
            'Depoimentos',
            'CONTATO',
          ].map((item, i) => (
            <span
              key={item}
              className={cn(
                i === 0 && 'font-semibold text-[#d63384] underline underline-offset-2',
              )}
            >
              {item}
            </span>
          ))}
          <span className="ml-1 border border-[#d0c0c6] px-2 py-1 text-[8px] text-[#888]">
            whatsapp (31) 99999-9999
          </span>
        </nav>
      </header>

      {/* Hero — hierarquia fraca + CTAs competindo */}
      <div className="grid grid-cols-[1.15fr_0.85fr] gap-5 bg-gradient-to-b from-[#fce8f0] to-white px-6 py-7">
        <div className="flex flex-col gap-3">
          <p className="text-[9px] tracking-[0.16em] text-[#c4a090] uppercase">
            Seja bem vinda ao nosso espaço de beleza e bem estar
          </p>
          <h1
            className="text-[28px] leading-[1.15] font-normal text-[#4a2c3a]"
            style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
          >
            Realce ainda mais a sua beleza com nossos tratamentos
          </h1>
          <p className="max-w-[420px] text-[11px] leading-[1.55] text-[#8a7a82]">
            Oferecemos uma ampla variedade de procedimentos faciais e corporais
            com profissionais qualificados, produtos selecionados e um ambiente
            acolhedor para você se sentir especial em cada visita.
          </p>

          {/* 4 CTAs — estilos diferentes de propósito */}
          <div className="mt-1 flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-[#e91e8c] px-3.5 py-2 text-[10px] font-medium text-white">
              Conheça nossos tratamentos
            </span>
            <span className="rounded-full bg-[#c5a847] px-3.5 py-2 text-[10px] font-medium text-white">
              Fale conosco
            </span>
            <span className="rounded border border-[#e8b8c8] bg-[#fdf2f6] px-3 py-1.5 text-[10px] text-[#6b4a58]">
              Saiba mais
            </span>
            <span className="bg-[#6b3a7a] px-3 py-2 text-[9px] font-bold tracking-wide text-white uppercase">
              Veja as promoções
            </span>
          </div>

          <p className="mt-2 text-[8px] leading-[1.5] text-[#b0a0a8]">
            Rua das Acácias, 150 — Belo Horizonte, MG · Seg a Sáb 9h–19h · Instagram
            @auraestetica · (31) 99999-9999
          </p>
        </div>

        {/* Foto do hero — bloco chapado com “foto” simulada, sem asset externo */}
        <div className="relative border-[3px] border-white bg-[#f0e4ea] shadow-[0_4px_16px_rgb(80_40_60/0.12)]">
          <div className="absolute inset-0 bg-gradient-to-br from-[#f8eef2] via-[#e8d0dc] to-[#d4b8c4]" />
          <div className="absolute inset-x-6 top-8 h-16 bg-white/90 shadow-sm" />
          <div className="absolute top-10 left-10 size-3 rounded-full bg-[#e91e8c]/70" />
          <div className="absolute right-8 bottom-10 h-20 w-14 border-2 border-[#c5a847]/50 bg-[#fff8f0]/80" />
          <div className="absolute bottom-6 left-6 right-6">
            <p
              className="text-[12px] text-[#d63384]/80"
              style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}
            >
              sala de tratamento
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
