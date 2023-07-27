import { useState } from 'react'
import { Todo } from '../models/Todo'

type UseTodo = {
  initialTodo: Todo
}

export default function useTodo({ initialTodo }: UseTodo) {
  const [todo, setTodo] = useState<Todo>(initialTodo)
  const toggleCompleted = () =>
    setTodo((todo) => {
      const newTodo: Todo = {
        ...todo,
        completed: !todo.completed,
      }
      return newTodo
    })

  const changeTitle = (newTitle: string) => {
    setTodo((todo) => {
      const newTodo: Todo = {
        ...todo,
        title: newTitle,
      }
      return newTodo
    })
  }

  return [todo, { toggleCompleted, changeTitle }] as const
}
