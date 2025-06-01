import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import TaskAchievement from "../components/TaskAchievement";
import TaskSummary from "../components/TaskSummary";

export default function Analytics(){
    return(
        <div>
            <NavBar/>
            <div className="relative w-full px-3 font-sans my-10 flex flex-col items-center justify-center md:max-w-4xl md:mx-auto ">
                <h4 className="text-violet-950 font-semibold pb-3 text-center text-2xl sm:text-3xl md:text-4xl">
                    Overview your tasks and check its summaries.
                </h4>
                <span className="text-black/60 text-sm font-normal text-center px-10 md:px-54 md:text-base ">
                    Explore the possibilities and unclock your potential.
                    Improve your commitment, boost the efficiency and plan ahead.
                </span>
            </div>
            <div className="w-full px-3 flex flex-col items-center justify-center gap-3 mb-10 md:flex-row lg:w-[90%] lg:mx-auto">
                <TaskSummary/>
                <TaskAchievement/>
            </div> 
            <Footer/>   
        </div>
    )
}