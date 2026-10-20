import { useEffect, useRef, useState } from 'react'
import { ChromaFlow, FilmGrain, FlutedGlass, Shader, Swirl } from 'shaders/react'

export function ShaderBackdrop() {
  const [unavailable, setUnavailable] = useState(false)
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), {
      rootMargin: '200px',
    })

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className="pointer-events-none absolute inset-0 z-10 h-full w-full">
      {unavailable && (
        <div
          aria-hidden="true"
          className="shader-fallback pointer-events-none absolute inset-0 z-10"
        />
      )}

      {visible && (
        <Shader
          className="pointer-events-none absolute inset-0 z-10 h-full w-full"
          onUnavailable={() => setUnavailable(true)}
        >
          <Swirl colorA="#ffffff" colorB="#f0f0f0" detail={1.7} />
          <ChromaFlow
            baseColor="#ffffff"
            downColor="#ff5f03"
            leftColor="#ff5f03"
            rightColor="#ff5f03"
            upColor="#ff5f03"
            momentum={13}
            radius={3.5}
          />
          <FlutedGlass
            aberration={0.61}
            angle={31}
            frequency={8}
            highlight={0.12}
            highlightSoftness={0}
            lightAngle={-90}
            refraction={4}
            shape="rounded"
            softness={1}
            speed={0.15}
          />
          <FilmGrain strength={0.05} />
        </Shader>
      )}
    </div>
  )
}
