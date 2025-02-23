import { useOfficeHours } from "../context/OfficeHoursContext";

const OfficeHoursProgressBar = () => {
    const { hours, elapsedMinutes } = useOfficeHours();
    return (
        <progress 
            className="progress progress-primary mt-2 self-center max-w-[320px] shadow-md" 
            value={elapsedMinutes} 
            max={hours * 60}>
        </progress>
    );
};

export default OfficeHoursProgressBar;
