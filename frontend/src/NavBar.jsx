import React from 'react'
import {Link} from "react-router-dom"
const NavBar = () => {
  return (
    <div className='w-full flex justify-around items-center p-4 border-b-2 border-black'>

      <h1 className="font-bold ">BLOGVERSE</h1>
      <Link to="/home" className="text-gray-400 hover:bg-blue-500 px-5 py-2 rounded-lg cursor-pointer">HOME</Link>
      <div className='flex gap-6'>
        <Link  to= "/signin" className=" font-semibold text-gray-800 cursor-pointer"> SignIn </Link>
        <Link to= "/signup" className=" bg-blue-600 text-white px-4 py-2 rounded-xl cursor-pointer "> SignUp</Link>
      </div>
    </div>

  )
}
export default NavBar