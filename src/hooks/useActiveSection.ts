'use client'

import { useState, useEffect, useRef, useMemo } from 'react'

export function useActiveSection(ids: string[]): string {
  const [active, setActive] = useState('')
  const visibleRef = useRef(new Map<string, number>())
  // Stabilize the ids array so the effect doesn't re-run on every render
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const stableIds = useMemo(() => ids, [ids.join(',')])

  useEffect(() => {
    const visible = visibleRef.current
    visible.clear()

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const id = entry.target.id
          if (entry.isIntersecting) {
            visible.set(id, entry.intersectionRatio)
          } else {
            visible.delete(id)
          }
        }

        // Pick the section with the highest intersection ratio
        let best = ''
        let bestRatio = 0
        for (const [id, ratio] of visible) {
          if (ratio > bestRatio) {
            best = id
            bestRatio = ratio
          }
        }

        // If nothing visible by ratio, fall back to whichever is closest to top
        if (!best && visible.size > 0) {
          best = [...visible.keys()][0]
        }

        if (best) setActive(best)
      },
      { threshold: [0, 0.1, 0.25, 0.5, 0.75, 1], rootMargin: '0px 0px -20% 0px' }
    )

    for (const id of stableIds) {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    }

    return () => observer.disconnect()
  }, [stableIds])

  return active
}
