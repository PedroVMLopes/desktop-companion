//import { IoMenu } from "react-icons/io5";
import { FaTasks } from "react-icons/fa";
import { FaBusinessTime } from "react-icons/fa";
import { LuNotebookPen } from "react-icons/lu";
import { IoHome, IoLibrary, IoClose } from "react-icons/io5";
import { BsClipboardDataFill } from "react-icons/bs";

import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import { ThemeToggle } from "../utils/ThemeToggle";


export const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <AnimatePresence>
            <motion.div 
                className={`NavbarRender bg-base-100 my-1 px-0.5 py-0.5 rounded-box custom-border ${!open ? "w-min" : ""}`}
                initial={{ scale: 0 }}
                animate={{ scale: 1, width: open ? "100%" : "60px" }}
                exit={{ scale: 0.6 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
            >
                <nav className="flex flex-row items-center w-full p-1">
                    <ul className="navbar-nav">
                        <label
                            className="btn btn-ghost bg-opacity-0 border-0 swap swap-rotate text-primary text-lg font-Paprika min-h-0 h-min px-[6px] py-[3px] rounded-xl items-center"
                        >
                            {/*<IoMenu />*/}
                            <input type="checkbox" onClick={() => setOpen(!open)}/>
                            <p className="swap-off fill-current">PV</p>
                            <p className="swap-on fill-current text-2xl"><IoClose /></p>
                        </label>
                    </ul>

                    {/* Menu animation & NavMenu */}
                    <AnimatePresence>
                        {open && <NavMenu />}
                    </AnimatePresence>
                </nav>
            </motion.div>
        </AnimatePresence>
    );
};

function NavMenu() {
    return (
        <motion.ul
            className="flex flex-row w-full items-center justify-evenly ml-2"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
        >
            {menuItems.map(({ Icon, dataTip, link }, index) => (
                <motion.li
                    key={index}
                    className="btn btn-ghost tooltip tooltip-bottom tooltip-secondary min-h-0 h-min min-w-0 p-[6px] text-xl rounded-lg ml-2"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    transition={{ duration: 0.2, ease: "easeOut", delay: index * 0.1 }}
                    data-tip={dataTip}
                >
                    <Link to={link}>
                        <Icon />
                    </Link>
                </motion.li>  
            ))}
            {/* Theme Toggle Button */}
            <motion.button
                    className="btn btn-ghost min-h-0 h-min min-w-0 p-[6px] text-xl rounded-lg ml-2"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    transition={{ duration: 0.2, ease: "easeOut", delay: (menuItems.length) * 0.1 }}
                >
                    <ThemeToggle />
                </motion.button>
        </motion.ul>
    );
}

const menuItems = [
    { Icon: IoHome, link: "/", dataTip: "Home"},
    { Icon: FaBusinessTime, dataTip: "Jornada", link: "OfficeHours"},
    { Icon: FaTasks, dataTip: "Tarefas Completadas", link: "CompletedTasks"},
    { Icon: BsClipboardDataFill, dataTip: "Estatísticas", link: "/"},
    { Icon: LuNotebookPen, dataTip: "Adicionar Nota", link: "/"},
    { Icon: IoLibrary, dataTip: "Biblioteca", link: "/"}
];

