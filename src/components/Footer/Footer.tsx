import React from "react";
import { Heart } from "../Icons/Heart";
import { Linkedin } from "../Icons/Linkedin";
import { Github } from "../Icons/Github";

export const Footer : React.FC = () => {
    return <>
            <footer className="bg-white rounded-lg shadow m-4 bg-[#E7EBEE]">
                <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                    <span className="text-sm text-black-500 sm:text-center dark:text-black-400">© 2024 <a href="https://jaimehurtado-porfolio.netlify.app/" className="hover:underline">Jaime Hurtado</a>. Made with love <Heart />
                    </span>
                    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-black dark:text-black-400 sm:mt-0">
                        <li className="flex">
                            <a href="#" className="hover:underline me-4 md:me-6"><Linkedin /></a>
                        </li>
                        <li className="flex">
                            <a href="#" className="hover:underline me-4 md:me-6"><Github /></a>
                        </li>
                    </ul>
                </div>
            </footer>
    </>
} 