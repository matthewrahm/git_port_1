import { RevealSection } from '@/components/ui/RevealSection'

export function About() {
  return (
    <section id="about" className="px-12 py-24">
      <RevealSection>
        <p className="font-mono text-xs uppercase tracking-widest text-accent mb-10">
          About
        </p>
      </RevealSection>

      <RevealSection delay={80}>
        <div className="space-y-4 max-w-xl">
          <p className="text-text-secondary leading-relaxed">
            CS student at BYU studying Software Engineering, graduating 2027. I&apos;ve done
            full-stack web, iOS, and data engineering at startups -- but most of my focus
            now is on Solana. Trading infrastructure, on-chain intelligence, real-time
            data systems.
          </p>
          <p className="text-text-secondary leading-relaxed">
            I build tools I&apos;d want to use myself. Most of what I ship is in the meme coin
            and DeFi space -- fast, composable, and wired to live on-chain data.
          </p>
        </div>
      </RevealSection>

      <RevealSection delay={160}>
        <div className="mt-10 inline-flex items-center gap-6 border border-border-subtle rounded-lg px-5 py-4">
          <div>
            <p className="text-sm font-medium text-text-primary">Brigham Young University</p>
            <p className="text-xs text-text-muted mt-0.5">
              B.S. Computer Science, Software Engineering &middot; 2023 – 2027
            </p>
          </div>
          <span className="font-mono text-xs text-accent border-l border-border-subtle pl-6">
            3.9 GPA
          </span>
        </div>
      </RevealSection>
    </section>
  )
}
