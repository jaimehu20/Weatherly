import React, { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar/Navbar";
import { MainHeader } from "../components/Header/MainHeader";
import { Footer } from "../components/Footer/Footer";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { clearCustomResponse, fetchedData, fetchedSearch, fetchStatus } from "../features/WeatherData/weatherSlice";
import { getCustomLocation, getLocationData } from "../features/WeatherData/weatherThunks";
import { WeatherResponse } from "../interfaces/interfaces";
import { Link } from "react-router-dom";
import { Card } from "../components/WeatherCard/Card";
import BlurFade from "../components/MagicUI/Blur/BlurFadeComponent";
import { SadIcon } from "../components/Icons/Sad";
import { Search } from "../components/Icons/Search";
import { useTheme } from "../context/ThemeContext";

export const WeatherPredictions : React.FC = () => {

    const dispatch = useAppDispatch();
    const response : any = useAppSelector(fetchedData);
    const customResponse : any = useAppSelector(fetchedSearch);
    const fetchState = useAppSelector(fetchStatus);
    const cities = ["London", "Istanbul", "Sydney", "Tokyo", "Chicago", "Paris", "Madrid", "Liverpool", "Moscow"];
    const [ searchPattern, setSearchPattern ] = useState<string>("");
    const { theme } = useTheme();

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

    const handleSubmit = (event : React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        dispatch(getCustomLocation(searchPattern));
    }

    const customCityCard = customResponse.map((info : WeatherResponse) => {
        if (info.error) {
            return (
                <BlurFade  delay={0.25 + 1 * 0.05} inView className="flex justify-center">
                    <div className="flex flex-col items-center mt-[300px] font-[Poppins] text-[30px]">
                        <SadIcon />
                        <p>No matching location found!</p>
                    </div>
                </BlurFade>
            )
        } else {
            return (
                <BlurFade delay={0.25 + 1 * 0.05} inView className="flex justify-center">
                    <div className="flex justify-center w-[27%] mt-[72px]">
                        <Link to={`/weather-predictions-details/${info.location.name}`} className="flex justify-center w-[100%]">
                            <Card location={info.location} current={info.current}/>
                        </Link>
                    </div>
                </BlurFade>
            )
        }
    })

    return <>
        <Navbar />
        <MainHeader title="Weather Predictions"/>
        <main className="mt-20 mb-20">
            <section className={`${theme === "dark" ? "bg-[url(./skynight.webp)]" : "bg-[url(./sky.webp)]"} relative h-[150vh] w-full bg-cover bg-center flex flex-col`}>
                <div className="absolute inset-1 bg-gradient-to-r from-white via-transparent to-white"></div>
                <div className="flex justify-between w-[75%] mx-auto mb-[42px] z-10 mb-[40px]">
                    <h1 className="text-[34px] font-[Poppins] font-semibold">Top Locations</h1>
                    <form id="searchForm" onSubmit={handleSubmit}>
                        <input type="text" className="bg-[rgb(223,233,245,0.6)] text-[#002E48] text-[26px] font-[Poppins] pl-[20px] pr-[70px] pt-[10px] pb-[10px] rounded border-2 border-[#002E48]" onChange={handleChange} placeholder="Search your city..."/>
                        <button type="submit" className="relative right-[40px] top-[7px]">
                            <Search />
                        </button>
                    </form>
                </div>
                <div className="w-full z-10">
                    {!response ? (
                        <p>Loading...</p>
                    ) : customResponse.length === 0 || searchPattern === "" ? (
                    ( 
                        <div className="w-full z-10">
                            <BlurFade  delay={0.25 + 1 * 0.05} inView>
                                <div className="flex flex-col w-[80%] mx-auto absolute z-10">
                                    <div className="grid grid-cols-3 grid-rows-3 gap-4">
                                        {cityCards}
                                    </div>
                                </div>
                            </BlurFade>
                        </div> )
                    ) : customCityCard }
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white"></div>
            </section>
        </main>
        <Footer />
    </>
}