import React from "react"
import { Navbar } from "../components/Navbar/Navbar"
import { Header } from "../components/Header/HomeHeader"
import { Slogan } from "../components/MagicUI/ScrollText/TextReveal"
import { RightArrow } from "../components/Icons/RightArrow"
import { Footer } from "../components/Footer/Footer"
import { useTheme } from "../context/ThemeContext"

export const Home : React.FC = () => {

    const { theme } = useTheme();

    return <>
        <Navbar />
        <Header />
        <main>
            <Slogan />
            <div className={`${theme === "dark" ? "text-[#EDEDED]" : "text-[#26292B]"} flex flex-col w-[30%] max-1000:w-[90%] font-[Poppins] mx-auto pb-[200px] max-1000:pb-[150px] max-1000:max-w-[514px]`}>
                <h1 className="text-[60px] max-1000:text-[50px] max-1000:text-center font-semibold pb-5">Get Started.</h1>
                <h3 className="pb-5 max-1000:text-center">Discover the weather in your city and beyond.</h3>
                <ul className="mb-10">
                    <li className="flex gap-1 max-1000:gap-[14px] max-1000:pl-[6px]">
                        <RightArrow />
                        <p>Built with React, Typescript, Tailwind and MagicUI.</p>
                    </li>
                    <li className="flex gap-1 max-1000:gap-[14px] max-1000:pl-[6px]">
                        <RightArrow />
                        <p>All information is sourced from 
                            <a href="https://openweathermap.org/api" target="_blank" rel="noopener noreferrer"> Weather API </a>
                            and 
                            <a href="https://newsapi.org/" target="_blank" rel="noopener noreferrer"> News API.</a>
                        </p>
                    </li>
                </ul>
                <button className={`${theme === "dark" ? "border-[#EDEDED]" : "border-black"} w-[100px] rounded-lg border max-1000:self-center`}>Begin Now</button>
            </div>
        </main>
        <Footer />
    </>
}