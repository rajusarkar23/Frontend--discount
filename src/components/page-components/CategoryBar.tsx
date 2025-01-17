import { Link } from "react-router-dom";

export const CategoryBar = () => {
  const inputs = [
    {
      src: "https://firebasestorage.googleapis.com/v0/b/assets-e52f6.appspot.com/o/ecommerce-app%2Ficons%2FOffers_1.jpg?alt=media&token=b6f218e5-c176-420a-a78c-d86093cbdf60",
      alt: "offer",
      width: "85px",
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
      src: "https://firebasestorage.googleapis.com/v0/b/assets-e52f6.appspot.com/o/ecommerce-app%2Ficons%2Flaptop_1.jpg?alt=media&token=a26abf2b-879b-4932-8f53-e98efea0d30d",
      alt: "laptop",
      width: "85px",
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
      src: "https://firebasestorage.googleapis.com/v0/b/assets-e52f6.appspot.com/o/ecommerce-app%2Ficons%2FEarbuds_1.jpg?alt=media&token=7de7ef50-669f-4f39-86bd-6a6ed736b434",
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
              className="bg-yellow-400 p-3 flex flex-col items-center rounded"
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
