'use client'
import { FilterBar } from '@/components/filterBar'
import { ProductList } from '@/components/productList'

export default function Home() {
  return (
    <main style={{ maxWidth: 1200, marginInline: 'auto' }}>
      <FilterBar />

      <ProductList />
    </main>
  )
}
