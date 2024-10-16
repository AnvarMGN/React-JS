import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    visibility: "hidden",
};

const visibilitySlice = createSlice({
    name: "visibility",
    initialState,
    reducers: {
        // toggleVisibility: (state, action) => {
        //     state.visibility === "hidden" ? action.payload("hidden") : action.payload("none")
        // }
        toggleVisibility: (state) => {
            state.visibility = state.visibility === "hidden" ? "visible" : "hidden";
        }
    },
});


export const { toggleVisibility } = visibilitySlice.actions;
export default visibilitySlice.reducer;
