'use client'

import { useState, useEffect } from 'react'
import { useActiveSection } from '@/hooks/useActiveSection'

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
    </svg>
  )
}

const BIO_TEXT = 'Building on Solana. Trading tools, on-chain intelligence, DeFi.'
const TYPE_SPEED = 40

const NAV_ITEMS = [
  { label: 'About', id: 'about' },
  { label: 'Experience', id: 'experience' },
  { label: 'Projects', id: 'projects' },
  { label: 'Skills', id: 'skills' },
]

function TypeReveal() {
  const [displayed, setDisplayed] = useState('')
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    const startDelay = setTimeout(() => {
      let i = 0
      const interval = setInterval(() => {
        i++
        setDisplayed(BIO_TEXT.slice(0, i))
        if (i >= BIO_TEXT.length) {
          clearInterval(interval)
          setTimeout(() => setShowCursor(false), 1200)
        }
      }, TYPE_SPEED)
      return () => clearInterval(interval)
    }, 600)

    return () => clearTimeout(startDelay)
  }, [])

  return (
    <span className="font-mono text-sm text-text-secondary">
      {displayed}
      {showCursor && (
        <span className="inline-block w-[2px] h-[1em] bg-accent ml-0.5 align-middle animate-blink" />
      )}
    </span>
  )
}

export function Hero() {
  const active = useActiveSection(['about', 'experience', 'projects', 'skills'])

  return (
    <aside className="lg:fixed lg:top-0 lg:left-0 lg:h-screen lg:w-[380px] flex flex-col justify-between px-10 pt-16 pb-12 relative z-10">
      {/* Hero radial glow */}
      <div
        className="absolute -top-20 -left-20 w-[500px] h-[500px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 30% 20%, oklch(0.5 0.25 295 / 12%), transparent)',
        }}
      />

      <div className="relative">
        <h1 className="text-4xl font-bold tracking-[-0.04em] mb-3 animate-fade-in-up text-gradient">
          Matthew Rahm
        </h1>

        <div className="h-6 mb-6 animate-fade-in-up stagger-1">
          <TypeReveal />
        </div>

        <p className="text-sm text-text-muted leading-relaxed max-w-[260px] animate-fade-in-up stagger-2">
          CS student at BYU building real things in the gaps between coursework.
        </p>

        <nav className="mt-12 space-y-1 animate-fade-in-up stagger-3" aria-label="Page sections">
          {NAV_ITEMS.map(({ label, id }) => {
            const isActive = active === id
            return (
              <a
                key={id}
                href={`#${id}`}
                className="group flex items-center gap-4 py-2"
              >
                <span
                  className={`block h-px transition-all duration-300 ${
                    isActive
                      ? 'w-12 bg-text-primary'
                      : 'w-6 bg-text-muted group-hover:w-12 group-hover:bg-text-secondary'
                  }`}
                />
                <span
                  className={`text-xs uppercase tracking-widest transition-colors duration-300 ${
                    isActive
                      ? 'text-text-primary'
                      : 'text-text-muted group-hover:text-text-secondary'
                  }`}
                >
                  {label}
                </span>
              </a>
            )
          })}
        </nav>
      </div>

      <div className="relative animate-fade-in-up stagger-4">
        <a
          href="https://github.com/matthewrahm"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-text-muted hover:text-text-primary transition-colors"
        >
          <GitHubIcon className="w-5 h-5" />
          <span className="text-sm font-mono">matthewrahm</span>
        </a>
      </div>
    </aside>
  )
}
