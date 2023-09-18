import { Route, Routes } from 'react-router-dom'

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { apps } from './data/apps'
import { libraries } from './data/libraries'
import Application from './features/application/Application'
import Applications from './features/application/Applications'
import Counter from './features/counter/Counter'
import SidebarIndex from './features/sidebar/Index'
import Timer from './features/timer/Timer'
import Timer2 from './features/timer/Timer2'
import Todos from './features/todos/Todos'
import Form from './form/Form'
import AGGrid from './libraries/AGGrid'
import AGGridControledEditable from './libraries/AGGridControledEditable'
import Exif from './libraries/Exif'
import Index from './pages/Index'

const client = new ApolloClient({
  uri: 'http://localhost:8080/v1/graphql',
  cache: new InMemoryCache(),
})

function App() {
  return (
    <ApolloProvider client={client}>
      <Routes>
        <Route path="" element={<Index />}>
          <Route path="apps" element={<Applications pages={apps} />} />
          <Route path="apps" element={<Application />}>
            <Route path="counter" element={<Counter />} />
            <Route path="todos" element={<Todos />} />
            <Route path="timer" element={<Timer />} />
            <Route path="timer2" element={<Timer2 />} />
            <Route path="form" element={<Form />} />
          </Route>
          <Route
            path="libraries"
            element={<Applications pages={libraries} />}
          />
          <Route path="libraries" element={<Application />}>
            <Route path="ag-grid" element={<AGGrid />} />
            <Route
              path="editable-ag-grid"
              element={<AGGridControledEditable />}
            />
            <Route path="exif" element={<Exif />} />
          </Route>
        </Route>
        <Route path="/sidebar" element={<SidebarIndex />} />
      </Routes>
    </ApolloProvider>
  )
}

export default App
