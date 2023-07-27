import { css } from '@emotion/react'
import { Todo } from '../models/Todo'
import { useEffect, useRef, useState, KeyboardEvent, ChangeEvent } from 'react'

type TodoListItem = {
  todo: Todo
  method: {
    toggleCompleted: (id: Todo['id'], completed: Todo['completed']) => void
    changeTitle: (id: Todo['id'], title: Todo['title']) => void
    remove: (id: Todo['id']) => void
  }
}

export default function TodoListItem(props: TodoListItem) {
  const [todo, setTodo] = useState(props.todo)

  // To change completed
  const toggleCompleted = (event: ChangeEvent<HTMLInputElement>) => {
    const newTodo = { ...todo, completed: event.target.checked }
    setTodo(newTodo)
    props.method.toggleCompleted(todo.id, event.target.checked)
  }

  // To edit todo title
  const [editing, setEditing] = useState(false)
  const setTitle = (event: ChangeEvent<HTMLInputElement>) => {
    const newTodo = { ...todo, title: event.target.value }
    setTodo(newTodo)
    props.method.changeTitle(todo.id, event.target.value)
  }
  const editingTitleRef = useRef<HTMLInputElement | null>(null)
  useEffect(() => editingTitleRef.current?.focus(), [editing])
  const doneEdit = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.nativeEvent.isComposing || e.key !== 'Enter') return
    setEditing(false)
  }

  // To delete todo
  const deleteTodo = () => {
    props.method.remove(todo.id)
  }

  return (
    <li css={listItemStyle}>
      <input
        type="checkbox"
        css={todoCheckboxStyle}
        checked={todo.completed}
        onChange={toggleCompleted}
      />
      {editing ? (
        <input
          type="text"
          css={todoTitleStyle}
          value={todo.title}
          onChange={(e) => setTitle(e)}
          onKeyDown={doneEdit}
          ref={editingTitleRef}
        />
      ) : (
        <label
          css={[todoTitleStyle, todo.completed && completedTodoTitleStyle]}
          onDoubleClick={() => setEditing(true)}
        >
          {todo.title}
        </label>
      )}

      <button onClick={deleteTodo}>Del</button>
    </li>
  )
}

const listItemStyle = css`
  list-style: none;
`

const todoCheckboxStyle = css`
  margin: 1rem;
`

const todoTitleStyle = css`
  margin: 0 1rem;
  font-size: 1.2rem;
`

const completedTodoTitleStyle = css`
  text-decoration: line-through;
  opacity: 50%;
`
