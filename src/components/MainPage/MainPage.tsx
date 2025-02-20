import { useCurrentTime } from "../../electron/util"

export function MainPage() {
    return (
        <div>
            <Clock />
        </div>
    )
}

const Clock: React.FC = () => {
    const { hours, minutes, seconds } = useCurrentTime();

    return (
        <div className="flex flex-col items-center gap-4 p-4">
            <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
                <div className="flex flex-col p-2 bg-accent text-accent-content rounded-box shadow-lg">
                    <span className="countdown font-mono text-6xl justify-center p-2">
                        <span style={{ "--value": hours } as React.CSSProperties}></span>
                    </span>
                </div>
                <div className="flex flex-col p-2 bg-neutral rounded-box text-primary shadow-lg">
                    <span className="countdown font-mono text-6xl justify-center p-2">
                        <span style={{ "--value": minutes } as React.CSSProperties}></span>
                    </span>
                </div>
                <div className="flex flex-col p-2 bg-neutral rounded-box text-primary shadow-lg">
                    <span className="countdown font-mono text-6xl justify-center p-2">
                        <span style={{ "--value": seconds } as React.CSSProperties}></span>
                    </span>
                </div>
            </div>
        </div>
    ) 
}