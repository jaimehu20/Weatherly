import React from "react";
import { useTheme } from "../../context/ThemeContext";

export const Wind : React.FC = () => {

    const { theme } = useTheme();

    return <>
        <svg  
            xmlns="http://www.w3.org/2000/svg"  
            width="24"  
            height="24"  
            viewBox="0 0 24 24"  
            fill="none"  
            stroke={theme === "dark" ? "#EDEDED" : "#002E48"} 
            strokeWidth="2"  
            strokeLinecap="round"  
            strokeLinejoin="round"  
            className="icon icon-tabler icons-tabler-outline icon-tabler-wind">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M5 8h8.5a2.5 2.5 0 1 0 -2.34 -3.24" />
            <path d="M3 12h15.5a2.5 2.5 0 1 1 -2.34 3.24" />
            <path d="M4 16h5.5a2.5 2.5 0 1 1 -2.34 3.24" />
        </svg>
    </>
}