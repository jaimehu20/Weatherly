import React from "react";
import { DateProp } from "../../interfaces/interfaces";

export const Prueba = (props : DateProp) => {
    
    const formatedDate = (dateString: string): string => {
        const prueba = new Date(dateString.replace(" ", "T"));
        const months = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'];
    
        const day = prueba.getDate();
        const month = months[prueba.getMonth()];
        const year = prueba.getFullYear();
    
        return `${day} de ${month} de ${year}`;
    }
    
    const finalDate = formatedDate(props.localtime);

    return (
        <p>{`${finalDate},`}</p>
    )
}