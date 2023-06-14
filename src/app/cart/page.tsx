// components/Cart.tsx
'use client'
import {
  removeFromCart,
  setCartItemQuantity,
  setCartTotalQuantity,
} from '@/redux/features/ShoppingCartSlice'
import { RootState } from '@/redux/store'
import { useDispatch, useSelector } from 'react-redux'
import { formatPrice } from '../../../utils/formatPrice'
import { useRouter } from 'next/navigation'
export default function ShoppingCart() {
  const router = useRouter()
  const { cartQuantity, items } = useSelector(
    (state: RootState) => state.counter,
  )
  const products = useSelector((state: RootState) => state.products.value)
  const dispatch = useDispatch()

  const handleQuantityChange = (productId: string, quantity: number) => {
    dispatch(setCartItemQuantity({ productId, quantity }))
    dispatch(setCartTotalQuantity())
  }
  const handleRemoveFromCart = (productId: string) => {
    dispatch(removeFromCart(productId))
    dispatch(setCartTotalQuantity())
  }
  // Calcular o preço total dos itens no carrinho
  const totalPrice = Object.entries(items).reduce(
    (total, [productId, quantity]) => {
      const product = products.find((p) => p.id === productId)
      return total + (product?.price_in_cents || 0) * quantity
    },
    0,
  )

  return (
    <div>
      <h2>Seu Carrinho</h2>
      <button type="button" onClick={() => router.push('/')}>
        voltar
      </button>
      <p>
        Total({cartQuantity} produtos ){formatPrice(totalPrice)}
      </p>

      {Object.entries(items).map(([productId, quantity]) => {
        const product = products.find((p) => p.id === productId)
        return product ? (
          <div key={productId}>
            <p>Nome do Produto: {product.name}</p>
            <img src={product.image_url} alt="" />
            <select
              onChange={(e) =>
                handleQuantityChange(productId, parseInt(e.target.value))
              }
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <p>{formatPrice(product.price_in_cents * quantity)}</p>
            <button onClick={() => handleRemoveFromCart(productId)}>
              Remover do Carrinho
            </button>
          </div>
        ) : null
      })}
      <h3>Preço Total: ${formatPrice(totalPrice)}</h3>
    </div>
  )
}
