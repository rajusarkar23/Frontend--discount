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

export const AddProducts = () => {


  // upload image
  const uploadImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    // onChange target the file
    const files = e.target.files;

    console.log(typeof(files));
    
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

      const response = await res.json()
  
      if (response.success !== true) {
        throw new Error(`Error: ${res.status} - ${res.statusText}`);
      }
      
      console.log("Upload successful:", response);
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
              <Input type="file" onChange={uploadImage}/>
              <label>Secondary</label>
              <Input type="file" onChange={uploadImage}/>
              <label>Third</label>
              <Input type="file" />
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
