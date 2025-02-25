interface HourProgressBarProps {
    minutes: number;
}

const HourProgressBar: React.FC<HourProgressBarProps> = ({ minutes }) => {
    return <progress className="progress progress-accent self-center shadow-md" value={minutes} max="60"></progress>;
};

export default HourProgressBar;
