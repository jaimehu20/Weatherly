import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";
import { getNews } from "./newsThunk";

const initialState = {
    data: [],
    status: "idle",
    error: null
}

export const newsSlice = createSlice({
    name: "news",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getNews.pending, (state, action) => {
            state.status = "pending";
        }).addCase(getNews.rejected, (state, action) => {
            state.status = "rejected";
            state.error = action.error.message;
        }).addCase(getNews.fulfilled, (state, action) => {
            state.status = "fulfilled";
            state.data = [action.payload];
        })
    }
})

export const fetchedNews = (state : RootState) => state.news.data;
export const fetchStatus = (state : RootState) => state.news.status;
export const prueba = (state : RootState) => state.news.error;