/* eslint-disable camelcase */
import React from 'react'
import { StyledProductCard } from '../../styles/ProductCard.styles'
import { Product } from '../../hooks/useProductsHook'
import { formatPrice } from '../../utils/FormatPrice'

export interface ProductCardProps extends Product {
  id: string
  name: string
  description?: string
  image_url: string
  price_in_cents: number
}

export function ProductCard({
  id,
  name,
  image_url,
  price_in_cents,
}: ProductCardProps) {
  return (
    <StyledProductCard data-cy="product-card">
      {' '}
      {/* Aqui está a adição do atributo data-cy */}
      <figure>
        <img src={image_url} alt={name} />
        <figcaption>{name}</figcaption>
      </figure>
      <div></div>
      <p>{formatPrice(price_in_cents)}</p>
    </StyledProductCard>
  )
}
