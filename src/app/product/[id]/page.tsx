/* eslint-disable jsx-a11y/alt-text */
'use client'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { addProducts } from '@/redux/features/productSlice'
import { useAppDispatch } from '../../../../hooks/Reduxhooks'
import { useProducts } from '../../../../hooks/useProductsHook'
import { addToCart } from '@/redux/features/ShoppingCartSlice'
import {
  Container,
  PageLayoutContainer,
  ProductInfo,
} from '../../../../styles/productPageDescriptionStyle'
import { formatPrice } from '../../../../utils/formatPrice'
import CartIconWhite from '@/assets/icons/CartIconWhite'
import BackButton from '@/components/BackButton'

export default function NotePage() {
  const pathname = usePathname()

  // Obtem a id do produto a partir da URL, divide a url em 2 e paga ultima parte que é a ID
  const id = pathname.split('/').pop()

  const productsList = useProducts()
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(addProducts(productsList))
  }, [dispatch, productsList])

  // Filtrar a lista de produtos para obter apenas o produto com a ID da URL
  const product = productsList.find((item) => item.id === id)!

  // adicionar item ao carrinho:
  const handleAddToCart = () => {
    dispatch(addToCart(product))
  }

  // Caso o produto não seja encontrado ou ainda não tenha sido carregado
  if (!product) {
    return <div>Loading...</div>
  }

  return (
    <PageLayoutContainer>
      <Container>
        <BackButton />
        <section>
          <img src={product.image_url} />
          <div>
            <ProductInfo>
              <span>{product.category}</span>
              <h2>{product.name}</h2>
              <span>{formatPrice(product.price_in_cents ?? 0)}</span>
              <p>
                *Frete de R$40,00 para todo o Brasil. Grátis para compras acima
                de R$900,00.
              </p>
              <div>
                <h3>Descrição</h3>
                <p>{product.description}</p>
              </div>
            </ProductInfo>
            <button onClick={handleAddToCart}>
              <CartIconWhite />
              Adicionar ao carrinho
            </button>
          </div>
        </section>
      </Container>
    </PageLayoutContainer>
  )
}
