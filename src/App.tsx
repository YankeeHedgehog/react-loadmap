import { Route, Routes } from 'react-router-dom'

import SidebarIndex from './features/sidebar/Index'
import Applications from './features/application/Applications'
import Index from './pages/Index'
import Counter from './features/counter/Counter'
import Application from './features/application/Application'
import Todos from './features/todos/Todos'
import Timer from './features/timer/Timer'
import Timer2 from './features/timer/Timer2'

function App() {
  return (
    <Routes>
      <Route path="" element={<Index />}>
        <Route path="" element={<Applications />} />
        <Route path="" element={<Application />}>
          <Route path="counter" element={<Counter />} />
          <Route path="todos" element={<Todos />} />
          <Route path="timer" element={<Timer />} />
          <Route path="timer2" element={<Timer2 />} />
        </Route>
      </Route>
      <Route path="/sidebar" element={<SidebarIndex />} />
    </Routes>
  )
}

export default App
