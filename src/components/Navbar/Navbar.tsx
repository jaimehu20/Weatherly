import React, { useState } from "react";
import { Globe } from "../Icons/Globe";
import { DarkModeIcon } from "../Icons/DarkMode";
import { NavLink } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import { Spin as Hamburger } from 'hamburger-react'
import { Linkedin } from "../Icons/Linkedin";
import { Github } from "../Icons/Github";

export const Navbar : React.FC = () => {

    const { theme } = useTheme();
    const [ isOpened, setIsOpened ] = useState<boolean>(false);

    return <>
        <nav className={`${theme === "dark" ? "bg-[#26292B]" : "bg-[rgba(255,255,255,0.8)]"} ${isOpened ? "h-[100vh]" : ""} font-[Poppins]`}>
            <div className={`${theme === "dark" ? "text-white" : ""} h-[48px] text-[14px] min-1000:mx-auto min-1000:flex min-1000:justify-center`}>
                <ul className="flex gap-11 items-center max-1000:justify-between">
                    <li className="cursor-pointer h-[21px] max-1000:ml-[6px]">
                        <NavLink to={"/"}>
                            <Globe className={`${theme === "dark" ? "#EDEDED" : "#2E3239"}`}/>
                        </NavLink>
                    </li>
                    <li className="max-1000:hidden cursor-pointer h-[21px]">
                        <NavLink to={"/weather-predictions"}>
                            Weather Predictions
                        </NavLink>
                    </li>
                    <li className="max-1000:hidden cursor-pointer h-[21px]">
                        <NavLink to={"/news-&-updates"}>
                            News & Updates
                        </NavLink>
                    </li>
                    <li className="max-1000:hidden cursor-pointer h-[21px]">
                        <NavLink to={"/guides-&-tips"}>
                            Guides & Tips
                        </NavLink>
                    </li>
                    <li className="max-1000:hidden cursor-pointer h-[21px]">
                        <NavLink to={"/about-us"}>
                            About
                        </NavLink>
                    </li>
                    <li className="cursor-pointer h-[21px]">
                        <DarkModeIcon />
                    </li>
                    <li className="min-1000:hidden">
                        <Hamburger rounded={true} size={20} onToggle={() => setIsOpened(!isOpened)}/>
                    </li>
                </ul>
            </div>
            <div
                className={`transition-max-height duration-300 ease-in-out overflow-hidden ${isOpened ? "max-h-[100vh]" : "max-h-0"} min-1000:hidden`}>
                <ul className={`${theme === "dark" ? "text-[#EDEDED]" : ""} flex flex-col items-baseline gap-[28px] p-4 mt-[24px] font-semibold text-[24px]`}>
                    <li className="cursor-pointer">
                        <NavLink to={"/weather-predictions"}>
                            Weather Predictions
                        </NavLink>
                    </li>
                    <li className="cursor-pointer">
                        <NavLink to={"/news-&-updates"}>
                            News & Updates
                        </NavLink>
                    </li>
                    <li className="cursor-pointer">
                        <NavLink to={"/guides-&-tips"}>
                            Guides & Tips
                        </NavLink>
                    </li>
                    <li className="cursor-pointer">
                        <NavLink to={"/about-us"}>
                            About
                        </NavLink>
                    </li>
                </ul>
                <div className="flex justify-center gap-[30px] mt-[250px]">
                    <Linkedin />
                    <Github />
                </div>
            </div>
        </nav>
    </>
}