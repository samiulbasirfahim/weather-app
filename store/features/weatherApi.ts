import { WEATHERAPIKEY } from "@/lib/config.env";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { City } from "./citySlice";

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
    getCitySearchCompletion: builder.mutation<City[], string>({
      query: (query) => {
        console.log("Key: ", key);
        return {
          url: "search.json",
          params: {
            key: "76b9e83684994413959223544251708",
            q: query,
          },
        };
      },
      transformResponse: (response: any[]): City[] => {
        console.log("response");
        return response.map((item: any) => ({
          id: item.id,
          name: item.name,
          region: item.region,
          country: item.country,
          lat: item.lat,
          lon: item.lon,
        }));
      },
    }),
  }),
});

export const { useGetCitySearchCompletionMutation } = weatherApi;
