'use client'

import { useEffect, useRef } from 'react'

const PARALLAX_FACTOR = 0.05

export function AmbientOrbs() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    let ticking = false
    function onScroll() {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        el!.style.transform = `translateY(${-window.scrollY * PARALLAX_FACTOR}px)`
        ticking = false
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
    >
      {/* Mid-page accent -- offset right, purple-blue */}
      <div
        className="absolute w-[800px] h-[800px]"
        style={{
          top: '55vh',
          right: '-15vw',
          background:
            'radial-gradient(ellipse 60% 50% at 50% 50%, oklch(0.45 0.2 280 / 6%), transparent 70%)',
        }}
      />

      {/* Lower section -- subtle warm purple, left side */}
      <div
        className="absolute w-[600px] h-[600px]"
        style={{
          top: '140vh',
          left: '-10vw',
          background:
            'radial-gradient(ellipse 70% 60% at 50% 50%, oklch(0.4 0.18 310 / 5%), transparent 70%)',
        }}
      />
    </div>
  )
}
