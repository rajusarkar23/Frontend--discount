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

  const uploadImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.files);
    console.log("sahbdjvh");

    const formData = new FormData()
    formData.append("file",e.target.files![0])

    try {
      const res = await fetch (`${BACKEND_URI}/seller/upload`, {
        method: "POST",
        headers: {
          "Content-Type": "multipart/form-data",
        },
        body: formData,
      })
      const data = await res.json()
      console.log(data);
      
    } catch (error) {
      console.log(error);
      
    }
    
  };

  const test = () => {
    console.log("dmcbdcvd");
    
  }
  test()

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
              <Input type="file" onSelect={uploadImage}/>
              <label>Secondary</label>
              <Input type="file" />
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
