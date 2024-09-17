import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { fetchedForecast, fetchStatus } from "../features/WeatherData/weatherSlice";
import { getForecastData } from "../features/WeatherData/weatherThunks";
import { Navbar } from "../components/Navbar/Navbar";
import { MainHeader } from "../components/Header/MainHeader";
import { Prueba } from "../components/Date/Date";
import { Clock } from "../components/Clock/Clock";
import { Footer } from "../components/Footer/Footer";
import BlurFade from "../components/MagicUI/Blur/BlurFadeComponent";
import { WeatherResponse } from "../interfaces/interfaces";
import { useTheme } from "../context/ThemeContext";

export const WeatherPredictionDetails = () => {

    const data = useAppSelector(fetchedForecast);
    const dispatch = useAppDispatch();
    const status = useAppSelector(fetchStatus);
    let { city } = useParams();
    const [clickedIndex, setClickedIndex] = useState(null);
    const { theme } = useTheme();
    
    const handleClick = (index : any) => {
        setClickedIndex(clickedIndex === index ? null : index);
      };
   

    useEffect(() => {
        if (status === "fulfilled" && city) {
            dispatch(getForecastData(city));
        }
    }, [])

    const currentWeather = data.map((info : any) => {
        console.log(data)
        const lastUpdated = info.current.last_updated.split(' ')[1];
        const getDayOfWeek = (dateString : string) => {
            const date = new Date(dateString);
            const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            return daysOfWeek[date.getDay()];  
        };

        return (
           <>
                <div className={`${theme === "dark" ? "bg-[#26292B] border-[#EDEDED] text-[#EDEDED]" : "bg-[#F0F8FF] border-[#002E48] text-[#002E48]"} flex flex-col w-[38%] max-1000:w-[95%] max-1000:max-w-[655px] mx-auto rounded-[8px] border-2  z-10  mb-[50px]`}>
                        <article className="flex justify-around p-[22px] pl-[30px] max-1000:pl-[6px] max-1000:pr-[6px]">
                            <div className="flex max-1000:mr-[7px]">
                                <div className="max-1000:w-[138px]">
                                    <h1 className="font-bold text-[30px]">Now</h1>
                                    <p className="text-[23px] max-1000:text-[14px]">{`${info.current.temp_c} ºC`}</p>
                                    <p className="text-[16px] pb-[20px] max-1000:text-[12px]">{info.current.condition.text}</p>
                                    <p className="text-[16px] max-1000:text-[12px]">{`Feels like: ${info.current.feelslike_c} ºC`}</p>
                                    <p className="text-[16px] max-1000:text-[12px]">{`Forecast: ${info.forecast.forecastday[0].day.mintemp_c} ºC / ${info.forecast.forecastday[0].day.maxtemp_c} ºC`}</p>
                                    <p className="text-[16px] max-1000:text-[12px]">{`Rain chance: ${info.forecast.forecastday[0].day.daily_chance_of_rain}%`}</p>
                                    <p className="text-[16px] max-1000:text-[12px]">{`Wind: ${info.current.wind_kph} Km/h`}</p>
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
                <div className={`${theme === "dark" ? "bg-[#26292B] border-[#EDEDED] text-[#EDEDED]" : "bg-[#F0F8FF] border-[#002E48] text-[#002E48]"} flex flex-col w-[50%] max-1000:w-[95%] max-1000:max-w-[655px] mx-auto rounded-[8px] border-2  z-10 mb-[50px]`}>
                    <article className="flex flex-col p-[20px] max-1000:pl-[10px] max-1000:pr-[10px]">
                        <h1 className="font-bold text-[30px] pl-[20px] mb-[30px]">Upcoming 7 days</h1>
                        <div className="max-1000:overflow-x-auto max-1000:w-full md-lg:overflow-hidden">
                            <table className="w-[80%] max-1000:w-full mx-auto" >
                                <tr className={`${theme === "dark" ? "bg-[#2E3239]" : ""} text-center rounded max-1000:flex max-1000:gap-[15px] md-lg:table-row`}>
                                    {info.forecast.forecastday.map((dayData : any) => {
                                        return (
                                            <td className={`${theme === "dark" ? "bg-[#2E3239]" : "bg-[#EDEDED]"} font-semibold shadow-lg`}>{getDayOfWeek(dayData.date)}</td>
                                        )
                                    })}
                                </tr>
                                <tr className="max-1000:flex max-1000:gap-[15px] md-lg:table-row">
                                    {info.forecast.forecastday.map((dayData : any, index: number) => {
                                        return (
                                            <>
                                                <td key={index} className="cursor-pointer shadow-lg" onClick={() => handleClick(index)}>
                                                    <div className={`${theme === "dark" ? "bg-[#2E3239]" : "bg-[#EDEDED]"} flex flex-col items-center rounded gap-[10px] p-[6px]`}>
                                                        <img src={dayData.day.condition.icon} className="w-[64px]"/>
                                                        <p className="text-[10px] hidden">{`${dayData.day.mintemp_c}ºC / ${dayData.day.maxtemp_c}ºC`}</p>
                                                    </div>
                                                </td>
                                            </>
                                        )
                                    })}
                                </tr>
                                <tr className="max-1000:flex max-1000:gap-[15px] md-lg:table-row">
                                    {info.forecast.forecastday.map((dayData : any, index: number) => {
                                            return (
                                                <>
                                                    <td className="max-1000:w-[80px]">
                                                        <div className={clickedIndex === index ? theme === "dark" ? "bg-[#2E3239] p-[10px] text-[14px] text-center" : "bg-[#EDEDED] mt-[5px] p-[10px] text-[14px] text-center"  : "hidden"}>
                                                            <p>{`Visibility: ${info.forecast.forecastday[0].day.avgvis_km} Km`}</p>
                                                            <p>{`Humidity: ${dayData.day.avghumidity}%`}</p>
                                                            <p>{`Rain chance: ${dayData.day.daily_chance_of_rain}%`}</p>
                                                            <p>{`Wind: ${dayData.day.maxwind_kph} Km/h`}</p>
                                                        </div>
                                                    </td>
                                                </>
                                            )
                                        })}
                                </tr>
                            </table>
                        </div>
                    </article>
                </div>
                <div className={`${theme === "dark" ? "bg-[#26292B] border-[#EDEDED] text-[#EDEDED]" : "bg-[#F0F8FF] border-[#002E48] text-[#002E48]"} flex flex-col w-[50%] max-1000:w-[95%] max-1000:max-w-[655px] mx-auto rounded-[8px] border-2 z-10`}>
                    <article className="flex flex-col p-[20px]">
                        <h1 className="font-bold text-[30px] pl-[20px] mb-[30px]">Hourly Weather Forecast</h1>
                        <div className="flex overflow-x-scroll whitespace-nowrap scroll-smooth w-full p-[20px]">
                            {info.forecast.forecastday[0].hour.map((info : any) => {
                                return (
                                    <div key={info.time} className={`${theme === "dark" ? "bg-[#2E3239]" : "bg-[#EDEDED]"} flex-none w-52 h-52 mr-4 flex flex-col items-center justify-center gap-[25px] text-xl rounded-lg shadow-md`}>
                                        <p className="font-semibold">{info.time.split(" ")[1]}</p>
                                        <img src={info.condition.icon} />
                                        <p className="font-semibold">{`${info.temp_c}ºC`}</p>
                                    </div>
                                )
                            })}
</div>

                    </article>
                </div>
           </>
        )
    })

    return <>
        <Navbar />
        <MainHeader title="Weather Details"/>
        <main className="mt-20 mb-20">
            <section className={`${theme === "dark" ? "bg-[url(/skynight.webp)]" : "bg-[url(/sky.webp)]"}  relative w-full bg-cover bg-center flex flex-col font-[Poppins]`}>
                <div className={`${theme === "dark" ? "absolute inset-1 bg-gradient-to-r from-[#26292B] via-transparent to-[#26292B]" : "absolute inset-1 bg-gradient-to-r from-[#EDEDED] via-transparent to-[#EDEDED]"}`}></div>
                    <BlurFade delay={0.25 + 1 * 0.05} inView className="flex-col">
                        <div className="w-[20%] max-1000:w-full text-center mx-auto mb-[40px] z-10">
                            <h1 className={`${theme === "dark" ? "text-[#EDEDED]" : "text-[#002E48]"} text-[40px] font-semibold`}>{city}</h1>
                        </div>
                        {currentWeather}
                    </BlurFade>
                <div className={`${theme === "dark" ? "absolute inset-0 bg-gradient-to-b from-[#26292B] via-transparent to-[#26292B]" : "absolute inset-0 bg-gradient-to-b from-[#EDEDED] via-transparent to-[#EDEDED]"}`}></div>
            </section>
        </main>
        <Footer />
    </>
}