/* eslint-disable camelcase */
import React from 'react'
import { Card } from '../../styles/productCartStyle'
import { Product } from '../../hooks/useProductsHook'
import { formatPrice } from '../../utils/formatPrice'

interface ProductCartProps extends Product {
  id: string
  name: string
  description?: string
  image_url: string
  price_in_cents: number
}

export function ProductCart({
  id,
  name,
  image_url,
  price_in_cents,
}: ProductCartProps) {
  return (
    <Card>
      <img src={image_url} alt={name} />
      <h3>{name}</h3>
      <div></div>
      <p>{formatPrice(price_in_cents)}</p>
    </Card>
  )
}
