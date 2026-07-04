import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { TBDB } from "./TMDB";

export const RED = configureStore({
    reducer: {
        [TBDB.reducerPath]: TBDB.reducer,
    },
    middleware: (gDM) => gDM().concat(TBDB.middleware),
});

setupListeners(RED.dispatch);
export type RootState = ReturnType<typeof RED.getState>;
export type AppDispatch = typeof RED.dispatch;


