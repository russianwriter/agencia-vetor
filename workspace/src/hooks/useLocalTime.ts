import { useEffect, useState } from 'react'

const formatter = new Intl.DateTimeFormat('pt-BR', {
  timeZone: 'America/Sao_Paulo',
  hour: '2-digit',
  minute: '2-digit',
  hour12: false,
})

export function useLocalTime() {
  const [time, setTime] = useState(() => formatter.format(new Date()))

  useEffect(() => {
    const tick = () => setTime(formatter.format(new Date()))
    tick()
    const interval = window.setInterval(tick, 1000)
    return () => window.clearInterval(interval)
  }, [])

  return time
}
