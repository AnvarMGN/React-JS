import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    leaveForm: [],
};

const leaveFormSlice = createSlice({
    name: "dataForm",
    initialState,
    reducers: {
        addLeaveForm: (state, action) => {
            state.leaveForm.push({ ...action.payload, id: crypto.randomUUID() });
        },
    },
});

export const {addLeaveForm} = leaveFormSlice.actions;
export default leaveFormSlice.reducer;