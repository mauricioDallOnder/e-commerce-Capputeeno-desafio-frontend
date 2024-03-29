import { useEffect, useState } from 'react'

import { useAppDispatch } from './Reduxhooks'
import { addProducts } from '../redux/features/productSlice'

export interface Product {
  id: string
  name: string
  description?: string
  image_url: string
  category?: string
  price_in_cents: number
  created_at?: Date
  sales?: number
}
// hook to get data from graphql api
const API_URL = 'https://apiprodutos-a8b640cfd12e.herokuapp.com/graphql'

export function useProducts() {
  const dispatch = useAppDispatch()
  const [productsList, setProducts] = useState<Product[]>([])

  useEffect(() => {
    fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: `{
          products {
            id
            name
            description
            image_url
            category
            price_in_cents
            created_at
            sales
          }
        }`,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.data.products)
        dispatch(addProducts(data.data.products))
      })
      .catch((error) => {
        console.error('Error:', error)
      })
  }, [dispatch])

  return productsList
}
