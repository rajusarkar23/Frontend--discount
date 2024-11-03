import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import { Navbar } from './components/page-components/Navbar'
import { Footer } from './components/page-components/Footer'
import Login from './pages/user/Login'
import Register from './pages/user/Register'
import VerifyOtp from './pages/user/VerifyOtp'

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
  },
  {
    path: "/user/login",
    element: (
      <>
      <Navbar />
      <Login />
      <Footer />
      </>
    )
  },
  {
    path: "/user/register",
    element: (
      <>
      <Navbar />
      <Register />
      <Footer />
      </>
    )
  },
  {
    path: "/user/verify-otp",
    element: (
      <>
        <Navbar />
        <VerifyOtp />
        <Footer />
      </>
    )
  }
])

function App() {

  return <RouterProvider  router={router}/>
}

export default App
