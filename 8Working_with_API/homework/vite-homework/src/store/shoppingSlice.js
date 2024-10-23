import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    shoppingList: [],
};

export const shoppingSlice = createSlice({
    name: 'shopping',
    initialState,
    reducers: {
        addGoods: (state, action) => {
            state.shoppingList.push(action.payload);
        },
        deleteGoods: (state, action) => {
            const products = state.shoppingList.filter(
                (product) => product.id !== action.payload,
            );
            state.shoppingList = products;
        },
        setQuantityCart: (state, action) => {
            const products = state.shoppingList.find(item => item.id == action.payload.id);
            console.log(action.payload);
            if (products) {
                products.quantity = action.payload.value;
            };
        },
    },
});



export const { addGoods, deleteGoods, setQuantityCart } = shoppingSlice.actions;
export default shoppingSlice.reducer;