import { useState, KeyboardEvent } from 'react'
import { css } from '@emotion/react'
import { Todo } from '../models/Todo'

type TodoAddInput = {
  add: (todo: Todo) => void
}

export default function TodoAddInput({ add }: TodoAddInput) {
  const [title, setTitle] = useState('')

  const onEnter = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.nativeEvent.isComposing) return
    if (event.key !== 'Enter') return
    const newTodo = {
      title: title,
      completed: false,
    }
    add(newTodo)
    setTitle('')
  }

  return (
    <input
      type="text"
      css={todoTitleStyle}
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      onKeyDown={onEnter}
      autoFocus
    />
  )
}

const todoTitleStyle = css`
  margin: 0 1rem;
  font-size: 1.2rem;
`
