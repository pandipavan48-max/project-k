import React from "react";


const SignUp = () => {
    return (
        <div className="flex items-center flex-col mt-10 gap-5">
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
                    <p className="text-md text-gray-700 font-semibold">Enter Your New Password</p>
                    <input type="text" placeholder="Enter Your New Passwoord" className="border-1 border-gray-600 py-4 px-3  rounded-2xl focus:outline-none focus:border-purple-500">
                    </input>
                </div>
                <div className="w-[90%] flex flex-col gap-2">
                    <p className="text-md text-gray-700 font-semibold">Confirm Your New Password</p>
                    <input type="text" placeholder="confirm Your New Passowrd" className="border-1 border-gray-600 py-4 px-3  rounded-2xl focus:outline-none focus:border-purple-500">
                    </input>
                </div>
                <div className="flex gap-2 border-1 border-gray-800 w-[90%] py-5 px-4 rounded-xl items-center justify-center">
                    <input type="checkbox" name="" id="" />
                    <p>I agree to the Terms of service and Privacy Policy</p>
                </div>
                <button className="w-[90%] bg-purple-500 py-4 text-white rounded xl font-semibold">Create Account</button>
                <p className="text-gray-700 font-semibold">Already have an Account?
                    <span className="text-purple-500 font-semibold ">Sign In Here</span>
                </p>
                <button className="text-gray-700 font-semibold hover:bg-gray-200 px-4 w-[90%] rounded-xl cursor-pointer">Back to Home</button>
            </form>

        </div>
    )
}

export default SignUp