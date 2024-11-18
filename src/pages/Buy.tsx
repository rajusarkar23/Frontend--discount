import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { BACKEND_URI } from ".././../utils/index";

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

const Buy = () => {
  const { id } = useParams();
  const [productDetails, setProductDetails] = useState<productFields[]>([]);
  console.log(productDetails);

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

  return (
    <div>
      {productDetails.map((product, index) => (
        <div className="flex px-4">
          {/* for image */}

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
              <Link
                className="bg-yellow-300 text-black font-bold text-xl hover:bg-black hover:text-yellow-300 px-6 rounded py-2"
                to={`/buy/${product.title}/${id}`}
              >
                Buy
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Buy;
