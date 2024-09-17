import React from "react";
import { useTheme } from "@/context/ThemeContext";

export const Fog : React.FC = () => {

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
                className="icon icon-tabler icons-tabler-outline icon-tabler-cloud-fog">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M7 16a4.6 4.4 0 0 1 0 -9a5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7h-12" />
                <path d="M5 20l14 0" />
            </svg>
    </>
}