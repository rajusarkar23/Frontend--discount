import { Link } from "react-router-dom";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { BACKEND_URI } from "../../../../utils/index";

interface formFields {
  fullName: string,
  email: string,
  password: string
}

export const RegisterForm = () => {
  //@ts-ignore
  const [isSubmitting, setIsSubmitting] = useState(false)
  //@ts-ignore
  const [error, setError] = useState(false)
  const navigate = useNavigate()

  const {register, handleSubmit, formState: {errors}} = useForm<formFields>()

  const onSubmit:SubmitHandler<formFields> = async (data) => {
    console.log(data);
    try {
      setIsSubmitting(true)
      const req = await fetch(`${BACKEND_URI}/seller/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data),
        credentials: "include"
      })

      const res = await req.json()
      if (res.success === true) {
        navigate("/seller/verify-otp")
      } else{
        setError(true)
        console.log("error true");
      }
      console.log(res);
      setIsSubmitting(false)
    } catch (error) {
      console.log(error);
      
    }
    
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col justify-center items-center py-64 space-y-3">
        <h2 className="text-3xl font-bold">Register</h2>
        <div>
          <label className="flex">Full name</label>
          <Input
            type="text"
            placeholder="Enter full name"
            className="w-96 focus:border-none transition-all"
            {...register("fullName", {required: {value: true, message: "Name is required"}})}
          />
          {errors.fullName && <p className="text-red-500 font-bold">{errors.fullName.message}</p>}
        </div>
        <div>
          <label className="flex">Email</label>
          <Input
            type="email"
            placeholder="Email"
            className="w-96 focus:border-none transition-all"
            {...register("email", {required: {value: true, message: "Email is required"}})}
          />
          {errors.email && <p className="text-red-500 font-bold">{errors.email.message}</p>}
        </div>
        <div>
          <label className="flex">Password</label>
          <Input
            type="password"
            placeholder="Password"
            className="w-96 focus:border-none transition-all"
            {...register("password", {required: {value: true, message: "Password is required"}, minLength: {value: 6, message: "Password should be minimum 6 character long."}})}
          />
          {errors.email && <p className="text-red-500 font-bold">{errors.email.message}</p>}

        </div>
        <Button className="w-96 hover:text-yellow-300">Register</Button>
        <div className="flex">
          <Link to={"/seller/login"}>
            <h2 className="font-bold text-blue-500">
              Already have an account? Login
            </h2>
          </Link>
        </div>
      </div>
    </form>
  );
};
