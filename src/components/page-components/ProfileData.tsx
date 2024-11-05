import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { BACKEND_URI } from "../../../utils/index";

export const ProfileData = () => {
  const [] = useState([]);
  const token = Cookies.get("sessionToken");

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
        const user = response.user
        console.log(response);
        console.log(user);
        
      } catch (error) {
        console.log(error);
      }
    };
    getUserDetails()
  }, []);

  return <div>profile data</div>;
};
