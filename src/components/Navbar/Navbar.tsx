import React from "react";
import { Globe } from "../Icons/Globe";
import { DarkModeIcon } from "../Icons/DarkMode";
import { NavLink } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";

export const Navbar : React.FC = () => {

    const { theme } = useTheme();

    return <>
        <nav className={`${theme === "dark" ? "bg-[#26292B]" : "bg-[rgba(255,255,255,0.8)]"}`}>
            <div className={`${theme === "dark" ? "text-white" : ""} mx-auto flex justify-center h-[48px] text-[14px]`}>
                <ul className="flex gap-11 items-center">
                    <li className="cursor-pointer h-[21px]">
                        <NavLink to={"/"}>
                            <Globe />
                        </NavLink>
                    </li>
                    <li className="cursor-pointer h-[21px]">
                        <NavLink to={"/weather-predictions"}>
                            Weather Predictions
                        </NavLink>
                    </li>
                    <li className="cursor-pointer h-[21px]">
                        <NavLink to={"/news-&-updates"}>
                            News & Updates
                        </NavLink>
                    </li>
                    <li className="cursor-pointer h-[21px]">
                        <NavLink to={"/guides-&-tips"}>
                            Guides & Tips
                        </NavLink>
                    </li>
                    <li className="cursor-pointer h-[21px]">Weather Stations</li>
                    <li className="cursor-pointer h-[21px]">Contact</li>
                    <li className="cursor-pointer h-[21px]">About Us</li>
                    <li className="cursor-pointer h-[21px]">
                        <DarkModeIcon />
                    </li>
                </ul>
            </div>
        </nav>
    </>
}