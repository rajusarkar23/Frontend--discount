import { Link } from 'react-router-dom';
import { Input } from '../ui/input';
import {ShoppingCart } from 'lucide-react';

export const Navbar = () => {
  return (
   <nav className='bg-yellow-300 h-12 shadow-lg'>
    <div className='flex justify-between items-center px-12'>
        <div>
            <Link to={"/"} className='font-bold text-2xl'>@discout</Link>
        </div>
        <div className='flex mt-1'>
            <Input placeholder='Search....' className='w-64 bg-white'/>
        </div>
        <div>
            <ul className='flex gap-4'>
                <Link to={"/user/login"}><li className='bg-white w-14 text-center items-center rounded font-bold hover:bg-black hover:text-yellow-300 transition-all'>Login</li></Link>
                <Link to={"/cart"}>
                    <li className='flex bg-white w-16 text-center px-1 rounded hover:bg-black hover:text-yellow-300'><ShoppingCart/>  <span className='ml-1 font-bold'>Cart</span></li>
                </Link>
            </ul>
        </div>
    </div>
   </nav>
  );
};

