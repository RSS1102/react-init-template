import router from './router/router'
import { RouterProvider } from 'react-router-dom'
import LoadingRouter from '@/router/config/LoadingRouter'


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
