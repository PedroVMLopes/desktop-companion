//import { IoMenu } from "react-icons/io5";
import { GiTomato } from "react-icons/gi";
import { FaBusinessTime } from "react-icons/fa";
import { LuNotebookPen } from "react-icons/lu";
import { IoHome, IoLibrary } from "react-icons/io5";
import { BsClipboardDataFill } from "react-icons/bs";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { ThemeToggle } from "../utils/ThemeToggle";


export const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className='NavbarRender  bg-base-300 m-1 w-[98%] rounded-xl'>
            <nav className="flex flex-row items-center w-full max-w-[420px] p-1 px-1">
                <ul className="navbar-nav">
                    <button
                        className="btn btn-primary text-accent text-lg font-Paprika min-h-0 h-min px-[6px] py-[2px] rounded-xl shadow-sm shadow-stone-800 items-center"
                        onClick={() => setOpen(!open)}
                    >
                        {/*<IoMenu />*/}
                        <p>PV</p>
                    </button>
                </ul>

                {/* Menu animation & NavMenu */}
                <AnimatePresence>
                    {open && <NavMenu />}
                </AnimatePresence>
            </nav>
        </div>
        
    );
};

function NavMenu() {
    return (
        <motion.ul
            className="flex flex-row w-full justify-evenly items-center"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
        >
            {menuItems.map(({ Icon, action, dataTip }, index) => (
                <motion.button
                    key={index}
                    className="btn btn-neutral tooltip tooltip-bottom min-h-0 h-min min-w-0 p-[6px] text-xl rounded-lg shadow-sm shadow-stone-800"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    transition={{ duration: 0.2, ease: "easeOut", delay: index * 0.1 }}
                    onClick={action}
                    data-tip={dataTip}
                >
                    <Icon />
                </motion.button>
            ))}
            <motion.button
                    className="btn btn-neutral min-h-0 h-min min-w-0 p-[6px] text-xl rounded-lg shadow-sm shadow-stone-800"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    transition={{ duration: 0.2, ease: "easeOut", delay: 6 * 0.1 }}
                    
                >
                    <ThemeToggle />
                </motion.button>
        </motion.ul>
    );
}

const handlePomodoroClick = () => {
    console.log("Iniciando Pomodoro...");
};

const menuItems = [
    { Icon: IoHome, dataTip: "Home" },
    { Icon: FaBusinessTime, dataTip: "Jornada" },
    { Icon: GiTomato, dataTip: "Pomodoro", action: handlePomodoroClick },
    { Icon: BsClipboardDataFill, dataTip: "Estatísticas"},
    { Icon: LuNotebookPen, dataTip: "Adicionar Nota" },
    { Icon: IoLibrary, dataTip: "Biblioteca"}
];

