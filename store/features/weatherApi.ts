import { WEATHERAPIKEY } from "@/lib/config.env";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { City } from "./citySlice";

export type WeatherInfo = {
  temperature: number; // °C
  feelsLike: number; // °C
  condition: string; // "Partly Cloudy"
  windKph: number; // km/h
  humidity: number; // %
  cloud: number; // %
};

const key = WEATHERAPIKEY;
export const weatherApi = createApi({
  reducerPath: "weatherApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://api.weatherapi.com/v1",
    prepareHeaders: (headers) => {
      headers.set("Content-type", "application/json");
      return headers;
    },
  }),
  tagTypes: ["Weather", "Location"],
  endpoints: (builder) => ({
    getCityWeather: builder.query<WeatherInfo, string>({
      query: (query) => ({
        url: "current.json",
        params: {
          key: key,
          q: query,
        },
      }),
      transformResponse: (response: any): WeatherInfo => ({
        temperature: response.current.temp_c,
        feelsLike: response.current.feelslike_c,
        condition: response.current.condition.text,
        windKph: response.current.wind_kph,
        humidity: response.current.humidity,
        cloud: response.current.cloud,
      }),

      providesTags: (result, error, query) => [{ type: "Weather", id: query }],
    }),

    getCitySearchCompletion: builder.query<City[], string>({
      query: (query) => {
        console.log("Key: ", key);
        return {
          url: "search.json",
          params: {
            key: key,
            q: query,
          },
        };
      },
      transformResponse: (response: any[]): City[] => {
        console.log(response);
        return response.map((item: any) => ({
          id: item.url,
          name: item.name,
          region: item.region,
          country: item.country,
          lat: item.lat,
          lon: item.lon,
        }));
      },

      providesTags: (result, error, query) => [{ type: "Location", id: query }],
    }),
  }),
});

export const { useLazyGetCitySearchCompletionQuery, useGetCityWeatherQuery } =
  weatherApi;
