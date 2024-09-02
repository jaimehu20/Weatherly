import { createAsyncThunk } from "@reduxjs/toolkit";

export const getLocationData : any = createAsyncThunk("weatherData/getLocationData", async (cityName : string) => {
    const request = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${import.meta.env.VITE_ACCESS_KEY}`);
    const data = request.json();
    return data;
})