'use client'

import { useEffect, useRef } from 'react'
import {
  createParticles,
  getParticleCount,
  updateParticles,
  drawParticles,
  type Particle,
} from './particles'

export function NetworkCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>(0)
  const particlesRef = useRef<Particle[]>([])
  const mouseRef = useRef({ x: -1, y: -1 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let width = 0
    let height = 0
    const dpr = window.devicePixelRatio || 1

    function resize() {
      width = window.innerWidth
      height = window.innerHeight
      canvas!.width = width * dpr
      canvas!.height = height * dpr
      canvas!.style.width = `${width}px`
      canvas!.style.height = `${height}px`
      ctx!.scale(dpr, dpr)

      // Reinitialize particles on resize
      const count = getParticleCount(width)
      particlesRef.current = createParticles(count, width, height)
    }

    resize()
    window.addEventListener('resize', resize)

    function onMouseMove(e: MouseEvent) {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }

    function onMouseLeave() {
      mouseRef.current = { x: -1, y: -1 }
    }

    window.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseleave', onMouseLeave)

    const connectionDistance = Math.min(180, width * 0.12)

    function draw() {
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0)
      updateParticles(
        particlesRef.current,
        width,
        height,
        mouseRef.current.x,
        mouseRef.current.y
      )
      drawParticles(ctx!, particlesRef.current, connectionDistance)
      animationRef.current = requestAnimationFrame(draw)
    }

    animationRef.current = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(animationRef.current)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseleave', onMouseLeave)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.8 }}
    />
  )
}
