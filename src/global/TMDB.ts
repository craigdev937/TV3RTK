import { createApi, 
    fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IMulti, ITV, ITVCast } from "../models/Interfaces";
const API = import.meta.env.PUBLIC_KEY;
const URL = "https://api.themoviedb.org/3";

export const TMDB = createApi({
    reducerPath: "TMDB",
    tagTypes: ["TV", "Films", "Actors"],
    baseQuery: fetchBaseQuery({ baseUrl: URL }),
    endpoints: (builder) => ({
        sea: builder.query<IMulti, string>({
            query: (q) => ({
                url: `/search/multi?query=${q}`,
                method: "GET",
                params: {"api_key": `${API}`}
            }),
            providesTags: ["TV", "Films", "Actors"]
        }),
        trendtv: builder.query<IMulti, string>({
            query: (tW) => ({
                url: `/trending/tv/${tW}`,
                method: "GET",
                params: {"api_key": `${API}`}
            }),
            providesTags: ["TV"]
        }),
        tvdetail: builder.query<ITV, number>({
            query: (id) => ({
                url: `/tv/${id}`,
                method: "GET",
                params: {
                    "api_key": `${API}`,
                    "append_to_response": "credits"
                }
            }),
            providesTags: ["TV"]
        }),
    })
});




