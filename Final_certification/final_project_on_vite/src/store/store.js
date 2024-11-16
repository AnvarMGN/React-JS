import {configureStore} from "@reduxjs/toolkit";
import leaveFormReducer from "./leaveFormSlice";


export const store = configureStore({
    reducer:{
        dataForm: leaveFormReducer,
    }
});