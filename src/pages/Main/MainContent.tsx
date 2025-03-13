import { SalaryInDollar } from "../../components/Widgets";
import { CurrentTask } from "./CurrentTask";
import { Gallery } from "./Gallery";

export function MainContent() {
    return (
        <div
            className="mainContentTop grid grid-cols-[1.5fr_1fr] gap-4 w-full"
            style={{ gridTemplateRows: "auto 1fr" }}
        >

            <div className="mainContentLeft flex flex-col gap-4">
                <SalaryInDollar />
                <CurrentTask />
            </div>

            <div className="mainContentRight w-fit justify-self-center">
                <Gallery />
            </div>
        </div>
    );
}

