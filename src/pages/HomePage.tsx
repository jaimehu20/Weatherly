import React from "react"
import { Navbar } from "../components/Navbar/Navbar"
import { Header } from "../components/Header/HomeHeader"
import { TextRevealDemo } from "../components/MagicUI/ScrollText/TextReveal"
import { RightArrow } from "../components/Icons/RightArrow"
import { Footer } from "../components/Footer/Footer"
import { useTheme } from "../context/ThemeContext"

export const Home : React.FC = () => {

    const { theme } = useTheme();

    return <>
        <Navbar />
        <Header />
        <main>
            <TextRevealDemo />
            <div className={`${theme === "dark" ? "text-[#FFFFFF]" : "text-[#000000]"} flex flex-col w-[30%] font-[Poppins] mx-auto pb-[200px]`}>
                <h1 className="text-[60px] font-semibold pb-5">Get Started.</h1>
                <h3 className="pb-5">Discover the weather in your city and beyond.</h3>
                <ul className="mb-10">
                    <li className="flex gap-1">
                        <RightArrow />
                        <p>Built with React, Typescript, Tailwind and MagicUI.</p>
                    </li>
                    <li className="flex gap-1">
                        <RightArrow />
                        <p>All information is sourced from 
                            <a href="https://openweathermap.org/api" target="_blank" rel="noopener noreferrer"> Weather API.</a>
                        </p>
                    </li>
                </ul>
                <button className={`${theme === "dark" ? "border-[#FFFFFF]" : "border-black"} w-[100px] rounded-lg border`}>Begin Now</button>
            </div>
        </main>
        <Footer />
    </>
}