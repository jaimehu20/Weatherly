import React, { useEffect, useState } from "react";
import { Sun } from "../Icons/Sun";
import { Humidity } from "../Icons/Humidity";
import { Fog } from "../Icons/Fog";
import { Wind } from "../Icons/Wind";
import { UVI } from "../Icons/UVI";

type WeatherCardProps = {
    location : string;
    lat: number;
    lon: number;
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
                case 'New York':
                    return -6;
                case 'London':
                    return -1;
                case 'Hong Kong':
                    return 6;
                case 'Sydney':
                    return 8;
                case 'Istanbul':
                    return 1
                case 'Chicago':
                    return -7
                case 'Toronto':
                    return -6
                default:
                    return 0; }}

        const offSet = getTimeInZone(getOffset(props.location))

    return <>
        <div className="bg-[rgb(223,233,245,0.6)] rounded-[12px] text-[#002E48] border border-[#091c47]-500 w-[80%] font-[Poppins] mb-[70px]">
            <div className="flex items-end mb-[60px] pt-[20px] pb-[20px] border-b border-gray-500 w-[90%] mx-auto">
                <h3 className="w-[80%] mx-auto text-[40px]">{props.location}</h3>
                <p>{offSet}</p>
            </div>
            <div className="flex flex-col items-center">
                <Sun />
                <h1 className="text-[40px] mt-[20px] font-black">26º</h1>
                <div className="flex gap-20 mt-[18px]">
                    <div className="flex flex-col">
                        <div className="flex flex-col gap-3 mb-[38px] bg-[rgb(255,255,255,0.6)] pl-[20px] pr-[20px] pt-[5px] pb-[5px] rounded-[12px] shadow-lg">
                            <p className="font-semibold">Humidity</p>
                            <div className="flex gap-5">
                                <p>20º</p>
                                <Humidity />
                            </div>
                        </div>
                        <div className="flex flex-col gap-3 mb-[38px] bg-[rgb(255,255,255,0.6)] pl-[20px] pr-[20px] pt-[5px] pb-[5px] rounded-[12px] shadow-lg">
                            <p className="font-semibold">Wind</p>
                            <div className="flex gap-5">
                                <p>2º</p>
                                <Wind />
                            </div>
                        </div>
                    </div> 
                    <div className="flex flex-col">
                        <div className="flex flex-col gap-3 mb-[38px] bg-[rgb(255,255,255,0.6)] pl-[20px] pr-[20px] pt-[5px] pb-[5px] rounded-[12px] shadow-lg">
                            <p className="font-semibold">Visibility</p>
                            <div className="flex gap-5">
                                <p>90%</p>
                                <Fog />
                            </div>
                        </div>
                        <div className="flex flex-col gap-3 mb-[38px] bg-[rgb(255,255,255,0.6)] pl-[20px] pr-[20px] pt-[5px] pb-[5px] rounded-[12px] shadow-lg">
                            <p className="font-semibold">UVI</p>
                            <div className="flex gap-5">
                                <p>90%</p>
                                <UVI />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}