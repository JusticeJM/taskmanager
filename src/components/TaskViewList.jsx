import { useTaskContext } from "../contexts/taskContext";
import { BsCalendar, BsListTask } from "react-icons/bs";
import { MdCategory } from "react-icons/md";

export default function TaskViewList(){
    const {tasks, deleteTask, markTaskCompleted,startEditing } = useTaskContext();
    
    return(
        <div className="w-full p-2 grid grid-cols-1 gap-y-4 gap-x-1 place-items-center md:grid-cols-2 md:max-w-5xl md:mx-auto lg:grid-cols-3">
            { tasks.map((task)=> {
                return(
                        <div key={task.id} className="w-full bg-white/20 border border-gray-100 rounded-lg px-2 py-4 font-sans shadow-md hover:border-gray-300">
                            <div className="w-full inline-flex items-center space-x-2 mb-3 border-b border-b-gray-200 pb-2">
                                <BsListTask className="size-4"/>
                                <span className="text-sm font-normal">{task.taskname}</span>
                            </div>
                            <div className="flex justify-between text-sm font-normal mb-3 border-b border-b-gray-200 pb-3 ">
                                <button onClick={() => markTaskCompleted(task.id)} className="px-3 py-1.5 bg-violet-500 text-sm font-normal rounded-lg text-white/95 cursor-pointer hover:bg-violet-600">
                                    Mark as complete
                                </button>
                                <span className="px-3 py-1.5 bg-gray-100 rounded-md">{task.status}</span>
                            </div>
                            <div className="flex items-center justify-between gap-2 text-sm font-medium mb-3 border-b border-b-gray-200 pb-3 ">
                                <div className="basis-1/2 inline-flex items-center space-x-2">
                                    <MdCategory className="size-4"/>
                                    <span className="text-violet-950">{task.category}</span>
                                </div>
                                <div className="basis-1/2 inline-flex items-center space-x-2">
                                    <BsCalendar className="size-3"/>
                                    <span className="text-violet-950">{task.createdAt}</span>
                                </div>
                            </div>
                            <div className="flex justify-between items-center text-base font-medium gap-3">
                                <button onClick={() => startEditing(task)} className="bg-gray-100 px-3 py-1.5 rounded-md basis-1/2 hover:bg-gray-300 cursor-pointer">
                                    Edit
                                </button>
                                <button onClick={() => deleteTask(task.id)} className="bg-red-800 basis-1/2 px-3 py-1.5 rounded-md text-white hover:bg-red-900 cursor-pointer">
                                    Delete
                                </button>
                            </div>
                        </div>       
                    )}
            )}
           
        </div>
    )
}