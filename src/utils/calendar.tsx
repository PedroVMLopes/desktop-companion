import { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import DateDisplay from "../components//BottomContent/DateDisplay";

export function CalendarComponent() {
    const [date, setDate] = useState<Date | undefined>();
    return (
      <div className="p-0">
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
                chevron: "fill-neutral"
            }}
        />
      </div>
  );
}

export default CalendarComponent;