import { ProjectRow } from '@/components/ui/ProjectRow'
import { RevealSection } from '@/components/ui/RevealSection'
import { projects } from '@/lib/projects'

export function Projects() {
  return (
    <section id="projects" className="px-12 py-24">
      <div className="max-w-xl">
        <RevealSection>
          <p className="font-mono text-xs uppercase tracking-widest text-accent mb-10">
            Projects
          </p>
        </RevealSection>

        <div className="flex flex-col gap-4">
          {projects.map((project, i) => (
            <ProjectRow key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
