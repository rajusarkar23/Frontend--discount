import { AddProducts } from "@/components/page-components/seller/AddProducts";
import { ShowListedProducts } from "@/components/page-components/seller/ShowListedProducts";

const Dashboard = () => {
  return (
    <div className="flex flex-col space-y-4 justify-center items-center pt-10">
      <div>
        <ShowListedProducts />
      </div>
      <div>
        <AddProducts />
      </div>
    </div>
  );
};

export default Dashboard;
