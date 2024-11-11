import { Link } from "react-router-dom"

const Landing = () => {
  return (
    <>
        <h1>Sell with us</h1>
        <Link to={"/seller/register"}>Register</Link>
    </>
  )
}

export default Landing