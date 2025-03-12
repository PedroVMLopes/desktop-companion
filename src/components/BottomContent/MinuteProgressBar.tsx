interface MinuteProgressBarProps {
    seconds: number;
}

const MinuteProgressBar: React.FC<MinuteProgressBarProps> = ({ seconds }) => {
    return <progress className="progress progress-neutral-content self-center opacity-60" value={seconds} max="60"></progress>;
};

export default MinuteProgressBar;
