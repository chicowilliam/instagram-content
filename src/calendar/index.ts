import { q1 } from './q1'
import { q2 } from './q2'
import { q3 } from './q3'
import { q4 } from './q4'
import { MONTHS, PILLARS, STORY_DERIVATION, slugify } from './types'
import type { CalendarPiece, CalendarWeek, PillarId } from './types'

export * from './types'
export { q1, q2, q3, q4 }

export const CALENDAR: CalendarWeek[] = [...q1, ...q2, ...q3, ...q4]

export const CARROUSELS_PER_WEEK = 3
export const REELS_PER_WEEK = 2
export const STORIES_PER_PUBLICATION = STORY_DERIVATION.length

/** Fixed weekly grid so the audience learns when to expect each format. */
export const WEEKLY_GRID = [
  { day: 'Segunda', slot: 'Carrossel 1', time: '12h30' },
  { day: 'Terça', slot: 'Reel 1', time: '18h30' },
  { day: 'Quarta', slot: 'Carrossel 2', time: '12h30' },
  { day: 'Quinta', slot: 'Reel 2', time: '18h30' },
  { day: 'Sexta', slot: 'Carrossel 3', time: '12h30' },
  { day: 'Sáb / Dom', slot: 'Stories de reforço', time: '10h00' },
] as const

export type CalendarEntry = CalendarPiece & {
  week: number
  month: number
  pillar: PillarId
  format: 'carousel' | 'reel'
  slug: string
}

export function allEntries(): CalendarEntry[] {
  return CALENDAR.flatMap((week) => [
    ...week.carousels.map((piece) => ({
      ...piece,
      week: week.week,
      month: week.month,
      pillar: week.pillar,
      format: 'carousel' as const,
      slug: slugify(piece.title),
    })),
    ...week.reels.map((piece) => ({
      ...piece,
      week: week.week,
      month: week.month,
      pillar: week.pillar,
      format: 'reel' as const,
      slug: slugify(piece.title),
    })),
  ])
}

export function weeksOfMonth(month: number) {
  return CALENDAR.filter((week) => week.month === month)
}

export function pillarDistribution(): Record<PillarId, number> {
  const base = Object.fromEntries(
    Object.keys(PILLARS).map((key) => [key, 0]),
  ) as Record<PillarId, number>
  for (const week of CALENDAR) base[week.pillar] += 1
  return base
}

export function calendarTotals() {
  const carousels = CALENDAR.length * CARROUSELS_PER_WEEK
  const reels = CALENDAR.length * REELS_PER_WEEK
  return {
    weeks: CALENDAR.length,
    months: MONTHS.length,
    carousels,
    reels,
    publications: carousels + reels,
    stories: (carousels + reels) * STORIES_PER_PUBLICATION,
  }
}

export type CalendarIssue = { week?: number; message: string }

/**
 * Enforces the calendar contract:
 * 52 sequential weeks, 3 carousels + 2 reels each, and zero repeated subjects.
 */
export function validateCalendar(): CalendarIssue[] {
  const issues: CalendarIssue[] = []

  if (CALENDAR.length !== 52) {
    issues.push({ message: `Esperado 52 semanas, encontrado ${CALENDAR.length}.` })
  }

  CALENDAR.forEach((week, index) => {
    if (week.week !== index + 1) {
      issues.push({
        week: week.week,
        message: `Semana fora de ordem (posição ${index + 1}).`,
      })
    }
    if (week.carousels.length !== CARROUSELS_PER_WEEK) {
      issues.push({
        week: week.week,
        message: `Esperado ${CARROUSELS_PER_WEEK} carrosséis, encontrado ${week.carousels.length}.`,
      })
    }
    if (week.reels.length !== REELS_PER_WEEK) {
      issues.push({
        week: week.week,
        message: `Esperado ${REELS_PER_WEEK} reels, encontrado ${week.reels.length}.`,
      })
    }
    if (!week.objective.trim()) {
      issues.push({ week: week.week, message: 'Objetivo da semana ausente.' })
    }
    if (!week.bridge.trim()) {
      issues.push({
        week: week.week,
        message: 'Ponte para a semana seguinte ausente.',
      })
    }
  })

  const seen = new Map<string, number>()
  for (const entry of allEntries()) {
    const previous = seen.get(entry.slug)
    if (previous !== undefined) {
      issues.push({
        week: entry.week,
        message: `Assunto repetido "${entry.title}" (já usado na semana ${previous}).`,
      })
    } else {
      seen.set(entry.slug, entry.week)
    }
  }

  return issues
}

/** Ready-to-paste PipelineItem drafts for a whole week. */
export function weekToPipelineSnippet(week: CalendarWeek) {
  const entries = [
    ...week.carousels.map((piece, index) => ({
      piece,
      format: 'Carrossel',
      slot: `Carrossel ${index + 1}`,
    })),
    ...week.reels.map((piece, index) => ({
      piece,
      format: 'Reel',
      slot: `Reel ${index + 1}`,
    })),
  ]

  const body = entries
    .map(
      ({ piece, format, slot }) => `  {
    id: 'IDEA-XXX',
    title: ${JSON.stringify(piece.title)},
    theme: ${JSON.stringify(piece.angle)},
    status: 'ideas',
    stage: 'idea',
    series: ${JSON.stringify(`Semana ${String(week.week).padStart(2, '0')} · ${PILLARS[week.pillar].label}`)},
    whyItMatters: ${JSON.stringify(week.objective)},
    notes: ${JSON.stringify(`${format} · ${slot} · métrica: ${week.metric}`)},
    createdAt: '${new Date().toISOString().slice(0, 10)}',
    updatedAt: '${new Date().toISOString().slice(0, 10)}',
  },`,
    )
    .join('\n')

  return `// Semana ${week.week} · ${week.objective}\n${body}`
}
