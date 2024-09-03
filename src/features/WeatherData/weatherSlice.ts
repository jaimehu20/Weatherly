import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";
import { getLocationData } from "./weatherThunks";

const initialState = {
    data: [],
    status: "idle",
    error: null
}

export const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getLocationData.pending, (state, action) => {
            state.status = "pending";
        }).addCase(getLocationData.rejected, (state, action) => {
            state.status = "rejected";
            state.error = action.error.message;
        }).addCase(getLocationData.fulfilled, (state, action) => {
            state.status = "fulfilled";
            state.data = action.payload;
        })
}})

export const fetchedData = (state : RootState) => state.weather.data;
export const fetchStatus = (state : RootState) => state.weather.status;