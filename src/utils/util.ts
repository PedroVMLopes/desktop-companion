import { useState, useEffect } from "react"
import axios from "axios"

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
    }).format(date);
  
    return capitalizeFirstLetter(formattedDate)
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

export async function getFloatDollarValue() {
  try {
    const response = await axios.get("https://economia.awesomeapi.com.br/json/last/USD-BRL");
    const dollarValue = parseFloat(response.data.USDBRL.bid);
    return dollarValue;
  } catch (error) {
    return 0;
  }
}