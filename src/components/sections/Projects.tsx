'use client'

import { useRef, useCallback } from 'react'
import { ProjectRow } from '@/components/ui/ProjectRow'
import { RevealSection } from '@/components/ui/RevealSection'
import { projects } from '@/lib/projects'

export function Projects() {
  const gridRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const grid = gridRef.current
    if (!grid) return
    const cards = grid.querySelectorAll<HTMLElement>('[data-spotlight]')
    for (const card of cards) {
      const rect = card.getBoundingClientRect()
      card.style.setProperty('--spotlight-x', `${e.clientX - rect.left}px`)
      card.style.setProperty('--spotlight-y', `${e.clientY - rect.top}px`)
    }
  }, [])

  return (
    <section id="projects" className="px-6 sm:px-12 py-[var(--space-section)]">
      <div className="max-w-3xl">
        <RevealSection>
          <p className="font-mono text-xs uppercase tracking-widest text-accent mb-10">
            Projects
          </p>
        </RevealSection>

        <div
          ref={gridRef}
          onMouseMove={handleMouseMove}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {projects.map((project, i) => (
            <ProjectRow key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
