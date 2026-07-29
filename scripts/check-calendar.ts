import {
  CALENDAR,
  MONTHS,
  PILLARS,
  calendarTotals,
  pillarDistribution,
  validateCalendar,
} from '../src/calendar/index'

const totals = calendarTotals()
const issues = validateCalendar()
const distribution = pillarDistribution()

console.log('\nCalendário editorial — 12 meses\n')
console.log(`  Meses .............. ${totals.months}`)
console.log(`  Semanas ............ ${totals.weeks}`)
console.log(`  Carrosséis ......... ${totals.carousels}`)
console.log(`  Reels .............. ${totals.reels}`)
console.log(`  Publicações ........ ${totals.publications}`)
console.log(`  Stories derivados .. ${totals.stories}`)

console.log('\nPilares')
for (const [pillar, count] of Object.entries(distribution)) {
  const label = PILLARS[pillar as keyof typeof PILLARS].label
  console.log(`  ${label.padEnd(18)} ${count} semanas`)
}

console.log('\nMeses')
for (const month of MONTHS) {
  const weeks = CALENDAR.filter((week) => week.month === month.month)
  const range = `${weeks[0]?.week}-${weeks[weeks.length - 1]?.week}`
  console.log(`  ${String(month.month).padStart(2, '0')} · ${range.padEnd(7)} ${month.theme}`)
}

if (issues.length === 0) {
  console.log('\nOK — 52 semanas, 5 publicações por semana, nenhum assunto repetido.\n')
  process.exit(0)
}

console.error(`\n${issues.length} problema(s):`)
for (const issue of issues) {
  const prefix = issue.week ? `  Semana ${issue.week}: ` : '  '
  console.error(`${prefix}${issue.message}`)
}
console.error('')
process.exit(1)
