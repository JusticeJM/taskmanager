import { useState } from "react";
import { Link } from "react-router-dom";
import { MdMenu } from "react-icons/md";
import SideMenu from "./SideMenu";

export default function NavBar(){
    const [showSideMenu, setShowSideMenu] = useState(false)

    const displaySideMenu = () =>{
        setShowSideMenu(true);
    }
    const hideSideMenu = () =>{
        setShowSideMenu(false);
    }

    return(
        <div className="font-sans w-full">
            <div className=" pt-0 lg:pt-2">
                <nav className="flex items-center justify-between p-3 bg-gray-50 border-b border-b-gray-200 lg:max-w-5xl lg:mx-auto lg:border lg:border-gray-200 lg:rounded-lg">
                    <div>
                        <Link to="/" className="text-violet-900 font-semibold text-xl">
                            muliTASK
                        </Link>
                    </div>
                    <button className=" flex items-center justify-center w-7 p-0.5 bg-gray-50 hover:bg-gray-100 lg:hidden" onClick={displaySideMenu}>
                        <MdMenu className="size-5"/>
                    </button>
                    <div className="hidden text-base font-medium text-black/70 lg:inline-flex lg:items-center lg:space-x-3 ">
                        <Link to="/tasks" className="px-2 py-1 rounded-md hover:bg-gray-200">Tasks </Link>  
                        <Link to="/analytics" className="px-2 py-1 rounded-md hover:bg-gray-200">Analytics</Link>
                    </div>
                    <div className="hidden lg:inline-flex lg:space-x-4">
                        <Link to="/login">
                            <button className="px-3 py-1.5 border border-black/50 rounded-md cursor-pointer hover:bg-gray-200">
                                Login
                            </button>
                        </Link>
                        <Link to="/signup">
                            <button className="px-3 py-1.5 bg-violet-700 text-white rounded-md cursor-pointer hover:bg-violet-500">
                                Signup
                            </button>
                        </Link>
                    </div>
                </nav>
                {
                    showSideMenu && <SideMenu hideSideMenu={hideSideMenu}/>
                }
            </div>
        </div>
    )
}