import { RegisterForm } from "@/components/page-components/seller/RegisterForm";
import Cookies from "js-cookie";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const token = Cookies.get("sessionToken");

  useEffect(() => {
    if (token) {
      navigate("/seller/dashboard");
    }
  }, []);

  return (
    <>
      <RegisterForm />
    </>
  );
};

export default Register;
