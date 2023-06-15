'use client'

import { FilterBar } from '@/components/FilterBar'
import { ProductList } from '@/components/ProductList'

export default function Home() {
  return (
    <main style={{ maxWidth: 1200, marginInline: 'auto' }}>
      <FilterBar />
      <ProductList />
    </main>
  )
}
