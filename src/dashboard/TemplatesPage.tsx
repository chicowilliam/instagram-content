import { TEMPLATES } from '@/templates'

export function TemplatesPage() {
  return (
    <div className="px-8 py-10">
      <header className="mb-8 flex flex-col gap-2">
        <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-ink-300">
          Design System
        </p>
        <h1 className="text-3xl font-semibold tracking-[-0.03em] text-ink-950">
          Templates
        </h1>
        <p className="max-w-xl text-sm text-ink-500">
          Todo conteúdo escolhe um template. Nunca inventar layout fora desta
          lista.
        </p>
      </header>

      <ul className="grid gap-4 md:grid-cols-2">
        {TEMPLATES.map((template) => (
          <li
            key={template.id}
            className="flex flex-col gap-3 rounded-2xl border border-surface-200 bg-surface-0 p-5"
          >
            <div className="flex items-center justify-between gap-3">
              <h2 className="text-[15px] font-medium text-ink-950">
                {template.label}
              </h2>
              <span className="font-mono text-[11px] text-ink-300">
                {template.defaultSlides} slides
              </span>
            </div>
            <p className="text-sm text-ink-500">{template.description}</p>
            <p className="text-xs text-ink-400">Melhor para: {template.bestFor}</p>
            <div className="flex flex-wrap gap-1.5 border-t border-surface-100 pt-3">
              {template.components.map((name) => (
                <span
                  key={name}
                  className="rounded-full bg-surface-100 px-2.5 py-0.5 font-mono text-[10px] text-ink-500"
                >
                  {name}
                </span>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
