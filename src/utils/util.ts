import { useState, useEffect } from "react"

export function isDev(): boolean{
    return process.env.NODE_ENV === 'development';
}

export const useCurrentTime = () => {
    const [time, setTime] = useState(new Date());
  
    useEffect(() => {
      const interval = setInterval(() => {
        setTime(new Date());
      }, 1000);
  
      return () => clearInterval(interval);
    }, []);
  
    return {
        hours: time.getHours(),
        minutes: time.getMinutes(),
        seconds: time.getSeconds(),
    };
};

const capitalizeFirstLetter = (text: string): string => {
    return text.charAt(0).toUpperCase() + text.slice(1);
};
  
const getFormattedDate = (date: Date): string => {
    const formattedDate = new Intl.DateTimeFormat("pt-BR", {
      weekday: "long",
      day: "2-digit",
      month: "long",
    }).format(date);
  
    return formattedDate
      .split(" ")
      .map(word => (word === "de" ? word : capitalizeFirstLetter(word)))
      .join(" ");
};
  
export const useCurrentDate = () => {
    const [formattedDate, setFormattedDate] = useState(getFormattedDate(new Date()));
  
    useEffect(() => {
      const interval = setInterval(() => {
        setFormattedDate(getFormattedDate(new Date()));
      }, 60000); // Atualiza a cada 1 minuto
  
      return () => clearInterval(interval);
    }, []);
  
    return { formattedDate };
};

