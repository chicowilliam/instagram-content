import { cn } from '@/lib/cn'
import { CafeBadWebsite, CafeGoodWebsite } from '@/components/mocksites'
import type { FakeBusiness, SiteQuality } from './types'

/**
 * WebsiteFragment — interface de um negócio fictício, desenhada em React.
 *
 * Post 001 usa cafeteria (Casa Nôa) via CafeBadWebsite / CafeGoodWebsite.
 * Outros nichos mantêm fragmentos legados até migrarem para assets dedicados.
 *
 * Contrato: docs/swiss-editorial-analysis.md
 */

interface Copy {
  readonly name: string
  readonly url: string
  readonly nav: readonly string[]
  readonly headline: string
  readonly support: string
  readonly action: string
  readonly facts: readonly string[]
  readonly imageCaption: string
  readonly noisyNav: readonly string[]
  readonly noisyBanner: string
  readonly noisyBlurb: string
}

const businesses: Record<FakeBusiness, Copy> = {
  cafeteria: {
    name: 'Casa Nôa',
    url: 'casanoa.com.br',
    nav: ['Cardápio', 'Sobre', 'Onde estamos'],
    headline: 'Café de origem, torrado toda semana.',
    support: 'Grãos selecionados de produtores do sul de Minas, torra semanal na loja.',
    action: 'Ver o cardápio',
    facts: ['Ter a Dom · 8h às 19h', 'Rua das Palmeiras, 214', 'Pedidos pelo WhatsApp'],
    imageCaption: 'Torra semanal',
    noisyNav: [
      'Home',
      'Quem somos',
      'Cardápio',
      'Fotos',
      'Novidades',
      'Contato',
      'Trabalhe conosco',
      'Links',
    ],
    noisyBanner: 'SEJA BEM-VINDO AO NOSSO SITE!!!',
    noisyBlurb:
      'Somos uma empresa que atua no ramo de cafeteria e alimentação com o objetivo de oferecer os melhores produtos e serviços com qualidade e atendimento diferenciado para toda a família.',
  },
  clinica: {
    name: 'Clínica Alvo',
    url: 'clinicaalvo.com.br',
    nav: ['Especialidades', 'Equipe', 'Agendar'],
    headline: 'Atendimento com hora marcada e sem espera.',
    support: 'Consultas de rotina, exames e acompanhamento em um só lugar.',
    action: 'Agendar consulta',
    facts: ['Seg a Sex · 7h às 20h', 'Av. Central, 980 · sala 12', 'Convênios aceitos'],
    imageCaption: 'Hora marcada',
    noisyNav: [
      'Início',
      'A clínica',
      'Corpo clínico',
      'Exames',
      'Convênios',
      'Notícias',
      'Contato',
      'Área do paciente',
    ],
    noisyBanner: 'BEM-VINDO À NOSSA CLÍNICA!!!',
    noisyBlurb:
      'Nossa clínica atua no segmento de saúde oferecendo serviços médicos com profissionais altamente qualificados.',
  },
  escritorio: {
    name: 'Braga & Reis',
    url: 'bragareis.adv.br',
    nav: ['Atuação', 'Equipe', 'Contato'],
    headline: 'Assessoria jurídica para empresas em crescimento.',
    support: 'Contratos, trabalhista e societário com acompanhamento próximo.',
    action: 'Falar com o escritório',
    facts: ['Seg a Sex · 9h às 18h', 'Ed. Monteiro · 11º andar', 'Primeira conversa sem custo'],
    imageCaption: 'Atuação empresarial',
    noisyNav: [
      'Home',
      'O escritório',
      'Áreas de atuação',
      'Advogados',
      'Artigos',
      'Notícias',
      'Contato',
      'Links úteis',
    ],
    noisyBanner: 'BEM-VINDO AO NOSSO ESCRITÓRIO!!!',
    noisyBlurb:
      'O escritório atua de forma ampla em diversas áreas do direito prestando serviços de consultoria e assessoria jurídica.',
  },
}

export function siteUrl(business: FakeBusiness) {
  return businesses[business].url
}

