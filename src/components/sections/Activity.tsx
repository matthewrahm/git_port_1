import { fetchContributions } from '@/lib/github'
import {
  ContributionGrid,
  LEVEL_COLORS,
} from '@/components/ui/ContributionGrid'
import { RevealSection } from '@/components/ui/RevealSection'

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="font-mono text-2xl sm:text-3xl font-semibold tracking-tight tabular-nums text-text-primary">
        {value}
      </p>
      <p className="font-mono text-[10px] uppercase tracking-widest text-text-muted mt-1.5">
        {label}
      </p>
    </div>
  )
}

export async function Activity() {
  const stats = await fetchContributions('matthewrahm')

  return (
    <section
      id="activity"
      className="px-6 sm:px-12 pt-[calc(var(--space-section)*1.5)] pb-[calc(var(--space-section)*2)]"
    >
      <div className="max-w-5xl">
        <RevealSection>
          <header className="mb-16">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-[-0.02em] text-gradient">
              Activity
            </h2>
            <p className="text-sm text-text-muted mt-3">
              Past year of commits on{' '}
              <a
                href="https://github.com/matthewrahm"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-text-secondary hover:text-accent transition-colors"
              >
                matthewrahm
              </a>
              .
            </p>
          </header>
        </RevealSection>

        <RevealSection delay={80}>
          <div className="card-polished rounded-xl p-6 sm:p-8">
            {stats ? (
              <>
                <div className="grid grid-cols-3 gap-6 sm:gap-12 mb-8">
                  <Stat
                    label="Contributions"
                    value={stats.total.toLocaleString()}
                  />
                  <Stat
                    label="Longest streak"
                    value={`${stats.longestStreak}d`}
                  />
                  <Stat
                    label="Active days"
                    value={stats.activeDays.toString()}
                  />
                </div>

                <div className="pt-6 border-t border-[var(--color-border-subtle)]">
                  <ContributionGrid days={stats.days} />
                </div>

                <div className="mt-5 flex items-center justify-end gap-2 font-mono text-[10px] uppercase tracking-widest text-text-muted">
                  <span>Less</span>
                  {LEVEL_COLORS.map((c, i) => (
                    <span
                      key={i}
                      className="rounded-[2px]"
                      style={{
                        width: 11,
                        height: 11,
                        background: c,
                        boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.03)',
                      }}
                    />
                  ))}
                  <span>More</span>
                </div>
              </>
            ) : (
              <p className="font-mono text-sm text-text-muted">
                Activity data unavailable.
              </p>
            )}
          </div>
        </RevealSection>
      </div>
    </section>
  )
}
