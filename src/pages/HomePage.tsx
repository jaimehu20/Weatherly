import React from "react"
import { Navbar } from "../components/Navbar/Navbar"
import { Header } from "../components/Header/Header"
import { TextRevealDemo } from "../components/MagicUI/ScrollText/TextReveal"
import { RightArrow } from "../components/Icons/RightArrow"
import { Footer } from "../components/Footer/Footer"

export const Home : React.FC = () => {
    return <>
        <Navbar />
        <Header />
        <main>
            <TextRevealDemo />
            <div className="flex flex-col w-[30%] font-[Poppins] mx-auto pb-[200px]">
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
                            <a href="https://openweathermap.org/api"> Weather API.</a>
                        </p>
                    </li>
                </ul>
                <button className="w-[100px] rounded-lg border border-black">Begin Now</button>
            </div>
        </main>
        <Footer />
    </>
}