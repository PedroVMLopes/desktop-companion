import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion";

import { IoMdAdd } from "react-icons/io";

export function Tasks() {
    const [ isAddTaskMenuExpanded, setAddTaskMenuExpanded ] = useState(false);

    const handleAddTaskMenu = () => {
        setAddTaskMenuExpanded(false);
    }

    return (
        <div className="TasksMain bg-base-200 rounded-box mt-1 p-1 pb-2">
            <div className="flex flex-row justify-between mt-1 px-2">
                <h1 className="flex font-Shrikhand text-xl">Tarefas: </h1>
                <button onClick={() => setAddTaskMenuExpanded(!isAddTaskMenuExpanded)} className="btn btn-sm btn-outline btn-secondary font-bold">Add {isAddTaskMenuExpanded ? "-" : <IoMdAdd />}</button>
            </div>
            
            <AnimatePresence> {isAddTaskMenuExpanded && <AddTaskMenu handleAddTaskMenu={handleAddTaskMenu}/>} </AnimatePresence>
            <AnimatePresence> <CurrentTask /> </AnimatePresence>
            
        </div>
    )
}

function AddTaskMenu({ handleAddTaskMenu }: { handleAddTaskMenu: () => void }) {
    return (
        <motion.div 
            initial={{ opacity: 0, y: -10 }} 
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="addTask bg-base-100 rounded-box m-1 mt-2 p-2 pt-2"
        >
            <h1 className="ml-1 mb-1 font-Poppins">Adicione uma nova tarefa:</h1>
            <label className="input input-bordered flex items-center gap-2">
                Nome
                <input type="text" className="grow" placeholder="" />
                <button onClick={handleAddTaskMenu} className="btn btn-sm btn-accent">Adicionar</button>
            </label>
        </motion.div>
    );
}

function SubTask() {
    return (
        <div className="form-control my-1">
            <label className="label cursor-pointer justify-start w-full">
                <input type="checkbox" className="checkbox checkbox-xs rounded-md" />
                <span className="label-text ml-2 w-max">Nome da Sub-task</span>
                <input type="text" value={"0 horas e 15 min"} readOnly className="bg-base-200 text-secondary text-sm p-0.5 pl-2 ml-2 rounded-md w-min max-w-[140px]" />
            </label>
        </div>
    )
}

function CurrentTask() {
    return (
        <motion.div 
            initial={{ opacity: 0, y: -10 }} 
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            className="addTask bg-base-100 rounded-box m-1 mt-2 p-2 pl-3"
        >
            <label className="label cursor-pointer justify-start flex flex-row items-center">
                <input type="checkbox" className="checkbox checkbox-sm checkbox-accent" />
                <h1 className="ml-2 font-Poppins font-bold text-accent">Nome da task</h1>
            </label>
            <div className="flex flex-row items-center text-center mt-1">
                <h1 className="font-Poppins text-nowrap">Tempo Gasto: </h1>
                <input type="text" value={"0 horas e 42 min"} readOnly className="bg-base-200 text-secondary font-semibold p-1 pl-2 ml-2 rounded-md w-full" />
            </div>
            <SubTask />
            <button className="btn btn-xs btn-outline btn-secondary opacity-80 mt-2">Sub-task <IoMdAdd /></button>
        </motion.div>
    )
}