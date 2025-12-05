import { configureStore } from "@reduxjs/toolkit";
import errorReducer from "../features/errorSlice";
import cartReducer from "./cartSlice";
import favoritesReducer from "./favoritesSlice";



export const store = configureStore({
    reducer : {
        error : errorReducer,
        cart: cartReducer,
        favorites: favoritesReducer, // ✅ add this


    },
})