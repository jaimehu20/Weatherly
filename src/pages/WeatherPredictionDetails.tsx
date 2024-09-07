import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { fetchedForecast, fetchStatus } from "../features/WeatherData/weatherSlice";
import { getForecastData } from "../features/WeatherData/weatherThunks";
import { Navbar } from "../components/Navbar/Navbar";
import { MainHeader } from "../components/Header/MainHeader";
import { Prueba } from "../components/Date/Date";
import { Clock } from "../components/Clock/Clock";

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

    const currentWeather = data.map((info) => {
        const lastUpdated = info.current.last_updated.split(' ')[1];

        const getDayOfWeek = (dateString) => {
            const date = new Date(dateString);
            const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            return daysOfWeek[date.getDay()];  
        };

        return (
           <>
            <div className="flex flex-col bg-[#F0F8FF] w-[38%] mx-auto rounded-[8px] border-2 border-[#002E48] z-10 text-[#002E48] mb-[50px]">
                        <article className="flex justify-around p-[22px] pl-[30px]">
                            <div className="flex">
                                <div>
                                    <h1 className="font-bold text-[30px]">Now</h1>
                                    <p className="text-[23px]">{`${info.current.temp_c} ºC`}</p>
                                    <p className="text-[14px] pb-[20px]">{info.current.condition.text}</p>
                                    <p className="text-[14px]">{`Feels like: ${info.current.feelslike_c} ºC`}</p>
                                    <p className="text-[14px]">{`Forecast: ${info.forecast.forecastday[0].day.mintemp_c} ºC / ${info.forecast.forecastday[0].day.maxtemp_c} ºC`}</p>
                                    <p className="text-[14px]">{`Wind: ${info.current.wind_kph} Km/h`}</p>
                                </div>
                                <div>
                                    <img src={info.current.condition.icon} />
                                </div>
                            </div>
                            <div className="flex flex-col gap-[7px] text-[16px] pt-[8px]">
                                <p>{`Location: ${info.location.name}`}</p>
                                <div className="flex gap-[12px]">
                                    <p>Current time: </p>
                                    <Prueba localtime={info.location.localtime}/>
                                    <Clock localtime={info.location.localtime} />
                                </div>
                                <div className="flex gap-[12px]">
                                    <p>Latest report: </p>
                                    <Prueba localtime={info.current.last_updated}/>
                                    <p>{lastUpdated}</p>
                                </div>
                                <p>{`Visibility: ${info.current.vis_km} Km`}</p>
                                <p>{`Pressure: ${info.current.pressure_mb} mbar`}</p>
                                <p>{`Humidity: ${info.current.humidity}%`}</p>
                                <p>{`Dew point: ${info.current.dewpoint_c} ºC`}</p>
                            </div>
                        </article>
                </div>
                <div className="flex flex-col bg-[#F0F8FF] w-[50%] mx-auto rounded-[8px] border-2 border-[#002E48] z-10 text-[#002E48]">
                    <article className="flex flex-col p-[20px]">
                        <h1 className="font-bold text-[30px] pl-[20px] mb-[30px]">Upcoming 7 days</h1>
                        <table className="w-[80%] mx-auto" >
                            <tr className="text-center bg-white rounded">
                                {info.forecast.forecastday.map((dayData) => {
                                    return (
                                        <td className="font-semibold shadow-lg">{getDayOfWeek(dayData.date)}</td>
                                    )
                                })}
                            </tr>
                            <tr>
                                {info.forecast.forecastday.map((dayData) => {
                                    return (
                                        <td className="cursor-pointer shadow-lg">
                                            <div className="flex flex-col items-center bg-white rounded gap-[10px]">
                                                <img src={dayData.day.condition.icon} className="w-[64px]"/>
                                                <p className="text-[14px]">{`${dayData.day.mintemp_c}ºC / ${dayData.day.maxtemp_c}ºC`}</p>
                                            </div>
                                        </td>
                                    )
                                })}
                            </tr>
                        </table>
                    </article>
                </div>
           </>
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
                {currentWeather}
            <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white"></div>
        </section>

        </main>
    </>
}