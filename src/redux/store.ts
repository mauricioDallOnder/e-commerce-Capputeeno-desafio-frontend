import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counterSlice";
import { useProducts } from "../../hooks/useProductsHook";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import productSlice from "./features/productSlice";


export const store = configureStore({
  reducer: {
    counter: counterReducer,  // retorna um reducer
    products: productSlice,  // usar products, que é um hook e não um reducer.
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

