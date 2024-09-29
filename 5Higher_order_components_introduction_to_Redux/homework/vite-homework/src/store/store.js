import { configureStore } from "@reduxjs/toolkit";
import { themeReducer } from "./SwitchReducer";

export const store = configureStore({
    reducer: {
        theme: themeReducer,
    },
})