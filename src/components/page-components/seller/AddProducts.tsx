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
import { Input } from "@/components/ui/input";
import { BACKEND_URI } from "../../../../utils/index";
import { useState } from "react";

interface imageFields {
  primary: "",
  secondary: "",
  tertiary: ""
}

export const AddProducts = () => {
  // create few states for form fields
  // like: for specs
  // react hook form maybe not suitable for this one.

  const [specs, setSpecs] = useState([""]);

  const [primaryImg, setPrimaryImg] = useState("")
  const [secondary, setSecondaryImg] = useState("")
  const [tertiary, setTertiaryImg] = useState("")

  console.log(primaryImg);
  console.log(secondary);
  console.log(tertiary);
  
  // upload primary image
  const uploadPImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    // onChange target the file
    const files = e.target.files;

    console.log(typeof files);

    // if no file available error
    if (!files) {
      console.error("No file selected");
      return;
    }
    // create formData
    const formData = new FormData();

    // append files array
    formData.append("file", files[0]);
    // send http req
    try {
      const res = await fetch(`${BACKEND_URI}/seller/upload`, {
        method: "POST",
        body: formData, // send here the form data not the files
      });

      const response = await res.json();

      if (response.success !== true) {
        throw new Error(`Error: ${res.status} - ${res.statusText}`);
      }

      console.log("Upload successful:", response);
      setPrimaryImg(response.url)
      console.log(formData);
    } catch (error) {
      console.error("File upload failed:", error);
    }
  };
  // upload secondary image
  const uploadSImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    // onChange target the file
    const files = e.target.files;

    console.log(typeof files);

    // if no file available error
    if (!files) {
      console.error("No file selected");
      return;
    }
    // create formData
    const formData = new FormData();

    // append files array
    formData.append("file", files[0]);
    // send http req
    try {
      const res = await fetch(`${BACKEND_URI}/seller/upload`, {
        method: "POST",
        body: formData, // send here the form data not the files
      });

      const response = await res.json();

      if (response.success !== true) {
        throw new Error(`Error: ${res.status} - ${res.statusText}`);
      }

      console.log("Upload successful:", response);
      setSecondaryImg(response.url)
      console.log(formData);
    } catch (error) {
      console.error("File upload failed:", error);
    }
  };
  // upload tertiary image
  const uploadTImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    // onChange target the file
    const files = e.target.files;

    console.log(typeof files);

    // if no file available error
    if (!files) {
      console.error("No file selected");
      return;
    }
    // create formData
    const formData = new FormData();

    // append files array
    formData.append("file", files[0]);
    // send http req
    try {
      const res = await fetch(`${BACKEND_URI}/seller/upload`, {
        method: "POST",
        body: formData, // send here the form data not the files
      });

      const response = await res.json();

      if (response.success !== true) {
        throw new Error(`Error: ${res.status} - ${res.statusText}`);
      }

      console.log("Upload successful:", response);
      setTertiaryImg(response.url)
      console.log(formData);
    } catch (error) {
      console.error("File upload failed:", error);
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Add products</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <form>
          <AlertDialogHeader>
            <AlertDialogTitle>Add new product</AlertDialogTitle>
            <label> Title</label>
            <Input placeholder="Title" />
            <label>Specification</label>
            <Input placeholder="Specification" />
            <label>Price</label>
            <Input placeholder="Price" />
            <div>
              <label>Primary</label>
              <Input type="file" onChange={uploadPImage} />
              <label>Secondary</label>
              <Input type="file" onChange={uploadSImage} />
              <label>Third</label>
              <Input type="file" onChange={uploadTImage}/>
            </div>
            <AlertDialogDescription></AlertDialogDescription>
          </AlertDialogHeader>
          <div className="space-x-3 space-y-2">
            <Button className="w-24 hover:text-yellow-300">Add</Button>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
          </div>
        </form>
      </AlertDialogContent>
    </AlertDialog>
  );
};
