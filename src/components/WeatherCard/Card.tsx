import React, { useEffect, useState } from "react";
import { Sun } from "../Icons/Sun";
import { Humidity } from "../Icons/Humidity";
import { Fog } from "../Icons/Fog";
import { Wind } from "../Icons/Wind";
import { UVI } from "../Icons/UVI";
import { CurrentWeather, LocationWeather } from "../../interfaces/interfaces";
import { Clock } from "../Clock/Clock";
import { useTheme } from "../../context/ThemeContext";

type WeatherCardProps = {
    location : LocationWeather;
    current: CurrentWeather,
}

export const Card  = (props : WeatherCardProps) => {

        const { theme } = useTheme();
    
    return ( <>
            {props.current && props.location ? (
                <div className={`${theme === "dark" ? "bg-[rgb(81,99,108,0.6)] text-[#EDEDED]" : "bg-[rgb(223,233,245,0.6)] text-[#002E48]"} rounded-[12px] border border-[#091c47]-500 w-[80%] max-1000:w-full font-[Poppins] mb-[70px] cursor-pointer`}>
                <div className="flex items-end mb-[26px] pt-[20px] pb-[20px] border-b border-gray-500 w-[90%] mx-auto">
                    <h3 className="w-[80%] mx-auto text-[40px] max-1000:text-[26px]">{props.location.name}</h3>
                    <Clock localtime={props.location.localtime}/>
                </div>
                <div className="flex flex-col items-center">
                    <h2 className="text-[35px] max-1000:text-[26px]">{`${props.current.condition.text}`}</h2>
                    <img src={props.current.condition.icon} />
                    <h1 className="text-[40px] mt-[20px] font-black">{`${props.current.temp_c} °`}</h1>
                    <div className="flex gap-20 max-1000:gap-[10px] mt-[18px]">
                        <div className="flex flex-col">
                            <div className={`${theme === "dark" ? "bg-[rgb(81,99,108,0.6)]" : "bg-[rgb(255,255,255,0.6)]"} flex flex-col gap-3 mb-[38px] pl-[20px] pr-[20px] max-1000:pl-[10px] max-1000:pr-[10px] pt-[5px] pb-[5px] rounded-[12px] shadow-lg`}>
                                <p className="font-semibold">Humidity</p>
                                <div className="flex gap-5">
                                    <p>{`${props.current.humidity}%`}</p>
                                    <Humidity />
                                </div>
                            </div>
                            <div className={`${theme === "dark" ? "bg-[rgb(81,99,108,0.6)]" : "bg-[rgb(255,255,255,0.6)]"} flex flex-col gap-3 mb-[38px] pl-[20px] pr-[20px] max-1000:pl-[10px] max-1000:pr-[10px] pt-[5px] pb-[5px] rounded-[12px] shadow-lg`}>
                                <p className="font-semibold">Wind</p>
                                <div className="flex gap-5">
                                    <p>{`${props.current.wind_kph} Km/h`}</p>
                                    <Wind />
                                </div>
                            </div>
                        </div> 
                        <div className="flex flex-col">
                            <div className={`${theme === "dark" ? "bg-[rgb(81,99,108,0.6)]" : "bg-[rgb(255,255,255,0.6)]"} flex flex-col gap-3 mb-[38px] pl-[20px] pr-[20px] max-1000:pl-[10px] max-1000:pr-[10px] pt-[5px] pb-[5px] rounded-[12px] shadow-lg`}>
                                <p className="font-semibold">Visibility</p>
                                <div className="flex gap-5">
                                    <p>{`${props.current.vis_km} Km`}</p>
                                    <Fog />
                                </div>
                            </div>
                            <div className={`${theme === "dark" ? "bg-[rgb(81,99,108,0.6)]" : "bg-[rgb(255,255,255,0.6)]"} flex flex-col gap-3 mb-[38px] pl-[20px] pr-[20px] max-1000:pl-[10px] max-1000:pr-[10px] pt-[5px] pb-[5px] rounded-[12px] shadow-lg`}>
                                <p className="font-semibold">UVI</p>
                                <div className="flex gap-5">
                                    <p>{`${props.current.uv} UV`}</p>
                                    <UVI />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            ) : (
                <p>Loading...</p>
            )}
        
        </>
    )
}