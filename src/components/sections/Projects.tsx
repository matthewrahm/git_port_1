import { ProjectRow } from '@/components/ui/ProjectRow'
import { RevealSection } from '@/components/ui/RevealSection'
import { projects } from '@/lib/projects'

export function Projects() {
  return (
    <section className="relative z-10 px-8 py-32">
      <div className="max-w-5xl mx-auto">
        <RevealSection>
          <p className="font-mono text-xs uppercase tracking-widest text-accent mb-16">
            Projects
          </p>
        </RevealSection>

        <div className="flex flex-col gap-4 max-w-2xl mx-auto">
          {projects.map((project, i) => (
            <ProjectRow key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
