import Invite from "./Invite";
import TaskStatsOne from "./TaskStatsOne";
import TaskStatsTwo from "./TaskStatsTwo";

export default function MainSection(){
    return(
        <div className="mt-18 w-full lg:w-[90%] lg:mx-auto ">
            <div className="">
                <h4 className="text-black/90 text-2xl font-semibold tracking mb-7 text-center px-10">
                    The right time to improve the way you manage tasks daily.
                </h4>
                <div className="flex gap-8 flex-col justify-center items-center px-14 md:flex-row">
                    <TaskStatsOne/>
                    <TaskStatsTwo/>
                </div>
                <Invite/>
            </div>
        </div>
    )
}