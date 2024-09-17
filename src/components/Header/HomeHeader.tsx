import React from "react";
import { useTheme } from "@/context/ThemeContext";
import { Particles } from "@/components/MagicUI/Particles/ParticlesComponent";

export const Header : React.FC = () => {

    const { theme } = useTheme();

    return <>
        <header>
            <div className={`${theme === "dark" ? "bg-[#26292B]" : "bg-[#EDEDED]"} relative flex h-[500px] max-1000:h-[250px] w-100 flex-col items-center justify-center overflow-hidden mx-auto mt-20 max-1000:mt-[60px]`}>
                <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl max-1000:text-[75px] font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/100">
                    Weatherly
                </span>
                <Particles
                    className="absolute inset-0"
                    quantity={100}
                    ease={80}
                    color={`${theme === "dark" ? "#EDEDED" : "#26292B"}`}
                    refresh />
            </div>
        </header>
    </>
}