import { useCurrentTime, useCurrentDate } from "../../utils/util"

interface TimeProps {
    hours: number;
    minutes: number;
    seconds: number;
}

export function MainPage() {
    const { hours, minutes, seconds } = useCurrentTime();

    return (
        <div className="flex flex-col h-full justify-end pb-6">
            <DateDisplay />
            <div className="flex flex-col ">
                <div className="flex flex-col w-min self-center shadow-lg">
                <DayProgressBar hours={hours} minutes={minutes} seconds={seconds}/>
                <Clock hours={hours} minutes={minutes} seconds={seconds} />
                <HourProgressBar hours={hours} minutes={minutes} seconds={seconds} />
                <MinuteProgressBar hours={hours} minutes={minutes} seconds={seconds} />
                </div>
            </div>
        </div>
    )
}

const Clock: React.FC<TimeProps> = ({ hours, minutes, seconds }) => {

    return (
        <div className="flex flex-col items-center py-6">
            <div className="grid grid-flow-col gap-2 text-center auto-cols-max">
                <div className="flex flex-col p-2 bg-accent text-accent-content rounded-box shadow-lg">
                    <span className="countdown font-quicksand text-6xl justify-center p-2">
                        <span style={{ "--value": hours } as React.CSSProperties}></span>
                    </span>
                </div>
                <p className="flex items-center text-3xl font-semibold">:</p>
                <div className="flex flex-col p-2 rounded-box bg-neutral text-neutral-content shadow-lg">
                    <span className="countdown font-quicksand text-6xl justify-center p-2">
                        <span style={{ "--value": minutes } as React.CSSProperties}></span>
                    </span>
                </div>
                <p className="flex items-center text-3xl font-semibold">:</p>
                <div className="flex flex-col p-2 rounded-box bg-neutral text-neutral-content shadow-lg">
                    <span className="countdown font-quicksand text-6xl justify-center p-2">
                        <span style={{ "--value": seconds } as React.CSSProperties}></span>
                    </span>
                </div>
            </div>
        </div>
    ) 
}

const DateDisplay: React.FC = () => {
    const { formattedDate } = useCurrentDate();
    return <div className="w-full flex justify-center pt-6 text-3xl font-lobsterTitle text-secondary">{formattedDate}</div>
}

const DayProgressBar: React.FC<TimeProps> = ({ hours }) => {
    return <progress className="progress progress-secondary w-[356px] mt-2 self-center" value={hours} max="24"></progress>
}

const HourProgressBar: React.FC<TimeProps> = ({ minutes }) => {
    return <progress className="progress progress-accent w-[356px] mt-2 self-center shadow-md" value={minutes} max="60"></progress>
}

const MinuteProgressBar: React.FC<TimeProps> = ({ seconds }) => {
    return <progress className="progress progress-neutral-content w-[356px] mt-1 self-center h-1 shadow-xl" value={seconds} max="60"></progress>
}