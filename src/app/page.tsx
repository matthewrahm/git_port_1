import { NetworkCanvas } from '@/components/canvas/NetworkCanvas'
import { DotGrid } from '@/components/canvas/DotGrid'
import { Hero } from '@/components/sections/Hero'
import { Projects } from '@/components/sections/Projects'
import { Footer } from '@/components/sections/Footer'

export default function Home() {
  return (
    <div className="min-h-screen">
      <DotGrid />
      <NetworkCanvas />
      <div className="noise-overlay" />
      <Hero />
      <Projects />
      <Footer />
    </div>
  )
}
