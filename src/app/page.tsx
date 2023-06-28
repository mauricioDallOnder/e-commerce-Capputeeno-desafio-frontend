'use client'


import { Helmet } from 'react-helmet'
import { FilterBar } from '../components/filterBar'
import { ProductList } from '../components/productList'

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Pagina Inicial do E-commerce--capputeeno</title>
        <meta
          name="description"
          content="Página Inicial da loja Capputeeno. Selecione seu produto abaixo!"
        />
      </Helmet>

      <main style={{ maxWidth: 1200, marginInline: 'auto' }}>
        <FilterBar />
        <ProductList />
      </main>
    </>
  )
}
