import { IoMenu } from "react-icons/io5";
import { GiTomato } from "react-icons/gi";

export const Navbar = () => {
    return (
        <div className="flex">
            <div className="fixed bg-base-200 collapse shadow-lg w-min">
                <input type="checkbox" className="peer" />
                <div
                    className="collapse-title bg-base-200 text-base-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <IoMenu />
                </div>
                <div
                    className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <GiTomato />
                </div>
            </div>
        </div>
    )
}