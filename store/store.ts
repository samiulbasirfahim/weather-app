import { configureStore } from "@reduxjs/toolkit";
import { citySlice } from "./features/citySlice";
import { weatherApi } from "./features/weatherApi";
export const store = configureStore({
  reducer: {
    city: citySlice.reducer,
    [weatherApi.reducerPath]: weatherApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(weatherApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
