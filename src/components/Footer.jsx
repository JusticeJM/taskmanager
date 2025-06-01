import { Link } from "react-router-dom";
import { CgCopyright } from "react-icons/cg";

export default function Footer(){
    return(
        <div className="w-full px-3 mt-9 border-t border-t-gray-300 font-sans lg:max-w-6xl lg:mx-auto lg:px-0">
            <footer className="flex items-center justify-between py-2">
                <div className="inline-flex items-center space-x-1 text-sm">
                    <CgCopyright className="size-5"/>2025 
                    <span className="text-sm font-normal text-black/80 ml-0.5"> All rights reserved</span>
                </div>
                <div>
                    <Link to="/" className="text-violet-900 font-semibold text-lg">muliTASK</Link>
                </div>
                <div className="hidden md:inline-flex md:space-x-2">
                    <Link to="/tasks" className="px-3 py-1 rounded-md hover:bg-gray-200">Tasks</Link>
                    <Link to="/analytics"className="px-3 py-1 rounded-md hover:bg-gray-200">Analytics</Link>
                </div>
            </footer>
        </div>
    )
}