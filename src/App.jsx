import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import routes from './data/routes';
import './App.css'




function App() {
  const router = createBrowserRouter(routes);
  const secretID = import.meta.env.VITE_TEST;
  console.log(secretID)

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
