import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion";
import { Task, SubTask } from "../../Types/types";

import { IoMdAdd } from "react-icons/io";
import { FaPause, FaPlay, FaMinus, FaPlus } from "react-icons/fa";
import { PiPause } from "react-icons/pi";



export function Tasks() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [ isMenuAddTaskExpanded, setMenuAddTaskExpanded ] = useState(false);

    const handleMenuAddTask = () => {
        setMenuAddTaskExpanded(false);
    }

    return (
        <div className="TasksMain">
            <motion.div 
                className="flex flex-col items-center mt-1 px-2 custom-border rounded-box p-1 bg-base-100"
                >
                <div className="flex flex-row justify-between items-center w-full py-1 px-2">
                    <h1 className="flex font-Shrikhand text-xl">Tarefas: </h1>
                    <button onClick={() => setMenuAddTaskExpanded(!isMenuAddTaskExpanded)} className="btn btn-sm btn-ghost btn-secondary font-bold">Add {isMenuAddTaskExpanded ? <FaMinus /> : <FaPlus />}</button>
                </div>    
                {isMenuAddTaskExpanded && <AddTaskMenu handleMenuAddTask={handleMenuAddTask}/>}
            </motion.div>
                
            

            <div>
                <AnimatePresence> <TaskCard /> </AnimatePresence>
            </div>
        </div>
    )
}

function AddTaskMenu({ handleMenuAddTask }: { handleMenuAddTask: () => void }) {
    return (
        <div 
            className="addTask bg-base-100 rounded-box m-1 mt-2 p-2 pt-2"
        >
            <label className="input input-bordered flex items-center gap-2">
                <input type="text" className="grow" placeholder="" />
                <button onClick={handleMenuAddTask} className="btn btn-sm btn-accent">Adicionar</button>
            </label>
        </div>
    );
}

function SubTaskCard() {
    return (
        <div className="SubTask form-control">
            <label className="label cursor-pointer w-full px-0">
                <div className="flex flex-row items-center">
                    <input type="checkbox" className="checkbox checkbox-xs rounded-md" />
                    <input type="text" placeholder="Nome da Sub-task" className="input input-sm bg-base-100 label-text pl-1"></input>
                </div>
            </label>
            <input type="text" value={"0 horas e 15 min"} readOnly className="bg-base-100 text-secondary text-end text-sm p-0.5 ml-2 rounded-md w-min max-w-[120px]" />
        </div>
    )
}

function TaskCard() {
    return (
        <motion.div 
            initial={{ opacity: 0, y: -10 }} 
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            className="addTask bg-base-100 rounded-box mt-1 p-2 custom-border"
        >
            <label className="label cursor-pointer rounded-box justify-between flex flex-row items-center px-2 pt-1 text-accent">
                <div className="flex flex-row mt-1">
                    <input type="checkbox" className="checkbox checkbox-sm checkbox-accent" />
                    <h1 className="ml-2 font-Poppins font-bold">Nome da task</h1>
                </div>
                <button className="btn btn-ghost btn-accent btn-sm p-2"> <FaPause /> </button>
            </label>
            <div className="p-2 pt-0">
                <div className="divider m-0"></div>
                <div className="flex flex-row items-baseline text-center">
                    <input type="text" value={"10 horas e 42 min"} readOnly className="bg-base-100 text-secondary text-end font-semibold font-Poppins rounded-md w-min max-w-[140px]" />
                    <h1 className="ml-1 font-Poppins font-semibold text-nowrap text-secondary ">na tarefa </h1>
                </div>
                <SubTaskCard />
                <button className="btn btn-xs btn-outline btn-secondary opacity-80 my-1">Sub-task <IoMdAdd /></button>
            </div>
        </motion.div>
    )
}