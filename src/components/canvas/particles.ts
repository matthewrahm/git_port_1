export interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  opacity: number
}

const SPEED = 0.35
const MOUSE_RADIUS = 220
const MOUSE_FORCE = 0.5

export function createParticles(count: number, width: number, height: number): Particle[] {
  return Array.from({ length: count }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    vx: (Math.random() - 0.5) * SPEED,
    vy: (Math.random() - 0.5) * SPEED,
    radius: Math.random() * 1.5 + 0.5,
    opacity: Math.random() * 0.5 + 0.15,
  }))
}

export function getParticleCount(width: number): number {
  return Math.floor(Math.min(width, 1920) / 20)
}

export function updateParticles(
  particles: Particle[],
  width: number,
  height: number,
  mouseX: number,
  mouseY: number
) {
  for (const p of particles) {
    // Mouse repulsion
    if (mouseX >= 0 && mouseY >= 0) {
      const dx = p.x - mouseX
      const dy = p.y - mouseY
      const dist = Math.sqrt(dx * dx + dy * dy)
      if (dist < MOUSE_RADIUS && dist > 0) {
        const force = (1 - dist / MOUSE_RADIUS) * MOUSE_FORCE
        p.vx += (dx / dist) * force
        p.vy += (dy / dist) * force
      }
    }

    // Dampen velocity back toward drift speed
    p.vx *= 0.99
    p.vy *= 0.99

    p.x += p.vx
    p.y += p.vy

    // Wrap edges
    if (p.x < 0) p.x = width
    if (p.x > width) p.x = 0
    if (p.y < 0) p.y = height
    if (p.y > height) p.y = 0
  }
}

export function drawParticles(
  ctx: CanvasRenderingContext2D,
  particles: Particle[],
  connectionDistance: number
) {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)

  // Draw connections
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x
      const dy = particles[i].y - particles[j].y
      const dist = Math.sqrt(dx * dx + dy * dy)
      if (dist < connectionDistance) {
        const opacity = (1 - dist / connectionDistance) * 0.14
        ctx.strokeStyle = `rgba(59, 130, 246, ${opacity})`
        ctx.lineWidth = 0.5
        ctx.beginPath()
        ctx.moveTo(particles[i].x, particles[i].y)
        ctx.lineTo(particles[j].x, particles[j].y)
        ctx.stroke()
      }
    }
  }

  // Draw particles
  for (const p of particles) {
    ctx.fillStyle = `rgba(59, 130, 246, ${p.opacity})`
    ctx.beginPath()
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
    ctx.fill()
  }
}
