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
    <StyledProductCard>
      <img src={image_url} alt={name} />
      <h3>{name}</h3>
      <div></div>
      <p>{formatPrice(price_in_cents)}</p>
    </StyledProductCard>
  )
}
