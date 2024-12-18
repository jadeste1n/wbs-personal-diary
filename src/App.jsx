import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import routes from './data/routes';
import './App.css'

function App() {
  const router = createBrowserRouter(routes);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
