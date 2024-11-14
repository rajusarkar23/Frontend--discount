import { useState } from "react";
import { BACKEND_URI } from "../../../../utils/index";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from "@/components/ui/input-otp";
import { Button } from "@/components/ui/button";

export const VerifyOtpForm = () => {
    const [otpValue, setOtpValue] = useState("")
    //@ts-ignore
    const [error, setError] = useState(false)
    const token = Cookies.get("otpVerifyToken")

    const navigate = useNavigate()

    const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      try {
        const res = await fetch(`${BACKEND_URI}/seller/verify-otp`, {
          method: "POST",
          headers: {
            "Authorization": `${token}`,
            "Content-Type": "application/json"
          },
          body: JSON.stringify({otp: otpValue}),
          credentials: "include"
        })
        const response = await res.json()
        console.log(response);

        if (response.success === true) {
            navigate("/seller/dashbaord")
        } else{
          setError(true)
          console.log("error true");
          
        }
      } catch (error) {
        console.log(error);
        
      }
    }


    
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col justify-center items-center py-72 space-y-3">
        <h2 className="text-3xl font-bold">Verify your account</h2>
        <div className="text-center">
          <label className="mb-3 font-semibold">Enter OTP</label>
          <InputOTP
           value={otpValue}
           onChange={(e) => setOtpValue(e)}
           maxLength={6}>
            <InputOTPGroup>
              <InputOTPSlot index={0} aria-required/>
              <InputOTPSlot index={1} aria-required/>
              <InputOTPSlot index={2} aria-required/>
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup>
              <InputOTPSlot index={3} aria-required/>
              <InputOTPSlot index={4} aria-required/>
              <InputOTPSlot index={5} aria-required/>
            </InputOTPGroup>
          </InputOTP>
        </div>
        <div>
            <Button className="w-32">Verify</Button>
        </div>
      </div>
    </form>
  );
};
