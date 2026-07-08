import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { IFav, ITV, IMov, IPeople } from "../models/Interfaces";
type FavItem = ITV | IMov | IPeople;

const loadFav = (): FavItem[] => {
    try {
        const stored = localStorage.getItem("favorites");
        return stored ? JSON.parse(stored) : [];
    } catch {
        return [];
    }
};

const saveFav = (fav: FavItem[]) => {
    localStorage.setItem("favorites", JSON.stringify(fav));
};

const initialState: IFav = {
    fav: loadFav()
};

const FavSlice = createSlice({
    name: "favorites",
    initialState: initialState,
    reducers: {
        // Add an item if it is not already in favorites
        add: (state, action: PayloadAction<FavItem>) => {
            const exists = state.fav.some(
                (item) => item.id === action.payload.id
            );
            if (!exists) {
                state.fav.push(action.payload);
                saveFav(state.fav);
            }
        },
        // Remove an item by id
        remove: (state, action: PayloadAction<number>) => {
            state.fav = state.fav.filter(
                (item) => item.id !== action.payload
            );
            saveFav(state.fav);
        },
        // Add if absent, remove if present
        toggle: (state, action: PayloadAction<FavItem>) => {
            const exists = state.fav.some(
                (item) => item.id === action.payload.id
            );
            state.fav = exists
                ? state.fav.filter((item) => item.id !== action.payload.id)
                : [...state.fav, action.payload];
            saveFav(state.fav);
        }
    }
});

export const { add, remove, toggle } = FavSlice.actions;
export const FavReducer = FavSlice.reducer;
