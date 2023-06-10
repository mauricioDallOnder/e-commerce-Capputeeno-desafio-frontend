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
// <button onClick={() => dispatch(reset())}>reset</button>
// <button onClick={() => dispatch(increment())}>aumenta item 2</button>
//  <button onClick={() => dispatch(decrement())} style={{ marginInline: 16 }} > diminui item 2</button>
