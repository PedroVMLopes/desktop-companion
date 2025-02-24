import { useState } from "react"
import { motion } from "framer-motion";

export function Tasks() {
    const [ isAddTaskExpanded, setAddTaskExpanded ] = useState(false);

    const handleAddTask = () => {
        setAddTaskExpanded(false);
    }

    return (
        <div className="TasksMain bg-base-200 rounded-box mt-1 p-1 pb-2">
            <div className="flex flex-row justify-between mt-1 px-2">
                <h1 className="flex font-Shrikhand text-xl">Tarefas: </h1>
                <button onClick={() => setAddTaskExpanded(!isAddTaskExpanded)} className="btn btn-sm btn-outline btn-secondary font-bold">Add {isAddTaskExpanded ? "-" : "+"}</button>
            </div>
            
            {isAddTaskExpanded && <AddTask handleAddTask={handleAddTask}/>}

            <Task />
        </div>
    )
}

function AddTask({ handleAddTask }: { handleAddTask: () => void }) {
    return (
        <motion.div 
            initial={{ opacity: 0, y: -10 }} 
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            className="addTask bg-base-100 rounded-box m-1 mt-2 p-2 pt-2"
        >
            <h1 className="ml-1 mb-1 font-Poppins">Adicione uma nova tarefa:</h1>
            <label className="input input-bordered flex items-center gap-2">
                Nome
                <input type="text" className="grow" placeholder="" />
                <button onClick={handleAddTask} className="btn btn-sm btn-accent">Adicionar</button>
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
            className="addTask bg-base-100 rounded-box m-1 mt-2 p-2 pt-2"
        >
            <h1 className="ml-1 mb-1 font-Poppins">Nome da task:</h1>
        </motion.div>
    )
}