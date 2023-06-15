'use client'
import { RootState } from '@/redux/Store'
import { useDispatch, useSelector } from 'react-redux'
import {
  CartList,
  CartListContainer,
  CartResultContainer,
  CartContainer,
  Divider,
  CartPageContainer,
  ShopBtn,
  TotalItem,
} from '../../../styles/CartPage.styles'
import BackButton from '@/components/BackButton'
import CartItem from '@/components/CartItem'
import React from 'react'
import { useRouter } from 'next/navigation'
import { clearCart } from '@/redux/features/ShoppingCartSlice'
import { formatPrice } from '../../../utils/FormatPrice'

export default function ShoppingCart() {
  const router = useRouter()
  const dispatch = useDispatch()
  const { cartQuantity, items } = useSelector(
    (state: RootState) => state.shoppingCart,
  )
  const products = useSelector((state: RootState) => state.products.value)

  // Converta o frete para centavos
  const frete = 4000

  // Calcular o preço total dos itens no carrinho
  const totalprice = Object.entries(items).reduce(
    (total, [productId, quantity]) => {
      const product = products.find((p) => p.id === productId)
      return total + (product?.price_in_cents || 0) * quantity
    },
    0,
  )

  // Verificar se existem itens no carrinho
  const cartNotEmpty = Object.keys(items).length > 0

  // Calcular o total incluindo o frete, caso existam itens no carrinho
  const totalPriceWithFreight = cartNotEmpty ? totalprice + frete : totalprice

  const handleCheckout = () => {
    dispatch(clearCart())
    router.push('/finished-order')
  }

  return (
    <CartPageContainer>
      <CartContainer>
        <CartListContainer>
          <BackButton />
          <h3>Seu carrinho</h3>
          <p>
            Total {cartQuantity} produtos
            <span>{formatPrice(totalprice)}</span>
          </p>
          <CartList>
            {Object.entries(items).map(([productId, quantity]) => {
              const product = products.find((p) => p.id === productId)
              return product ? (
                <React.Fragment key={productId}>
                  <CartItem
                    productId={product.id}
                    name={product.name}
                    image_url={product.image_url}
                    description={product.description!}
                    quantity={quantity}
                    price_in_cents={product.price_in_cents}
                  />
                </React.Fragment>
              ) : null
            })}
          </CartList>
        </CartListContainer>
        <CartResultContainer>
          <h3>Resumo do Pedido</h3>
          <TotalItem isBold={false}>
            <p>Subtotal de produtos</p>
            <p>{formatPrice(totalprice)}</p>
          </TotalItem>
          <TotalItem isBold={false}>
            <p>Entrega</p>
            <p>R$ 40,00</p>
          </TotalItem>
          <Divider />
          <TotalItem isBold>
            <p>Total</p>
            <p>{formatPrice(totalPriceWithFreight)}</p>
          </TotalItem>
          {totalPriceWithFreight === 0 ? (
            <ShopBtn disabled={true}>FINALIZAR COMPRA</ShopBtn>
          ) : (
            <ShopBtn onClick={handleCheckout}>FINALIZAR COMPRA</ShopBtn>
          )}
        </CartResultContainer>
      </CartContainer>
    </CartPageContainer>
  )
}
