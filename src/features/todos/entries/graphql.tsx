import { gql } from '@apollo/client'

export const GetTodos = gql`
  query GetTodos {
    todos(where: { deleted: { _eq: false } }, order_by: { created_at: desc }) {
      id
      title
      completed
      created_at
      updated_at
    }
  }
`

export const InsertTodo = gql`
  mutation InsertTodo($title: String!) {
    insert_todos_one(object: { title: $title }) {
      id
      title
      completed
    }
  }
`

export const UpdateTodoCompleted = gql`
  mutation ToggleTodoComplete($id: Int!, $completed: Boolean!) {
    update_todos_by_pk(
      pk_columns: { id: $id }
      _set: { completed: $completed }
    ) {
      id
    }
  }
`

export const UpdateTodoTitle = gql`
  mutation UpdateTodoTitle($id: Int!, $title: String!) {
    update_todos_by_pk(pk_columns: { id: $id }, _set: { title: $title }) {
      id
    }
  }
`

export const RemoveTodo = gql`
  mutation RemoveTodo($id: Int!) {
    update_todos_by_pk(pk_columns: { id: $id }, _set: { deleted: true }) {
      id
    }
  }
`
