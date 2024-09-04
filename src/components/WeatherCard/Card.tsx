import React, { useEffect, useState } from "react";
import { Sun } from "../Icons/Sun";
import { Humidity } from "../Icons/Humidity";
import { Fog } from "../Icons/Fog";
import { Wind } from "../Icons/Wind";
import { UVI } from "../Icons/UVI";
import { CurrentWeather } from "../../interfaces/interfaces";



type WeatherCardProps = {
    location : string;
    current: CurrentWeather
}



export const Card  = (props : WeatherCardProps) => {

        const [ currentTime, setCurrentTime ] = useState(new Date());

        useEffect(() => {
            const interval = setInterval(() => {
                setCurrentTime(new Date());
            }, 1000);

            return () => clearInterval(interval);
        }, []);

        const getTimeInZone = (offset : number) => {
            const timeInZone = new Date(currentTime.getTime() + offset * 60 * 60 * 1000);
            return timeInZone.toLocaleTimeString();}

        const getOffset = (title : string) => {
            switch(title) {
                case 'Moscow':
                    return +1;
                case 'London':
                    return -1;
                case 'Paris':
                    return 0;
                case 'Istanbul':
                    return 1
                case 'Sydney':
                    return +8;
                case 'Madrid':
                    return 0;
                case 'Tokyo':
                    return +7
                case 'Chicago':
                    return -7
                case 'Liverpool':
                    return -1
                default:
                    return 0; }}

        const offSet = getTimeInZone(getOffset(props.location))

    return ( <>
            {props.current && props.location ? (
                <div className="bg-[rgb(223,233,245,0.6)] rounded-[12px] text-[#002E48] border border-[#091c47]-500 w-[80%] font-[Poppins] mb-[70px] cursor-pointer">
                <div className="flex items-end mb-[26px] pt-[20px] pb-[20px] border-b border-gray-500 w-[90%] mx-auto">
                    <h3 className="w-[80%] mx-auto text-[40px]">{props.location}</h3>
                    <p>{offSet}</p>
                </div>
                <div className="flex flex-col items-center">
                    <h2 className="text-[35px]">{`${props.current.condition.text}`}</h2>
                    <img src={props.current.condition.icon} />
                    <h1 className="text-[40px] mt-[20px] font-black">{`${props.current.temp_c} °`}</h1>
                    <div className="flex gap-20 mt-[18px]">
                        <div className="flex flex-col">
                            <div className="flex flex-col gap-3 mb-[38px] bg-[rgb(255,255,255,0.6)] pl-[20px] pr-[20px] pt-[5px] pb-[5px] rounded-[12px] shadow-lg">
                                <p className="font-semibold">Humidity</p>
                                <div className="flex gap-5">
                                    <p>{`${props.current.humidity}%`}</p>
                                    <Humidity />
                                </div>
                            </div>
                            <div className="flex flex-col gap-3 mb-[38px] bg-[rgb(255,255,255,0.6)] pl-[20px] pr-[20px] pt-[5px] pb-[5px] rounded-[12px] shadow-lg">
                                <p className="font-semibold">Wind</p>
                                <div className="flex gap-5">
                                    <p>{`${props.current.wind_kph} Km/h`}</p>
                                    <Wind />
                                </div>
                            </div>
                        </div> 
                        <div className="flex flex-col">
                            <div className="flex flex-col gap-3 mb-[38px] bg-[rgb(255,255,255,0.6)] pl-[20px] pr-[20px] pt-[5px] pb-[5px] rounded-[12px] shadow-lg">
                                <p className="font-semibold">Visibility</p>
                                <div className="flex gap-5">
                                    <p>{`${props.current.vis_km} Km`}</p>
                                    <Fog />
                                </div>
                            </div>
                            <div className="flex flex-col gap-3 mb-[38px] bg-[rgb(255,255,255,0.6)] pl-[20px] pr-[20px] pt-[5px] pb-[5px] rounded-[12px] shadow-lg">
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
                <p>loading</p>
            )}
        
        </>
    )
}