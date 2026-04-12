import { RevealSection } from '@/components/ui/RevealSection'

const SKILLS = [
  'TypeScript', 'JavaScript', 'Java', 'Python',
  'Next.js', 'React', 'Node.js', 'Tailwind CSS',
  'Prisma', 'PostgreSQL', 'Redis', 'Solana',
  'Telegram API', 'WebSocket', 'Vercel', 'Git',
]

export function Skills() {
  return (
    <section id="skills" className="px-12 py-24">
      <div className="max-w-xl">
        <RevealSection>
          <p className="font-mono text-xs uppercase tracking-widest text-accent mb-10">
            Skills
          </p>
        </RevealSection>

        <RevealSection>
          <div className="flex flex-wrap gap-2">
            {SKILLS.map((skill) => (
              <span
                key={skill}
                className="font-mono text-sm text-text-secondary bg-bg-surface/60 border border-border-subtle px-3 py-1.5 rounded-md hover:text-text-primary hover:border-border-default transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </RevealSection>
      </div>
    </section>
  )
}
