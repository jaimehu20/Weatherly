import { configureStore } from '@reduxjs/toolkit';
import { weatherSlice } from '@/features/WeatherData/weatherSlice';
import { newsSlice } from '@/features/NewsData/newsSlice';

export const store = configureStore({
  reducer: {
    weather: weatherSlice.reducer,
    news: newsSlice.reducer
  },
  
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;