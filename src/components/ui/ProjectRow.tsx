import Image from 'next/image'
import { TechTag } from './TechTag'
import { RevealSection } from './RevealSection'
import type { Project } from '@/lib/projects'

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
    </svg>
  )
}

function ExternalLinkIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  )
}

function WideCardContent({ project }: { project: Project }) {
  return (
    <div className={`flex ${project.image ? 'flex-col sm:flex-row sm:items-stretch gap-6 sm:gap-8' : 'flex-col'}`}>
      <div className="flex-1 min-w-0 flex flex-col">
        <div
          className="w-8 h-1 rounded-full mb-5 group-hover:w-14 transition-all duration-300"
          style={{ background: project.color }}
        />

        <div className="flex items-start justify-between gap-4 mb-3">
          <h3 className="text-lg font-semibold tracking-tight text-text-primary">
            {project.name}
          </h3>
          {project.url ? (
            <div className="flex items-center gap-2 shrink-0 mt-0.5">
              <a href={project.url} target="_blank" rel="noopener noreferrer" className="press-scale">
                <ExternalLinkIcon className="w-4 h-4 text-text-muted hover:text-text-secondary transition-colors" />
              </a>
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="press-scale">
                <GitHubIcon className="w-4 h-4 text-text-muted hover:text-text-secondary transition-colors" />
              </a>
            </div>
          ) : (
            <GitHubIcon className="w-4 h-4 text-text-muted group-hover:text-text-secondary transition-colors shrink-0 mt-0.5" />
          )}
        </div>

        <p className="text-sm text-text-secondary leading-relaxed mb-5">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mt-auto">
          {project.tags.map((tag) => (
            <TechTag key={tag} label={tag} />
          ))}
        </div>
      </div>

      {project.image && (
        <div className="relative shrink-0 w-full sm:w-36 md:w-44 aspect-square sm:aspect-auto self-center sm:self-stretch flex items-center justify-center">
          <div
            className="absolute w-28 h-28 rounded-[28px] blur-[40px] opacity-[0.12] group-hover:opacity-[0.22] transition-opacity duration-500"
            style={{ background: project.color }}
          />
          <div className="relative w-28 h-28 transition-transform duration-300 group-hover:scale-105">
            <Image
              src={project.image}
              alt={`${project.name} logo`}
              fill
              className="object-cover rounded-[28px]"
              sizes="112px"
            />
          </div>
        </div>
      )}
    </div>
  )
}

function WideCard({ project, index }: { project: Project; index: number }) {
  const cardClasses = "group h-full rounded-[var(--radius-xl)] card-polished spotlight-card press-scale p-[var(--space-card-pad)]"

  return (
    <RevealSection delay={index * 80} className="md:col-span-2">
      {project.url ? (
        <div data-spotlight className={cardClasses}>
          <WideCardContent project={project} />
        </div>
      ) : (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          data-spotlight
          className={`block ${cardClasses}`}
        >
          <WideCardContent project={project} />
        </a>
      )}
    </RevealSection>
  )
}

function NormalCard({ project, index }: { project: Project; index: number }) {
  return (
    <RevealSection delay={index * 80}>
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        data-spotlight
        className="group block h-full rounded-[var(--radius-xl)] card-polished spotlight-card press-scale p-[var(--space-card-pad)]"
      >
        {/* Color accent bar */}
        <div
          className="w-8 h-1 rounded-full mb-5 group-hover:w-14 transition-all duration-300"
          style={{ background: project.color }}
        />

        <div className="flex items-start justify-between gap-4 mb-3">
          {project.image ? (
            <div className="flex items-center gap-3">
              <div className="relative shrink-0">
                {/* Glow behind icon */}
                <div
                  className="absolute inset-0 rounded-[var(--radius-sm)] blur-[12px] opacity-0 group-hover:opacity-[0.25] transition-opacity duration-400"
                  style={{ background: project.color }}
                />
                <div className="relative w-10 h-10 rounded-[var(--radius-sm)] overflow-hidden opacity-70 group-hover:opacity-100 group-hover:-translate-y-0.5 transition-all duration-300">
                  <Image
                    src={project.image}
                    alt={`${project.name} logo`}
                    fill
                    className="object-contain"
                    sizes="40px"
                  />
                </div>
              </div>
              <h3 className="text-lg font-semibold tracking-tight text-text-primary">
                {project.name}
              </h3>
            </div>
          ) : (
            <h3 className="text-lg font-semibold tracking-tight text-text-primary">
              {project.name}
            </h3>
          )}
          <GitHubIcon className="w-4 h-4 text-text-muted group-hover:text-text-secondary transition-colors shrink-0 mt-0.5" />
        </div>

        <p className="text-sm text-text-secondary leading-relaxed mb-5">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mt-auto">
          {project.tags.map((tag) => (
            <TechTag key={tag} label={tag} />
          ))}
        </div>
      </a>
    </RevealSection>
  )
}

export function ProjectRow({
  project,
  index,
}: {
  project: Project
  index: number
}) {
  if (project.size === 'wide') {
    return <WideCard project={project} index={index} />
  }

  return <NormalCard project={project} index={index} />
}
