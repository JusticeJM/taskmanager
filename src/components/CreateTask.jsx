import { useTaskContext } from "../contexts/taskContext"
import { CgMenuBoxed} from "react-icons/cg";
export default function CreateTask({displayTaskForm}){
    const {tasks} = useTaskContext();
    let taskNoun;
    const taskInitialNoun = "No task";
    
    if(tasks.length === 1){
        taskNoun = "task"
    }
    if(tasks.length > 1){
        taskNoun = "tasks"
    }

    return(
        <div className="w-full px-3 flex items-center justify-between font-sans my-12 pb-3 border-b border-b-gray-200 lg:max-w-5xl lg:mx-auto">
            <div className="hidden text-violet-950 text-xl font-semibold md:inline-flex">Manage task now..!</div>
            <div className="text-base font-medium inline-flex items-center">
                <CgMenuBoxed className="size-6 text-violet-800 mr-1 bg-violet-200 p-0.5 rounded-md"/>
                    <span className="text-base font-normal mr-1">Task count :</span>
                    {
                        tasks.length === 0 ? (
                            <span>{taskInitialNoun}</span>
                        ): <span>{tasks.length + " " + `${taskNoun}`}</span>
                    }
            </div>
            <button onClick={displayTaskForm} className="px-4 py-2 bg-gray-800 text-white text-base font-semibold block rounded-lg cursor-pointer hover:bg-violet-600">
                Create task
            </button>
        </div>
    )
}