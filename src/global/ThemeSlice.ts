import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { ITheme, TTheme } from "../models/Interfaces";

const loadTheme = (): TTheme => {
    try {
        const stored = localStorage.getItem("theme");
        if (stored === "light" || stored === "dark") {
            return stored;
        }
        // Fall back to the OS preference
        const prefersLight = window.matchMedia(
            "(prefers-color-scheme: light)"
        ).matches;
        return prefersLight ? "light" : "dark";
    } catch {
        return "dark";
    }
};

// Persist the choice and reflect it on the <html> element so the
// CSS variables in App.css can switch via [data-theme="..."].
const applyTheme = (mode: TTheme) => {
    localStorage.setItem("theme", mode);
    document.documentElement.setAttribute("data-theme", mode);
};

// Apply immediately so the first paint matches the stored theme.
applyTheme(loadTheme());

const initialState: ITheme = {
    mode: loadTheme()
};

const ThemeSlice = createSlice({
    name: "theme",
    initialState: initialState,
    reducers: {
        // Flip between light and dark
        toggleTheme: (state) => {
            state.mode = state.mode === "dark" ? "light" : "dark";
            applyTheme(state.mode);
        },
        // Set an explicit theme
        setTheme: (state, action: PayloadAction<TTheme>) => {
            state.mode = action.payload;
            applyTheme(state.mode);
        }
    }
});

export const { toggleTheme, setTheme } = ThemeSlice.actions;
export const ThemeReducer = ThemeSlice.reducer;
