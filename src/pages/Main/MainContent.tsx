import { SalaryInDollar } from "../../components/Widgets";
import { CurrentTask } from "./CurrentTask";
import { Gallery } from "../../components/Gallery";

export function MainContent() {
    return (
        <div
            className="mainContentTop grid grid-cols-[1fr_2fr] gap-4 w-full mt-1"
            style={{ gridTemplateRows: "auto 1fr" }}
        >

            <div className="mainContentRight w-fit justify-self-start">
                <Gallery />
            </div>

            <div className="mainContentLeft flex flex-col gap-2">
                <SalaryInDollar />
                <CurrentTask />
            </div>

        </div>
    );
}

