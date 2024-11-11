import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import { Navbar } from "./components/page-components/Navbar";
import { Footer } from "./components/page-components/Footer";
import Login from "./pages/user/Login";
import Register from "./pages/user/Register";
import VerifyOtp from "./pages/user/VerifyOtp";
import Profile from "./pages/user/Profile";
import Order from "./pages/user/Order";
import ManageAddress from "./pages/user/ManageAddress";
import SellerRegistration from "@/pages/seller/Register"
import Landing from "./pages/seller/Landing";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Home />
        <Footer />
      </>
    ),
  },
  {
    path: "/user/login",
    element: (
      <>
        <Navbar />
        <Login />
        <Footer />
      </>
    ),
  },
  {
    path: "/user/register",
    element: (
      <>
        <Navbar />
        <Register />
        <Footer />
      </>
    ),
  },
  {
    path: "/user/verify-otp",
    element: (
      <>
        <Navbar />
        <VerifyOtp />
        <Footer />
      </>
    ),
  },
  {
    path: "/user/profile",
    element: (
      <>
        <Navbar />
        <Profile />
        <Footer />
      </>
    ),
  },
  {
    path: "/user/orders",
    element: (
      <>
        <Navbar />
        <Order />
        <Footer />
      </>
    ),
  },
  {
    path: "/user/manage-address",
    element: (
      <>
        <Navbar />
        <ManageAddress />
        <Footer />
      </>
    ),
  },

  //seller paths
  {
    path: "/seller/h",
    element: (
      <>
        <Navbar />
        <Landing />
        <Footer />
      </>
    )
  },
  {
    path: "seller/register",
    element: (
      <>
        <Navbar />
        <SellerRegistration />
        <Footer />
      </>
    )
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
