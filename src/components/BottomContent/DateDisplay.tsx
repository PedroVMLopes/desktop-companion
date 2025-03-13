import { useCurrentDate } from "../../utils/util";

const DateDisplay: React.FC = () => {
    const { formattedDate } = useCurrentDate();
    return <div className="w-full flex text-2xl text-primary-content font-lobster-title bg-secondary px-2 p-1 pb-2 text-nowrap rounded-tr-lg rounded-tl-lg">{formattedDate}</div>;
};

export default DateDisplay;
