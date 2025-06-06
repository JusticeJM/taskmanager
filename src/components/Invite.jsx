import { Link } from "react-router-dom";
import { IoArrowForward } from "react-icons/io5";

export default function Invite(){
    return(
        <div className="w-[90%] mx-auto mt-18 bg-violet-100 rounded-lg py-10 md:mt-40 md:mb-20">
            <section className="font-sans text-center">
                <div>
                    <h4 className="text-black text-2xl font-semibold">
                        Open your account today and enjoy !
                    </h4 >
                    <p className="text-black/70 text-sm font-normal mt-3 px-3 md:text-base">
                        Increase your productivity and boost your efficiency with us
                    </p>
                </div>
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
    )
}