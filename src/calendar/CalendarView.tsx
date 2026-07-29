import { useMemo, useState, type ReactNode } from 'react'
import { cn } from '@/lib/cn'
import {
  CALENDAR,
  MONTHS,
  PILLARS,
  STORY_DERIVATION,
  WEEKLY_GRID,
  calendarTotals,
  pillarDistribution,
  validateCalendar,
  weekToPipelineSnippet,
  weeksOfMonth,
  type CalendarWeek,
  type PillarId,
} from '@/calendar'

export function CalendarView() {
  const [openMonth, setOpenMonth] = useState<number | null>(1)
  const [pillarFilter, setPillarFilter] = useState<PillarId | null>(null)

  const totals = useMemo(calendarTotals, [])
  const issues = useMemo(validateCalendar, [])
  const distribution = useMemo(pillarDistribution, [])

  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <header className="mb-12 flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-ink-400">
            Editorial Calendar
          </p>
          <h1 className="text-4xl font-semibold tracking-[-0.03em] text-ink-950">
            12 meses
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-ink-500">
            52 semanas encadeadas. Cada semana tem um objetivo único, três
            carrosséis, dois reels e stories derivados de cada publicação. Nenhum
            assunto se repete no ano.
          </p>
        </div>

        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-surface-200 bg-surface-200 sm:grid-cols-5">
          <Stat label="Semanas" value={totals.weeks} />
          <Stat label="Carrosséis" value={totals.carousels} />
          <Stat label="Reels" value={totals.reels} />
          <Stat label="Publicações" value={totals.publications} />
          <Stat label="Stories" value={totals.stories} />
        </dl>

        <ValidationBanner count={issues.length} />
      </header>

      <Section title="Grade semanal fixa">
        <ul className="grid gap-px overflow-hidden rounded-2xl border border-surface-200 bg-surface-200 sm:grid-cols-3">
          {WEEKLY_GRID.map((slot) => (
            <li
              key={slot.day}
              className="flex flex-col gap-1 bg-surface-0 px-4 py-3"
            >
              <span className="text-[11px] uppercase tracking-[0.14em] text-ink-300">
                {slot.day}
              </span>
              <span className="text-sm font-medium text-ink-900">
                {slot.slot}
              </span>
              <span className="font-mono text-xs text-ink-400">{slot.time}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Stories derivados de cada publicação">
        <ul className="grid gap-3 sm:grid-cols-3">
          {STORY_DERIVATION.map((story) => (
            <li
              key={story.kind}
              className="flex flex-col gap-1.5 rounded-2xl border border-surface-200 bg-surface-0 px-4 py-4"
            >
              <span className="text-sm font-medium text-ink-900">
                {story.kind}
              </span>
              <span className="text-sm leading-relaxed text-ink-500">
                {story.purpose}
              </span>
              <span className="text-xs leading-relaxed text-ink-300">
                {story.template}
              </span>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Pilares">
        <div className="flex flex-wrap gap-2">
          <FilterChip
            active={pillarFilter === null}
            onClick={() => setPillarFilter(null)}
          >
            Todos
            <Count>{CALENDAR.length}</Count>
          </FilterChip>
          {(Object.keys(PILLARS) as PillarId[]).map((pillar) => (
            <FilterChip
              key={pillar}
              active={pillarFilter === pillar}
              onClick={() =>
                setPillarFilter(pillarFilter === pillar ? null : pillar)
              }
            >
              {PILLARS[pillar].label}
              <Count>{distribution[pillar]}</Count>
            </FilterChip>
          ))}
        </div>
      </Section>

      <div className="mt-14 flex flex-col gap-4">
        {MONTHS.map((month) => {
          const weeks = weeksOfMonth(month.month).filter(
            (week) => !pillarFilter || week.pillar === pillarFilter,
          )
          if (weeks.length === 0) return null
          const open = openMonth === month.month

          return (
            <section
              key={month.month}
              className="overflow-hidden rounded-3xl border border-surface-200 bg-surface-0 shadow-soft"
            >
              <button
                type="button"
                onClick={() => setOpenMonth(open ? null : month.month)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition hover:bg-surface-50"
              >
                <div className="flex flex-col gap-1">
                  <span className="font-mono text-[11px] tracking-[0.14em] text-ink-300">
                    MÊS {String(month.month).padStart(2, '0')} · SEMANAS{' '}
                    {weeks[0]?.week}–{weeks[weeks.length - 1]?.week}
                  </span>
                  <span className="text-lg font-medium tracking-[-0.01em] text-ink-950">
                    {month.theme}
                  </span>
                  <span className="text-sm text-ink-400">{month.promise}</span>
                </div>
                <span className="text-sm text-ink-300">{open ? '−' : '+'}</span>
              </button>

              {open ? (
                <div className="flex flex-col gap-px bg-surface-200">
                  {weeks.map((week) => (
                    <WeekCard key={week.week} week={week} />
                  ))}
                </div>
              ) : null}
            </section>
          )
        })}
      </div>
    </div>
  )
}

function WeekCard({ week }: { week: CalendarWeek }) {
  const [copied, setCopied] = useState(false)

  async function copySnippet() {
    await navigator.clipboard.writeText(weekToPipelineSnippet(week))
    setCopied(true)
    setTimeout(() => setCopied(false), 1600)
  }

  return (
    <article className="flex flex-col gap-6 bg-surface-0 px-6 py-7">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2.5">
            <span className="rounded-full bg-ink-950 px-2.5 py-0.5 font-mono text-[11px] tracking-[0.08em] text-white">
              S{String(week.week).padStart(2, '0')}
            </span>
            <span className="rounded-full border border-surface-200 px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-[0.12em] text-ink-500">
              {PILLARS[week.pillar].label}
            </span>
          </div>
          <p className="max-w-xl text-[15px] font-medium leading-snug tracking-[-0.01em] text-ink-950">
            {week.objective}
          </p>
        </div>

        <div className="flex flex-col items-end gap-2">
          <span className="text-[11px] uppercase tracking-[0.14em] text-ink-300">
            Métrica
          </span>
          <span className="text-sm text-ink-700">{week.metric}</span>
          <button
            type="button"
            onClick={copySnippet}
            className="rounded-full border border-surface-200 px-3 py-1 text-xs text-ink-500 transition hover:border-surface-300 hover:text-ink-900"
          >
            {copied ? 'Copiado' : 'Copiar para Ideas'}
          </button>
        </div>
      </div>

      <p className="max-w-3xl text-sm leading-relaxed text-ink-500">
        {week.narrative}
      </p>

      <div className="grid gap-6 lg:grid-cols-2">
        <PieceList
          label="Carrosséis"
          pieces={week.carousels}
          prefix="Carrossel"
        />
        <PieceList label="Reels" pieces={week.reels} prefix="Reel" />
      </div>

      <div className="grid gap-4 rounded-2xl bg-surface-50 px-5 py-4 sm:grid-cols-2">
        <Meta label="Stories da semana" value={week.storyFocus} />
        <Meta label="Ponte para a próxima" value={week.bridge} />
      </div>
    </article>
  )
}

function PieceList({
  label,
  pieces,
  prefix,
}: {
  label: string
  pieces: { title: string; angle: string }[]
  prefix: string
}) {
  return (
    <div className="flex flex-col gap-3">
      <span className="text-[11px] uppercase tracking-[0.14em] text-ink-300">
        {label}
      </span>
      <ol className="flex flex-col gap-3">
        {pieces.map((piece, index) => (
          <li
            key={piece.title}
            className="flex gap-3 rounded-2xl border border-surface-200 px-4 py-3"
          >
            <span className="mt-0.5 font-mono text-[11px] text-ink-300">
              {prefix.slice(0, 1)}
              {index + 1}
            </span>
            <div className="flex flex-col gap-1">
              <span className="text-sm font-medium leading-snug text-ink-900">
                {piece.title}
              </span>
              <span className="text-sm leading-relaxed text-ink-400">
                {piece.angle}
              </span>
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-[11px] uppercase tracking-[0.14em] text-ink-300">
        {label}
      </span>
      <span className="text-sm leading-relaxed text-ink-600">{value}</span>
    </div>
  )
}

function Stat({ label, value }: { label: string; value: number }) {
  return (
    <div className="flex flex-col gap-1 bg-surface-0 px-4 py-4">
      <dt className="text-[11px] uppercase tracking-[0.14em] text-ink-300">
        {label}
      </dt>
      <dd className="text-2xl font-semibold tracking-[-0.02em] text-ink-950">
        {value}
      </dd>
    </div>
  )
}

function Section({
  title,
  children,
}: {
  title: string
  children: ReactNode
}) {
  return (
    <section className="mt-10 flex flex-col gap-4">
      <h2 className="text-sm font-medium tracking-[-0.01em] text-ink-900">
        {title}
      </h2>
      {children}
    </section>
  )
}

function FilterChip({
  active,
  onClick,
  children,
}: {
  active: boolean
  onClick: () => void
  children: ReactNode
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-sm transition',
        active
          ? 'border-ink-900 bg-ink-950 text-white'
          : 'border-surface-200 bg-surface-0 text-ink-500 hover:border-surface-300 hover:text-ink-900',
      )}
    >
      {children}
    </button>
  )
}

function Count({ children }: { children: ReactNode }) {
  return <span className="font-mono text-[11px] opacity-60">{children}</span>
}

function ValidationBanner({ count }: { count: number }) {
  if (count === 0) {
    return (
      <p className="flex items-center gap-2 rounded-2xl border border-surface-200 bg-surface-50 px-4 py-3 text-sm text-ink-500">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
        Calendário válido: 52 semanas, 5 publicações por semana, nenhum assunto
        repetido.
      </p>
    )
  }

  return (
    <p className="rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
      {count} inconsistência(s) no calendário. Rode{' '}
      <code className="font-mono text-xs">npm run calendar:check</code>.
    </p>
  )
}
