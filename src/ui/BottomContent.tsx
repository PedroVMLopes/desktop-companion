// src/pages/BottomContent.tsx
import { useCurrentTime } from "../utils/util";
import DateDisplay from "../components/DateDisplay";
import Clock from "../components/Clock";
import OfficeHoursProgressBar from "../components/OfficeHoursProgressBar";
import HourProgressBar from "../components/HourProgressBar";
import MinuteProgressBar from "../components/MinuteProgressBar";

export function BottomContent() {
    const { hours, minutes, seconds } = useCurrentTime();

    return (
        <div className="flex flex-col justify-end items-center pb-4 h-full w-full">
            <div className="bg-info rounded-3xl mt-6 pt-1">
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
