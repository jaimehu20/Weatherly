import React from "react";
import { Globe } from "../Icons/Globe";
import { DarkModeIcon } from "../Icons/DarkMode";


export const Navbar : React.FC = () => {
    return <>
        <nav className="bg-[rgba(255,255,255,0.8)]">
            <div className="mx-auto flex justify-center h-[48px] text-[14px]">
                <ul className="flex gap-11 items-center">
                    <li className="cursor-pointer h-[21px]"><Globe /></li>
                    <li className="cursor-pointer h-[21px]">Weather Predictions</li>
                    <li className="cursor-pointer h-[21px]">Weather Alerts</li>
                    <li className="cursor-pointer h-[21px]">Interactive Maps</li>
                    <li className="cursor-pointer h-[21px]">News & Updates</li>
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