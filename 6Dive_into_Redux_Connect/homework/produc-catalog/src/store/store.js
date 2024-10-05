import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice";// export default productSlice.reducer;// экспортируем для store
import visibilityReducer from "./visibilitySlice";

export const store = configureStore({
  reducer: {
    products: productReducer,
    visibility: visibilityReducer,
  },
});
