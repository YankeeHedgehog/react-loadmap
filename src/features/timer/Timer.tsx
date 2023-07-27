import React, { useState, useEffect, useRef } from 'react'
import useTimer from './hooks/useTimer'

export default function Timer() {
  // const [time, method] = useTimer()

  const [startTime, setStartTime] = useState<number | null>(null)
  const [now, setNow] = useState<number | null>(null)
  const intervalRef = useRef<number | undefined>(undefined)

  const handleStart = () => {
    setStartTime(Date.now())
    setNow(Date.now())

    clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => setNow(Date.now()), 10)
  }

  const handleRestart = () => {
    setStartTime
  }

  const handleStop = () => {
    clearInterval(intervalRef.current)
  }

  let secondsPassed = 0
  if (startTime !== null && now !== null) {
    secondsPassed = (now - startTime) / 1000
  }

  return (
    <>
      <p>{secondsPassed.toFixed(3)}</p>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleRestart}>Restart</button>
      <button onClick={handleStop}>Stop</button>
    </>
  )
}
