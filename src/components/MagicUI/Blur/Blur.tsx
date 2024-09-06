import { FormEvent, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { clearCustomResponse, fetchedData, fetchedSearch, fetchStatus } from "../../../features/WeatherData/weatherSlice";
import { Card } from "../../WeatherCard/Card";
import BlurFade from "./BlurFadeComponent";
import { getCustomLocation, getLocationData } from "../../../features/WeatherData/weatherThunks";
import { WeatherResponse } from "../../../interfaces/interfaces";
import { Search } from "../../Icons/Search";
import { SadIcon } from "../../Icons/Sad";
import { Link } from "react-router-dom";

export function BlurFadeDemo() {
    const dispatch = useAppDispatch();
    const response : any = useAppSelector(fetchedData);
    const customResponse : any = useAppSelector(fetchedSearch);
    const fetchState = useAppSelector(fetchStatus);
    const cities = ["London", "Istanbul", "Sydney", "Tokyo", "Chicago", "Paris", "Madrid", "Liverpool", "Moscow"];
    const [ searchPattern, setSearchPattern ] = useState<string>("")
   
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
                <Link to={`/weather-predictions-details/${info.location.name}`} className="flex justify-center w-[100%]">
                    <Card location={info.location} current={info.current}/>
                </Link>
            </div>
        )
    })

    const handleChange = (event : React.ChangeEvent<HTMLInputElement>) => {
        setSearchPattern(event.target.value)
        if (event.target.value === "") {
            dispatch(clearCustomResponse());
        }
    }

    const handleSubmit = (event : FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        dispatch(getCustomLocation(searchPattern));
    }

 /*   const customCityCard = customResponse.map((info : WeatherResponse) => {

        if (customResponse[0].error) {
            return (
                <BlurFade  delay={0.25 + 1 * 0.05} inView>
                    <div className="flex flex-col items-center mt-[300px] font-[Poppins] text-[30px]">
                        <SadIcon />
                        <p>No matching location found!</p>
                    </div>
                </BlurFade>
            )
        } else {
            return (
                <BlurFade delay={0.25 + 1 * 0.05} inView>
                    <div className="flex justify-center w-[27%] mt-[72px]">
                        <Link to={`/weather-predictions-details/${info.location.name}`} className="flex justify-center w-[100%]">
                            <Card location={info.location} current={info.current}/>
                        </Link>
                    </div>
                </BlurFade>
            )
        }
    }) */

  return (
    <>
        <div className="flex justify-center z-10 mb-[40px]">
            <form id="searchForm" onSubmit={handleSubmit}>
                <input type="text" className="bg-[rgb(223,233,245,0.6)] text-[#002E48] text-[26px] font-[Poppins] pl-[20px] pr-[70px] pt-[10px] pb-[10px] rounded border-2 border-[#002E48]" onChange={handleChange} placeholder="Search your city..."/>
                <button type="submit" className="relative right-[40px] top-[7px]">
                    <Search />
                </button>
            </form>
        </div>
        <div id="photos" className="w-full z-10">
          {!response ? (
            <p>Loading...</p>
          ) : customResponse.length === 0 || searchPattern === "" ? (
            (
                <div id="photos" className="w-full z-10">
                    <BlurFade  delay={0.25 + 1 * 0.05} inView>
                        <div className="flex flex-col w-[80%] mx-auto absolute z-10">
                            <div className="grid grid-cols-3 grid-rows-3 gap-4">
                                {cityCards}
                            </div>
                         </div>
                    </BlurFade>
                </div>
          )
          ) : <p>ERROR</p> }
        </div>
    </>    
  );
}