import React from "react";
import { Globe } from "../Icons/Globe";
import { DarkModeIcon } from "../Icons/DarkMode";
import { NavLink } from "react-router-dom";


export const Navbar : React.FC = () => {
    return <>
        <nav className="bg-[rgba(255,255,255,0.8)]">
            <div className="mx-auto flex justify-center h-[48px] text-[14px]">
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
                    <li className="cursor-pointer h-[21px]">Guides & Tips</li>
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