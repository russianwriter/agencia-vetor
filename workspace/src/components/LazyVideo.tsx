import { useEffect, useRef } from 'react'

type LazyVideoProps = {
  src: string
  className?: string
}

export function LazyVideo({ src, className = '' }: LazyVideoProps) {
  const ref = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = ref.current
    if (!video) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => undefined)
        } else {
          video.pause()
        }
      },
      { threshold: 0.25 },
    )

    observer.observe(video)
    return () => observer.disconnect()
  }, [])

  return (
    <video
      ref={ref}
      src={src}
      className={className}
      muted
      loop
      playsInline
      preload="metadata"
      aria-hidden="true"
    />
  )
}
