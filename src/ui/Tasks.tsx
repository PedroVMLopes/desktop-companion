import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion";
import { Task, SubTask } from "../Types/types";

import { IoMdAdd } from "react-icons/io";
import { FaPause, FaPlay, FaMinus, FaPlus } from "react-icons/fa";



export function Tasks() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [ isMenuAddTaskExpanded, setMenuAddTaskExpanded ] = useState(false);

    const handleMenuAddTask = () => {
        setMenuAddTaskExpanded(false);
    }

    return (
        <div className="TasksMain">
            <motion.div 
                className="flex flex-col items-center mt-1 px-2 custom-border rounded-box p-1 bg-base-100 w-full"
                initial={{ height: "60px" }}
                animate={{ height: isMenuAddTaskExpanded ? "140px" : "60px" }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                >
                <div className="flex flex-row justify-between items-center w-full py-1 px-2">
                    <h1 className="flex font-Shrikhand text-xl">Tarefas </h1>
                    <button onClick={() => setMenuAddTaskExpanded(!isMenuAddTaskExpanded)} className="btn btn-sm btn-ghost btn-secondary font-bold">Add {isMenuAddTaskExpanded ? <FaMinus /> : <FaPlus />}</button>
                </div>    
                <AnimatePresence> {isMenuAddTaskExpanded && <AddTaskMenu handleMenuAddTask={handleMenuAddTask}/>} </AnimatePresence>
            </motion.div>   

            <AnimatePresence> 
                <div className="grid grid-cols-2 grid-rows-2 gap-2">
                    <TaskCard />
                    <TaskCard />
                    <TaskCard />
                    <TaskCard />
                </div>
            </AnimatePresence>
        </div>
    )
}

function AddTaskMenu({ handleMenuAddTask }: { handleMenuAddTask: () => void }) {
    return (
        <motion.div 
            className="addTask bg-base-100 rounded-box m-1 p-2 pt-2"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                transition={{ duration: 0.1, ease: "easeInOut" }}
            >
            <label className="input input-bordered flex items-center gap-2">
                <input type="text" className="grow" placeholder="" />
                <button onClick={handleMenuAddTask} className="btn btn-sm btn-accent">Adicionar</button>
            </label>
        </motion.div>
    );
}

function SubTaskCard() {
    return (
        <div className="flex flex-row justify-between">
            <div className="SubTask form-control px-4 mb-2">
                <label className="label cursor-pointer w-full p-0">
                    <div className="flex flex-row items-center">
                        <input type="checkbox" className="checkbox checkbox-xs rounded-md" />
                        <input type="text" placeholder="Nome da Sub-task" className="input input-sm bg-base-100 label-text pl-1 ml-2"></input>
                    </div>
                </label>
                <input type="text" value={"0 horas e 15 min"} readOnly className="fieldset-label text-left text-sm ml-0.5 rounded-md w-min max-w-[110px]" />
            </div>
            <button className="btn btn-ghost btn-accent btn-sm p-2 mr-4 opacity-60"> <FaPause /> </button>
        </div>
    )
}

export function TaskCard() {
    return (
        <motion.div 
            initial={{ opacity: 0, y: -10 }} 
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            className="addTask bg-base-100 rounded-box mt-1 custom-border text-sm"
        >
            <label className="label cursor-pointer rounded-box justify-between flex flex-row items-center px-4 p-2 text-accent">
                <div className="flex flex-row mt-1">
                    <input type="checkbox" className="checkbox checkbox-sm rounded-lg checkbox-accent" />
                    <h1 className="ml-2 font-Poppins font-bold">Nome da task</h1>
                </div>
                <button className="btn btn-ghost btn-accent btn-sm p-2"> <FaPause /> </button>
            </label>
            <div className="pt-0">
                <div className="flex flex-row px-4 text-sm">
                    <input type="text" value={"0 horas e 42 min"} readOnly className="text-right font-semibold font-Poppins rounded-md w-min max-w-[125px]" />
                    <h1 className="ml-1 font-Poppins font-semibold text-nowrap ">na tarefa </h1>
                </div>
                <div className="divider m-0"></div>
                <SubTaskCard />
                <button className="btn btn-xs btn-outline opacity-60 my-2 mx-4">Sub-task <IoMdAdd /></button>
            </div>
        </motion.div>
    )
}