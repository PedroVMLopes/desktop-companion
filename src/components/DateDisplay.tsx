import { useCurrentDate } from "../utils/util";

const DateDisplay: React.FC = () => {
    const { formattedDate } = useCurrentDate();
    return <div className="w-full flex justify-center pt-6 text-3xl font-lobsterTitle text-secondary">{formattedDate}</div>;
};

export default DateDisplay;
