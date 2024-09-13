"use client";

import { useTheme } from "../../../context/ThemeContext";
import { Particles } from "../Particles/ParticlesComponent";

export const ParticlesDemo = () => {
  
  const { theme } = useTheme();

  return (
    <div className={`${theme === "dark" ? "bg-[#26292B]" : "bg-[#EDEDED]"} relative flex h-[500px] w-100 flex-col items-center justify-center overflow-hidden mx-auto mt-20`}>
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/100">
        Weatherly
      </span>
      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        color={`${theme === "dark" ? "#EDEDED" : "#000000"}`}
        refresh
      />
    </div>
  );
};

