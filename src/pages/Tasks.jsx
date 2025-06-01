import { useState } from "react";
import { useTaskContext } from "../contexts/taskContext";
import { Outlet } from "react-router-dom";
import CreateTask from "../components/CreateTask";
import Footer from "../components/Footer";
import TaskForm from "../components/TaskForm";
import TaskNotFound from "../components/TaskNotFound";
import TaskViewList from "../components/TaskViewList";
import EditForm from "../components/EditForm";
import NavBar from "../components/NavBar";


export default function Tasks(){
    const [showTaskForm, setShowTaskForm] = useState(false);

    const {tasks,editingTask} = useTaskContext();

    function displayTaskForm(){
        setShowTaskForm(true);
    }
    function hideTaskForm(){
        setShowTaskForm(false)
    }

    return(
        <div className="">
            <NavBar/>
            <CreateTask displayTaskForm={displayTaskForm}/>
            {
                tasks.length < 1 ? <TaskNotFound displayTaskForm={displayTaskForm}/> : <TaskViewList/> 
            } 
            <Footer/>
            {
                showTaskForm && <TaskForm hideTaskForm={hideTaskForm}/>
            }
            {
                editingTask  && <EditForm/>
            }
            <Outlet/>     
        </div>
    )
}