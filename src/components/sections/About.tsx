import { TechTag } from '@/components/ui/TechTag'
import { RevealSection } from '@/components/ui/RevealSection'
import { experience } from '@/lib/experience'

const STACK_GROUPS = [
  {
    label: 'Languages',
    skills: ['Rust', 'TypeScript', 'Python', 'Swift', 'Java', 'SQL'],
  },
  {
    label: 'Frameworks',
    skills: ['Next.js', 'React', 'Node.js', 'FastAPI', 'Tokio', 'Anchor'],
  },
  {
    label: 'Data',
    skills: ['PostgreSQL', 'Prisma', 'Redis', 'SQLite', 'WebSocket'],
  },
  {
    label: 'Infrastructure',
    skills: [
      'Solana',
      'Hyperliquid',
      'Anthropic SDK',
      'Helius',
      'AWS',
      'Vercel',
    ],
  },
]

const EDUCATION = {
  org: 'Brigham Young University',
  period: '2023 \u2013 2027',
  title: 'B.S. Computer Science \u00b7 3.9 GPA',
}

function Row({
  label,
  children,
  delay = 0,
}: {
  label: string
  children: React.ReactNode
  delay?: number
}) {
  return (
    <RevealSection delay={delay}>
      <div className="grid grid-cols-1 sm:grid-cols-[120px_1fr] gap-3 sm:gap-12">
        <p className="font-mono text-[11px] uppercase tracking-widest text-text-muted pt-2">
          {label}
        </p>
        <div>{children}</div>
      </div>
    </RevealSection>
  )
}

export function About() {
  return (
    <section
      id="about"
      className="px-6 sm:px-12 pt-[calc(var(--space-section)*1.5)] pb-[calc(var(--space-section)*2)]"
    >
      <RevealSection>
        <header className="mb-20">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-[-0.02em] text-gradient">
            About
          </h2>
          <p className="text-sm text-text-muted mt-3">
            Who I am, what I&apos;m building.
          </p>
        </header>
      </RevealSection>

      <div className="space-y-24 max-w-3xl">
        <Row label="Bio" delay={80}>
          <div className="space-y-5">
            <p className="text-lg sm:text-xl font-medium text-text-primary leading-snug tracking-[-0.01em]">
              Software Engineering student at BYU, graduating 2027. Current focus
              is the blockchain at large: Solana, Ethereum, and Hyperliquid.
              Trading infrastructure, on-chain intelligence, and low-latency
              data systems.
            </p>
            <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
              Background in full-stack web, iOS, and data engineering across
              early-stage startups. Comfortable owning systems end-to-end, from
              smart contract through indexer to the frontend that ships under
              load.
            </p>
          </div>
        </Row>

        <Row label="Now" delay={160}>
          <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
            Shipping{' '}
            <span className="text-text-primary font-semibold">pump-radar</span>,
            a real-time PumpFun signal pipeline running on a low-latency on-chain
            ingest. Designing{' '}
            <span className="text-text-primary font-semibold">VOLT</span>, a
            perpetual futures terminal targeting memecoin traders on Hyperliquid.
          </p>
        </Row>

        <Row label="Track Record" delay={240}>
          <ol className="relative border-l border-[var(--color-border-default)] pl-7 space-y-10">
            {experience.map((role) => {
              const isCurrent = /Present/i.test(role.period)
              return (
                <li
                  key={role.id}
                  className="group cursor-default transition-transform duration-200 hover:-translate-y-0.5"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                    <div className="flex items-center gap-3 -ml-[32px]">
                      <span
                        aria-hidden
                        className={`block w-2 h-2 rounded-full shrink-0 transition-all duration-200 group-hover:scale-150 ${
                          isCurrent
                            ? 'bg-accent group-hover:shadow-[0_0_0_4px_color-mix(in_oklab,var(--color-accent)_18%,transparent)]'
                            : 'bg-[var(--color-border-default)] group-hover:bg-text-secondary'
                        }`}
                      />
                      <p className="text-sm font-semibold text-text-primary transition-colors group-hover:text-accent">
                        {role.company}
                      </p>
                    </div>
                    <p className="font-mono text-[11px] text-text-muted shrink-0 transition-colors group-hover:text-text-secondary">
                      {role.period}
                    </p>
                  </div>
                  <p className="text-xs text-text-secondary mt-1 transition-colors group-hover:text-text-primary">
                    {role.title}
                  </p>
                  {isCurrent && (
                    <p className="mt-3 text-sm text-text-muted leading-relaxed transition-colors group-hover:text-text-secondary">
                      {role.bullets[0]}
                    </p>
                  )}
                  {isCurrent && role.tags.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {role.tags.map((t) => (
                        <TechTag key={t} label={t} />
                      ))}
                    </div>
                  )}
                </li>
              )
            })}

            <li className="group cursor-default transition-transform duration-200 hover:-translate-y-0.5">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <div className="flex items-center gap-3 -ml-[32px]">
                  <span
                    aria-hidden
                    className="block w-2 h-2 rounded-full shrink-0 bg-[var(--color-border-default)] transition-all duration-200 group-hover:scale-150 group-hover:bg-text-secondary"
                  />
                  <p className="text-sm font-semibold text-text-primary transition-colors group-hover:text-accent">
                    {EDUCATION.org}
                  </p>
                </div>
                <p className="font-mono text-[11px] text-text-muted shrink-0 transition-colors group-hover:text-text-secondary">
                  {EDUCATION.period}
                </p>
              </div>
              <p className="text-xs text-text-secondary mt-1 transition-colors group-hover:text-text-primary">
                {EDUCATION.title}
              </p>
            </li>
          </ol>
        </Row>

        <Row label="Stack" delay={320}>
          <div className="space-y-6">
            {STACK_GROUPS.map((g) => (
              <div key={g.label}>
                <p className="text-[11px] font-medium uppercase tracking-wider text-text-muted mb-2.5">
                  {g.label}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {g.skills.map((s) => (
                    <TechTag key={s} label={s} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Row>

        <Row label="Off-chain" delay={400}>
          <p className="text-base text-text-secondary leading-relaxed">
            Lifting heavy. Reading. Building things that don&apos;t compile yet.
          </p>
        </Row>
      </div>
    </section>
  )
}
