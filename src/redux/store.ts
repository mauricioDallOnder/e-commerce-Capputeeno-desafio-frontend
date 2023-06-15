import { configureStore } from '@reduxjs/toolkit'
import shoppingCartReducer from './features/ShoppingCartSlice'
import productSlice from './features/ProductSlice'

export const store = configureStore({
  reducer: {
    shoppingCart: shoppingCartReducer, // retorna um reducer
    products: productSlice, // usar products, que é um hook e não um reducer.
  },
  devTools: process.env.NODE_ENV !== 'production',
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
