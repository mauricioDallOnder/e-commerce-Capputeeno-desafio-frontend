/* eslint-disable jsx-a11y/alt-text */
'use client'
import { usePathname } from 'next/navigation'
import { addProducts } from '@/redux/features/productSlice'
import CartIconWhite from '@/assets/icons/CartIconWhite'
import BackButton from '../../../components/backButton'
import { Helmet } from 'react-helmet'
import { useEffect } from 'react'
import { useAppDispatch } from '@/hooks/reduxhooks'
import { useProducts } from '@/hooks/useProductsHook'
import { ProductBoxContainer, BoxDescription, ProductArticle, ProductFigure, ProductInfo, HeaderSection, DescriptionSection, ProductFooter } from '@/styles/DescriptionPageStyles'
import { formatPrice } from '@/utils/FormatPrice'
import { addToCart } from '../../../redux/features/shoppingCartSlice'

export default function ProductPage() {
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
    <>
      <Helmet>
        <title>Descrição do produto - E-commerce--capputeeno</title>
        <meta
          name="description"
          content="Página de descrição do produto selecionado. Agradecemos pela sua compra!"
        />
      </Helmet>
      <ProductBoxContainer>
        <BackButton />
        <BoxDescription>
          <main>
            <ProductArticle>
              <ProductFigure>
                <img src={product.image_url} alt={product.name} />
                <figcaption>{product.name}</figcaption>
              </ProductFigure>
              <ProductInfo>
                <HeaderSection>
                  <span>{product.category}</span>
                  <h2>{product.name}</h2>
                  <p>{formatPrice(product.price_in_cents ?? 0)}</p>
                </HeaderSection>
                <DescriptionSection>
                  <span>
                    *Frete de R$40,00 para todo o Brasil. Grátis para compras
                    acima de R$900,00.
                  </span>
                  <h3>Descrição</h3>
                  <p>{product.description}</p>
                </DescriptionSection>
                <ProductFooter>
                  <button onClick={handleAddToCart}>
                    <span>
                      <CartIconWhite />
                      Adicionar ao carrinho
                    </span>
                  </button>
                </ProductFooter>
              </ProductInfo>
            </ProductArticle>
          </main>
        </BoxDescription>
      </ProductBoxContainer>
    </>
  )
}
