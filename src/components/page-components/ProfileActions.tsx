import { MapPinHouse, PackageCheck } from "lucide-react";
import { Link } from "react-router-dom";

export const ProfileActions = () => {
  return (
    <div className="flex items-center justify-center py-24 space-x-3">
      {/* manage orders */}
      <Link  to={"/user/orders"} className="bg-yellow-50 hover:bg-yellow-100 w-44 text-center h-20 flex items-center justify-center rounded-md font-semibold">
        <div>
          <span className="flex items-center justify-center gap-2">
            <PackageCheck />
          </span>
          Manage your orders
        </div>
      </Link>
      {/* manage address */}
      <Link to={"/user/manage-addresses"} className="bg-yellow-50 hover:bg-yellow-100 w-56 text-center h-20 flex items-center justify-center rounded-md font-semibold">
        <div>
          <span className="flex items-center justify-center gap-2">
            <MapPinHouse />
          </span>
          Manage your addresses
        </div>
      </Link>
    </div>
  );
};
