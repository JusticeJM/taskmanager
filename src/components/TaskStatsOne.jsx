import { FaChevronDown } from "react-icons/fa";
import TaskLeftCard from "./TaskLeftCard";
import { BiRightTopArrowCircle} from "react-icons/bi";
import { BiTask, BiBell} from "react-icons/bi";

export default function TaskStatsOne(){
    return(
        <div className="w-full bg-white/50 border border-gray-200 text-black p-3 rounded-xl font-sans shadow-md hover:bg-violet-50 pb-5 lg:max-w-md">
            <div className="flex flex-col">
                <div className="flex items-center justify-between mb-5 border-b border-b-gray-300 pb-3">
                    <span className="text-xl font-medium">Stats</span>
                    <button className="px-3 py-1.5 bg-violet-500 inline-flex items-center rounded-md text-sm text-white/95">
                        All task <FaChevronDown className="size-3 ml-2"/>
                    </button>
                </div>
                <div className="flex flex-col mb-4">
                    <span className="text-sm font-medium text-black/70">Accomplishment</span>
                    <span className=" text 2xl md:text-3xl font-semibold">75 tasks</span>
                    <span className="text-base font-medium text-violet-800">65%</span>
                </div>
                <div className="flex justify-between gap-3 mb-6">
                    <TaskLeftCard cardDetails="100 tasks" duration="1 month ago">
                        <BiTask className="size-4"/>
                    </TaskLeftCard>
                    <TaskLeftCard cardDetails="10 notifications" duration="5 days ago">
                        <BiBell className="size-5"/>
                    </TaskLeftCard>
                </div>
                <button className="px-4 py-2 bg-violet-900 inline-flex items-center text-white/80 text-base font-medium rounded-lg">
                    Clear pending <BiRightTopArrowCircle className="size-5 ml-20 lg:ml-50"/> 
                </button>
            </div>
        </div>
    )
}