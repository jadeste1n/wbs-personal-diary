import { useState,  useEffect  } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import routes from './data/routes'
import originalEntries from './data/diaryEntries'
import './App.css'

function App(routes) {
  //map a list of routes/url to specific react components (pages)
  const router = createBrowserRouter(routes);

  //set State
  const [entries, setEntries] = useState(originalEntries); //initial array for entries

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
