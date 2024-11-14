import { LoginForm } from "@/components/page-components/seller/LoginForm"
import Cookies from "js-cookie";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const navigate = useNavigate();
  const token = Cookies.get("sessionToken");

  useEffect(() => {
    if (token) {
      navigate("/seller/dashboard");
    }
  }, []);

  return (
    <>
    <LoginForm />
    </>
  )
}

export default Login