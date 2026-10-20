import { useEffect, useRef } from 'react'

export function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const bar = barRef.current
    if (!bar) return

    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    let frame = 0

    const update = () => {
      const doc = document.documentElement
      const max = doc.scrollHeight - window.innerHeight
      const progress = max > 0 ? window.scrollY / max : 0
      bar.style.transform = `scaleX(${progress})`
    }

    const onScroll = () => {
      if (media.matches) {
        bar.style.transform = 'scaleX(0)'
        return
      }
      if (frame) return
      frame = window.requestAnimationFrame(() => {
        frame = 0
        update()
      })
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <div
      ref={barRef}
      aria-hidden="true"
      className="fixed left-0 top-0 z-[60] h-[3px] w-full origin-left bg-[#F26522]"
      style={{ transform: 'scaleX(0)' }}
    />
  )
}
