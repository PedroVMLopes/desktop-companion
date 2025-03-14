import { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import DateDisplay from "../components//BottomContent/DateDisplay";

export function CalendarComponent() {
    const [date, setDate] = useState<Date | undefined>();
    return (
      <div className="p-0 pb-1.5">
        <DateDisplay />
        <DayPicker
            animate
            mode="single"
            selected={date}
            onSelect={setDate}
            className="px-0"
            hideWeekdays 
            classNames={{
                today: "border-primary",
                selected: "bg-primary rounded-box",
                chevron: "fill-neutral",
                caption_label: "p-2.5 font-lobster-text",
                day: "h-[36px] w-[42px]",
                day_button: "flex justify-center items-center w-full h-full cursor-pointer"
            }}
        />
      </div>
  );
}

export default CalendarComponent;