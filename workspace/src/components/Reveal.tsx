import { useEffect, useRef, useState, type ReactNode } from 'react'

type RevealVariant = 'up' | 'fade' | 'scale' | 'left' | 'right' | 'blur'

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  variant?: RevealVariant
}

const INITIAL: Record<RevealVariant, string> = {
  up: 'opacity-0 translate-y-6',
  fade: 'opacity-0',
  scale: 'opacity-0 scale-95',
  left: 'opacity-0 -translate-x-8',
  right: 'opacity-0 translate-x-8',
  blur: 'opacity-0 blur-sm translate-y-4',
}

const VISIBLE: Record<RevealVariant, string> = {
  up: 'opacity-100 translate-y-0',
  fade: 'opacity-100',
  scale: 'opacity-100 scale-100',
  left: 'opacity-100 translate-x-0',
  right: 'opacity-100 translate-x-0',
  blur: 'opacity-100 blur-0 translate-y-0',
}

export function Reveal({ children, className = '', delay = 0, variant = 'up' }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.disconnect()
          }
        })
      },
      { threshold: 0.15 },
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={`transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] motion-reduce:!opacity-100 motion-reduce:!translate-y-0 motion-reduce:!translate-x-0 motion-reduce:!scale-100 motion-reduce:!blur-0 motion-reduce:transition-none ${
        visible ? VISIBLE[variant] : INITIAL[variant]
      } ${className}`}
    >
      {children}
    </div>
  )
}
