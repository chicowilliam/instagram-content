import { cn } from '@/lib/cn'
import { typeScale } from '@/design-system'
import type { ArtTone } from './types'
import { FooterRule } from './background-system'

const tonePrimary: Record<ArtTone, string> = {
  paper: 'text-editorial-ink',
  ink: 'text-white',
  cobalt: 'text-white',
}

const toneSecondary: Record<ArtTone, string> = {
  paper: 'text-editorial-ink/48',
  ink: 'text-white/48',
  cobalt: 'text-white/58',
}

function Progress({
  current,
  total,
  tone,
}: {
  current: number
  total: number
  tone: ArtTone
}) {
  return (
    <span className={cn(typeScale.mono.xs, toneSecondary[tone])}>
      {String(current).padStart(2, '0')}/{String(total).padStart(2, '0')}
    </span>
  )
}

/**
 * Opção A — assinatura horizontal editorial.
 * Escolhida para o Post 001 por equilibrar autoria, progresso e domínio sem
 * parecer barra de sistema ou link solto.
 */
export function SignatureFooterMinimal({
  name = 'Vinícius William',
  domain = 'viniciuswilliam.dev',
  descriptor = 'Web developer',
  category = 'Editorial 001',
  current = 1,
  total = 5,
  tone = 'paper',
  className,
}: {
  name?: string
  domain?: string
  descriptor?: string
  category?: string
  current?: number
  total?: number
  tone?: ArtTone
  className?: string
}) {
  return (
    <footer className={cn('flex flex-col gap-4', className)}>
      <FooterRule tone={tone} />
      <div className="grid grid-cols-[1fr_auto_1fr] items-end gap-6">
        <div className="flex flex-col gap-1">
          <span className={cn(typeScale.mono.xs, tonePrimary[tone])}>{name}</span>
          <span className={cn('font-sans text-[18px] font-light tracking-[0.08em] uppercase', toneSecondary[tone])}>
            {descriptor}
          </span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <span className={cn('h-1 w-1', tone === 'paper' ? 'bg-signal-red' : 'bg-neon-lime')} />
          <Progress current={current} total={total} tone={tone} />
        </div>
        <div className="flex flex-col items-end gap-1 text-right">
          <span className={cn(typeScale.mono.xs, 'tracking-[0.16em]', tonePrimary[tone])}>
            {domain}
          </span>
          <span className={cn('font-mono text-[16px] tracking-[0.18em] uppercase', toneSecondary[tone])}>
            {category}
          </span>
        </div>
      </div>
    </footer>
  )
}

/** Opção B — etiqueta premium compacta para composições densas. */
export function SignatureLabel({
  title = 'Autoria',
  name = 'Vinícius William',
  domain = 'viniciuswilliam.dev',
  tone = 'paper',
  className,
}: {
  title?: string
  name?: string
  domain?: string
  tone?: ArtTone
  className?: string
}) {
  return (
    <div
      className={cn(
        'inline-grid grid-cols-[7px_1fr] border',
        tone === 'paper'
          ? 'border-editorial-ink/18 bg-editorial-paper/90'
          : 'border-white/18 bg-editorial-ink/90',
        className,
      )}
    >
      <span className={tone === 'paper' ? 'bg-signal-red' : 'bg-neon-lime'} />
      <div className="flex flex-col gap-1 px-5 py-4">
        <span className={cn('font-mono text-[15px] tracking-[0.22em] uppercase', toneSecondary[tone])}>
          {title}
        </span>
        <span className={cn('font-sans text-[24px] font-medium tracking-[-0.01em]', tonePrimary[tone])}>
          {name}
        </span>
        <span className={cn('font-mono text-[17px] tracking-[0.12em]', toneSecondary[tone])}>
          {domain}
        </span>
      </div>
    </div>
  )
}

/** Opção C — crédito vertical para bordas com pouco espaço horizontal. */
export function SignatureVertical({
  name = 'Vinícius William',
  domain = 'viniciuswilliam.dev',
  tone = 'paper',
  side = 'left',
  className,
}: {
  name?: string
  domain?: string
  tone?: ArtTone
  side?: 'left' | 'right'
  className?: string
}) {
  return (
    <div
      className={cn(
        'flex items-center gap-4 whitespace-nowrap',
        side === 'left' ? 'origin-bottom-left -rotate-90' : 'origin-bottom-right rotate-90',
        typeScale.mono.xs,
        toneSecondary[tone],
        className,
      )}
    >
      <span className={tonePrimary[tone]}>{name}</span>
      <span className={cn('h-px w-16', tone === 'paper' ? 'bg-editorial-ink/24' : 'bg-white/24')} />
      <span>{domain}</span>
    </div>
  )
}

/** Opção D — domínio como marca principal para layouts mais silenciosos. */
export function SignatureDomain({
  domain = 'viniciuswilliam.dev',
  descriptor = 'design · tecnologia · estratégia',
  tone = 'paper',
  className,
}: {
  domain?: string
  descriptor?: string
  tone?: ArtTone
  className?: string
}) {
  const [brand, tld = 'dev'] = domain.split('.')
  return (
    <div className={cn('flex flex-col gap-2', className)}>
      <span className={cn('font-display text-[36px] font-semibold leading-none tracking-[-0.035em]', tonePrimary[tone])}>
        {brand}
        <span className={tone === 'paper' ? 'text-signal-red' : 'text-neon-lime'}>.{tld}</span>
      </span>
      <span className={cn('font-mono text-[16px] tracking-[0.2em] uppercase', toneSecondary[tone])}>
        {descriptor}
      </span>
    </div>
  )
}
