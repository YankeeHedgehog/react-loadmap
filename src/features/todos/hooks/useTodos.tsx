import { useState } from 'react'
import { NewTodo, Todo } from '../models/Todo'
import { useMutation } from '@apollo/client'
import { InsertTodo } from '../entries/graphql'

export default function useTodos(initialTodos: Todo[]) {
  const [todos, setTodos] = useState(initialTodos)

  // insert
  const [insertTodo] = useMutation(InsertTodo)
  const add = async (newTodo: NewTodo) => {
    const { data } = await insertTodo({ variables: { title: newTodo.title } })
    console.log(data.insert_todos_todos.returning[0])
    await setTodos([data.insert_todos_todos.returning[0], ...todos])
  }
  const toggleCompleted = (id: Todo['id']) => {
    const newTodos: NewTodo[] = todos.map((todo) => {
      if (todo.id !== id) return todo
      return { ...todo, completed: !todo.completed }
    })
    setTodos(newTodos)
  }
  const changeTitle = (id: Todo['id'], title: Todo['title']) => {
    const newTodos: NewTodo[] = todos.map((todo) => {
      if (todo.id !== id) return todo
      return { ...todo, title: title }
    })
    setTodos(newTodos)
  }
  const remove = (id: Todo['id']) => {
    const newTodos: NewTodo[] = todos.filter((todo) => todo.id !== id)
    setTodos(newTodos)
  }

  return [todos, { add, toggleCompleted, changeTitle, remove }] as const
}
