import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { fetchedData, fetchStatus } from "../../../features/WeatherData/weatherSlice";
import { Card } from "../../WeatherCard/Card";
import BlurFade from "./BlurFadeComponent";
import { getLocationData } from "../../../features/WeatherData/weatherThunks";
import { WeatherResponse } from "../../../interfaces/interfaces";

export function BlurFadeDemo() {
    const dispatch = useAppDispatch();
    const fetchState = useAppSelector(fetchStatus);
    const response : any = useAppSelector(fetchedData)
    const cities = ["London", "Istanbul", "Sydney", "Tokyo", "Chicago", "Paris", "Madrid", "Liverpool", "Moscow"];
   
    useEffect(() => {
        if (fetchState === "idle") {
            cities.map((city : string) => {
                dispatch(getLocationData(city))
            })
        }
    }, [fetchState, dispatch]);

    const cityCards = response.map((info : WeatherResponse) => {
        return (
            <div className="flex justify-center">
                <Card location={info.location} current={info.current}/>
            </div>
        )
    })

  return (
    <div id="photos" className="w-full z-10">
          {!response ? (
            <p>Loading...</p>
          ) : (
                <div id="photos" className="w-full z-10">
                    <BlurFade  delay={0.25 + 1 * 0.05} inView>
                        <div className="flex flex-col w-[80%] mx-auto absolute z-10">
                            <div className="grid grid-cols-3 grid-rows-3 gap-4">
                                {cityCards}
                            </div>
                         </div>
                    </BlurFade>
                </div>
          )}
    </div>
  );
}