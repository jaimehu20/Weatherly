import React from "react"
import { Navbar } from "@/components/Navbar/Navbar"
import { Header } from "@/components/Header/HomeHeader"
import { Slogan } from "@/components/MagicUI/ScrollText/TextReveal"
import { Footer } from "@/components/Footer/Footer"
import { useTheme } from "@/context/ThemeContext"
import { useNavigate } from "react-router-dom"

export const Home : React.FC = () => {

    const navigate = useNavigate();
    const { theme } = useTheme();

    const handleNavigate = () => {
        navigate("/weather-predictions")
    }

    return <>
        <Navbar />
        <Header />
        <main>
            <Slogan />
            <div className={`${theme === "dark" ? "text-lightGray" : "text-[#26292B]"} flex flex-col w-[30%] max-1000:w-[90%] min-1000:w-[50%] min-1000:items-center font-[Poppins] mx-auto pb-[200px] max-1000:pb-[150px] max-1000:max-w-[514px]`}>
                <h1 className="text-[60px] max-1000:text-[50px] max-1000:text-center font-semibold pb-5">Get Started.</h1>
                <h3 className="pb-5 max-1000:text-center">Discover the weather in your city and beyond.</h3>
                <button className={`${theme === "dark" ? "border-[#EDEDED]" : "border-black"} w-[100px] rounded-lg border max-1000:self-center`} onClick={handleNavigate}>Begin Now</button>
            </div>
        </main>
        <Footer />
    </>
}