import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "./api";
import { cartSlice, favoriteSlice, sortProductSlice } from "./reducers";

export const BiStore = configureStore({
    reducer: {
        [productsApi.reducerPath]: productsApi.reducer,
        cart: cartSlice.reducer,
        fav: favoriteSlice.reducer,
        sort: sortProductSlice.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productsApi.middleware)
})