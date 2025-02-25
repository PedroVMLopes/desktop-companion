interface ClockProps {
    hours: number;
    minutes: number;
    seconds: number;
}

const Clock: React.FC<ClockProps> = ({ hours, minutes }) => {
    return (
        <div className="flex flex-col items-center py-4 text-6xl">
            <div className="grid grid-flow-col gap-2 text-center auto-cols-max font-quicksand">
                <div className="flex flex-col p-2 bg-accent text-accent-content rounded-box shadow-xl">
                    <span className="countdown justify-center p-2">
                        <span style={{ "--value": hours } as React.CSSProperties}></span>
                    </span>
                </div>
                <p className="flex items-center text-3xl font-semibold">:</p>
                <div className="flex flex-col p-2 rounded-box bg-base-300 text-neutral-content shadow-xl">
                    <span className="countdown justify-center p-2">
                        <span style={{ "--value": minutes } as React.CSSProperties}></span>
                    </span>
                </div>
                {/* The seconds monitor in the clock consumes a huge amount of processing */}
                {/*
                <p className="flex items-center text-3xl font-semibold">:</p>
                <div className="flex flex-col p-2 rounded-box bg-base-300 text-neutral-content shadow-xl">
                    <span className="countdown justify-center p-2">
                        <span style={{ "--value": seconds } as React.CSSProperties}></span>
                    </span>
                </div>
                */}
                
            </div>
        </div>
    );
};

export default Clock;
