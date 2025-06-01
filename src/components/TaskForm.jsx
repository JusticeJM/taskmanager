import { useTaskContext } from "../contexts/taskContext";
import { MdClose } from "react-icons/md";
import { useFormik } from "formik";
import * as Yup from 'Yup';

export default function TaskForm({hideTaskForm}){
    const {addTask} = useTaskContext();

    const formik = useFormik({
        initialValues:{ taskname:"", status:"incomplete", category:"", createdAt:""},
        validationSchema: Yup.object({
            taskname: Yup.string().required('Required').matches(/^[a-zA-Z\s]*$/,'Numbers are not allowed'),
            status: Yup.string().oneOf(['incomplete','completed'],'Invalid status').required('Required'),
            category: Yup.string().oneOf(['personal','family','office'],'Invalid category').required('Required'),
            createdAt: Yup.date().required('Required').typeError('Must be a valid date')
            .test(
                'not-past-date','Date must be from today and onwards',
                (value)=>{
                    if(!value) return false;
                    const inputDate = new Date(value);
                    const today = new Date();
                    return inputDate.setHours(0,0,0,0) >= today.setHours(0,0,0,0)
                }
            )
        }),
        onSubmit: (values, {resetForm})=> {
            addTask(values);
            resetForm();
        }
    });
 
    return(
      <div className="bg-black/2 fixed top-0 right-0 left-0 z-50 w-full h-full">
        <div className="font-sans max-w-sm mx-auto bg-violet-50 my-18 border border-gray-200 rounded-lg pb-10 sm:max-w-md">
            <div className="px-4 pt-5">
                <div className="flex justify-between items-center mb-4">
                    <span className="text-xl font-semibold">Add a new task</span>
                    <button onClick={hideTaskForm} className="p-1 bg-gray-200 rounded-lg cursor-pointer hover:bg-violet-300">
                        <MdClose className="size-5"/>
                    </button>
                </div>
                <form onSubmit={formik.handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="taskname" className="block text-sm font-normal text-black/95 mb-1">
                            Task Name
                        </label>
                        <input className="block w-full text-sm p-1.5 border border-gray-300 rounded-md focus:border-violet-500 focus:outline focus:outline-violet-500"
                            type="text"
                            id="taskname" 
                            {...formik.getFieldProps('taskname')}
                        />
                        {
                            formik.touched.taskname && formik.errors.taskname ? (
                               <div className="text-sm font-light text-red-600">{formik.errors.taskname}</div> 
                            ):null
                        }
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-3">
                        <div >
                            <label htmlFor="status" className="block text-sm font-normal text-black/95 mb-1">
                                Status
                            </label>
                            <select className="w-full p-1.5 text-sm border border-gray-300 rounded-md focus:border-violet-500 focus:outline focus:outline-violet-500"
                                id="status" 
                                {...formik.getFieldProps('status')}
                            >
                                <option value="incomplete">Incomplete</option>
                                <option value="completed">Completed</option>
                            </select>
                            {
                                formik.touched.status && formik.errors.status ? (
                                    <div className="text-sm font-light text-red-600">{formik.errors.status}</div> 
                                ):null
                            }
                        </div>
                        <div className="">
                            <label htmlFor="category" className="block text-sm font-normal text-black/95 mb-1">
                                Category
                            </label>
                            <select className="w-full p-1.5 text-sm border border-gray-300 rounded-md focus:border-violet-500 focus:outline focus:outline-violet-500"
                                id="category"
                                {...formik.getFieldProps('category')}
                            >
                                <option value="">Choose your category...</option>
                                <option value="personal">Personal</option>
                                <option value="family">Family</option>
                                <option value="office">Office</option>
                            </select>
                            {
                                formik.touched.category && formik.errors.category ? (
                                    <div className="text-sm font-light text-red-600">{formik.errors.category}</div>
                                ):null
                            }
                        </div>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="createdAt" className="block text-sm font-normal text-black/95 mb-1">
                            Created At
                        </label>
                        <input className="block w-full text-sm p-1.5 border border-gray-300 rounded-md focus:border-violet-500 focus:outline focus:outline-violet-500"
                            type="date"  
                            id="createdAt" 
                            {...formik.getFieldProps('createdAt')}
                        />
                        {
                            formik.touched.createdAt && formik.errors.createdAt ? (
                                <div className="text-sm font-light text-red-600">{formik.errors.createdAt}</div>
                            ):null
                        }
                    </div>
                    <button type="submit" className="px-3 py-1.5 bg-violet-800 text-white text-base text-medium block w-full rounded-lg cursor-pointer hover:bg-violet-600">
                        Add Task
                    </button>
                </form>
            </div>
        </div>
      </div>
    )
}