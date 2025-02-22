
interface DayProgressBarProps {
    dayHours: number;
}

const DayProgressBar: React.FC<DayProgressBarProps> = ({ dayHours }) => {
    return <progress className="progress progress-primary mt-2 self-center max-w-[320px] shadow-md" value={dayHours} max="24"></progress>;
};

export default DayProgressBar;
