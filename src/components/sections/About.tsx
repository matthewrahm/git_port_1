import { RevealSection } from '@/components/ui/RevealSection'

export function About() {
  return (
    <section id="about" className="px-6 sm:px-12 py-[var(--space-section)]">
      <RevealSection>
        <p className="font-mono text-xs uppercase tracking-widest text-gradient-accent mb-10" data-text="About">
          About
        </p>
      </RevealSection>

      <RevealSection delay={80}>
        <div className="space-y-4 max-w-xl">
          <p className="text-text-secondary leading-relaxed">
            Software Engineering student at BYU, graduating 2027. Background in
            full-stack web, iOS, and data engineering across early-stage startups.
            Current focus: Solana. Trading infrastructure, on-chain intelligence,
            and real-time data systems.
          </p>
          <p className="text-text-secondary leading-relaxed">
            Everything ships with a bias toward the meme coin and DeFi space.
            Fast, composable, and wired to live on-chain data.
          </p>
        </div>
      </RevealSection>

      <RevealSection delay={160}>
        <div className="mt-10 inline-flex items-center gap-6 card-polished rounded-[var(--radius-lg)] px-5 py-4">
          <div>
            <p className="text-sm font-medium text-text-primary">Brigham Young University</p>
            <p className="text-xs text-text-muted mt-0.5">
              B.S. Computer Science, Software Engineering &middot; 2023 &ndash; 2027
            </p>
          </div>
          <span className="font-mono text-xs text-accent border-l border-[var(--color-border-default)] pl-6">
            3.9 GPA
          </span>
        </div>
      </RevealSection>
    </section>
  )
}
