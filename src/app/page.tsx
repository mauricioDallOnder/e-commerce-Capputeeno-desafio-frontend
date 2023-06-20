'use client'

import { FilterBar } from '@/components/FilterBar'
import { ProductList } from '@/components/ProductList'
import { Helmet } from 'react-helmet'

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Pagina Inicial do E-commerce--capputeeno</title>
        <meta name="description" content="Página Inicial da loja Capputeeno. Selecione seu produto abaixo!"/>
      </Helmet>
  
    <main style={{ maxWidth: 1200, marginInline: 'auto' }}>
      <FilterBar />
      <ProductList />
    </main>
    </>
  )
}
