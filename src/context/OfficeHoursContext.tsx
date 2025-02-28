import { createContext, useContext, useState, useRef } from "react";

const OfficeHoursContext = createContext<{
    hours: number;
    setHours: (val: number) => void;
    elapsedMinutes: number;
    startTimer: () => void;
    stopTimer: () => void;
} | undefined>(undefined);

export const OfficeHoursProvider = ({ children }: { children: React.ReactNode }) => {
    const [hours, setHours] = useState(8);
    const [elapsedMinutes, setElapsedMinutes] = useState(0);
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    const startTimer = () => {
        stopTimer();
        setElapsedMinutes(0);
        
        timerRef.current = setInterval(() => {
            setElapsedMinutes(prev => {
                if (prev + 1 >= hours * 60) {
                    stopTimer();
                    return hours * 60;
                }
                return prev + 1;
            });
        }, 10000);
    };

    const stopTimer = () => {
        if (timerRef.current) {
            clearInterval(timerRef.current);
            timerRef.current = null;
        }
    };

    return (
        <OfficeHoursContext.Provider value={{ hours, setHours, elapsedMinutes, startTimer, stopTimer }}>
            {children}
        </OfficeHoursContext.Provider>
    );
};

export const useOfficeHours = () => {
    const context = useContext(OfficeHoursContext);
    if (!context) throw new Error("useOfficeHours must be used within a ValueProvider");
    return context;
};
