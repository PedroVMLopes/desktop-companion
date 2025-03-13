// src/pages/BottomContent.tsx
import { useCurrentTime } from "../utils/util"
import Clock from "../components/BottomContent/Clock";
import OfficeHoursProgressBar from "../components/BottomContent/OfficeHoursProgressBar";
import HourProgressBar from "../components/BottomContent/HourProgressBar";
import MinuteProgressBar from "../components/BottomContent/MinuteProgressBar";
import CalendarComponent from "../utils/calendar";

export function BottomContent() {
    const { hours, minutes, seconds } = useCurrentTime();

    return (
        <div className="flex flex-col justify-end pl-3 h-full w-min">
            <div className="calendar bg-base-100 custom-border rounded-box p-0 mb-2">
                <CalendarComponent />
            </div>
            <div className="pt-0 rounded-box custom-border bg-neutral text-neutral-content p-0 w-full h-full">
                <Clock hours={hours} minutes={minutes} seconds={seconds} />
            </div>
            <div className="progressBars flex flex-col bg-base-100 custom-border rounded-xl rounded-b-xl w-full mt-2 p-2">
                <OfficeHoursProgressBar />
                <HourProgressBar minutes={minutes} />
                <MinuteProgressBar seconds={seconds} />
            </div>
        </div>
    );
}



export default BottomContent;
