import React, { useState, useEffect} from "react";
import { LocationHour } from "@/interfaces/interfaces";

export const Clock = (props : LocationHour) => {

    const conversion = (timeString : string): Date | undefined => {
        if (props.localtime) {
            const formatedTime = timeString.replace(" ", "T");
            return new Date(formatedTime);
        }
    }

    const initialDate = conversion(props.localtime);

    const [ currentTime, setCurrentTime ] = useState<Date>(initialDate || new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime((prevTime) => new Date(prevTime.getTime() + 1000));
        }, 1000);

        return () => clearInterval(intervalId);
    }, [])

    const time = currentTime.toLocaleTimeString();

    return <>
        <p>{time}</p>
    </>
}