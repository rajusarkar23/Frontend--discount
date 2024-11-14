import { AddProducts } from "@/components/page-components/seller/AddProducts";

const Dashboard = () => {
  return (
    <div className="flex flex-col space-y-4 justify-center items-center pt-10">
      <div>View listed products</div>
      <div>
        <AddProducts />
      </div>
    </div>
  );
};

export default Dashboard;
