import { useCurrentDate } from "../../utils/util";

const DateDisplay: React.FC = () => {
    const { formattedDate } = useCurrentDate();
    return <div className="w-full flex justify-center text-3xl font-lobsterTitle text-primary">{formattedDate}</div>;
};

export default DateDisplay;
