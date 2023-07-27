import { Todo } from '../models/Todo'

export type Option = 'all' | 'active' | 'completed'

export default function todosFilter(todos: Todo[], option: Option) {
  const filter = {
    all: todos,
    active: todos.filter((todo) => !todo.completed),
    completed: todos.filter((todo) => todo.completed),
  }
  return filter[option]
}
