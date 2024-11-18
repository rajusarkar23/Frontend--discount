import { useEffect, useState } from "react";
import { BACKEND_URI } from "../../../utils/index";
import { Link } from "react-router-dom";
// import { EditProduct } from "./EditProduct";

interface productFields {
  image: {
    primary: string;
    secondary: string;
    tertiary: string;
  };
  specification: string[];
  title: string;
  price: string;
  _id: string;
}

export const ShowMobiles = () => {
  const [products, setProducts] = useState<productFields[]>([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(`${BACKEND_URI}/product/get-products`, {
          method: "GET",
        });
        const response = await res.json();
        console.log(Array.isArray(response));

        // Map all the products to my state array
        const formattedProducts = response.products.map((product: any) => ({
          image: {
            primary: product.image.primary,
            secondary: product.image.secondary,
            tertiary: product.image.tertiary,
          },
          specification: product.specification,
          title: product.title,
          price: product.price,
          _id: product._id,
        }));

        setProducts(formattedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <div className="flex gap-4 px-4">
        {products.length > 0 ? (
          products.map((product, index) => (
            <>
              <Link
                key={index}
                className="border px-6"
                to={`/product/${product.title}/${product._id}`}
              >
                <h2 key={index}>{product.title}</h2>
                <img
                  src={product.image.primary}
                  alt={product.title}
                  key={index}
                  style={{
                    width: "200px",
                    height: "200px",
                    objectFit: "cover",
                  }}
                />
                <p key={index}>Price: {product.price}</p>
                <ul key={index}>
                  {product.specification.map((spec, index) => (
                    <li key={index} className="list-disc">
                      {spec}
                    </li>
                  ))}
                </ul>
                
              </Link>
            
            </>
          ))
        ) : (
          <p>Loading products...</p>
        )}
      </div>
    </div>
  );
};
