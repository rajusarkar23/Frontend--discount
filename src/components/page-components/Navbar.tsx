import { Link } from "react-router-dom";
import { Input } from "../ui/input";
import { ShoppingCart, User2 } from "lucide-react";
import Cookies from "js-cookie";

export const Navbar = () => {
  const token = Cookies.get("sessionToken");
  console.log(token);

  return (
    <nav className="bg-yellow-300 h-12 shadow-lg">
      <div className="flex justify-between items-center px-12">
        <div>
          <Link to={"/"} className="font-bold text-2xl">
            @discount
          </Link>
        </div>
        <div className="flex mt-1">
          <Input placeholder="Search...." className="w-64 bg-white" />
        </div>
        <div>
          <ul className="flex gap-4">
            <div>
              {token ? (
                <Link to={"/user/profile"}>
                  <li className="bg-white text-center items-center rounded-full font-bold hover:bg-black hover:text-yellow-300 transition-all">
                    <User2 />
                  </li>
                </Link>
              ) : (
                <Link to={"/user/login"}>
                  <li className="bg-white w-14 text-center items-center rounded font-bold hover:bg-black hover:text-yellow-300 transition-all">
                    Login
                  </li>
                </Link>
              )}
            </div>

            <Link to={"/cart"}>
              <li className="flex bg-white w-16 text-center px-1 rounded hover:bg-black hover:text-yellow-300">
                <ShoppingCart /> <span className="ml-1 font-bold">Cart</span>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};
