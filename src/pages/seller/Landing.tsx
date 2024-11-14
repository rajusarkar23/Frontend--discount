import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="flex flex-col items-center justify-center py-24">
      <h1 className="text-2xl font-semibold">Sell with us to grow your business</h1>
      <Link to={"/seller/register"} className="mt-24 bg-yellow-300 text-xl font-bold w-48 h-10 flex items-center justify-center rounded">Register</Link>
    </div>
  );
};

export default Landing;
