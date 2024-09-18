"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { Navbar } from "@/components/Navbar/Navbar";
import DotPattern from "@/components/MagicUI/Background/Darkmode/DarkmodeComponent";
import { MainHeader } from "@/components/Header/MainHeader";
import { SparklesTextDemo } from "@/components/MagicUI/Sparkles/Sparkles";
import { TechnologiesDesktop } from "@/components/MagicUI/OrbitingCircles/TechnologiesDesktop";
import { AnimatedBeamMultipleOutputDemo } from "@/components/MagicUI/AnimatedBeam/AnimatedBeam";
import { Footer } from "@/components/Footer/Footer";
import { useTheme } from "@/context/ThemeContext";
import { TechnologiesMobile } from "@/components/MagicUI/OrbitingCircles/TechnologiesMobile";

export const About = () => {

    const { theme } = useTheme();

    return <>
        <Navbar />
      <div className="relative flex w-full flex-col items-center justify-start overflow-hidden rounded-lg bg-background md:shadow-xl">
        <MainHeader title="About us" />
        <main className={`${theme === "dark" ? "text-[#EDEDED]" : "text-[#26292B]"} w-[80%] min-1000:w-[90%] mt-[150px] font-[Poppins]`}>
            <section className="mb-[150px] max-1000:mb-[80px]">
                <SparklesTextDemo title="Weatherly"/>
                <p className="mt-[50px] text-[40px] max-1000:text-[24px] min-1000:text-[25px]">
                    Weatherly is a free, non-profit web application that allows users to check current and future weather conditions for any city in the world. 
                </p>
                <p className="mt-[30px] text-[20px]">
                    The platform provides detailed information such as temperature, humidity, wind speed, and precipitation forecasts. In addition to weather forecasts, 
                    Weatherly features a news section that covers current events related to weather phenomena, extreme climate events, and global weather trends. 
                    The app uses free resources to obtain its weather data and is not commercially driven, offering an accessible service for users of all backgrounds.
                </p>
            </section>
            <section className="min-1000:mb-[100px]">
                <SparklesTextDemo title="Technologies and tools"/>
                <p className="mt-[50px] text-[40px] max-1000:text-[24px] min-1000:text-[25px]">
                    The Weatherly application is built using a modern tech stack to ensure a smooth, responsive, and scalable user experience. 
                </p>
                <div className="flex max-1000:flex-col">
                    <p className="mt-[30px] text-[20px] w-[70%] max-1000:w-full min-1000:w-full leading-loose">
                        The frontend is developed with React for building dynamic user interfaces, while Redux is used for efficient state management, ensuring that data such as weather information and user preferences
                        are easily accessible across components. React-Router enables seamless navigation between different pages, allowing users to switch between weather forecasts and news effortlessly.
                        The UI is styled with Tailwind CSS, providing a flexible and responsive design system, while TypeScript ensures type safety and better code maintainability. 
                        Additionally, MagicUI is used to enhance the app’s visual appeal and interactivity, providing sleek animations and components.
                    </p>
                    <TechnologiesDesktop />
                    <TechnologiesMobile />
                </div>
            </section>
            <section>
                <SparklesTextDemo title="APIs used"/>
                <p className="mt-[50px] text-[40px] max-1000:text-[24px] min-1000:text-[25px]">
                    Weatherly integrates two key APIs to provide accurate and up-to-date information on both weather conditions and related news.   
                </p>
                <div className="flex max-1000:flex-col">
                    <AnimatedBeamMultipleOutputDemo />
                    <div className="flex flex-col items-center">
                        <p className="mt-[30px] text-[20px] w-[70%] max-1000:w-full leading-loose">
                            <b>WeatherAPI:</b> To deliver detailed weather data, Weatherly uses WeatherAPI, a free API that offers comprehensive information about current conditions, 
                            short-term and long-term forecasts, and other relevant meteorological details. This API provides access to data such as temperature, humidity, 
                            wind speed, and forecasts, ensuring that users receive accurate and timely information for any city worldwide.
                        </p>
                        <p className="mt-[30px] text-[20px] w-[70%] max-1000:w-full leading-loose">
                            <b>GNews API:</b> For the news section, Weatherly employs GNews API, an API that provides access to a wide range of current news. This API allows the integration of news related 
                            to weather phenomena, climate events and much more, offering users relevant and updated information on how weather impacts different regions and any significant developments 
                            in the meteorological sphere.
                        </p>
                    </div>
                </div>
            </section>
        </main>
        <Footer />
        <DotPattern className={cn( "[mask-image:radial-gradient(6000px_circle_at_center,white,transparent)]",)} />
      </div>
    </>
}