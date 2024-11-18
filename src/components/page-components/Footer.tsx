import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-black text-yellow-400 p-6 fixed bottom-0 w-full">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div className="text-center md:text-left">
          <h2 className="text-lg font-semibold">
            <Link to={"/"}>@discount</Link>
          </h2>
          <p className="text-sm">© 2024 @discount. All rights reserved.</p>
        </div>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="hover:text-yellow-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/shop" className="hover:text-yellow-300">
              Shop
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-yellow-300">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-yellow-300">
              Contact
            </Link>
          </li>
          <li>
            <Link to={"/seller/h"}>Sell with us</Link>
          </li>
        </ul>
        <div className="text-center md:text-right">
          <p className="text-sm">Follow us on:</p>
          <div className="flex space-x-2">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-300"
            >
              Facebook
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-300"
            >
              Twitter
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-300"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
