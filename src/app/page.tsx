import { NetworkCanvas } from '@/components/canvas/NetworkCanvas'
import { DotGrid } from '@/components/canvas/DotGrid'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Experience } from '@/components/sections/Experience'
import { Projects } from '@/components/sections/Projects'
import { Skills } from '@/components/sections/Skills'
import { Footer } from '@/components/sections/Footer'

export default function Home() {
  return (
    <div className="lg:flex lg:min-h-screen">
      <DotGrid />
      <NetworkCanvas />
      <div className="noise-overlay" />

      {/* Fixed sidebar on large screens, stacked header on mobile */}
      <Hero />

      {/* Scrollable main content */}
      <main className="lg:ml-[380px] flex-1 relative z-10">
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Footer />
      </main>
    </div>
  )
}
