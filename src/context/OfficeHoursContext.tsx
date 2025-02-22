import { createContext, useContext, useState } from "react";

const OfficeHoursContext = createContext<{ hours: number; setHours: (val: number) => void } | undefined>(undefined);

export const OfficeHoursProvider = ({ children }: { children: React.ReactNode}) => {
    const [ hours, setHours ] = useState(8);
    return <OfficeHoursContext.Provider value={{ hours, setHours }}>{children}</OfficeHoursContext.Provider>
}

export const useOfficeHours = () => {
    const context = useContext(OfficeHoursContext);
    if (!context) throw new Error("useOfficeHours must be used within a ValueProvider");
    return context;
}