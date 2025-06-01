import TaskRightCard from "./TaskRightCard";
import { FaChevronDown } from "react-icons/fa";
import { MdTimelapse } from "react-icons/md";
import { RiHomeOfficeLine } from "react-icons/ri";
import { BsPeople, BsPerson } from "react-icons/bs";
import { BiRightTopArrowCircle} from "react-icons/bi";
import { useTaskContext } from "../contexts/taskContext";

export default function TaskSummary(){
    const {tasks} = useTaskContext();

    const personalCategory = tasks.filter(task=> task.category === "personal");
    const familyCategory = tasks.filter(task=> task.category === "family");
    const officeCategory = tasks.filter(task=> task.category === "office");

    const personalCount = personalCategory.length;
    const familyCount = familyCategory.length;
    const officeCount = officeCategory.length;

    let personalNoun;
    let familyNoun;
    let officeNoun;
    if(personalCount < 2){
        personalNoun = "task"
    }
    else if(personalCount > 1){
        personalNoun = "tasks"
    }
    if(familyCount < 2){
        familyNoun = "task"
    }
    else if(familyCount > 1){
        familyNoun = "tasks"
    }
    if(officeCount < 2){
        officeNoun = "task"
    }
    else if(officeCount > 1){
        officeNoun = "tasks"
    }
    
    return(
        <div className="w-full font-sans border-2 border-gray-200 rounded-lg shadow-md p-3 pb-8 bg-white/15 hover:bg-gray-50">
            <div className="flex flex-col p-3">
                <div className="pb-3 border-b-2 border-b-gray-400 flex justify-between mb-3">
                    <div className="inline-flex items-center text-base font-medium text-black/90"> 
                        <MdTimelapse className="size-5 mr-1.5"/> Task Summary 
                    </div>
                    <div className="inline-flex items-center px-3 py-1.5 rounded-md bg-violet-500 text-white/85 text-sm font-normal">
                        Category <FaChevronDown className="size-3 ml-2"/>
                    </div>
                </div>
                <div className="flex flex-col gap-2 my-3 md:flex-row">
                    <TaskRightCard cardDetail="Personal" stats={`${personalCount} ${personalNoun}`}>
                        <BsPerson className="size-5"/>
                    </TaskRightCard>
                    <TaskRightCard cardDetail="Family" stats={`${familyCount} ${familyNoun}`}>
                        <BsPeople className="size-5"/>                    
                    </TaskRightCard>
                    <TaskRightCard cardDetail="Office" stats={`${officeCount} ${officeNoun}`}>
                        <RiHomeOfficeLine className="size-5"/>
                    </TaskRightCard>
                </div>    
            </div>
        </div>
            
    )
}