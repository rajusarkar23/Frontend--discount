import Cookies from "js-cookie";
import React, { useEffect, useRef, useState } from "react";
import { BACKEND_URI } from "../../../utils/index";
import { Input } from "../ui/input";
import { Loader2, Pencil } from "lucide-react";
import { Button } from "../ui/button";
// import { useToast } from "@/hooks/use-toast";
// import { ToastAction } from "../ui/toast";

// interface for user data
interface UserData {
  fullName: "";
  email: "";
}

export const ProfileData = () => {
  // hold user data in a state
  const [userData, setUserData] = useState<UserData>({
    fullName: "",
    email: "",
  });
  console.log(userData);
  // ref for name
  const inputRefName = useRef(null);
  // ref for email
  const inputRefEmail = useRef(null);
  // truthy falsy states
  const [isNameEditing, setIsNameEditing] = useState(false);
  const [isEmailEditing, setIsEmailEditing] = useState(false);
  const [updateBtnClicked, setUpdateBtnClick] = useState(false)

  // const {toast} = useToast()
  // grab the token
  const token = Cookies.get("sessionToken");
  // run this func to get the user details
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
        const user = response.user;
        setUserData({
          fullName: user.fullName || "",
          email: user.email || "",
        });
      } catch (error) {
        console.log(error);
      }
    };
    getUserDetails();
  }, []);

  // handle name click/change
  const handleClickName = () => {
    setIsNameEditing(true);
    setTimeout(() => {
      //@ts-ignore
      inputRefName.current?.focus();
    }, 0);
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isNameEditing) {
      setUserData({ ...userData, [e.target.name]: e.target.value });
    }
  };

  // handle email click/change
  const handleClickEmail = () => {
    setIsEmailEditing(true);
    setTimeout(() => {
      //@ts-ignore
      inputRefEmail.current?.focus();
    }, 0);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isEmailEditing) {
      setUserData({ ...userData, [e.target.name]: e.target.value });
    }
  };

  // update name
  const updateName = async () => {
    setUpdateBtnClick(true)
    try {
      const res = await fetch (`${BACKEND_URI}/user/update-fullName`, {
        method: "POST",
        headers: {
          Authorization: `${token}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({fullName: userData.fullName})
      })
      const response = await res.json()
      console.log(response);
      setIsNameEditing(false)
      setUpdateBtnClick(false)
    } catch (error) {
      console.log(error);
      
    }
  }

  // update email
  const updateEmail = async () => {
    try {
      const res = await fetch(`${BACKEND_URI}/user/update-email`, {
        method: "POST",
        headers: {
          Authorization: `${token}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({email: userData.email})
      })
      const response = await res.json()
      console.log(response);
      setIsEmailEditing(false)
    } catch (error) {
      console.log(error);
      
    }
  }

  return (
    <div className="flex flex-col gap-y-2 items-center justify-center mt-52">
      <div className="flex space-x-2">
        <Input
          type="text"
          name="fullName"
          ref={inputRefName}
          value={userData ? userData.fullName : "Loading..."}
          onChange={handleNameChange}
          className="w-52"
        />

        {isNameEditing ? (
          <Button className="hover:bg-yellow-300 hover:text-black" onClick={updateName}>{updateBtnClicked ? (<Loader2 />) : (<p>Update</p>)}</Button>
        ) : (
          <Button
            className="hover:bg-yellow-300 hover:text-black"
            onClick={handleClickName}
          >
            <Pencil />
          </Button>
        )}
      </div>

      <div className="flex space-x-2">
        <Input
          type="email"
          name="email"
          ref={inputRefEmail}
          value={userData ? userData.email : "Loading..."}
          onChange={handleEmailChange}
          className="w-52"
        />
        {
          isEmailEditing ? (<Button className="hover:bg-yellow-300 hover:text-black" onClick={updateEmail}>Update</Button>) : (  <Button
          className="hover:bg-yellow-300 hover:text-black"
          onClick={handleClickEmail}
        >
          <Pencil />
        </Button>)
        }
      
      </div>
    </div>
  );
};
