import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { fetchedData, fetchStatus } from "../../../features/WeatherData/weatherSlice";
import { Card } from "../../WeatherCard/Card";
import BlurFade from "./BlurFadeComponent";
import { getLocationData } from "../../../features/WeatherData/weatherThunks";

type Cities = {
    London : string,
    Madrid: string,
    Liverpool: string,
    Istanbul: string,
    Sydney: string,
    Tokyo: string,
    Paris: string,
    Chicago: string
}

type CitiesInterface = {
    [key : string] : string[];
}

export function BlurFadeDemo() {
    const dispatch = useAppDispatch();
    const fetchState = useAppSelector(fetchStatus);
    const response = useAppSelector(fetchedData)
    const [cities, setCities] = useState<any>({
        NewYork: { name: "New York", lat: null, lon: null },
        London: { name: "London", lat: null, lon: null },
        Istanbul: { name: "Istanbul", lat: null, lon: null },
        Sydney: { name: "Sydney", lat: null, lon: null },
        Tokyo: { name: "Tokyo", lat: null, lon: null },
        Chicago: { name: "Chicago", lat: null, lon: null },
        Paris: { name: "Paris", lat: null, lon: null },
        Madrid: { name: "Madrid", lat: null, lon: null },
        Liverpool: { name: "Liverpool", lat: null, lon: null }
    });

    useEffect(() => {
        if (fetchState === "idle") {
            const cityNames = [
                "New York",
                "London",
                "Istanbul",
                "Sydney",
                "Tokyo",
                "Chicago",
                "Paris",
                "Madrid",
                "Liverpool"
            ];
            cityNames.forEach(city => {
                dispatch(getLocationData(city))
            });
        }
    }, [fetchState, dispatch]);

    useEffect(() => {
        if (fetchState === "fulfilled" && Array.isArray(response)) {
            setCities(prevCities => {
                const updatedCities = { ...prevCities };
                
                response.forEach(item => {
                    const cityName = item.name;
                    const cityLat = item.lat;
                    const cityLon = item.lon;

                    if (updatedCities.hasOwnProperty(cityName)) {
                        updatedCities[cityName] = {
                            ...updatedCities[cityName],
                            lat: cityLat,
                            lon: cityLon
                        };
                    }
                });

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
                        <Card location="New York" lat={cities.lat} lon={cities.lon}/>
                    </div>
                    <div className="flex justify-center" >
                        <Card location={cities.London.name} lat={cities.London.lat} lon={cities.London.lon}/>
                    </div>
                    <div className="col-start-1 row-start-2 flex justify-center">
                        <Card location={cities.Istanbul.name} lat={cities.Istanbul.lat} lon={cities.Istanbul.lon}/>
                    </div>
                    <div className="col-start-2 row-start-2 flex justify-center">
                        <Card location={cities.Sydney.name} lat={cities.Sydney.lat} lon={cities.Sydney.lon}/>
                    </div>
                    <div className="col-start-1 row-start-3 flex justify-center">
                        <Card location={cities.Tokyo.name} lat={cities.Tokyo.lat} lon={cities.Tokyo.lon}/>
                    </div>
                    <div className="col-start-2 row-start-3 flex justify-center">
                        <Card location={cities.Chicago.name} lat={cities.Chicago.lat} lon={cities.Chicago.lon}/>
                    </div>
                    <div className="col-start-3 row-start-1 flex justify-center">
                        <Card location={cities.Paris.name} lat={cities.Paris.lat} lon={cities.Paris.lon}/>
                    </div>
                    <div className="col-start-3 row-start-2 flex justify-center">
                        <Card location={cities.Madrid.name} lat={cities.Madrid.lat} lon={cities.Madrid.lon}/>
                    </div>
                    <div className="flex justify-center">
                        <Card location={cities.Liverpool.name} lat={cities.Liverpool.lat} lon={cities.Liverpool.lon}/>
                    </div>
                </div>
            </div>
          </BlurFade>
    </div>
  );
}
