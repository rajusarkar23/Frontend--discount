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

export const EditProduct = () => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Add products</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <form>
          <AlertDialogHeader>
            <AlertDialogTitle>Add new product</AlertDialogTitle>
            <label>Title</label>
            <Input placeholder="Title" id="title" />
            <label>Description</label>
            <Input placeholder="Description" />
            <label>Specification</label>
            <Input placeholder="Specification" />
            <Button type="button">Add Specs</Button>
            <div>
              <input type="file" />
              <input type="file" />
              <input type="file" />
            </div>
            <label>Price</label>
            <Input placeholder="Price" id="price" />
            <div className="flex flex-col"></div>
          </AlertDialogHeader>
          <AlertDialogDescription></AlertDialogDescription>
          <div className="space-y-2 mt-2">
            <Button className=" w-full hover:text-yellow-300">
              Add product
            </Button>
            <AlertDialogCancel className="w-full">Cancel</AlertDialogCancel>
          </div>
        </form>
      </AlertDialogContent>
    </AlertDialog>
  );
};
