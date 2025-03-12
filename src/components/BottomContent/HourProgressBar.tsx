interface HourProgressBarProps {
    minutes: number;
}

const HourProgressBar: React.FC<HourProgressBarProps> = ({ minutes }) => {
    return <progress className="progress progress-primary self-center shadow-md my-1" value={minutes} max="60"></progress>;
};

export default HourProgressBar;
