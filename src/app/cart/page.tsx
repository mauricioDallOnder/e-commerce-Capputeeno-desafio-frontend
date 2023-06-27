'use client'
import React, { useState } from 'react'
import { RootState } from '@/redux/store'
import { useSelector } from 'react-redux'
import BackButton from '@/components/BackButton'
import CartItem from '@/components/CartItem'
import { useRouter } from 'next/navigation'
import ProgressBar from '@ramonak/react-progress-bar'
import { Helmet } from 'react-helmet'
import { CartPageContainer, CartContainer, CartListContainer, CartList, CartResultContainer, TotalItem, Divider, ShopBtn } from '@/styles/CartPageStyles'
import { formatPrice } from '@/utils/FormatPrice'

export default function ShoppingCart() {
  const router = useRouter()

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

  // Criar o estado de progresso
  const [progress, setProgress] = useState(0)
  const [buttonText, setButtonText] = useState('FINALIZAR COMPRA')

  async function handleCheckout() {
    setProgress(0)
    setButtonText('PROCESSANDO PEDIDO...')
    const intervalId = setInterval(() => {
      setProgress((prevProgress) => prevProgress + 15)
    }, 1000)
    setTimeout(() => clearInterval(intervalId), 9000)

    await new Promise((resolve) => setTimeout(resolve, 9000))

    router.push('/OrderSuccessPage')
    setButtonText('FINALIZAR COMPRA')
  }

  return (
    <>
      <Helmet>
        <title>Carrinho de produtos - E-commerce--capputeeno</title>
        <meta
          name="description"
          content="Página do carrinho de produtos do E-commerce--capputeeno. Agradecemos pela sua compra!"
        />
      </Helmet>

      <CartPageContainer>
        <CartContainer>
          <CartListContainer>
            <BackButton />
            <h3>Seu carrinho</h3>
            <p>
              Total {cartQuantity} produtos
              <span>{formatPrice(totalprice)}</span>
            </p>
            <CartList role="list">
              {Object.entries(items).map(([productId, quantity]) => {
                const product = products.find((p) => p.id === productId)
                return product ? (
                  <li role="listitem" key={productId}>
                    <CartItem
                      productId={product.id}
                      name={product.name}
                      image_url={product.image_url}
                      description={product.description!}
                      quantity={quantity}
                      price_in_cents={product.price_in_cents}
                    />
                  </li>
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
            {progress > 0 && progress <= 100 && (
              <ProgressBar completed={progress} />
            )}
            {totalPriceWithFreight === 0 ? (
              <ShopBtn disabled={true}>FINALIZAR COMPRA</ShopBtn>
            ) : (
              <ShopBtn onClick={handleCheckout}>{buttonText}</ShopBtn>
            )}
          </CartResultContainer>
        </CartContainer>
      </CartPageContainer>
    </>
  )
}
