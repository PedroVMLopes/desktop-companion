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
        <div className="flex flex-col justify-end items-baseline pl-4 pb-6 h-full w-full">
            <div className="mt-6 pt-1 backdrop-blur-xs custom-frame">
                <DateDisplay />
                <div className="flex flex-col">
                    <div className="flex flex-col w-full self-center">
                        <OfficeHoursProgressBar />
                        <Clock hours={hours} minutes={minutes} seconds={seconds} />
                        <HourProgressBar minutes={minutes} />
                        <MinuteProgressBar seconds={seconds} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BottomContent;
