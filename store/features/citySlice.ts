import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface City {
  id: string;
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
}

interface CityState {
  selectedCity: City | null;
  recentCities: City[];
}

const initialState: CityState = {
  selectedCity: null,
  recentCities: [],
};

export const citySlice = createSlice({
  name: "city",
  initialState,
  reducers: {
    setSelectedCity(state, action: PayloadAction<City>) {
      state.selectedCity = action.payload;
    },
    addRecentCities(state, action: PayloadAction<City>) {
      state.recentCities.push(action.payload);
    },
  },
});

export const { addRecentCities, setSelectedCity } = citySlice.actions;

export const selectSelectedCity = (state: RootState) => state.city.selectedCity;
export const selectRecentCities = (state: RootState) => state.city.recentCities;