export function WebsiteFragment({
  business = 'cafeteria',
  quality = 'intentional',
  className,
}: {
  business?: FakeBusiness
  quality?: SiteQuality
  className?: string
}) {
  if (business === 'cafeteria') {
    return quality === 'intentional' ? (
      <CafeGoodWebsite className={className} />
    ) : (
      <CafeBadWebsite className={className} />
    )
  }

  const copy = businesses[business]
  return quality === 'intentional' ? (
    <IntentionalSite copy={copy} className={className} />
  ) : (
    <ImprovisedSite copy={copy} className={className} />
  )
}

function IntentionalSite({ copy, className }: { copy: Copy; className?: string }) {
  return (
    <div className={cn('bg-white text-[#14120f]', className)}>
      <header className="flex items-center justify-between border-b border-black/[0.07] px-9 py-5">
        <span className="text-[17px] font-semibold tracking-[-0.02em]">{copy.name}</span>
        <nav className="flex items-center gap-7 text-[13px] text-black/55">
          {copy.nav.map((item) => (
            <span key={item}>{item}</span>
          ))}
          <span className="bg-[#14120f] px-4 py-2 text-[13px] font-medium text-white">
            {copy.action}
          </span>
        </nav>
      </header>

      <div className="grid grid-cols-[1.1fr_0.9fr] items-center gap-10 px-9 py-12">
        <div className="flex flex-col gap-5">
          <h1 className="text-[38px] leading-[1.08] font-semibold tracking-[-0.035em]">
            {copy.headline}
          </h1>
          <p className="max-w-[380px] text-[15px] leading-[1.5] text-black/55">
            {copy.support}
          </p>
          <div className="flex items-center gap-4 pt-1">
            <span className="bg-[#14120f] px-6 py-3 text-[14px] font-medium text-white">
              {copy.action}
            </span>
            <span className="text-[14px] text-black/45 underline underline-offset-4">
              Ver fotos
            </span>
          </div>
        </div>

        <div className="relative aspect-[4/5] w-full bg-[#e8e3d9]">
          <div className="pointer-events-none absolute inset-0 pattern-halftone text-black/25 opacity-25" />
          <div className="absolute inset-x-6 bottom-6 flex items-end justify-between">
            <span className="text-[12px] tracking-[0.14em] text-black/40 uppercase">
              {copy.imageCaption}
            </span>
            <span className="size-9 rounded-full border border-black/25" />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-black/[0.07] px-9 py-5 text-[13px] text-black/50">
        {copy.facts.map((fact) => (
          <span key={fact}>{fact}</span>
        ))}
      </div>
    </div>
  )
}

function ImprovisedSite({ copy, className }: { copy: Copy; className?: string }) {
  return (
    <div className={cn('bg-[#f4f4f2] text-center text-[#6b6b6b]', className)}>
      <div className="bg-[#dcdcda] py-2 text-[11px] tracking-[0.06em] text-[#8a8a8a]">
        Site em construção — algumas páginas podem não funcionar
      </div>
      <div className="px-6 pt-6 pb-3">
        <p className="font-serif text-[26px] leading-[1.1] font-bold tracking-[0.02em] text-[#4a4a4a]">
          {copy.name}
        </p>
        <p className="mt-1 text-[15px] text-[#9a9a9a] italic">
          Qualidade e tradição para você e sua família
        </p>
      </div>
      <nav className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 border-y border-[#d8d8d6] px-6 py-3 text-[12px] text-[#7d8fa8] underline">
        {copy.noisyNav.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </nav>
      <p className="px-6 pt-5 text-[19px] font-bold tracking-[0.04em] text-[#8b8b8b]">
        {copy.noisyBanner}
      </p>
      <p className="mx-auto max-w-[620px] px-6 pt-3 text-[12px] leading-[1.75] text-[#9b9b9b]">
        {copy.noisyBlurb}
      </p>
      <div className="mt-4 grid grid-cols-4 gap-2 px-6">
        {[0, 1, 2, 3].map((index) => (
          <div key={index} className="aspect-[4/3] bg-[#e4e4e2]" />
        ))}
      </div>
      <p className="px-6 pt-4 pb-3 text-[11px] text-[#a8a8a8]">
        Para mais informações <span className="text-[#7d8fa8] underline">clique aqui</span>
      </p>
      <div className="border-t border-[#d8d8d6] px-6 py-3 text-[10px] text-[#adadad]">
        {copy.url} · Todos os direitos reservados
      </div>
    </div>
  )
}
