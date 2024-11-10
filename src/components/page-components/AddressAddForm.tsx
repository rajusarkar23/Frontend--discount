import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Input } from "../ui/input";
import { SubmitHandler, useForm } from "react-hook-form";
import {BACKEND_URI} from "../../../utils/index"
import Cookies from "js-cookie";


interface formFields {
  streetOrLocality: string;
  city: string;
  pincode: string;
  state: string;
  country: string;
  mobileNumber: string;
}

export function AddressAddForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formFields>();

  const token = Cookies.get("sessionToken")

  const onSubmit:SubmitHandler<formFields> = async (data) => {
    console.log(data);

    try {
      const res = await fetch(`${BACKEND_URI}/user/add-address`, {
        method: "POST",
        headers: {
          Authorization: `${token}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
      console.log(res);
      
    } catch (error) {
      console.log(error);
      
    }
    
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Add address</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <AlertDialogHeader>
            <AlertDialogTitle>Add new address</AlertDialogTitle>

            <AlertDialogDescription>
              <label>Street/ Locality</label>
              <Input
                {...register("streetOrLocality", {
                  required: {
                    value: true,
                    message: "Street/ Locality required",
                  },
                })}
                className="uppercase"
              />
              {errors.streetOrLocality && <label className="font-semibold text-red-500">{errors.streetOrLocality.message} <br /> </label>}
              <label>City</label>
              <Input
                {...register("city", {
                  required: { value: true, message: "City is required" },
                })}
                className="uppercase"
              />
              {errors.city && <label className="font-semibold text-red-500">{errors.city.message} <br /> </label>}
              <label>Pincode</label>
              <Input  {...register("pincode", {
                  required: { value: true, message: "Pincode is required" },
                })} className="uppercase"/>
                {errors.pincode && <label className="font-semibold text-red-500">{errors.pincode.message} <br /> </label>}
              <label>State</label>
              <Input  {...register("state", {
                  required: { value: true, message: "State is required" },
                })} className="uppercase"/>
                {errors.state && <label className="font-semibold text-red-500">{errors.state.message} <br /> </label>}
              <label>Country</label>
              <Input  {...register("country", {
                  required: { value: true, message: "Country is required" },
                })} className="uppercase"/>
                {errors.country && <label className="font-semibold text-red-500">{errors.country.message} <br /> </label>}
              <label>Mobile number</label>
              <Input  {...register("mobileNumber", {
                  required: { value: true, message: "Mobile number is required" },
                })} className="uppercase"/>
                {errors.mobileNumber && <label className="font-semibold text-red-500">{errors.mobileNumber.message} <br /> </label>}
            </AlertDialogDescription>
          </AlertDialogHeader>
         <div className="space-x-3 space-y-2">
          <Button className="w-24 hover:text-yellow-300">Add</Button>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
         </div>
        </form>
      </AlertDialogContent>
    </AlertDialog>
  );
}
