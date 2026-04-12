import { TechTag } from '@/components/ui/TechTag'
import { RevealSection } from '@/components/ui/RevealSection'
import { experience } from '@/lib/experience'

export function Experience() {
  return (
    <section id="experience" className="px-12 py-24">
      <RevealSection>
        <p className="font-mono text-xs uppercase tracking-widest text-accent mb-10">
          Experience
        </p>
      </RevealSection>

      <div className="space-y-10 max-w-xl">
        {experience.map((role, i) => (
          <RevealSection key={role.id} delay={i * 80}>
            <div className="group pl-5 border-l border-border-subtle hover:border-accent transition-colors duration-300">
              <div className="flex items-baseline justify-between gap-4 mb-1">
                <p className="text-sm font-semibold text-text-primary">{role.company}</p>
                <p className="font-mono text-xs text-text-muted shrink-0">{role.period}</p>
              </div>
              <p className="text-xs text-text-secondary mb-3">{role.title}</p>
              <ul className="space-y-2 mb-4">
                {role.bullets.map((bullet, j) => (
                  <li key={j} className="text-sm text-text-muted leading-relaxed">
                    {bullet}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-1.5">
                {role.tags.map((tag) => (
                  <TechTag key={tag} label={tag} />
                ))}
              </div>
            </div>
          </RevealSection>
        ))}
      </div>
    </section>
  )
}
