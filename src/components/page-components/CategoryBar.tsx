import { Link } from "react-router-dom";

export const CategoryBar = () => {
  const inputs = [
    {
      src: "https://firebasestorage.googleapis.com/v0/b/assets-e52f6.appspot.com/o/ecommerce-app%2Ficons%2FEarbuds_1.jpg?alt=media&token=7de7ef50-669f-4f39-86bd-6a6ed736b434",
      alt: "offer",
      width: "80px",
      title: "Offers",
      href: "/offer",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/assets-e52f6.appspot.com/o/ecommerce-app%2Ficons%2Fphone.jpg?alt=media&token=318191a7-a780-497a-a514-2cc72c0aab2b",
      alt: "phone",
      width: "60px",
      title: "Phones",
      href: "/phones",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/assets-e52f6.appspot.com/o/ecommerce-app%2Ficons%2Flaptop.jpg?alt=media&token=85264397-1c2d-42fd-a244-50442e0097d7",
      alt: "laptop",
      width: "120px",
      title: "Laptop",
      href: "/laptops",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/assets-e52f6.appspot.com/o/ecommerce-app%2Ficons%2Fsmart-watch.jpg?alt=media&token=496180b8-b53d-4b73-9fd8-3ef6e7d57f2f",
      alt: "smart-watch",
      width: "70px",
      title: "Watches",
      href: "/watches",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/assets-e52f6.appspot.com/o/ecommerce-app%2Ficons%2Fearbuds.jpg?alt=media&token=36c76f3e-d384-4bc3-b8d0-fc8ab716082d",
      alt: "earbuds",
      width: "85px",
      title: "Earbuds",
      href: "/earbuds",
    },
  ];

  return (
    <ul>
      <div className="flex gap-12 justify-between">
        {inputs.map((input, index) => (
          <Link to={input.href}>
            <li
              key={index}
              className="bg-pink-200 p-3 flex flex-col items-center rounded"
            >
              <img
                src={input.src}
                alt={input.alt}
                width={input.width}
                className="rounded"
              />
              <p className="text-center mt-2 mb-[-10px] font-bold">
                {input.title}
              </p>
            </li>
          </Link>
        ))}
      </div>
    </ul>
  );
};
