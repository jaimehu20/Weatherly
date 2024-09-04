import React from "react";
import { Navbar } from "../components/Navbar/Navbar";
import { MainHeader } from "../components/Header/MainHeader";
import { BlurFadeDemo } from "../components/MagicUI/Blur/Blur";
import { Footer } from "../components/Footer/Footer";

export const WeatherPredictions : React.FC = () => {

    return <>
        <Navbar />
        <MainHeader title="Weather Predictions"/>
        <main className="mt-20 mb-20">
            <section className="bg-[url(https://besthqwallpapers.com/Uploads/16-2-2018/40884/4k-blue-sky-clouds-sun.jpg)] relative h-[140vh] w-full bg-cover bg-center flex justify-center">
                <div className="absolute inset-1 bg-gradient-to-r from-white via-transparent to-white"></div>
                <BlurFadeDemo />
                <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white"></div>
            </section>
        </main>
        <Footer />
    </>
}