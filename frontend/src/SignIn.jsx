import React from "react";
import NavBar from "./NavBar.jsx";
import { Link } from "react-router-dom";
import { MailPlus } from 'lucide-react';
import { Eye } from 'lucide-react';
import { UserLock } from 'lucide-react';

const SignIn = () => {
    return (
        <div className="flex items-center  flex-col justify-center mt-10 gap-5  rounded-e-xs">
            <NavBar />
            <div className="w-[90%] flex flex-col justify-center items-center  gap-2">
                <form className="flex flex-col justify-center border-1 border-black w-[90%] md:w-1/3 p-9 items-center gap-5 mb-5">
                    <div className="w-[90%]  flex flex-col gap-2">
                        <h1 className="text-2xl text-black-600 justify-center items-center text-center font-bold gap-5 ">Sign In</h1>
                        <p className="text-xl text-gray-600 text-center  justify-center items-center  font-semibold flex">Access Your Account</p>
                        <p className="text-md text-black font-semibold"> Email-Address</p>
                        <div className="relative  w-full">
                            <input type="text" placeholder="Enter your Email" className="border-1 border-x-black-600 py-4 px-3 w-[100%] pl-12 rounded-2xl focus:outline-none focus:border-blue-500">
                            </input>  <MailPlus className="absolute top-5 ml-3" />
                        </div>
                        <p className="text-md text-black font-semibold">Password</p>
                        <div className="relative">
                            <input type="text" placeholder="Enter your Password" className="border-1 border-gray-600 py-4 px-3 w-[100%]  pl-12 rounded-2xl focus:outline-none focus:border-blue-500">
                            </input> <UserLock className="absolute top-4 ml-3" /> <Eye className="absolute top-5 ml-2 right-5" />
                        </div>
                    </div>
                    <div className="flex gap-2 w-[90%] py-5 px-4 rounded-xl justify-between">
                        <div className="flex gap-2">
                            <input type="checkbox" name="" id="" />
                            <p className="text-md text-black-600 font-semibold">Remember Me</p>
                        </div>
                        <p className="flex justify-items-end text-blue-700 font-bold">Forget Paswword?</p>
                    </div>
                    <button className="w-[90%] bg-blue-500 py-4 text-white rounded xl font-semibold">Sign In</button>
                    <p className="text-gray-700 font-semibold">Don't have an Account?
                        <Link to="/signup" className="text-blue-700 font-semibold ">Create one Here</Link>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default SignIn

