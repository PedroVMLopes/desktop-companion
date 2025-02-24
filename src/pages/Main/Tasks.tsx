import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion";

export function Tasks() {
    const [ isAddTaskMenuExpanded, setAddTaskMenuExpanded ] = useState(false);

    const handleAddTaskMenu = () => {
        setAddTaskMenuExpanded(false);
    }

    return (
        <div className="TasksMain bg-base-200 rounded-box mt-1 p-1 pb-2">
            <div className="flex flex-row justify-between mt-1 px-2">
                <h1 className="flex font-Shrikhand text-xl">Tarefas: </h1>
                <button onClick={() => setAddTaskMenuExpanded(!isAddTaskMenuExpanded)} className="btn btn-sm btn-outline btn-secondary font-bold">Add {isAddTaskMenuExpanded ? "-" : "+"}</button>
            </div>
            
            <AnimatePresence> {isAddTaskMenuExpanded && <AddTaskMenu handleAddTaskMenu={handleAddTaskMenu}/>} </AnimatePresence>
            <AnimatePresence> <Task /> </AnimatePresence>
            
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

function Task() {
    return (
        <motion.div 
            initial={{ opacity: 0, y: -10 }} 
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            className="addTask bg-base-100 rounded-box m-1 mt-2 p-2 pl-3"
        >
            <h1 className="mb-1 font-Poppins font-bold text-accent">Nome da task</h1>
            <div className="flex flex-row items-center">
                <h1 className="font-Poppins">Tempo Gasto: </h1>
                <input type="text" value={"0 horas e 42 min"} readOnly className="bg-base-200 text-secondary font-semibold w-min p-1 ml-1 rounded-md" />
            </div>
        </motion.div>
    )
}