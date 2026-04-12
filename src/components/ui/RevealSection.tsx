'use client'

import { useInView } from '@/hooks/useInView'

export function RevealSection({
  children,
  className,
  delay,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
}) {
  const [ref, inView] = useInView({ threshold: 0.15 })
  return (
    <div
      ref={ref}
      className={`${inView ? 'reveal-visible' : 'reveal-hidden'} ${className ?? ''}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  )
}
