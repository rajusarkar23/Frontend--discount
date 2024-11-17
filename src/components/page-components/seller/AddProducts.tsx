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
import React, { useRef, useState } from "react";


export const AddProducts = () => {

  const specRef = useRef<HTMLInputElement>(null)
  const [specs, setSpecs] = useState<string[]>([])
  const [primaryImg, setPrimaryImg] = useState("")
  const [secondary, setSecondaryImg] = useState("")
  const [tertiary, setTertiaryImg] = useState("")

  // bool states
  const [primaryImgUploading, setPrimaryImgUploading] = useState(false)
  const [primaryImgUploaSuccess, setPrimaryImgUploadSucces] = useState(false)
  const [secondaryImgUploading, setSecondaryImgUploading] = useState(false)
  const [secondaryImgUploaSuccess, setSecondaryImgUploadSucces] = useState(false)
  const [tertiaryImgUploading, setTertiaryImgUploading] = useState(false)
  const [tertiaryImgUploaSuccess, setTertiaryImgUploadSucces] = useState(false)

  

  
  // upload primary image
  const uploadPImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrimaryImgUploading(true)
    // onChange target the file
    const files = e.target.files;

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
        throw new Error(`Error: ${res.status}`);
      }
        setPrimaryImg(response.url)
        setPrimaryImgUploading(false)
        setPrimaryImgUploadSucces(true)
    } catch (error) {
      console.error("File upload failed:", error);
    }
  };
  // upload secondary image
  const uploadSImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setSecondaryImgUploading(true)
    // onChange target the file
    const files = e.target.files;

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
      setSecondaryImgUploading(false)
      setSecondaryImgUploadSucces(true)
      console.log(formData);
    } catch (error) {
      console.error("File upload failed:", error);
    }
  };
  // upload tertiary image
  const uploadTImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setTertiaryImgUploading(true)
    // onChange target the file
    const files = e.target.files;

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
      setTertiaryImgUploading(false)
      setTertiaryImgUploadSucces(true)
      console.log(formData);
    } catch (error) {
      console.error("File upload failed:", error);
    }
  };

  // add specs value
  const addSpecs = () => {
   if (specRef.current) {
    const newSpec = specRef.current.value.trim()
    if (newSpec) {
      setSpecs((prev) => [...prev, newSpec]);
      specRef.current.value = ""
    }
   } 
  }


  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const title = (document.getElementById("title") as HTMLInputElement).value
    const price = (document.getElementById("price") as HTMLInputElement).value

    const formData = {
      title,
      specification:specs,
      price,
      image: {
        primary: primaryImg,
        secondary,
        tertiary
      }
    } 

    try {
      const res = await fetch(`${BACKEND_URI}/product/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      })

      const response = await res.json()
      console.log(response);
      
    } catch (error) {
      console.log(error);
      
    }
  }

  // labels
  const primaryImglabels = () => {
    if (primaryImgUploading) {
      return <span className="font-semibold text-blue-950">Primary image uploading...</span>
    }
    if (primaryImgUploaSuccess) {
      return <span className="font-bold text-green-800">Primary image upload success</span>
    }
    return <span className="font-bold">Upload primary image</span>
  }

  const secondaryImglabels = () => {
    if (secondaryImgUploading) {
      return <span className="font-semibold text-blue-950">Secondary image uploading...</span>
    }
    if (secondaryImgUploaSuccess) {
      return <span className="font-bold text-green-800">Secondary image upload success</span>
    }
    return <span className="font-bold">Upload secondary image</span>
  }

  const tertiaryImglabels = () => {
    if (tertiaryImgUploading) {
      return <span className="font-semibold text-blue-950">Tertiary image uploading...</span>
    }
    if (tertiaryImgUploaSuccess) {
      return <span className="font-bold text-green-800">Tertiary image upload success</span>
    }
    return <span className="font-bold">Upload tertiary image</span>
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Add products</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <form onSubmit={handleSubmit}>
          <AlertDialogHeader>
            <AlertDialogTitle>Add new product</AlertDialogTitle>
            <label>Title</label>
            <Input placeholder="Title" id="title"/>
            <label>Description</label>
            <Input placeholder="Description"/>
            <label>Specification</label>
            <Input placeholder="Specification" ref={specRef}/>
            <Button type="button" onClick={addSpecs}>Add Specs</Button>
            <div>
              {
                specs.map((specs, index) => (
                  <li key={index} className="text-blue-950">{specs}</li>
                ))
              }
            </div>
            <label>Price</label>
            <Input placeholder="Price" id="price"/>
            <div className="flex flex-col">
              <label>{primaryImglabels()}</label>
              <input type="file" onChange={uploadPImage} />
              <label>{secondaryImglabels()}</label>
              <input type="file" onChange={uploadSImage} />
              <label>{tertiaryImglabels()}</label>
              <input type="file" onChange={uploadTImage}/>
            </div>
          </AlertDialogHeader>
          <AlertDialogDescription></AlertDialogDescription>
         <div className="space-y-2 mt-2">
            <Button className=" w-full hover:text-yellow-300">Add product</Button>
            <AlertDialogCancel className="w-full">Cancel</AlertDialogCancel>
         </div>
          
        </form>
      </AlertDialogContent>
    </AlertDialog>
  );
};
