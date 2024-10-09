import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import data from "../data/tasks";


export const fetchTasks = createAsyncThunk('task/fetchTasks', async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(data)
        }, 2000);
    });
});

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: [],
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTasks.fulfilled, (state, action) => {
                return action.payload;
            });
    }
});

export default tasksSlice.reducer;