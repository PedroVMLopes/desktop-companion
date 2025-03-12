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
        <div className="flex flex-row w-full justify-between">
            <AnimatePresence>
                <motion.div 
                    className={`NavbarRender my-1 custom-border rounded-t-box bg-base-100 ${!open ? "w-min" : ""}`}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1, width: open ? "100%" : "60px" }}
                    exit={{ scale: 0.6 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                    <nav className="flex flex-row items-center p-1">
                        <ul className="navbar-nav">
                            <label
                                className="btn btn-ghost bg-opacity-0 border-0 swap swap-rotate text-primary text-lg font-Paprika rounded-xl items-center px-2"
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
            <AnimatePresence>
                
            </AnimatePresence>
        </div>
        
    );
};

function NavMenu() {
    return (
        <motion.ul
            className="flex flex-row w-full items-center justify-center"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
        >
            {menuItems.map(({ Icon, dataTip, link }, index) => (
                <motion.li
                    key={index}
                    className="btn btn-ghost btn-secondary tooltip tooltip-bottom tooltip-secondary min-h-0 h-min min-w-0 p-[6px] text-xl rounded-lg ml-8"
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
                    className="btn btn-ghost btn-secondary min-h-0 h-min min-w-0 p-[6px] text-xl rounded-lg ml-8"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    transition={{ duration: 0.2, ease: "easeOut", delay: (menuItems.length) * 0.1 }}
                >
                <ThemeToggle />
            </motion.button>
            <motion.button
                className="btn btn-ghost btn-secondary text-error min-h-0 h-min min-w-0 p-[6px] px-3 rounded-lg ml-8"
                key={"closeBtn"}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.2, ease: "easeOut", delay: (menuItems.length) * 0.1 }}
                >
                Exit
            </motion.button>
        </motion.ul>
    );
}

const menuItems = [
    { Icon: IoHome, link: "/", dataTip: "Home"},
    { Icon: FaBusinessTime, dataTip: "Jornada", link: "OfficeHours"},
    { Icon: FaTasks, dataTip: "Lista de Tarefas", link: "CompletedTasks"},
    { Icon: BsClipboardDataFill, dataTip: "Estatísticas", link: "/"},
];

