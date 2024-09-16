import { createAsyncThunk } from "@reduxjs/toolkit";

    const today = new Date();
    const todayString = today.toISOString();

    const lastMonth = new Date();
    lastMonth.setMonth(today.getMonth() - 1);
    const lastMonthString = lastMonth.toISOString();

export const getWeatherNews = createAsyncThunk("new/getWeatherNews", async () => {
    const request = await fetch(`https://gnews.io/api/v4/search?q=weather&max=8&from=${lastMonthString}&to=${todayString}&apikey=${import.meta.env.VITE_NEWS_KEY}`);
    const data = request.json();
    return data;
})

export const getNews = createAsyncThunk("new/getNews", async (query : string) => {
    const request = await fetch(`https://gnews.io/api/v4/search?q=${query}&lang=en&max=10&from=${lastMonthString}&to=${todayString}&apikey=${import.meta.env.VITE_NEWS_KEY}`);
    const data = request.json();
    return data;
})