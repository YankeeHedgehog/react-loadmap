export type Todo = {
  id?: number
  title: string
  completed: boolean
  created_at?: Date
  updated_at?: Date
}

export type FullTodo = Todo & {
  is_deleted?: boolean
}

export type NewTodo = FullTodo & {
  completed?: boolean
}

export type TodoActions = {
  create: () => {}
  get: () => {}
  update: (todo: Todo) => {}
  delete: (todo: Todo) => {}
}
