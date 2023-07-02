import { useState } from "react"

type Counter = {
  initialCount?: number
}

export default function Counter({initialCount=0}: Counter) {
  const [count, setCount] = useState(initialCount)
  const increment = () => setCount(c => c + 1)
  const reset = () => setCount(0)
  const decrement = () => setCount(c => c - 1)

  return <>
    <p>{count}</p>
    <div>
      <button onClick={increment}>+1</button>
      <button onClick={reset}>0</button>
      <button onClick={decrement}>-1</button>
    </div>
  </>
}