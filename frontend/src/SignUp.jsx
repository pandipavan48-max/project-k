import React from "react";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import { UserRoundPen } from 'lucide-react';
import { UserLock } from 'lucide-react';
import { EyeOff } from 'lucide-react';
import { MailPlus } from 'lucide-react';
import { Eye } from 'lucide-react';
import { useState } from "react";




const SignUp = () => {

    const [formData, setformData] = useState({
        fullName: "",
        email: "",
        password: "",
        ConfirmPassword: ""

    })


    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')


    const handlePassword = () => {
        setShowPassword((password) => !password)
    }
    const handleConfirmPassword = () => {
        setShowConfirmPassword((ConfirmPassword) => !ConfirmPassword)
    }
    const handleChange = (event) => {
        setError("")
        setSuccess("")
        setformData((formData) => ({
            ...formData,
            [event.target.name]: event.target.value
        }))
    }
    const handleSubmit = (event) => {
        event.preventDefault()


        if (!formData.fullName || !formData.email || !formData.password || !formData.ConfirmPassword) {
            setError("please fill all the details")
        } else if (formData.password !== formData.ConfirmPassword) {
            setError("")
        } else {
            setSuccess(" Account created successfully")
            setformData({
                fullName: "",
                email: "",
                password: "",
                ConfirmPassword: ""
            })
        }

    }




    return (
        <div className="flex items-center flex-col  gap-5">
            <NavBar />
            <h1 className="text-2xl text-blue-600 font-bold gap-5 ">Join BlogVerse</h1>
            <p className="text-xl text-gray-600 text-center font-semibold">Create your account and <br></br>start your blogging journey today</p>
            <form onSubmit={handleSubmit} className="flex flex-col border-1 border-black w-1/3 p-7 items-center gap-5 mb-5">
                <div className="w-[90%] flex flex-col gap-2">
                    <p className="text-md text-gray-700 font-semibold">Full Name</p>
                    <input

                        value={formData.fullName}
                        onChange={handleChange}
                        name="fullName"
                        type="text" placeholder="Enter Your Full Name" className="border-1 border-gray-600 py-4 px-3  rounded-2xl focus:outline-none focus:border-purple-500">
                    </input>
                </div>
                <div className="w-[90%] flex flex-col gap-2">
                    <p className="text-md text-gray-700 font-semibold">E-Mail</p><div className="relative">
                        <input

                            value={formData.email}
                            onChange={handleChange}
                            name="email"
                            type="email"
                            placeholder="Enter Your E-Mail"
                            className="border-1 border-gray-600 py-4 px-3 w-[100%]  pl-12 rounded-2xl focus:outline-none focus:border-purple-500">
                        </input><MailPlus className="absolute top-5 ml-3" />
                    </div>
                </div>
                <div className="w-[90%] flex flex-col gap-2">
                    <p className="text-md text-gray-700 font-semibold"> Enter Your New Password</p> <div className="relative">
                        <input

                            value={formData.password}
                            onChange={handleChange}
                            name="password"
                            type={showPassword ? "password" : "text"} placeholder="Enter Your New Passwoord" className="border-1 border-gray-600 py-4 px-3   w-[100%]  pl-12 rounded-2xl focus:outline-none focus:border-purple-500">
                        </input> <UserLock className="absolute top-4 ml-3" /><p onClick={handlePassword}>{showPassword ? <Eye className=" absolute top-4 ml-3 right-4" /> : <EyeOff className=" absolute top-4 ml-3 right-4" />}</p></div>
                </div>
                <div className="w-[90%] flex flex-col gap-2">
                    <p className="text-md text-gray-700 font-semibold">Confirm Your New Password</p> <div className="relative">
                        <input
                            value={formData.ConfirmPassword}
                            onChange={handleChange}
                            name="ConfirmPassword"
                            type={showConfirmPassword ? "password" : "text"} placeholder="confirm Your New Passowrd" className="border-1 border-gray-600 py-4 px-3  w-[100%] pl-12  rounded-2xl focus:outline-none focus:border-purple-500">
                        </input><UserLock className="absolute top-4 ml-3" /><p onClick={handleConfirmPassword}>{showConfirmPassword ? <Eye className=" absolute top-4 ml-3 right-4" /> : <EyeOff className=" absolute top-4 ml-3 right-4" />}</p></div>
                </div>
                <div className="flex gap-2 border-1 border-gray-800 w-[90%] py-5 px-4 rounded-xl items-center justify-center">
                    <input type="checkbox" name="" id="" />
                    <p>I accept the Terms and Conditions </p>
                </div>
                {error && <p className="text-red-600">{error}</p>}
                {success && <p className="text-green-600">{success}</p>}
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