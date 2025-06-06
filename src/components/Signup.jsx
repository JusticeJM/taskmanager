import { Link } from "react-router-dom";

export default function Signup(){
    return(
        <div className="w-full bg-white font-sans">
            <div className="p-6 flex items-center justify-between font-sans mb-7">
                <Link to="/" className="text-violet-900 font-semibold text-xl">muliTASK</Link>
                <div className="inline-flex space-x-2 text-sm font-normal text-black/70">
                    <span>Already have an account?</span>
                    <Link to="/login" className="text-violet-700  font-medium cursor-pointer hover:text-violet-900 hover:underline hover:underline-offset-4">
                        Login
                    </Link>
                </div>
            </div>
            <div className="flex flex-col items-center justify-between">
                <span className="text-3xl font-bold mb-3">Create a new account</span>
                <form action="" className="border-2 border-gray-200 w-[380px] mx-auto rounded-lg px-4 py-10 shadow-xl mb-4">
                    <div className="mb-3">
                        <label htmlFor="fullname" className="block text-sm font-normal text-black/95 mb-1">
                            Full Name
                        </label>
                        <input className="block w-full p-1.5 border border-gray-300 rounded-md focus:border-violet-500 focus:outline focus:outline-violet-500"
                            type="text" 
                            name="fullname" 
                            id="fullname"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="block text-sm font-normal text-black/95 mb-1">
                            Email
                        </label>
                        <input className="block w-full p-1.5 border border-gray-300 rounded-md focus:border-violet-500 focus:outline focus:outline-violet-500"
                            type="email" 
                            name="email" 
                            id="email" 
                        />    
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-sm font-normal text-black/95 mb-1">
                            Password
                        </label>
                        <input className="block w-full p-1.5 border border-gray-300 rounded-md focus:border-violet-500 focus:outline focus:outline-violet-500"
                            type="password" 
                            name="password" 
                            id="password" 
                        />
                    </div>
                    <button className="px-3 py-1.5 bg-violet-800 text-white text-base text-medium block w-full rounded-lg cursor-pointer hover:bg-violet-600">
                        Create account
                    </button>
                </form>
                <div className="text-sm px-8 text-center">
                    <span className=" font-normal text-black/90 mr-1">By clicking create account, you agree to accept our</span>
                    <Link className="text-violet-700  font-normal cursor-pointer hover:text-violet-900 hover:underline hover:underline-offset-4">Terms and conditions</Link>
                </div>
            </div>
            
        </div>
    )
}