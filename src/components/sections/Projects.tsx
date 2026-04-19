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
    <section
      id="projects"
      className="px-6 sm:px-12 pt-[calc(var(--space-section)*1.5)] pb-[calc(var(--space-section)*2)]"
    >
      <div className="max-w-5xl">
        <RevealSection>
          <header className="mb-16">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-[-0.02em] text-gradient">
              Projects
            </h2>
            <p className="text-sm text-text-muted mt-3">
              Selected work across Solana and Hyperliquid.
            </p>
          </header>
        </RevealSection>

        <div
          ref={gridRef}
          onMouseMove={handleMouseMove}
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          {projects.map((project, i) => (
            <ProjectRow key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
