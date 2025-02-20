interface HourProgressBarProps {
    minutes: number;
}

const HourProgressBar: React.FC<HourProgressBarProps> = ({ minutes }) => {
    return <progress className="progress progress-accent w-[356px] mt-2 self-center shadow-md" value={minutes} max="60"></progress>;
};

export default HourProgressBar;
