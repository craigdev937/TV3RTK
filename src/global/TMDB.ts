import { createApi, 
    fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IMulti, ITV, ITVTrailer, IMov, 
    ITrendMov, IMovTrailer, IActor,
    IPeople, ITrendPeople } from "../models/Interfaces";
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
        tvtrail: builder.query<ITVTrailer, number>({
            query: (id) => ({
                url: `/tv/${id}/videos`,
                method: "GET",
                params: {"api_key": `${API}`}
            }),
            providesTags: ["TV"]
        }),
        trendmov: builder.query<ITrendMov, string>({
            query: (tW) => ({
                url: `/trending/movie/${tW}`,
                method: "GET",
                params: {"api_key": `${API}`}
            }),
            providesTags: ["Films"]
        }),
        movdetail: builder.query<IMov, number>({
            query: (id) => ({
                url: `/movie/${id}`,
                method: "GET",
                params: {
                    "api_key": `${API}`,
                    "append_to_response": "credits"
                }
            }),
            providesTags: ["Films"]
        }),
        movtrail: builder.query<IMovTrailer, number>({
            query: (id) => ({
                url: `/movie/${id}/videos`,
                method: "GET",
                params: {"api_key": `${API}`}
            }),
            providesTags: ["Films"]
        }),
        trendpeople: builder.query<ITrendPeople, string>({
            query: (tW) => ({
                url: `/trending/person/${tW}`,
                method: "GET",
                params: {"api_key": `${API}`}
            }),
            providesTags: ["Actors"]
        }),
        people: builder.query<IActor, number>({
            query: (id) => ({
                url: `person/${id}`,
                method: "GET",
                params: {
                    "api_key": `${API}`,
                    "append_to_response": "combined_credits"
                }
            }),
            providesTags: ["Actors"]
        }),
    })
});




