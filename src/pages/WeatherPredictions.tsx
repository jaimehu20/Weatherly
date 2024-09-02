import React from "react";
import { Navbar } from "../components/Navbar/Navbar";
import { MainHeader } from "../components/Header/MainHeader";
import { getLocationData } from "../features/WeatherData/weatherThunks";
import { useAppDispatch } from "../app/hooks";
import { Card } from "../components/WeatherCard/Card";


export const WeatherPredictions : React.FC = () => {

    const dispatch = useAppDispatch();
    
    const handleSearch = async () => {
         await dispatch(getLocationData("Londres"))
    }

    return <>
        <Navbar />
        <MainHeader title="Weather Predictions"/>
        <main className="mt-40">
            <section className="bg-[url(https://besthqwallpapers.com/Uploads/16-2-2018/40884/4k-blue-sky-clouds-sun.jpg)] relative h-[100vh] w-full bg-cover bg-center flex justify-center mt-20">
                <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white"></div>
                <div className="flex flex-col w-[80%] mx-auto absolute z-10 mt-[134px]">
                    <div className="grid grid-cols-3 grid-rows-3 gap-10">
                        <div className="row-span-3">
                            <Card />
                        </div>
                        <div>
                            <Card />
                        </div>
                        <div>
                            <Card />
                        </div>
                        <div className="col-start-2 row-start-2">
                            <Card />
                        </div>
                        <div className="col-start-3 row-start-2">
                            <Card />
                        </div>
                        <div className="col-start-2 row-start-3">
                            <Card />
                        </div>
                        <div className="col-start-3 row-start-3">
                            <Card />
                        </div>
                    </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white"></div>
            </section>
        </main>
    </>
}