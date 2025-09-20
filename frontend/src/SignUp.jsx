import React from "react";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import { UserRoundPen } from 'lucide-react';    
import { UserLock } from 'lucide-react';
import { EyeOff } from 'lucide-react';
import { MailOpen } from 'lucide-react';



const SignUp = () => {
    return (
        <div className="flex items-center flex-col  gap-5">
            <NavBar/>
            <h1 className="text-2xl text-blue-600 font-bold gap-5 ">Join BlogVerse</h1>
            <p className="text-xl text-gray-600 text-center font-semibold">Create your account and <br></br>start your blogging journey today</p>
            <form className="flex flex-col border-1 border-black w-1/3 p-7 items-center gap-5 mb-5">
                <div className="w-[90%] flex flex-col gap-2">
                    <p className="text-md text-gray-700 font-semibold">Full Name</p>
                    <input type="text" placeholder="Enter Your Full Name" className="border-1 border-gray-600 py-4 px-3  rounded-2xl focus:outline-none focus:border-purple-500">
                    </input>
                </div>
                <div className="w-[90%] flex flex-col gap-2">
                    <p className="text-md text-gray-700 font-semibold">E-Mail</p>
                    <input type="text" placeholder="Enter Your E-Mail" className="border-1 border-gray-600 py-4 px-3  rounded-2xl focus:outline-none focus:border-purple-500">
                    </input>
                </div>
                <div className="w-[90%] flex flex-col gap-2">
                    <p className="text-md text-gray-700 font-semibold"> Enter Your New Password</p> <div className="relative">
                    <input type="text" placeholder="Enter Your New Passwoord" className="border-1 border-gray-600 py-4 px-3   w-[100%]  pl-12 rounded-2xl focus:outline-none focus:border-purple-500">
                    </input> <UserLock className="absolute top-4 ml-3" /></div>
                </div>
                <div className="w-[90%] flex flex-col gap-2">
                    <p className="text-md text-gray-700 font-semibold">Confirm Your New Password</p> <div className="relative">
                    <input type="text" placeholder="confirm Your New Passowrd" className="border-1 border-gray-600 py-4 px-3  w-[100%]  rounded-2xl focus:outline-none focus:border-purple-500">
                    </input>  <EyeOff className=" absolute top-4 ml-3 right-4" /></div>
                </div>
                <div className="flex gap-2 border-1 border-gray-800 w-[90%] py-5 px-4 rounded-xl items-center justify-center">
                    <input type="checkbox" name="" id="" />
                    <p>I agree to the Terms of service and Privacy Policy</p>
                </div>
                <button className="w-[90%] bg-purple-500 py-4 text-white rounded xl font-semibold flex justify-center gap-5"> <UserRoundPen /><p>Create Account</p></button>
                <p className="text-gray-700 font-semibold">Already have an Account?
                    <Link to="/signin" className="text-purple-500 font-semibold ">Sign In Here</Link>
                </p>
                <Link to="/Home" className="text-gray-700 font-semibold hover:bg-gray-200 px-4 w-[90%] rounded-xl cursor-pointer text-center">Back to Home</Link>
            </form>

        </div>
    )
}

export default SignUp