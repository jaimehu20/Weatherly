import React from "react";
import { Linkedin } from "../Icons/Linkedin";
import { Github } from "../Icons/Github";

export const Header : React.FC = () => {
    return <>
        <header>
            <div className="flex justify-between bg-[#306187]">
                <img src="./logo.webp" />
                <div className="flex items-center gap-2 pr-2">
                    <Linkedin />
                    <Github />
                </div>
            </div>
        </header>
    </>
}