import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { Product } from '../../hooks/useProductsHook'

export type ShoppingCartProps = {
  cartQuantity: number
  items: { [productId: string]: number }
}

const initialState = {
  cartQuantity: 0,
  items: {},
} as ShoppingCartProps

export const shoppingCart = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    removeFromCart: (state, action: PayloadAction<string>) => {
      const productId = action.payload
      delete state.items[productId]
    },
    setCartItemQuantity: (
      state,
      action: PayloadAction<{ productId: string; quantity: number }>,
    ) => {
      const { productId, quantity } = action.payload
      state.items[productId] = quantity
    },
    setCartTotalQuantity: (state) => {
      state.cartQuantity = Object.values(state.items).reduce(
        (sum, qty) => sum + qty,
        0,
      )
    },
    addToCart: (state, action: PayloadAction<Product>) => {
      const productId = action.payload.id
      if (state.items[productId]) {
        state.items[productId]++
      } else {
        state.items[productId] = 1
      }
      state.cartQuantity += 1
    },
    clearCart: () => {
      return initialState
    },
  },
})

export const {
  removeFromCart,
  setCartItemQuantity,
  setCartTotalQuantity,
  addToCart,
  clearCart,
} = shoppingCart.actions

export const selectremoveFromCart = (state: RootState) =>
  state.shoppingCart.items
export const selectCartItemQuantity = (state: RootState) =>
  state.shoppingCart.cartQuantity
export const selectCartTotalQuantity = (state: RootState) =>
  state.shoppingCart.cartQuantity
export const selectaddToCart = (state: RootState) => state.shoppingCart.items
export const seleclearCart = (state: RootState) => state.shoppingCart.items

export default shoppingCart.reducer
