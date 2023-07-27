import { css } from '@emotion/react'
import useCount from './hooks/useCount'

type Counter = {
  initialCount?: number
  initialResetCount?: number
}

export default function Counter({
  initialCount = 0,
  initialResetCount = 0,
}: Counter) {
  const [count, { increment, reset, decrement }] = useCount(
    initialCount,
    initialResetCount
  )

  return (
    <div css={layoutStyle}>
      <p css={countStyle}>{count}</p>
      <div css={buttonGroupStyle}>
        <button onClick={increment}>+1</button>
        <button onClick={reset}>{initialResetCount}</button>
        <button onClick={decrement}>-1</button>
      </div>
    </div>
  )
}

const layoutStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const countStyle = css`
  margin: 1rem;
`
const buttonGroupStyle = css`
  width: 300px;
  display: flex;
  justify-content: space-around;
`
