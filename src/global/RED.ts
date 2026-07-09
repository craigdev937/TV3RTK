import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { TMDB } from "./TMDB";
import { FavReducer } from "./FavSlice";
import { ThemeReducer } from "./ThemeSlice";

export const RED = configureStore({
    reducer: {
        theme: ThemeReducer,
        favorites: FavReducer,
        [TMDB.reducerPath]: TMDB.reducer,
    },
    middleware: (gDM) => gDM().concat(TMDB.middleware),
});

setupListeners(RED.dispatch);
export type RootState = ReturnType<typeof RED.getState>;
export type AppDispatch = typeof RED.dispatch;


