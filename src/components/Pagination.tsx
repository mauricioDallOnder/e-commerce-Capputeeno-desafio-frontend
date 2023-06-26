import React, { useState } from 'react'
import { CaretLeft, CaretRight } from 'phosphor-react'
import { Product } from '@/hooks/useProductsHook'
import { PaginationList, PaginationButton, ProductCardContainer } from '@/styles/ProductList.styles'

interface PaginationProps {
  products: Product[]
  itemsPerPage: number
  renderProduct: (product: Product) => React.JSX.Element
}

export const Pagination: React.FC<PaginationProps> = ({
  products,
  itemsPerPage,
  renderProduct,
}) => {
  const [currentPage, setCurrentPage] = useState(0)

  const handlePageClick = (pageNumber: number) => {
    setCurrentPage(pageNumber)
  }

  const handleNextClick = () => {
    if (currentPage < Math.ceil(products.length / itemsPerPage) - 1) {
      setCurrentPage(currentPage + 1)
    }
  }

  const handlePreviousClick = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1)
    }
  }

  const startIndex = currentPage * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentProducts = products.slice(startIndex, endIndex)

  return (
    <nav>
      <PaginationList>
        {Array.from(
          { length: Math.ceil(products.length / itemsPerPage) },
          (_, i) => i,
        ).map((number) => (
          <li key={number}>
            <PaginationButton
              selected={number === currentPage}
              onClick={() => handlePageClick(number)}
              aria-label={`Ir para a página ${number + 1}`}
              data-cy={`page-button-${number + 1}`}
            >
              <p>{number + 1}</p>
            </PaginationButton>
          </li>
        ))}
        <li>
          <PaginationButton
            onClick={handlePreviousClick}
            aria-label="Página anterior"
            data-cy="prev-button"
          >
            <CaretLeft size={16} fontWeight={800} />
          </PaginationButton>
        </li>
        <li>
          <PaginationButton
            onClick={handleNextClick}
            aria-label="Próxima página"
            data-cy="next-button"
          >
            <CaretRight size={16} fontWeight={800} />
          </PaginationButton>
        </li>
      </PaginationList>
      <section>
        <ProductCardContainer>
          {currentProducts.map(renderProduct)}
        </ProductCardContainer>
      </section>
    </nav>
  )
}
