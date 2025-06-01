import TaskRightCard from "./TaskRightCard";
import { FaChevronDown } from "react-icons/fa";
import { MdTimelapse } from "react-icons/md";
import { RiHomeOfficeLine } from "react-icons/ri";
import { BsPeople, BsPerson } from "react-icons/bs";
import { BiRightTopArrowCircle} from "react-icons/bi";

export default function TaskStatsTwo(){
    return(
        <div className="w-full pb-4 font-sans border border-gray-200 rounded-lg shadow-lg bg-white/50 hover:bg-violet-50 lg:max-w-md">
            <div className="flex flex-col p-3">
                <div className="pb-3 border-b-2 border-b-gray-400 flex justify-between mb-3">
                    <div className="inline-flex items-center text-base font-medium text-black/90"> 
                        <MdTimelapse className="size-5 mr-1.5"/> Task Summary 
                    </div>
                    <div className="inline-flex items-center px-3 py-1.5 rounded-md bg-violet-500 text-white/85 font-normal">
                        Category <FaChevronDown className="size-3 ml-2"/>
                    </div>
                </div>
                <div className="flex flex-col gap-2 my-3 md:flex-row">
                    <TaskRightCard cardDetail="Personal" stats="10 tasks">
                        <BsPerson className="size-5"/>
                    </TaskRightCard>
                    <TaskRightCard cardDetail="Family" stats="15 tasks">
                        <BsPeople className="size-5"/>                    
                    </TaskRightCard>
                    <TaskRightCard cardDetail="Office" stats="13 tasks">
                        <RiHomeOfficeLine className="size-5"/>
                    </TaskRightCard>
                </div>
                <div className="p-2 mt-4 flex items-center text-white/80 justify-between bg-violet-900 rounded-lg">
                    <span className="text-base font-medium">Increase your rate </span>
                    <BiRightTopArrowCircle className="size-5"/>
                </div>    
            </div>
        </div>
    )
}