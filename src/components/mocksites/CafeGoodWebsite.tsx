import { cn } from '@/lib/cn'

/**
 * CafeGoodWebsite — asset visual do site intencional (Casa Nôa).
 *
 * Mesmo negócio do CafeBadWebsite. Diferença perceptível antes da leitura:
 * headline clara, CTA evidente, hierarquia, respiro, contraste.
 */

export function CafeGoodWebsite({ className }: { className?: string }) {
  return (
    <div className={cn('relative overflow-hidden bg-white text-[#14120f]', className)}>
      <header className="flex items-center justify-between border-b border-black/[0.08] px-8 py-5">
        <span className="font-display text-[20px] font-semibold tracking-[-0.03em]">
          Casa Nôa
        </span>
        <nav className="flex items-center gap-7 text-[13px] text-black/50">
          <span>Cardápio</span>
          <span>Sobre</span>
          <span>Onde estamos</span>
          <span className="bg-[#14120f] px-4 py-2.5 text-[13px] font-medium text-white">
            Ver o cardápio
          </span>
        </nav>
      </header>

      <div className="grid grid-cols-[1.05fr_0.95fr] items-stretch">
        <div className="flex flex-col justify-center gap-6 px-8 py-12">
          <p className="font-mono text-[11px] tracking-[0.2em] text-black/40 uppercase">
            Torra semanal · Sul de Minas
          </p>
          <h1 className="font-display text-[42px] leading-[1.02] font-semibold tracking-[-0.04em]">
            Café de origem,
            <br />
            torrado toda semana.
          </h1>
          <p className="max-w-[360px] text-[15px] leading-[1.55] text-black/55">
            Grãos selecionados de produtores do sul de Minas. Torra na loja.
            Ambiente para trabalhar, encontrar e ficar.
          </p>
          <div className="flex items-center gap-5 pt-1">
            <span className="bg-[#14120f] px-6 py-3.5 text-[14px] font-medium text-white">
              Ver o cardápio
            </span>
            <span className="text-[14px] text-black/45 underline underline-offset-4">
              Como chegar
            </span>
          </div>
        </div>

        <div className="relative min-h-[320px] bg-[#e8e3d9]">
          <div className="pointer-events-none absolute inset-0 pattern-halftone text-black/20 opacity-30" />
          {/* Composição tipográfica no lugar de foto falsa */}
          <div className="absolute inset-0 flex flex-col justify-between p-7">
            <span className="font-mono text-[11px] tracking-[0.18em] text-black/35 uppercase">
              01 — Espresso
            </span>
            <div>
              <p className="font-display text-[64px] leading-[0.85] font-black tracking-[-0.05em] text-black/15">
                NÔA
              </p>
              <p className="mt-3 max-w-[200px] text-[13px] leading-[1.4] text-black/45">
                Torra semanal na Rua das Palmeiras, 214.
              </p>
            </div>
          </div>
          <span className="absolute right-6 bottom-6 size-10 rounded-full border border-black/20" />
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-black/[0.08] px-8 py-5 text-[13px] text-black/45">
        <span>Ter a Dom · 8h às 19h</span>
        <span>Rua das Palmeiras, 214</span>
        <span>Pedidos pelo WhatsApp</span>
      </div>
    </div>
  )
}
