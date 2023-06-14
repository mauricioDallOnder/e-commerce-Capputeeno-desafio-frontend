import React, { useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '../../hooks/Reduxhooks'
import { useProducts } from '../../hooks/useProductsHook'
import {
  addProducts,
  selectFilter,
  selectProducts,
  selectFilterCategory,
} from '@/redux/features/productSlice'
import { ProductCard } from './productCard'
import { Pagination } from './Pagination'
import Link from 'next/link'

export function ProductList() {
  const products = useAppSelector(selectProducts)
  const filter = useAppSelector(selectFilter)
  const filterCategory = useAppSelector(selectFilterCategory)

  const productsList = useProducts()
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(addProducts(productsList))
  }, [dispatch, productsList])

  let filteredProducts = products

  if (filterCategory !== 'all') {
    filteredProducts = filteredProducts.filter(
      (product) => product.category === filterCategory,
    )
  }

  if (filter) {
    const lowerCaseFilter = filter.toLowerCase()
    filteredProducts = filteredProducts.filter((product) =>
      product.name.toLowerCase().includes(lowerCaseFilter),
    )
  }

  const itemsPerPage = 12

  return (
    <Pagination
      products={filteredProducts}
      itemsPerPage={itemsPerPage}
      renderProduct={(product) => (
        <Link href={`/product/${product.id}`} key={product.id} prefetch={false}>
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            image_url={product.image_url}
            price_in_cents={product.price_in_cents}
            category={product.category}
            created_at={product.created_at}
            sales={product.sales}
          />
        </Link>
      )}
    />
  )
}
