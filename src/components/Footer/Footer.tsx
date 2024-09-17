import React from "react";
import { Heart } from "@/components/Icons/Heart";
import { Linkedin } from "@/components/Icons/Linkedin";
import { Github } from "@/components/Icons/Github";
import { useTheme } from "@/context/ThemeContext";

export const Footer : React.FC = () => {

    const { theme } = useTheme();

    return <>
            <footer className={`${theme === "dark" ? "bg-[#2E3239] text-[#EDEDED]" : "bg-[#E7EBEE]"} w-[98%] max-1000:w-[92%] rounded-lg shadow-lg m-4 z-10`}>
                <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                    <span className="text-sm text-black-500 sm:text-center dark:text-black-400">© 2024 <a href="https://jaimehurtado-porfolio.netlify.app/" className="hover:underline">Jaime Hurtado</a>. Made with <Heart />
                    </span>
                    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-black dark:text-black-400 sm:mt-0 max-1000:hidden">
                        <li className="flex">
                            <a href="https://www.linkedin.com/in/jaime-hurtado-ure%C3%B1a-b70789296/" target="_blank" rel="noopener noreferrer" className="hover:underline me-4 md:me-6"><Linkedin /></a>
                        </li>
                        <li className="flex">
                            <a href="https://github.com/jaimehu20" target="_blank" rel="noopener noreferrer" className="hover:underline me-4 md:me-6"><Github /></a>
                        </li>
                    </ul>
                </div>
            </footer>
    </>
} 