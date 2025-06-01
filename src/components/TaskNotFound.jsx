import tasktime from "../assets/tasktime.jpg";
import { IoFlash } from "react-icons/io5";

export default function TaskNotFound({displayTaskForm}){
    return(
        <div className="w-full px-3 font-sans sm:max-w-lg sm:mx-auto" >
            <div className="w-[65%] mx-auto">
                <img src={tasktime} alt="Manage tasks" className="aspect-1/1 rounded-full object-center object-cover overflow-hidden"/>
            </div>
            <div className="flex flex-col">
                <h5 className="text-black/95 font-semibold text-xl text-left mb-3  md:text-center md:text-2xl ">
                    Start managing your tasks and stay organized.
                </h5>
                <div className="inline-flex items-left text-sm font-normal text-black/80 mb-1 md:text-base">
                    <IoFlash className="size-5 p-0.5 rounded-full bg-gray-100 mr-2"/> Categorize tasks and track your preferences
                </div>
                <div className="inline-flex items-left text-sm font-normal text-black/80 md:text-base"> 
                    <IoFlash className="size-5 p-0.5 rounded-full bg-gray-100 mr-2"/> Keep track of your accomplishment and boost your productivity
                </div>
            </div>
            <div className="my-5 w-32 md:w-48">
                <button onClick={displayTaskForm} className="px-4 py-2 bg-violet-800 text-white text-base text-medium block w-full rounded-lg cursor-pointer hover:bg-violet-600">
                    Create Task
                </button>
            </div>
        </div>
    )
}