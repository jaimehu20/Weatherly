import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { fetchedData, fetchStatus } from "../../../features/WeatherData/weatherSlice";
import { Card } from "../../WeatherCard/Card";
import BlurFade from "./BlurFadeComponent";
import { getLocationData } from "../../../features/WeatherData/weatherThunks";
import { CitiesState, WeatherResponse } from "../../../interfaces/interfaces";

export function BlurFadeDemo() {
    const dispatch = useAppDispatch();
    const fetchState = useAppSelector(fetchStatus);
    const response : any = useAppSelector(fetchedData)
    const [cities, setCities] = useState<any>({
        London: { name: "London", current: null },
        Istanbul: { name: "Istanbul", current: null },
        Sydney: { name: "Sydney", current: null },
        Tokyo: { name: "Tokyo", current: null },
        Chicago: { name: "Chicago", current: null },
        Paris: { name: "Paris", current: null },
        Madrid: { name: "Madrid", current: null },
        Liverpool: { name: "Liverpool", current: null },
        Moscow: {name: "Moscow", current: null}
    });

    useEffect(() => {
        if (fetchState === "idle") {
            const cityNames = Object.keys(cities);
            cityNames.forEach(city => {
                dispatch(getLocationData(city));
            });
        }
    }, [fetchState, dispatch, cities]);

    useEffect(() => {
        if (fetchState === "fulfilled" && response) {
            setCities((prevCities : CitiesState) => {
                const updatedCities = { ...prevCities };
                const cityName = response.location.name;
                if (cityName && updatedCities[cityName]) {
                    updatedCities[cityName] = {
                        ...updatedCities[cityName],
                        current: response.current
                    };
                }
                return updatedCities;
            });
        }
    }, [fetchState, response]);

  return (
    <div id="photos" className="w-full z-10">
          <BlurFade  delay={0.25 + 1 * 0.05} inView>
            <div className="flex flex-col w-[80%] mx-auto absolute z-10">
                <div className="grid grid-cols-3 grid-rows-3 gap-4">
                <div className="flex justify-center" >
                        <Card location={cities.Moscow.name} current={cities.Moscow.current}/>
                    </div>
                    <div className="flex justify-center" >
                        <Card location={cities.London.name} current={cities.London.current}/>
                    </div>
                    <div className="col-start-1 row-start-2 flex justify-center">
                        <Card location={cities.Istanbul.name} current={cities.Istanbul.current}/>
                    </div>
                    <div className="col-start-2 row-start-2 flex justify-center">
                        <Card location={cities.Sydney.name} current={cities.Sydney.current}/>
                    </div>
                    <div className="col-start-1 row-start-3 flex justify-center">
                        <Card location={cities.Tokyo.name} current={cities.Tokyo.current}/>
                    </div>
                    <div className="col-start-2 row-start-3 flex justify-center">
                        <Card location={cities.Chicago.name} current={cities.Chicago.current}/>
                    </div>
                    <div className="col-start-3 row-start-1 flex justify-center">
                        <Card location={cities.Paris.name} current={cities.Paris.current}/>
                    </div>
                    <div className="col-start-3 row-start-2 flex justify-center">
                        <Card location={cities.Madrid.name} current={cities.Madrid.current}/>
                    </div>
                    <div className="flex justify-center">
                        <Card location={cities.Liverpool.name} current={cities.Liverpool.current}/>
                    </div>
                </div>
            </div>
          </BlurFade>
    </div>
  );
}
