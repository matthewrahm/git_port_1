import { RevealSection } from '@/components/ui/RevealSection'

const SKILL_GROUPS = [
  {
    label: 'Languages',
    skills: ['Rust', 'TypeScript', 'JavaScript', 'Java', 'Python'],
  },
  {
    label: 'Frameworks',
    skills: ['Next.js', 'React', 'Node.js', 'Tailwind CSS'],
  },
  {
    label: 'Data',
    skills: ['Prisma', 'PostgreSQL', 'Redis', 'WebSocket'],
  },
  {
    label: 'Infrastructure',
    skills: ['Solana', 'Telegram API', 'Vercel', 'Git'],
  },
]

export function Skills() {
  return (
    <section id="skills" className="px-6 sm:px-12 py-[var(--space-section)]">
      <div className="max-w-3xl">
        <RevealSection>
          <p className="font-mono text-xs uppercase tracking-widest text-gradient-accent mb-10" data-text="Skills">
            Skills
          </p>
        </RevealSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {SKILL_GROUPS.map((group, i) => (
            <RevealSection key={group.label} delay={i * 80}>
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-text-muted mb-3">
                  {group.label}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="font-mono text-sm text-text-secondary bg-[var(--color-card-bg)] border border-[var(--color-card-border)] px-3 py-1.5 rounded-[var(--radius-md)] hover:text-text-primary hover:bg-[var(--color-card-bg-hover)] hover:border-[var(--color-card-border-hover)] transition-all duration-150 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  )
}
