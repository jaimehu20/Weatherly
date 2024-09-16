import { createAsyncThunk } from "@reduxjs/toolkit";

export const getLocationData = createAsyncThunk("weatherData/getLocationData", async (cityName : string) => {
    const request = await fetch(`https://api.weatherapi.com/v1/current.json?key=${import.meta.env.VITE_ACCESS_KEY}&q=${cityName}`);
    const data = request.json();
    return data;
})

export const getCustomLocation = createAsyncThunk("customWeatherData/getCustomWeatherData", async (cityName : string) => {
    const request = await fetch(`https://api.weatherapi.com/v1/current.json?key=${import.meta.env.VITE_ACCESS_KEY}&q=${cityName}`);
    const data = request.json();
    return data;
})

export const getForecastData = createAsyncThunk("forecastData/getForecastData", async (cityName : string) => {
    const request = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${import.meta.env.VITE_ACCESS_KEY}&q=${cityName}&days=7`);
    const data = request.json();
    return data;
})  