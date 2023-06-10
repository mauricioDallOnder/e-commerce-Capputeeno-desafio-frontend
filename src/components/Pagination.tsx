import React, { useState } from 'react'
import { Product } from '../../hooks/useProductsHook'
import {
  PaginationButton,
  ProductCardContainer,
} from '../../styles/productListStyle'

interface PaginationProps {
  products: Product[]
  itemsPerPage: number
  // eslint-disable-next-line no-undef
  renderProduct: (product: Product) => JSX.Element
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
    <div>
      <div
        style={{
          display: 'flex',
          width: '90%',
          alignItems: 'flex-end',
          alignContent: 'flex-end',
          justifyContent: 'flex-end',
        }}
      >
        {Array.from(
          { length: Math.ceil(products.length / itemsPerPage) },
          (_, i) => i,
        ).map((number) => (
          <PaginationButton
            key={number}
            selected={number === currentPage}
            onClick={() => handlePageClick(number)}
          >
            <p>{number + 1}</p>
          </PaginationButton>
        ))}
        <PaginationButton onClick={handlePreviousClick}>
          <p>&lt;</p> {/* Seta para a esquerda */}
        </PaginationButton>
        <PaginationButton onClick={handleNextClick}>
          <p>&gt;</p> {/* Seta para a direita */}
        </PaginationButton>
      </div>
      <ProductCardContainer>
        {currentProducts.map(renderProduct)}
      </ProductCardContainer>
    </div>
  )
}
