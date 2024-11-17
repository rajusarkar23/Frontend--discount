import { useEffect, useState } from "react";
import { BACKEND_URI } from "../../../../utils/index";

interface productFields {
    image: {
        primary: string,
        secondary: string,
        tertiary: string
    },
    specification: string[],
    title: string,
    price: string
}

export const ShowListedProducts = () => {
  const [products, setProducts] = useState<productFields[]>([]); // State to store all products

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(`${BACKEND_URI}/product/get-products`, {
          method: "GET",
        });

    

        const response = await res.json();

        // Assuming response.products is an array of product objects
        console.log("Fetched Products:", response.products);

        // Map only the required fields: image, title, price
        const formattedProducts = response.products.map((product: any) => ({
            image: {
              primary: product.image.primary,
              secondary: product.image.secondary,
              tertiary: product.image.tertiary,
            },
            specification: product.specification || [], // Ensure it's an array
            title: product.title,
            price: product.price,
          }));
  
          setProducts(formattedProducts); // Update the ate the state with the filtered fields
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Show Listed Products</h1>
      <div>
        {products.length > 0 ? (
          products.map((product, index) => (
            <div
              key={index}
              style={{
                border: "1px solid #ccc",
                margin: "10px",
                padding: "10px",
                textAlign: "center",
              }}
            >
              <h2>{product.title}</h2>
              <img
                src={product.image.primary}
                alt={product.title}
                style={{ width: "200px", height: "200px", objectFit: "cover" }}
              />
              <p>Price: {product.price}</p>
              <p>Specs: {product.specification[0]}</p>
            </div>
          ))
        ) : (
          <p>Loading products...</p>
        )}
      </div>
    </div>
  );
};
