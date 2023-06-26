import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Product } from '@/hooks/useProductsHook'
import { RootState } from '../store'


export type SortMethod =
  | 'novidades'
  | 'preco-maior'
  | 'preco-menor'
  | 'mais-vendidos'
  | ''

export interface ProductState {
  value: Product[]
  filter: string
  filterCategory: string
  sortMethod: SortMethod
}

const initialState: ProductState = {
  value: [],
  filter: '',
  filterCategory: 'all',
  sortMethod: '',
}

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProducts: (state, action: PayloadAction<Product[]>) => {
      state.value = action.payload
    },
    setFilter: (state, action: PayloadAction<string>) => {
      state.filter = action.payload
    },
    setFilterCategory: (state, action: PayloadAction<string>) => {
      state.filterCategory = action.payload
    },
    setSortMethod: (state, action: PayloadAction<SortMethod>) => {
      state.sortMethod = action.payload
    },
    sortProducts: (state, action: PayloadAction<SortMethod>) => {
      let compareFunction: (a: Product, b: Product) => number

      switch (action.payload) {
        case 'novidades':
          compareFunction = (a, b) =>
            new Date(b.created_at!).getTime() -
            new Date(a.created_at!).getTime()
          break
        case 'preco-maior':
          compareFunction = (a, b) => b.price_in_cents - a.price_in_cents
          break
        case 'preco-menor':
          compareFunction = (a, b) => a.price_in_cents - b.price_in_cents
          break
        case 'mais-vendidos':
          compareFunction = (a, b) => b.sales! - a.sales!
          break
        case '':
        default:
          state.value = initialState.value
          return
      }

      state.value.sort(compareFunction)
    },
  },
})

export const {
  addProducts,
  setFilter,
  setFilterCategory,
  setSortMethod,
  sortProducts,
} = productSlice.actions

export const selectProducts = (state: RootState) => state.products.value
export const selectFilter = (state: RootState) => state.products.filter
export const selectFilterCategory = (state: RootState) =>
  state.products.filterCategory
export const selectSortMethod = (state: RootState) => state.products.sortMethod

export default productSlice.reducer
