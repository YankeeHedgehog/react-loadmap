import { css } from '@emotion/react'
import useTimer2 from './hooks/useTimer2'

export default function Timer2() {
  const [count, { start, stop, reset }] = useTimer2()
  return (
    <div css={Layout}>
      {count.toFixed(2)}
      <div css={ButtonGroup}>
        <button onClick={start}>start</button>
        <button onClick={stop}>stop</button>
        <button onClick={reset}>reset</button>
      </div>
    </div>
  )
}

const Layout = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ButtonGroup = css`
  display: flex;
`
