/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/alt-text */

import { useDispatch } from 'react-redux'
import { Trash } from 'phosphor-react'
import React, { useState } from 'react'
import {
  setCartItemQuantity,
  setCartTotalQuantity,
  removeFromCart,
} from '../redux/features/ShoppingCartSlice'
import {
  CartItemContainer,
  CardContainer,
  SelectQuantity,
} from '../styles/CartItemStyles'
import { formatPrice } from '../utils/FormatPrice'

interface ProducsProps {
  productId: string
  name: string
  image_url: string
  description: string
  quantity: number
  price_in_cents: number
}

export default function CartItem({
  name,
  description,
  quantity,
  price_in_cents,
  image_url,
  productId,
}: ProducsProps) {
  const dispatch = useDispatch()
  const handleQuantityChange = (productId: string, quantity: number) => {
    dispatch(setCartItemQuantity({ productId, quantity }))
    dispatch(setCartTotalQuantity())
  }
  const handleRemoveFromCart = (productId: string) => {
    dispatch(removeFromCart(productId))
    dispatch(setCartTotalQuantity())
  }
  const [isHover, setIsHover] = useState(false)
  const TrashStyle = {
    color: isHover ? '#DE3838' : '',
  }
  const handleMouseEnter = () => {
    setIsHover(true)
  }
  const handleMouseLeave = () => {
    setIsHover(false)
  }
  return (
    <CartItemContainer role="listitem">
      <React.Fragment>
        {' '}
        <button
          onClick={() => handleRemoveFromCart(productId)}
          aria-label="Deletar"
        >
          <Trash
            size={32}
            style={TrashStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        </button>
        <img src={image_url} alt={name} />
        <CardContainer>
          <h4>{name}</h4>
          <p>{description}</p>
          <div>
            <SelectQuantity
              value={quantity}
              onChange={(e) =>
                handleQuantityChange(productId, parseInt(e.target.value))
              }
            >
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </SelectQuantity>
            <span>{formatPrice(price_in_cents)}</span>
          </div>
        </CardContainer>
      </React.Fragment>
    </CartItemContainer>
  )
}
