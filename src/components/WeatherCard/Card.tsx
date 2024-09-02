import React from "react";
import { Sun } from "../Icons/Sun";
import { Humidity } from "../Icons/Humidity";
import { Fog } from "../Icons/Fog";
import { Wind } from "../Icons/Wind";
import { UVI } from "../Icons/UVI";

export const Card : React.FC = () => {
    return <>
        <div className="bg-[rgb(223,233,245,0.6)] rounded text-[#002E48] border border-[#091c47]-500">
            <div className="mb-[60px] pt-[20px] pb-[20px] border-b border-gray-500 w-[90%] mx-auto">
                <h3 className="w-[80%] mx-auto text-[40px]">Hola</h3>
            </div>
            <div className="flex flex-col items-center">
                <Sun />
                <h1 className="text-[40px] mt-[20px]">26º</h1>
                <div className="flex gap-20">
                    <div className="flex flex-col">
                        <div className="flex flex-col gap-3 mb-[38px]">
                            <p>Humidity</p>
                            <div className="flex gap-5">
                                <p>20º</p>
                                <Humidity />
                            </div>
                        </div>
                        <div className="flex flex-col gap-3 mb-[38px]">
                            <p>Wind</p>
                            <div className="flex gap-5">
                                <p>2º</p>
                                <Wind />
                            </div>
                        </div>
                    </div> 
                    <div className="flex flex-col">
                        <div className="flex flex-col gap-3 mb-[38px]">
                            <p>Visibility</p>
                            <div className="flex gap-5">
                                <p>90%</p>
                                <Fog />
                            </div>
                        </div>
                        <div className="flex flex-col gap-3 mb-[38px]">
                            <p>UVI</p>
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