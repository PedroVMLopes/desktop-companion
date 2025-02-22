
interface DayProgressBarProps {
    hours: number;
}

const DayProgressBar: React.FC<DayProgressBarProps> = ({ hours }) => {
    return <progress className="progress progress-primary mt-2 self-center max-w-[320px] shadow-md" value={hours} max="24"></progress>;
};

export default DayProgressBar;
