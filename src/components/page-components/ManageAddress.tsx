import { useEffect, useState } from "react";
import { AddressAddForm } from "./AddressAddForm";
import Cookies from "js-cookie";
import { BACKEND_URI } from "../../../utils/index";

interface userAddress {
  streetOrLocality: "";
  city: "";
  pincode: "";
  state: "";
  country: "";
  mobileNumber: "";
}

export const ManageAddressComp = () => {
  const token = Cookies.get("sessionToken");
  const [userAddress, setUserAddress] = useState<userAddress>({
    streetOrLocality: "",
    city: "",
    pincode: "",
    state: "",
    country: "",
    mobileNumber: "",
  });
  console.log(userAddress);

  useEffect(() => {
    const getUserDetails = async () => {
      try {
        const res = await fetch(`${BACKEND_URI}/user/find-user-by-jwt`, {
          method: "POST",
          headers: {
            Authorization: `${token}`,
          },
        });
        const response = await res.json();
        const addressFromResponse = response.user.address;
        setUserAddress({
          streetOrLocality: addressFromResponse.streetOrLocality,
          city: addressFromResponse.city,
          pincode: addressFromResponse.pincode,
          state: addressFromResponse.state,
          country: addressFromResponse.country,
          mobileNumber: addressFromResponse.mobileNumber,
        });
      } catch (error) {
        console.log(error);
      }
    };

    getUserDetails();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center py-24 space-y-24">
      <div className="font-semibold">
        <p>Available address:</p>
        <div>
            <p>{`${userAddress.streetOrLocality}, ${userAddress.city}`}</p>
            <p>{`${userAddress.pincode}, ${userAddress.state}`}</p>
            <p>{`${userAddress.country}`}</p>
            <p>{`Mobile:- ${userAddress.mobileNumber}`}</p>
        </div>
      </div>
      <div>
        <AddressAddForm />
      </div>
    </div>
  );
};
