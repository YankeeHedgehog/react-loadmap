import { useState, useRef } from 'react'

export default function useTimer2() {
  const [count, setCount] = useState(0)
  const intervalRef = useRef<number | null>(null)

  const start = () => {
    if (intervalRef.current !== null) return
    intervalRef.current = setInterval(() => setCount((c) => c + 0.01), 10)
  }
  const stop = () => {
    if (intervalRef.current === null) return
    clearInterval(intervalRef.current)
    intervalRef.current = null
  }

  const reset = () => setCount(0)

  const method = { start, stop, reset }

  return [count, method] as const
}
