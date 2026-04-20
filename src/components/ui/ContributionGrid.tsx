import type { ContributionDay } from '@/lib/github'

export const LEVEL_COLORS = [
  'rgba(255,255,255,0.05)',
  'rgba(153,69,255,0.22)',
  'rgba(153,69,255,0.42)',
  'rgba(153,69,255,0.70)',
  '#9945FF',
] as const

const MONTHS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
]

const DAY_LABELS = ['', 'Mon', '', 'Wed', '', 'Fri', '']

const CELL = 11
const GAP = 3
const STEP = CELL + GAP

function formatDate(dateStr: string): string {
  const d = new Date(`${dateStr}T00:00:00`)
  return d.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
}

export function ContributionGrid({ days }: { days: ContributionDay[] }) {
  if (days.length === 0) return null

  const firstDow = new Date(`${days[0].date}T00:00:00`).getDay()

  const weeks: (ContributionDay | null)[][] = []
  let week: (ContributionDay | null)[] = Array(firstDow).fill(null)
  for (const d of days) {
    week.push(d)
    if (week.length === 7) {
      weeks.push(week)
      week = []
    }
  }
  if (week.length > 0) {
    while (week.length < 7) week.push(null)
    weeks.push(week)
  }

  const monthMarkers: { col: number; label: string }[] = []
  let lastMonth = -1
  weeks.forEach((w, i) => {
    const firstReal = w.find((d): d is ContributionDay => d !== null)
    if (!firstReal) return
    const month = new Date(`${firstReal.date}T00:00:00`).getMonth()
    if (month !== lastMonth) {
      monthMarkers.push({ col: i, label: MONTHS[month] })
      lastMonth = month
    }
  })

  const gridWidth = weeks.length * STEP - GAP

  return (
    <div className="overflow-x-auto -mx-2 px-2">
      <div className="inline-block">
        <div
          className="relative mb-1.5"
          style={{ height: 14, paddingLeft: 28, width: gridWidth + 28 }}
        >
          {monthMarkers.map((m) => (
            <span
              key={`${m.col}-${m.label}`}
              className="absolute top-0 font-mono text-[10px] uppercase tracking-wider text-text-muted"
              style={{ left: 28 + m.col * STEP }}
            >
              {m.label}
            </span>
          ))}
        </div>

        <div className="flex" style={{ gap: GAP }}>
          <div
            className="flex flex-col pr-2"
            style={{ gap: GAP, width: 28 }}
          >
            {DAY_LABELS.map((d, i) => (
              <div
                key={i}
                className="font-mono text-[10px] uppercase text-text-muted"
                style={{ height: CELL, lineHeight: `${CELL}px` }}
              >
                {d}
              </div>
            ))}
          </div>

          {weeks.map((w, ci) => (
            <div key={ci} className="flex flex-col" style={{ gap: GAP }}>
              {w.map((day, ri) => (
                <div
                  key={ri}
                  title={
                    day
                      ? `${day.count} contribution${
                          day.count === 1 ? '' : 's'
                        } on ${formatDate(day.date)}`
                      : ''
                  }
                  className="rounded-[2px] transition-transform duration-150 hover:scale-125"
                  style={{
                    width: CELL,
                    height: CELL,
                    background: day ? LEVEL_COLORS[day.level] : 'transparent',
                    boxShadow: day
                      ? 'inset 0 0 0 1px rgba(255,255,255,0.03)'
                      : 'none',
                  }}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
