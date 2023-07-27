import { NewTodo, Todo } from '../models/Todo'
import { useMutation, useQuery } from '@apollo/client'
import {
  GetTodos,
  InsertTodo,
  RemoveTodo,
  UpdateTodoCompleted,
  UpdateTodoTitle,
} from '../entries/graphql'

export default function useTodosQL() {
  const { data: todos } = useQuery<{ todos: Todo[] }>(GetTodos)

  // insert
  const [insertTodo] = useMutation(InsertTodo)
  const add = (newTodo: NewTodo) => {
    insertTodo({
      variables: { title: newTodo.title },
      update(cache, result) {
        cache.modify({
          fields: {
            todos(existing = []) {
              const newTodo = result.data?.addTodo?.todo

              const writeRef = cache.writeQuery({
                query: GetTodos,
                data: { todo: newTodo },
              })

              return [writeRef, ...existing]
            },
          },
        })
      },
    })
  }

  // toggle todo item complete
  const [toggleTodoCompleted] = useMutation(UpdateTodoCompleted)
  const toggleCompleted = (id: Todo['id'], completed: Todo['completed']) => {
    toggleTodoCompleted({ variables: { id: id, completed: completed } })
  }

  // change todo item title
  const [changeTodoTitle] = useMutation(UpdateTodoTitle)
  const changeTitle = (id: Todo['id'], title: Todo['title']) => {
    changeTodoTitle({ variables: { id: id, title: title } })
  }

  // remove todo item by id
  const [removeTodo] = useMutation(RemoveTodo)
  const remove = (id: Todo['id']) => {
    removeTodo({
      variables: { id: id },
      update(cache, result) {
        cache.modify({
          fields: {
            todos(existing = []) {
              const newTodo = result.data?.addTodo?.todo

              const writeRef = cache.writeQuery({
                query: GetTodos,
                data: { todo: newTodo },
              })

              return [...existing, writeRef]
            },
          },
        })
      },
    })
  }

  return [todos, { add, toggleCompleted, changeTitle, remove }] as const
}
