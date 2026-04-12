import { RevealSection } from '@/components/ui/RevealSection'

const LINKS = [
  { label: 'GitHub', href: 'https://github.com/matthewrahm' },
  { label: 'Email', href: 'mailto:matthewrahm@gmail.com' },
]

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-border-subtle">
      <RevealSection>
        <div className="max-w-5xl mx-auto px-8 py-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex gap-8">
            {LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('mailto') ? undefined : '_blank'}
                rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                className="text-xs uppercase tracking-widest text-text-muted hover:text-accent transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <p className="text-xs text-text-muted font-mono">
            2026
          </p>
        </div>
      </RevealSection>
    </footer>
  )
}
