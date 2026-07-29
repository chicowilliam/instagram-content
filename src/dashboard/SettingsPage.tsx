export function SettingsPage() {
  return (
    <div className="px-8 py-10">
      <header className="mb-8 flex flex-col gap-2">
        <h1 className="text-3xl font-semibold tracking-[-0.03em] text-ink-950">
          Configurações
        </h1>
        <p className="text-sm text-ink-500">
          Identidade e regras do CMS. Design System não se altera por post.
        </p>
      </header>

      <div className="grid max-w-2xl gap-4">
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
    <div className="rounded-2xl border border-surface-200 bg-surface-0 px-5 py-4">
      <h2 className="text-xs uppercase tracking-[0.14em] text-ink-300">{title}</h2>
      <p className="mt-2 text-sm leading-relaxed text-ink-800">{value}</p>
    </div>
  )
}
