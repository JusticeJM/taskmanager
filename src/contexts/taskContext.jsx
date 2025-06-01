import { nanoid } from "nanoid";
import { createContext, useContext, useEffect, useState } from "react";

const TaskContext = createContext();

const getTasksFromLocalStorage = () => {
    let tasks = localStorage.getItem('tasks')
    if(tasks){
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }
    else{
        tasks = []
    }
    return tasks
}

const TaskProvider = ({children}) => {
    const [tasks, setTasks] = useState(getTasksFromLocalStorage);
    const [editingTask, setEditingTask] = useState(null);

    function addTask(newTaskData){
        const newTask = { id:nanoid(), ...newTaskData};
        // setTasks(prevTask => [...prevTask, newTask]);
        const updatedTasks = [...tasks, newTask]
        setTasks(updatedTasks);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks))
    }

    const deleteTask = (id) => {
        const remainingTasks = tasks.filter((task) => id !== task.id);
        setTasks(remainingTasks);
        localStorage.setItem('tasks', JSON.stringify(remainingTasks))
    }

    const markTaskCompleted = (id) => {
        const updatedTasks = tasks.map((task) => {
            if(id === task.id){
                return{...task, status: "completed"}
            }
            return task;
        });
        setTasks(updatedTasks);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks))
    }

    const editTask = (updatedTask) => {
        const editedTasks = tasks.map(task => task.id === updatedTask.id ? updatedTask :task)
        setTasks(editedTasks);
        localStorage.setItem('tasks', JSON.stringify(editedTasks))
        setEditingTask(null);
    }

    const startEditing = (task) => {
        setEditingTask(task)
    }

    return (
        <TaskContext.Provider value={{tasks, addTask, deleteTask, markTaskCompleted, editTask, editingTask, startEditing}}>
            {children}
        </TaskContext.Provider>
    )
}

export const useTaskContext = () => {
    return useContext(TaskContext)
}

export { TaskContext, TaskProvider };