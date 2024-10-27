import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import { Navbar } from './components/page-components/Navbar'
import { Footer } from './components/page-components/Footer'

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Home />
        <Footer />
      </>
    )
  }
])

function App() {

  return <RouterProvider  router={router}/>
}

export default App
