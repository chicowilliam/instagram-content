import { border, pad, radius, stack, text } from '@/design-system'
import { cn } from '@/lib/cn'
import { ThemeToggle } from './ThemeToggle'

export function SettingsPage() {
  return (
    <div className={pad.page}>
      <header className={cn('mb-8 flex flex-col', stack.xs)}>
        <h1 className={text.pageTitle}>Configurações</h1>
        <p className={text.body}>
          Identidade e regras do CMS. Design System não se altera por post.
        </p>
      </header>

      <div className={cn('grid max-w-2xl', stack.md)}>
        <section
          className={cn('bg-surface-0', radius.card, border.hairline, pad.card)}
        >
          <ThemeToggle variant="panel" />
          <p className={cn('mt-3', text.body)}>
            O tema vale só para o CMS. Slides de preview e exportação permanecem
            na identidade do post.
          </p>
        </section>

        <Setting
          title="Marca"
          value="Vinícius William · Desenvolvimento Web"
        />
        <Setting title="Formato carrossel" value="1080 × 1350 PNG" />
        <Setting title="Formato stories" value="1080 × 1920 PNG" />
        <Setting
          title="Fluxo obrigatório"
          value="IDEA → BRIEF → COPY → DESIGN → REACT → PREVIEW → READY → PUBLISHED"
        />
        <Setting
          title="Referências de identidade"
          value="Apple · Linear · Stripe · Framer · Raycast · Vercel · Arc · Notion · Jam"
        />
        <Setting
          title="Regra de design"
          value="Nunca modificar o Design System. Nunca criar estilos diferentes por post."
        />
      </div>
    </div>
  )
}

function Setting({ title, value }: { title: string; value: string }) {
  return (
    <div className={cn('bg-surface-0', radius.card, border.hairline, pad.card)}>
      <h2 className={text.label}>{title}</h2>
      <p className={cn('mt-2 text-sm leading-relaxed text-ink-800')}>{value}</p>
    </div>
  )
}
