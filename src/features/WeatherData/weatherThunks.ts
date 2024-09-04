import { createAsyncThunk } from "@reduxjs/toolkit";

export const getLocationData : any = createAsyncThunk("weatherData/getLocationData", async (cityName : string) => {
    const request = await fetch(`http://api.weatherapi.com/v1/current.json?key=${import.meta.env.VITE_ACCESS_KEY}&q=${cityName}`);
    const data = request.json();
    return data;
})