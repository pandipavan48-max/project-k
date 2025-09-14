import React from 'react'   
const NavBar = () => {
  return (
    <div className='flex justify-around items-center p-4 border-b-2 border-black'>
      
      <h1 className="font-bold ">BLOGVERSE</h1>
      <h1 className="text-gray-400 hover:bg-blue-500 px-5 py-2 rounded-lg cursor-pointer">HOME</h1>
      <div clasName="flex gap-6">
        <button className=" font-semibold text-gray-800 cursor-pointer"> SignIn </button>
        <button className=" bg-blue-600 text-white px-4 py-2 rounded-xl cursor-pointer "> SignUp</button>
        </div>
    </div>
     
  )
}
export default NavBar