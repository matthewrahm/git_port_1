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

    p.vx *= 0.99
    p.vy *= 0.99

    p.x += p.vx
    p.y += p.vy

    if (p.x < 0) p.x = width
    if (p.x > width) p.x = 0
    if (p.y < 0) p.y = height
    if (p.y > height) p.y = 0
  }
}

const GLOW_RADIUS = 280

export function drawParticles(
  ctx: CanvasRenderingContext2D,
  particles: Particle[],
  connectionDistance: number,
  mouseX = -1,
  mouseY = -1,
) {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)

  // Draw connections in purple
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x
      const dy = particles[i].y - particles[j].y
      const dist = Math.sqrt(dx * dx + dy * dy)
      if (dist < connectionDistance) {
        let opacity = (1 - dist / connectionDistance) * 0.14

        // Boost connections near cursor
        if (mouseX >= 0) {
          const midX = (particles[i].x + particles[j].x) / 2
          const midY = (particles[i].y + particles[j].y) / 2
          const mDist = Math.sqrt((midX - mouseX) ** 2 + (midY - mouseY) ** 2)
          if (mDist < GLOW_RADIUS) {
            opacity += (1 - mDist / GLOW_RADIUS) * 0.12
          }
        }

        ctx.strokeStyle = `rgba(153, 69, 255, ${opacity})`
        ctx.lineWidth = 0.5
        ctx.beginPath()
        ctx.moveTo(particles[i].x, particles[i].y)
        ctx.lineTo(particles[j].x, particles[j].y)
        ctx.stroke()
      }
    }
  }

  // Draw particles in purple
  for (const p of particles) {
    let opacity = p.opacity
    let radius = p.radius

    // Boost particles near cursor
    if (mouseX >= 0) {
      const d = Math.sqrt((p.x - mouseX) ** 2 + (p.y - mouseY) ** 2)
      if (d < GLOW_RADIUS) {
        const proximity = 1 - d / GLOW_RADIUS
        opacity = Math.min(1, opacity + proximity * 0.35)
        radius += proximity * 0.8
      }
    }

    ctx.fillStyle = `rgba(153, 69, 255, ${opacity})`
    ctx.beginPath()
    ctx.arc(p.x, p.y, radius, 0, Math.PI * 2)
    ctx.fill()
  }
}
