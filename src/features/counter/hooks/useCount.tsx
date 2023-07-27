import { useState } from 'react'

export default function useCount(initialCount = 0, initialResetCount = 0) {
  const [count, setCount] = useState(initialCount)
  const increment = () => setCount((c) => c + 1)
  const reset = () => setCount(initialResetCount)
  const decrement = () => setCount((c) => c - 1)

  return [count, { increment, reset, decrement }] as const
}
