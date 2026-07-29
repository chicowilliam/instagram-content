import { openIdeas } from '@/ideas'

export function IdeasPage() {
  const ideas = openIdeas()

  return (
    <div className="px-8 py-10">
      <header className="mb-8 flex flex-col gap-2">
        <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-ink-300">
          Inbox
        </p>
        <h1 className="text-3xl font-semibold tracking-[-0.03em] text-ink-950">
          Ideias
        </h1>
        <p className="max-w-xl text-sm text-ink-500">
          Todo tema novo entra aqui primeiro. Só vira post depois do Brief.
        </p>
      </header>

      <ul className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
        {ideas.map((idea) => (
          <li
            key={idea.id}
            className="flex flex-col gap-3 rounded-2xl border border-surface-200 bg-surface-0 p-5"
          >
            <span className="font-mono text-[11px] text-ink-300">{idea.id}</span>
            <h2 className="text-[15px] font-medium text-ink-950">{idea.title}</h2>
            {idea.notes ? (
              <p className="text-sm leading-relaxed text-ink-500">{idea.notes}</p>
            ) : null}
            <div className="flex flex-wrap gap-1.5">
              {idea.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-surface-100 px-2.5 py-0.5 text-[11px] text-ink-500"
                >
                  {tag}
                </span>
              ))}
            </div>
            <span className="mt-auto text-xs text-ink-300">{idea.createdAt}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
