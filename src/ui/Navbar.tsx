//import { IoMenu } from "react-icons/io5";
import { GiTomato } from "react-icons/gi";
import { FaBusinessTime } from "react-icons/fa";
import { LuNotebookPen } from "react-icons/lu";
import { IoHome } from "react-icons/io5";
import { BsClipboardDataFill } from "react-icons/bs";
import { RiBookShelfFill } from "react-icons/ri";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { ThemeToggle } from "../utils/ThemeToggle";


export const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav className="flex flex-row items-center w-full max-w-[420px] p-1 px-1">
            <ul className="navbar-nav">
                <button
                    className="btn btn-primary text-accent text-lg font-Paprika min-h-0 h-min px-2 py-1 rounded-full shadow-sm shadow-stone-800"
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
    );
};

function NavMenu() {
    return (
        <motion.ul
            className="flex flex-row w-full justify-evenly"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
        >
            {menuItems.map(({ Icon, action }, index) => (
                <motion.button
                    key={index}
                    className="btn btn-secondary min-h-0 h-min min-w-0 p-2 text-xl rounded-xl shadow-sm shadow-stone-800"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    transition={{ duration: 0.2, ease: "easeOut", delay: index * 0.1 }}
                    onClick={action}
                >
                    <Icon />
                </motion.button>
            ))}
            <motion.button
                    className="btn btn-secondary min-h-0 h-min min-w-0 p-2 text-xl rounded-xl shadow-sm shadow-stone-800"
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
    { Icon: IoHome},
    { Icon: FaBusinessTime },
    { Icon: GiTomato, action: handlePomodoroClick },
    { Icon: BsClipboardDataFill},
    { Icon: LuNotebookPen },
    { Icon: RiBookShelfFill}
];

