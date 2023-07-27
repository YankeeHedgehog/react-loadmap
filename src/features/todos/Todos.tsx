import TodoListItem from './components/TodoListItem'
import TodoAddInput from './components/TodoAddInput'

import useTodosQL from './hooks/useTodosQL'
import TodoFilterTabs from './components/TodoFilterTabs'
import { useState } from 'react'
import todosFilter from './functions/todosFilter'

export default function Todos() {
  const [todos, method] = useTodosQL()

  const options = ['all', 'active', 'completed'] as const
  const [option, setOption] = useState<(typeof options)[number]>('all')
  const filteredTodos = todos && todosFilter(todos?.todos, option)

  return (
    <div>
      <TodoAddInput add={method.add} />
      {filteredTodos &&
        filteredTodos.map((todo) => (
          <TodoListItem key={todo.id} todo={todo} method={method} />
        ))}
      <TodoFilterTabs<(typeof options)[number]>
        options={options}
        selectedOption={option}
        setOption={setOption}
      />
    </div>
  )
}
