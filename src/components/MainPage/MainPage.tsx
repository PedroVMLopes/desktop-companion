import { useCurrentTime, useCurrentDate } from "../../utils/util"

export function MainPage() {
    return (
        <div className="flex flex-col h-full justify-end pb-6">
            <DateDisplay />
            <div className="flex flex-col">
                <DayProgressBar />
                <Clock />
                <div className="flex flex-col w-full items-center">
                    <div className="flex flex-col w-min shadow-lg">
                        <HourProgressBar />
                        <MinuteProgressBar />
                    </div>
                </div>
                
            </div>
            
        </div>
    )
}

const Clock: React.FC = () => {
    const { hours, minutes, seconds } = useCurrentTime();

    return (
        <div className="flex flex-col items-center gap-4 py-6">
            <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
                <div className="flex flex-col p-2 bg-accent text-accent-content rounded-box shadow-lg">
                    <span className="countdown font-quicksand text-6xl justify-center p-2">
                        <span style={{ "--value": hours } as React.CSSProperties}></span>
                    </span>
                </div>
                <div className="flex flex-col p-2 rounded-box bg-neutral text-neutral-content shadow-lg">
                    <span className="countdown font-quicksand text-6xl justify-center p-2">
                        <span style={{ "--value": minutes } as React.CSSProperties}></span>
                    </span>
                </div>
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

const DayProgressBar: React.FC = () => {
    const { hours } = useCurrentTime();
    return <progress className="progress progress-secondary w-[350px] mt-2 self-center" value={hours} max="24"></progress>
}

const HourProgressBar: React.FC = () => {
    const { minutes } = useCurrentTime();
    return <progress className="progress progress-accent w-[350px] mt-2 self-center shadow-md" value={minutes} max="60"></progress>
}

const MinuteProgressBar: React.FC = () => {
    const { seconds } = useCurrentTime();
    return <progress className="progress progress-neutral-content w-[350px] mt-1 self-center h-1" value={seconds} max="60"></progress>
}