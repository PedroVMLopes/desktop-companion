// src/pages/BottomContent.tsx
import { useCurrentTime } from "../utils/util"
import DateDisplay from "../components//BottomContent/DateDisplay";
import Clock from "../components/BottomContent/Clock";
import OfficeHoursProgressBar from "../components/BottomContent/OfficeHoursProgressBar";
import HourProgressBar from "../components/BottomContent/HourProgressBar";
import MinuteProgressBar from "../components/BottomContent/MinuteProgressBar";

export function BottomContent() {
    const { hours, minutes, seconds } = useCurrentTime();

    return (
        <div className="flex flex-col justify-end items-baseline pl-4 pb-6 h-full w-min">
            <div className="pt-0 bg-base-100 custom-window rounded-box p-0">
                <DateDisplay />
                <Clock hours={hours} minutes={minutes} seconds={seconds} />
            </div>
            <div className="progressBars flex flex-col bg-base-100 custom-window rounded-xl rounded-b-xl w-full mt-1 p-1">
                <OfficeHoursProgressBar />
                <HourProgressBar minutes={minutes} />
                <MinuteProgressBar seconds={seconds} />
            </div>
        </div>
    );
}

export default BottomContent;
