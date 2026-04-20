export type ContributionDay = {
  date: string
  count: number
  level: 0 | 1 | 2 | 3 | 4
}

export type ContributionStats = {
  total: number
  longestStreak: number
  currentStreak: number
  activeDays: number
  days: ContributionDay[]
}

const CONTRIB_URL = (user: string) =>
  `https://github-contributions-api.jogruber.de/v4/${user}?y=last`

export async function fetchContributions(
  username: string
): Promise<ContributionStats | null> {
  try {
    const res = await fetch(CONTRIB_URL(username), {
      next: { revalidate: 3600 },
    })
    if (!res.ok) return null
    const data = (await res.json()) as {
      total: Record<string, number>
      contributions: ContributionDay[]
    }
    const days = data.contributions ?? []
    if (days.length === 0) return null

    const total = Object.values(data.total ?? {}).reduce((a, b) => a + b, 0)

    let longest = 0
    let run = 0
    let active = 0
    for (const d of days) {
      if (d.count > 0) {
        run++
        active++
        if (run > longest) longest = run
      } else {
        run = 0
      }
    }

    let current = 0
    for (let i = days.length - 1; i >= 0; i--) {
      if (days[i].count > 0) current++
      else break
    }

    return {
      total,
      longestStreak: longest,
      currentStreak: current,
      activeDays: active,
      days,
    }
  } catch {
    return null
  }
}
