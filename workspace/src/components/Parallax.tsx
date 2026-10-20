import { useEffect, useRef, type ReactNode } from 'react'

type ParallaxProps = {
  children: ReactNode
  speed?: number
  className?: string
}

export function Parallax({ children, speed = 0.08, className = '' }: ParallaxProps) {
  const wrapRef = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const wrap = wrapRef.current
    const inner = innerRef.current
    if (!wrap || !inner) return

    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (media.matches) return

    let frame = 0

    const update = () => {
      const rect = wrap.getBoundingClientRect()
      const elementCenter = rect.top + rect.height / 2
      const viewportCenter = window.innerHeight / 2
      const offset = (elementCenter - viewportCenter) * speed
      inner.style.transform = `translateY(${offset}px)`
    }

    const onScroll = () => {
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
  }, [speed])

  return (
    <div ref={wrapRef} className={className}>
      <div ref={innerRef} className="scale-110 will-change-transform">
        {children}
      </div>
    </div>
  )
}
