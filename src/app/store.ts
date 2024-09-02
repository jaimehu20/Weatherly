import { configureStore } from '@reduxjs/toolkit';
import { weatherSlice } from '../features/WeatherData/weatherSlice';

export const store = configureStore({
  reducer: {
    weather: weatherSlice.reducer
  },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;