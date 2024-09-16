import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";
import { getNews, getWeatherNews } from "./newsThunk";
import { NewsState } from "../../interfaces/interfaces";

const initialState : NewsState = {
    weatherData: [],
    globalData: [],
    status: "idle",
    error: null
}

export const newsSlice = createSlice({
    name: "news",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getWeatherNews.pending, (state, action) => {
            state.status = "pending";
        }).addCase(getWeatherNews.rejected, (state, action) => {
            state.status = "rejected";
            state.error = action.error.message || null;
        }).addCase(getWeatherNews.fulfilled, (state, action) => {
            state.status = "fulfilled";
            state.weatherData = [action.payload];
        });

        builder.addCase(getNews.fulfilled, (state, action) => {
            state.status = "fulfilled";
            state.globalData.push(action.payload)
        });
    }
})

export const fetchedNews = (state : RootState) => state.news.weatherData;
export const fetchStatus = (state : RootState) => state.news.status;
export const fetchedGlobal = (state : RootState) => state.news.globalData;