import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";
import { getCustomLocation, getForecastData, getLocationData } from "./weatherThunks";
import { WeatherState } from "../../interfaces/interfaces";

const initialState : WeatherState = {
    data: [],
    customSearch: [],
    forecastData: [],
    status: "idle",
    error: null
}

export const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        clearCustomResponse: (state) => {
            state.customSearch = [];
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getLocationData.pending, (state, action) => {
            state.status = "pending";
        }).addCase(getLocationData.rejected, (state, action) => {
            state.status = "rejected";
            state.error = action.error.message;
        }).addCase(getLocationData.fulfilled, (state, action) => {
            state.status = "fulfilled";
            state.data.push(action.payload)
        })

        builder.addCase(getCustomLocation.fulfilled, (state, action) => {
            state.customSearch = [action.payload];
        })

        builder.addCase(getForecastData.fulfilled, (state, action) => {
            state.forecastData = [action.payload]
        })
}})

export const fetchedData = (state : RootState) => state.weather.data;
export const fetchedSearch = (state : RootState) => state.weather.customSearch;
export const fetchStatus = (state : RootState) => state.weather.status;
export const { clearCustomResponse } = weatherSlice.actions;
export const fetchedForecast = (state : RootState) => state.weather.forecastData; 