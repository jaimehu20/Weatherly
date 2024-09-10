import { createAsyncThunk } from "@reduxjs/toolkit";

export const getNews = createAsyncThunk("new/getNews", async (query : string) => {
    const today = new Date();
    const todayString = today.toISOString().split('T')[0];

    const lastMonth = new Date();
    lastMonth.setMonth(today.getMonth() - 1);
    const lastMonthString = lastMonth.toISOString().split('T')[0];

    const request = await fetch(`https://newsapi.org/v2/everything?q=${query}&from=${lastMonthString}&to=${todayString}&sortBy=popularity&apiKey=${import.meta.env.VITE_NEWS_KEY}`);
    const data = request.json();
    return data;
})