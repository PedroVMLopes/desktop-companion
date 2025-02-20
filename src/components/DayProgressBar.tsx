interface DayProgressBarProps {
    hours: number;
}

const DayProgressBar: React.FC<DayProgressBarProps> = ({ hours }) => {
    return <progress className="progress progress-secondary w-[356px] mt-2 self-center" value={hours} max="24"></progress>;
};

export default DayProgressBar;
