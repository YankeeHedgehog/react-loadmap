import { css } from '@emotion/react'

type TodoFilterTabs<T> = {
  options: readonly T[]
  selectedOption: T
  setOption: (option: T) => void
}

export default function TodoFilterTabs<T extends string>({
  options,
  selectedOption,
  setOption,
}: TodoFilterTabs<T>) {
  return (
    <>
      {options.map((option) => (
        <button
          key={option}
          css={option === selectedOption && active}
          onClick={() => setOption(option)}
        >
          {option}
        </button>
      ))}
    </>
  )
}

const active = css`
  background-color: #fff;
`
