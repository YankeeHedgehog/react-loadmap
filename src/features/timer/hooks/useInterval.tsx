import { useEffect, useRef } from 'react'

export default function useInterval(callback: () => void, delay: number) {
  const callbackRef = useRef(() => {})

  useEffect(() => {
    callbackRef.current = callback
  }, [callback])

  useEffect(() => {
    if (!delay) {
      return () => {}
    }

    const interval = setInterval(() => {
      callbackRef.current && callbackRef.current()
    }, delay)
    return () => clearInterval(interval)
  }, [delay])
}
