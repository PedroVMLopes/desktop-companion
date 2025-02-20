// src/pages/MainPage.tsx
import { useCurrentTime } from "../utils/util";
import DateDisplay from "../components/DateDisplay";
import Clock from "../components/Clock";
import DayProgressBar from "../components/DayProgressBar";
import HourProgressBar from "../components/HourProgressBar";
import MinuteProgressBar from "../components/MinuteProgressBar";

export function MainPage() {
    const { hours, minutes, seconds } = useCurrentTime();

    return (
        <div className="flex flex-col h-full justify-end pb-6">
            <DateDisplay />
            <div className="flex flex-col">
                <div className="flex flex-col w-min self-center">
                    <DayProgressBar hours={hours} />
                    <Clock hours={hours} minutes={minutes} seconds={seconds} />
                    <HourProgressBar minutes={minutes} />
                    <div className="flex ">
                        <MinuteProgressBar seconds={seconds} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainPage;
