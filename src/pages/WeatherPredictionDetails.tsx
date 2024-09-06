import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { fetchedForecast, fetchStatus } from "../features/WeatherData/weatherSlice";
import { getForecastData } from "../features/WeatherData/weatherThunks";
import { Navbar } from "../components/Navbar/Navbar";
import { MainHeader } from "../components/Header/MainHeader";

export const WeatherPredictionDetails = () => {

    const data = useAppSelector(fetchedForecast);
    const dispatch = useAppDispatch();
    const status = useAppSelector(fetchStatus);
    let { city } = useParams();
   

    useEffect(() => {
        if (status === "fulfilled") {
            dispatch(getForecastData(city));
        }
    }, [])

    const forecast = data.map((info) => {
        return (
            <div className="flex flex-col bg-[#F0F8FF] w-[80%] mx-auto rounded-[8px] border-2 border-[#002E48] z-10 text-[#002E48]">
                        <article className="flex pl-[30px]">
                            <div>
                                <h2 className="font-bold text-[30px]">Now</h2>
                                <p className="text-[23px] pb-[20px]">{`${info.current.temp_c} º`}</p>
                                <p className="text-[14px]">{`Feels like: ${info.current.feelslike_c} º`}</p>
                                <p className="text-[14px]">{`Forecast: ${info.forecast.forecastday[0].day.mintemp_c} º / ${info.forecast.forecastday[0].day.maxtemp_c} º`}</p>
                            </div>
                            <div>
                                <p>hola</p>
                            </div>
                        </article>
                </div>
        )
    })
    
    return <>
        <Navbar />
        <MainHeader title="Weather Details"/>
        <main className="mt-20 mb-20">
        <section className="bg-[url(./sky.webp)] relative h-[150vh] w-full bg-cover bg-center flex flex-col font-[Poppins]">
            <div className="absolute inset-1 bg-gradient-to-r from-white via-transparent to-white"></div>
                <div className="w-[20%] text-center mx-auto mb-[40px] z-10">
                    <h1 className="text-[40px] text-[#002E48] font-semibold">{city}</h1>
                </div>
                {forecast}
            <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white"></div>
        </section>

        </main>
    </>
}