import TaskFeature from "./TaskFeature";
import { CgMenuBoxed, CgPerformance } from "react-icons/cg";
import { IoMdTimer } from "react-icons/io";

export default function FeatureSection(){
    const title1 = "Manage tasks easily";
    const description1 = " Simplify the complexities of task management through seemless integration of intuitive tools.";
    const title2 = "Save your time"; 
    const description2 = "Reduce the time required to manage your tasks and focus on productivity.";
    const title3 = "Boost your productivity"; 
    const description3 = "Prioritize tasks and create a structured routine to optimize the efficincy.";
    return(
        <div className="w-full mx-3 pt-14 md:w-[85%] md:mx-auto ">
            <div className="font-sans text-center pb-5">
                <h4 className="text-black/90 text-2xl font-semibold">
                    What <span className="text-violet-900">muliTASK</span> offers
                </h4>
            </div>
            <div className="grid gap-2 gap-y-3 place-items-center px-12 grid-cols-1 lg:grid-cols-3 ">
                <TaskFeature title={title1} description={description1}>
                    <CgMenuBoxed className="size-5 text-violet-800"/>
                </TaskFeature>
                <TaskFeature title={title2} description={description2}>
                    <IoMdTimer className="size-5 text-violet-800"/>
                </TaskFeature>
                <TaskFeature title={title3} description={description3}>
                    <CgPerformance className="size-5 text-violet-800"/>
                </TaskFeature>
            </div>
        </div>
    )
}