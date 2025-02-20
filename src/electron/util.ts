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