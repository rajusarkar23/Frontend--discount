import { Link } from "react-router-dom"
import { Button } from "../ui/button"
import { Input } from "../ui/input"

export const RegisterForm = () => {
    return (
        <form>
        <div className="flex flex-col justify-center items-center     py-80 space-y-3">
          <h2 className="text-3xl font-bold">Login</h2>
          <div>
          <label className="flex">Full name</label>
            <Input
              type="text"
              placeholder="Enter full name"
              className="w-96 focus:border-none transition-all"
            />
          </div>
          <div>
            <label className="flex">Email</label>
            <Input
              type="email"
              placeholder="Email"
              className="w-96 focus:border-none transition-all"
            />
          </div>
          <div>
            <label className="flex">Password</label>
            <Input
              type="password"
              placeholder="Password"
              className="w-96 focus:border-none transition-all"
            />
          </div>
          <Button className="w-96 hover:text-yellow-300">Login</Button>
          <div className="flex">
              <Link to={"/user/login"}>
              
            <h2 className="font-bold text-blue-500">
              Already have an account? Login
            </h2>
              </Link>
          </div>
        </div>
      </form>
    )
}