import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";

export default function SideMenu({hideSideMenu}){
    return(
        <div>
            <div className="font-sans fixed top-0 left-0 w-full h-screen z-40 overflow-y-auto bg-white/90 lg:hidden">
                <nav className="">
                    <div className="flex items-center justify-between p-3">
                        <div>
                            <Link to="/" className="text-violet-900 font-semibold text-xl">
                                muliTASK
                            </Link>
                        </div>
                        <button className=" flex item-center justify-center w-7 p-0.5 bg-gray-50 hover:bg-gray-100 rounded-md lg:hidden" onClick={hideSideMenu}>
                            <MdClose className="size-5"/>
                        </button>
                    </div>
                    <div className="mt-3 text-base w-[90%] mx-auto">
                        <Link to="/tasks" className=" block w-full px-2 py-1 rounded-md hover:bg-gray-200">Tasks </Link>  
                        <Link to="/analytics" className=" block w-full px-2 py-1 rounded-md hover:bg-gray-200">Analytics</Link>
                        <div className="mt-4">
                            <Link to="/signup" className="">
                                <button className="block w-full px-3 py-1.5 bg-violet-700 text-white rounded-md cursor-pointer hover:bg-violet-500">
                                    Signup
                                </button>
                            </Link>
                            <Link to="/login">
                                <button className="block w-full my-1 px-3 py-1.5 border border-black/10 rounded-md cursor-pointer hover:bg-gray-100">
                                    Login
                                </button>
                            </Link>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}