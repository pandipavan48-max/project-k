import React from 'react'
import NavBar from './NavBar'
import { Link } from 'react-router-dom'
import { CircleUser } from 'lucide-react';
import { LockKeyhole } from 'lucide-react';
import { Mail } from 'lucide-react';
import { FolderPen } from 'lucide-react';
import { Eye } from 'lucide-react';
import { EyeOff } from 'lucide-react';
import { useState } from 'react';


const SignUp = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: ""

    })
    const [errors, setErrors] = useState({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const handleSubmit = (event) => {
        event.preventDefault();
        let newErrors = {}
        if (!formData.fullName) {
            newErrors.fullName = "Please enter your full name"
        }
        if (!formData.email) {
            newErrors.email = "Please enter your email"
        }
        if (!formData.password) {
            newErrors.password = "Please enter your password"
        }
        if (!formData.confirmPassword) {
            newErrors.confirmPassword = "Please confirm your password"
        } else if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = "Passwords are mismatched"
        }
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            setSuccess("Account Created Sucessfully")
        }
        setFormData({
            fullName: "",
            email: "",
            password: "",
            confirmPassword: ""
        })
        // if(!formData.fullName || !formData.email || !formData.password || !formData.confirmPassword){
        //     setError("Please fill all the required fields")
        // }else if(formData.password !== formData.confirmPassword){
        //     setError("Your passwords are mismatched")
        // }else{
        //     setSuccess("Account Created Successfully")
        //     setError("")
        //     setFormData({
        //         fullName:"",
        //         email:"",
        //         password:"",
        //         confirmPassword:""
        //     })
        // }
    }
    const handlePassword = () => {
        setShowPassword((password) => !password);
    }
    const handleConfirmPassword = () => {
        setShowConfirmPassword((password) => !password);
    }
    const handleChange = (event) => {
        setError("")
        setSuccess("")
        setFormData((formData) => ({
            ...formData,
            [event.target.name]: event.target.value
        }))

    }
    return (
        <>

            <div className="flex items-center flex-col  gap-5">
                <NavBar />
                <h1 className="text-2xl text-blue-600 font-bold">Join BlogVerse</h1>
                <p className="text-xl text-gray-600 text-center font-semibold">Create your account and <br></br>start your Blogging journey today</p>
                <form onSubmit={handleSubmit} className=" flex flex-col border-1 border-gray-400 w-[90%] md:w-1/3 py-5 items-center gap-5 rounded-xl">
                    <div className="w-[90%]  flex flex-col gap-2">
                        <p className="text-md text-gray-700 font-semibold">Full Name</p>
                        <div className='relative'>
                            <input
                                value={formData.fullName}
                                onChange={handleChange}
                                type="text" name="fullName"
                                placeholder="Enter your Full Name"
                                className=" pl-12 border-1 border-gray-700 w-full items-center py-2 px-1 rounded-xl focus:outline-none focus:border-purple-500" />
                            <FolderPen className="absolute top-2 left-3 stroke-gray-500" />

                        </div>
                        {errors.fullName && <p className="text-red-500">{errors.fullName}</p>}
                    </div>
                    <div className="w-[90%]  flex flex-col gap-2">
                        <p className="text-md text-gray-700 font-semibold">E-mail</p>
                        <div className='relative'>
                            <input
                                value={formData.email}
                                onChange={handleChange}
                                type="email" name="email"
                                placeholder="Enter your E-mail"
                                className=" pl-12 border-1 border-gray-700 w-full items-center py-2 px-1 rounded-xl focus:outline-none focus:border-purple-500" />
                            <Mail className="absolute top-2 left-3  stroke-gray-500" />

                        </div>
                        {errors.email && <p className="text-red-500">{errors.email}</p>}
                    </div>
                    <div className="w-[90%]  flex flex-col gap-2">
                        <p className="text-md text-gray-700 font-semibold">Password</p>
                        <div className='relative'>
                            <input
                                value={formData.password}
                                onChange={handleChange}
                                type={showPassword ? "text" : "password"}
                                name="password"
                                placeholder="Enter your password"
                                className=" pl-12 border-1 border-gray-700 w-full items-center py-2 px-1 rounded-xl focus:outline-none focus:border-purple-500" />
                            <LockKeyhole className="absolute top-2 left-3  stroke-gray-500" />
                            <p onClick={handlePassword}>{showPassword ? <Eye className='absolute right-3 top-2 stroke-gray-500' /> : <EyeOff className="absolute right-3 top-2 stroke-gray-500" />}</p>
                        </div>
                        {errors.password && <p className="text-red-500">{errors.password}</p>}
                    </div>
                    <div className="w-[90%]  flex flex-col gap-2">
                        <p className="text-md text-gray-700 font-semibold">Confirm Password</p>
                        <div className='relative'>
                            <input
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                type={showConfirmPassword ? "text" : "password"}
                                name="confirmPassword"
                                placeholder="Confirm your password"
                                className="pl-12 border-1 border-gray-700 w-full items-center py-2 px-1 rounded-xl focus:outline-none focus:border-purple-500" />
                            <LockKeyhole className="absolute top-2 left-3  stroke-gray-500" />
                            <p onClick={handleConfirmPassword}>{showConfirmPassword ? <Eye className='absolute right-3 top-2 stroke-gray-500' /> : <EyeOff className="absolute right-3 top-2 stroke-gray-500" />}</p>
                        </div>
                        {errors.confirmPassword && <p className="text-red-500">{errors.confirmPassword}</p>}
                    </div>
                    <div className="flex gap-2 border-1 border-gray-800 w-[90%] py-2 px-4 rounded-xl items-center justify-center">
                        <input type="checkbox" name="" id="" className="h-5 w-5" />
                        <p>I agree to the Terms of Service and Privacy Policy</p>
                    </div>
                    {error && <p class="text-red-500">{error}</p>}
                    {success && <p class="text-green-500">{success}</p>}
                    <button type="submit" className="w-[90%] bg-purple-500 py-3 text-white font-semibold rounded-xl cursor-pointer flex justify-center items-center gap-2"> <CircleUser className="" /> <p>Create Account</p></button>
                    <div className="border-[0.5px] border-gray-400 w-[90%] mt-4"></div>
                    <p className="text-gray-700 font-semibold">Aldready have an Account?<Link to="/signin" className="text-purple-500 font-semibold">Sign In Here</Link></p>
                    <Link to="/home" className="text-gray-700 font-semibold py-3 w-[90%] rounded-xl cursor-pointer text-center hover:bg-gray-200">Back to Home</Link>
                </form>
            </div>
        </>
    )
}
export default SignUp