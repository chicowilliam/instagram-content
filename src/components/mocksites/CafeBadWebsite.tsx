import { cn } from '@/lib/cn'

/**
 * CafeBadWebsite — asset visual do site improvisado (Casa Nôa).
 *
 * Não é placeholder lavado: é feio com intenção e presença gráfica forte.
 * Defeitos legíveis na miniatura:
 * - hierarquia fraca (tudo compete)
 * - ação escondida (CTA minúsculo / genérico)
 * - excesso de informação
 * - contraste ruim e cores conflitantes
 * - tipografia inconsistente
 */

export function CafeBadWebsite({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'relative overflow-hidden bg-[#ecece8] text-left text-[#3a3a3a]',
        className,
      )}
    >
      {/* Barra de aviso — ruído institucional */}
      <div className="flex items-center justify-between bg-[#2a6f6a] px-4 py-1.5 text-[10px] tracking-[0.04em] text-[#d7f3ef]">
        <span>⚠ Site em construção · última atualização: 12/2019</span>
        <span className="underline">painel do cliente</span>
      </div>

      {/* Header confuso */}
      <div className="flex items-start justify-between gap-3 border-b-2 border-[#c8c8c2] bg-[#f7f7f4] px-4 py-3">
        <div>
          <p className="font-serif text-[28px] leading-none font-bold tracking-[0.02em] text-[#1f4d8c]">
            Casa Nôa
          </p>
          <p className="mt-1 text-[11px] text-[#888] italic">
            Qualidade · Tradição · Família · Desde sempre!!!
          </p>
        </div>
        <div className="text-right text-[9px] leading-[1.4] text-[#666]">
          <p>WhatsApp: (11) 99999-0000</p>
          <p>contato@casanoa.com.br</p>
          <p className="text-[#1f4d8c] underline">mapa / como chegar</p>
        </div>
      </div>

      {/* Nav excessiva */}
      <nav className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 border-b border-[#d0d0ca] bg-[#e4e4de] px-3 py-2 text-[11px] text-[#1f4d8c] underline">
        {[
          'Home',
          'Quem somos',
          'Cardápio',
          'Fotos',
          'Novidades',
          'Eventos',
          'Contato',
          'Trabalhe conosco',
          'Links',
          'Blog',
        ].map((item) => (
          <span key={item}>{item}</span>
        ))}
      </nav>

      {/* Banner gritante sem hierarquia */}
      <div className="bg-[#f0d84a] px-4 py-3 text-center">
        <p className="text-[18px] font-black tracking-[0.08em] text-[#8b1a1a] uppercase">
          Seja bem-vindo ao nosso site!!!
        </p>
        <p className="mt-1 text-[11px] text-[#5a4a10]">
          Confira nossas promoções · clique aqui · saiba mais · veja também
        </p>
      </div>

      {/* Conteúdo: parede de texto + CTA escondido */}
      <div className="grid grid-cols-[1.2fr_0.8fr] gap-3 px-4 py-4">
        <div>
          <p className="text-[13px] font-bold text-[#555]">Sobre a Casa Nôa</p>
          <p className="mt-2 text-[10px] leading-[1.65] text-[#7a7a7a]">
            Somos uma empresa que atua no ramo de cafeteria e alimentação com o
            objetivo de oferecer os melhores produtos e serviços com qualidade e
            atendimento diferenciado para toda a família, buscando sempre a
            excelência e a satisfação total dos nossos clientes em todos os
            momentos. Venha nos conhecer e aproveite nossos deliciosos cafés,
            doces, salgados e muito mais. Aceitamos encomendas para eventos.
          </p>
          <p className="mt-2 text-[10px] leading-[1.65] text-[#7a7a7a]">
            Nossa missão é ser referência no segmento, nossa visão é crescer com
            ética e nossos valores são respeito, qualidade e compromisso. Para
            mais informações{' '}
            <span className="text-[#1f4d8c] underline">clique aqui</span>.
          </p>
          {/* CTA fraco — ação escondida */}
          <p className="mt-3 text-[10px]">
            <span className="border border-[#aaa] bg-[#f0f0ee] px-2 py-1 text-[#777]">
              mais informações
            </span>
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <div className="border border-[#c8c8c2] bg-[#ddd] p-2">
            <div className="aspect-[4/3] bg-[#cfcfc8]" />
            <p className="mt-1 text-center text-[9px] text-[#888]">foto do balcão</p>
          </div>
          <div className="border border-[#c8c8c2] bg-[#fff8e7] p-2 text-[9px] leading-[1.5] text-[#666]">
            <p className="font-bold text-[#8b1a1a]">★ NOVIDADE ★</p>
            <p>Combo café + pão de queijo — pergunte no balcão os valores atualizados.</p>
          </div>
        </div>
      </div>

      {/* Grade de fotos sem cuidado */}
      <div className="grid grid-cols-4 gap-1 border-t border-[#d0d0ca] bg-[#e8e8e2] px-3 py-3">
        {['café', 'bolo', 'sala', 'rua'].map((label, i) => (
          <div key={label} className="border border-[#bbb] bg-[#d8d8d2]">
            <div
              className="aspect-square"
              style={{
                backgroundColor: ['#c4b8a8', '#b8c4b0', '#b0b8c4', '#c4b0b0'][i],
              }}
            />
            <p className="py-0.5 text-center text-[8px] text-[#777]">{label}</p>
          </div>
        ))}
      </div>

      {/* Footer amador */}
      <div className="flex items-center justify-between border-t-2 border-[#bdbdb7] bg-[#dcdcd6] px-4 py-2 text-[9px] text-[#777]">
        <span>casanoa.com.br · Todos os direitos reservados</span>
        <span>visitantes: 00{1247 + 3}</span>
      </div>
    </div>
  )
}
