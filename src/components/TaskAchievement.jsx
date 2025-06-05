import { Link } from "react-router-dom";
import AchievementCard from "./AchievementCard";
import { FaChevronDown } from "react-icons/fa";
import { MdTimelapse } from "react-icons/md";
import { BiTask, BiTaskX } from "react-icons/bi";
import { BiRightTopArrowCircle} from "react-icons/bi";
import { useTaskContext } from "../contexts/taskContext";
import { MdRateReview} from "react-icons/md";
import ReviewRateCard from "./ReviewRateCard";


export default function TaskAchievement(){
    const {tasks} = useTaskContext();

    const completedTask = tasks.filter(task=> task.status === "completed");
    const incompleteTask = tasks.filter(task=> task.status === "incomplete");

    const completeCount = completedTask.length;
    const incompleteCount = incompleteTask.length;

    let completeRate;
    let incompleteRate;
    let completeNoun;
    let incompleteNoun;

    if(tasks.length===0){
        completeRate = 0;
    }
    else{
        completeRate = (completeCount/tasks.length)*100;
    }

    if(tasks.length === 0){
        incompleteRate = 0
    }
    else{
        incompleteRate = (incompleteCount/tasks.length)*100;
    }
    const completeRateValue = parseFloat(completeRate.toFixed(1))
    const incompleteRateValue = parseFloat(incompleteRate.toFixed(1))

    if(completeCount < 2){
        completeNoun = "task"
    }
    else if(completeCount > 1){
        completeNoun = "tasks"
    }
    if(incompleteCount < 2){
        incompleteNoun = "task"
    }
    else if(incompleteCount > 1){
        incompleteNoun = "tasks"
    }

    return(
        <div className="w-full font-sans border-2 border-gray-200 rounded-lg shadow-md p-3 pb-8 bg-white/15 hover:bg-gray-50">
            <div className="flex flex-col p-3">
                <div className="pb-3 border-b-2 border-b-gray-400 flex justify-between mb-3">
                    <div className="inline-flex items-center text-base font-medium text-black/90"> 
                        <MdTimelapse className="size-5 mr-1.5"/> Task Achievement 
                    </div>
                    <div className="inline-flex items-center px-3 py-1.5 rounded-md bg-violet-500 text-white/85 text-sm font-normal">
                        Status <FaChevronDown className="size-3 ml-2"/>
                    </div>
                </div>
                <div className="flex flex-col items-start gap-3 md:flex-row">
                    <AchievementCard status="Completed" count={`${completeCount} ${completeNoun}`}>
                        <BiTask className="size-5" />
                    </AchievementCard>
                    <AchievementCard status="Incomplete" count={`${incompleteCount} ${incompleteNoun}`}>
                        <BiTaskX className="size-5" />
                    </AchievementCard>
                    <ReviewRateCard rateTitle="Task Rate" taskCount={tasks.length} completeRate={completeRateValue} incompleteRate={incompleteRateValue}>
                        <MdRateReview className="size-5"/>
                    </ReviewRateCard>
                </div>
                <Link to="/tasks" className="p-2 mt-4 flex items-center text-white/80 justify-between bg-violet-900 rounded-lg cursor-pointer">
                    <span className="text-base font-medium">Clear pending Task</span>
                        <BiRightTopArrowCircle className="size-5"/>
                </Link>    
            </div>
        </div>
    )
}