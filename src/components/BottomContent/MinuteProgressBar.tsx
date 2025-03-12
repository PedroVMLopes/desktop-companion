interface MinuteProgressBarProps {
    seconds: number;
}

const MinuteProgressBar: React.FC<MinuteProgressBarProps> = ({ seconds }) => {
    return <progress className="progress progress-neutral-content mt-1 self-center h-1 opacity-60" value={seconds} max="60"></progress>;
};

export default MinuteProgressBar;
