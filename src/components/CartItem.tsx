/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/alt-text */
import {
  setCartItemQuantity,
  setCartTotalQuantity,
  removeFromCart,
} from '@/redux/features/ShoppingCartSlice'
import { useDispatch } from 'react-redux'
import {
  CardContainer,
  Item,
  SelectQuantity,
} from '../../styles/Cart-itemStyle'
import { Trash } from 'phosphor-react'
import { formatPrice } from '../../utils/formatPrice'
import React from 'react'

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
  return (
    <Item>
      <React.Fragment>
        {' '}
        <button
          onClick={() => handleRemoveFromCart(productId)}
          aria-label="Deletar"
        >
          <Trash size={32} />
        </button>
        <img src={image_url} />
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
    </Item>
  )
}
