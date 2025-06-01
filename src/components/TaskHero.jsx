import { Link } from "react-router-dom";
import { IoArrowForward } from "react-icons/io5";

export default function TaskHero(){
    return(
        <div className="relative w-full mt-10 md:mt-20 md:w-[85%] md:mx-auto ">
            <div className="font-sans text-center">
                <section>
                    <h1 className="text-black font-semibold text-2xl sm:text-3xl md:text-4xl ">
                        Manage and track your tasks with ease.
                    </h1>
                    <p className="text-black/70 text-sm font-normal px-8 mt-2 sm:px-36 sm:text-base">
                        Transform and optimize your process of task management. save time and improve efficiency
                    </p>
                    <div className="inline-flex space-x-3 items-center pt-4">
                        <Link to="/tasks">
                            <button className="inline-flex items-center px-3 py-1.5 border border-black/50 rounded-md cursor-pointer hover:bg-gray-200">
                                Get started <IoArrowForward className="size-4 ml-3  text-black/90"/>
                            </button>
                        </Link>
                        <Link to="/signup">
                            <button className="px-3 py-1.5 bg-violet-700 text-white rounded-md cursor-pointer hover:bg-violet-500">Signup</button>
                        </Link>    
                    </div>
                </section>
            </div>
        </div>
    )
}