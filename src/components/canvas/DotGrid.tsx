'use client'

import { useEffect, useRef } from 'react'

const PARALLAX_FACTOR = 0.02

export function DotGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const dpr = window.devicePixelRatio || 1

    function draw() {
      const width = window.innerWidth
      const height = document.documentElement.scrollHeight
      canvas!.width = width * dpr
      canvas!.height = height * dpr
      canvas!.style.width = `${width}px`
      canvas!.style.height = `${height}px`
      ctx!.scale(dpr, dpr)

      const spacing = 32
      const dotSize = 0.8

      ctx!.fillStyle = 'rgba(255, 255, 255, 0.04)'

      for (let x = spacing; x < width; x += spacing) {
        for (let y = spacing; y < height; y += spacing) {
          ctx!.beginPath()
          ctx!.arc(x, y, dotSize, 0, Math.PI * 2)
          ctx!.fill()
        }
      }
    }

    draw()
    window.addEventListener('resize', draw)

    let ticking = false
    function onScroll() {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        canvas!.style.transform = `translateY(${-window.scrollY * PARALLAX_FACTOR}px)`
        ticking = false
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      window.removeEventListener('resize', draw)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
    />
  )
}
