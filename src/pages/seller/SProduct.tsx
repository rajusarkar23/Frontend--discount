import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BACKEND_URI } from ".././../../utils/index";
import { Button } from "@/components/ui/button";
// import { EditProduct } from "@/components/page-components/seller/EditProduct";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Input } from "@/components/ui/input";
import { Pen } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface productFields {
  title: string;
  price: string;
  image: {
    primary: string;
    secondary: string;
    tertiary: string;
  };
  specification: string[];
  _id: string;
}

const SProduct = () => {
  const { id } = useParams();
  const [productDetails, setProductDetails] = useState<productFields[]>([]);
  console.log(productDetails);
  const navigate = useNavigate()

  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const res = await fetch(
          `${BACKEND_URI}/product/get-product-by-id/${id}`,
          {
            method: "GET",
          }
        );
        const response = await res.json();
        const resData = response.productById;
        // console.log(resData);

        const formattedProduct = {
          image: {
            primary: resData.image.primary,
            secondary: resData.image.secondary,
            tertiary: resData.image.tertiary,
          },
          title: resData.title,
          price: resData.price,
          specification: resData.specification,
          _id: resData._id,
        };

        setProductDetails([formattedProduct]);
      } catch (error) {
        console.log(error);
      }
    };

    getAllProducts();
  }, []);

  const deleteProduct = async () => {
    try {
        const res = await fetch(`${BACKEND_URI}/product/delete-product/${id}`, {
            method: "DELETE"
        })
        const response = await res.json()
        if (response.success === true) {
            navigate("/seller/dashboard")
        }
        
    } catch (error) {
        console.log(error);
        
    }
  }
  return (
    <div>
      {productDetails.map((product, index) => (
        <div className="flex px-4">
          {/* for image */}
          <div className="border mt-3" key={index}>
            <img key={index} src={product.image.primary} alt="img" />
            <div className="flex space-x-3 text-center justify-center">
              <div className="w-24 h-24 border">
                <img src={product.image.primary} alt="" />
              </div>
              <div className="w-24 h-24 border">
                <img src={product.image.secondary} alt="" />
              </div>
              <div className="w-24 h-24 border">
                <img src={product.image.tertiary} alt="" />
              </div>
            </div>
          </div>
          {/* for texts */}
          <div className="mt-48 ml-16">
            <p>{product.title}</p>
            <p key={index}>Price: {product.price}</p>
            <p>Specifications:-</p>
            <div className="ml-14">
              {product.specification.map((specs) => (
                <li>{specs}</li>
              ))}
            </div>
            <div className="mt-8 space-x-2">
              <Button onClick={deleteProduct}>Delete</Button>

              {/* EDIT PRODUCT DETAILS */}
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant="outline">Edit products</Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <form>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Add new product</AlertDialogTitle>
                      <label>Title</label>
                      <Input
                        placeholder="Title"
                        id="title"
                        value={product.title}
                      />
                      <label>Description</label>
                      <Input placeholder="Description" />
                      <label>Specification</label>
                      <Input placeholder="Specification" />
                      <label>
                        {product.specification.map((specs) => (
                          <div className="flex">
                            <p>{specs}</p>
                            <Pen />
                          </div>
                        ))}
                      </label>
                      <Button type="button">Add Specs</Button>
                      <div>
                        <input type="file" />
                        <input type="file" />
                        <input type="file" />
                      </div>
                      <label>Price</label>
                      <Input
                        placeholder="Price"
                        id="price"
                        value={product.price}
                      />
                      <div className="flex flex-col"></div>
                    </AlertDialogHeader>
                    <AlertDialogDescription></AlertDialogDescription>
                    <div className="space-y-2 mt-2">
                      <Button className=" w-full hover:text-yellow-300">
                        Add product
                      </Button>
                      <AlertDialogCancel className="w-full">
                        Cancel
                      </AlertDialogCancel>
                    </div>
                  </form>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SProduct;
