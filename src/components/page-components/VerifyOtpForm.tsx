import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "../ui/input-otp";
import {BACKEND_URI} from "../../../utils/index"
import Cookies from "js-cookie";

export const VerifyOtpForm = () => {
    const [otpValue, setOtpValue] = useState("")
    console.log(otpValue);
    const token = Cookies.get("otpVerifyToken")

    // useEffect( async () => {
    //   const res = await fetch(`${BACKEND_URI}/user/verify-valid-otp-jwt`, {
    //     method: "POST",
    //     headers: {
    //       "Authorization": `${token}`
    //     }
    //   })
    // }, [])

    console.log(token);
    

    const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      try {
        const res = await fetch(`${BACKEND_URI}/user/verify-otp`, {
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
