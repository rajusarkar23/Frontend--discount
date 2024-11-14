import { Link } from "react-router-dom";
import { User2 } from "lucide-react";
import Cookies from "js-cookie";
import { Input } from "@/components/ui/input";

export const SellerNavbar = () => {
  const token = Cookies.get("sessionToken");
  console.log(token);

  return (
    <nav className="bg-blue-400 h-12 shadow-lg">
      <div className="flex justify-between items-center px-12">
        <div>
          <Link to={"/seller/h"} className="font-bold text-2xl">
            @discount_seller
          </Link>
        </div>
        <div className="flex mt-1">
          <Input placeholder="Search...." className="w-64 bg-white" />
        </div>
        <div>
          <ul className="flex gap-4">
            <div>
              {token ? (
                <Link to={"/seller/dashboard"}>
                  <li className="bg-white text-center items-center rounded-full font-bold hover:bg-black hover:text-yellow-300 transition-all">
                    <User2 />
                  </li>
                </Link>
              ) : (
                <Link to={"/seller/login"}>
                  <li className="bg-white w-14 text-center items-center rounded font-bold hover:bg-black hover:text-yellow-300 transition-all">
                    Login
                  </li>
                </Link>
              )}
            </div>

          </ul>
        </div>
      </div>
    </nav>
  );
};
