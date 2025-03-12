import { useOfficeHours } from "../../context/OfficeHoursContext";

const OfficeHoursProgressBar = () => {
    const { hours, elapsedMinutes } = useOfficeHours();
    return (
        <progress 
            className="progress progress-accent mt-2 self-center shadow-md"
            value={elapsedMinutes} 
            max={hours * 60}>
        </progress>
    );
};

export default OfficeHoursProgressBar;
