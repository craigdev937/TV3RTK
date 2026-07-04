import { createApi, 
    fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IMulti } from "../models/Interfaces";
const API = import.meta.env.PUBLIC_KEY;
const URL = "https://api.themoviedb.org/3";

export const TBDB = createApi({
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
    })
});




