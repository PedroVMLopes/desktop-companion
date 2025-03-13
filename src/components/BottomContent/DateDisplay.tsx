import { useCurrentDate } from "../../utils/util";

const DateDisplay: React.FC = () => {
    const { formattedDate } = useCurrentDate();
    return <div className="w-full flex justify-center text-2xl text-primary-content font-lobster-title bg-secondary px-2 p-1 text-nowrap rounded-tr-xl rounded-tl-lg">{formattedDate}</div>;
};

export default DateDisplay;
