import router from './router/router'
import { json, Route, RouterProvider, Routes } from 'react-router-dom'
import LoadingRouter from '@/router/config/LoadingRouter'
import PageNotFound from '@/router/config/PageNotFound'
function App() {
  return (
    <div className="App">
      <RouterProvider
        router={router}
        fallbackElement={<LoadingRouter />}
      />
    </div>
  )
}

export default App
