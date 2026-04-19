import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Projects } from '@/components/sections/Projects'
import { Footer } from '@/components/sections/Footer'

export default function Home() {
  return (
    <div className="lg:flex lg:min-h-screen">
      <Hero />

      <main className="lg:ml-[380px] flex-1 relative z-10 animate-fade-in-up stagger-1">
        <About />
        <Projects />
        <Footer />
      </main>
    </div>
  )
}
