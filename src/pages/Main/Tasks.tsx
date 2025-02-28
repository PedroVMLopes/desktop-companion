import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion";
import { Task, SubTask } from "../../Types/types";

import { IoMdAdd } from "react-icons/io";
import { FaPause, FaPlay } from "react-icons/fa";
import { PiPause } from "react-icons/pi";



export function Tasks() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [ isMenuAddTaskExpanded, setMenuAddTaskExpanded ] = useState(false);

    const handleMenuAddTask = () => {
        setMenuAddTaskExpanded(false);
    }

    return (
        <>
            <div className="TasksMain bg-base-100 rounded-box mt-2 p-1 pb-2 custom-border">
                <div className="flex flex-row justify-between items-center mt-1 px-2">
                    <h1 className="flex font-Shrikhand text-xl">Tarefas: </h1>
                    <button onClick={() => setMenuAddTaskExpanded(!isMenuAddTaskExpanded)} className="btn btn-sm btn-outline btn-secondary font-bold">Add {isMenuAddTaskExpanded ? "-" : <IoMdAdd />}</button>
                </div>
                
                <AnimatePresence>
                    {isMenuAddTaskExpanded && <AddTaskMenu handleMenuAddTask={handleMenuAddTask}/>}
                </AnimatePresence>

                <div>
                    <AnimatePresence> <TaskCard /> </AnimatePresence>
                </div>
            </div>
            
        </>
        
    )
}

function AddTaskMenu({ handleMenuAddTask }: { handleMenuAddTask: () => void }) {
    return (
        <motion.div 
            initial={{ opacity: 0, y: -10 }} 
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="addTask bg-base-100 rounded-box m-1 mt-2 p-2 pt-2"
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
        <div className="SubTask form-control">
            <label className="label cursor-pointer w-full px-0">
                <div className="flex flex-row items-center">
                    <input type="checkbox" className="checkbox checkbox-xs rounded-md" />
                    <input type="text" placeholder="Nome da Sub-task" className="input input-sm bg-base-100 label-text pl-1"></input>
                </div>
                <input type="text" value={"0 horas e 15 min"} readOnly className="bg-base-100 text-secondary text-end text-sm p-0.5 ml-2 rounded-md w-min max-w-[120px]" />
            </label>
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
            className="addTask bg-base-100 rounded-box mt-2 p-2"
        >
            <label className="label cursor-pointer border-2 border-base-200 rounded-box justify-between flex flex-row items-center px-2">
                <div className="flex flex-row mt-1">
                    <input type="checkbox" className="checkbox checkbox-sm checkbox-accent" />
                    <h1 className="ml-2 font-Poppins font-bold text-accent">Nome da task</h1>
                </div>
                <button className="btn btn-outline btn-accent btn-xs"> <PiPause /> </button>
            </label>
            <div className="p-2 pt-0">
                <div className="flex flex-row items-center text-center mt-1 justify-between">
                    <h1 className="font-Poppins text-nowrap mt-1">Tempo Gasto: </h1>
                    <input type="text" value={"0 horas e 42 min"} readOnly className="bg-base-100 text-secondary text-end font-semibold pl-2 mt-0.5 ml-2 rounded-md w-min max-w-[160px]" />
                </div>
                <SubTaskCard />
                <button className="btn btn-xs btn-outline btn-secondary opacity-80 my-1">Sub-task <IoMdAdd /></button>
            </div>
        </motion.div>
    )
}