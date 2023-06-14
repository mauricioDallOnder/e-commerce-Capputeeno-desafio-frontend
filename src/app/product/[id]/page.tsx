'use client'
import { useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { addProducts } from '@/redux/features/productSlice'
import { useAppDispatch } from '../../../../hooks/Reduxhooks'
import { useProducts } from '../../../../hooks/useProductsHook'

export default function NotePage() {
  const pathname = usePathname()
  const router = useRouter()
  // Obtem a id do produto a partir da URL, divide a url em 2 e paga ultima parte que é a ID
  const id = pathname.split('/').pop()

  const productsList = useProducts()
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(addProducts(productsList))
  }, [dispatch, productsList])

  // Filtrar a lista de produtos para obter apenas o produto com a ID da URL
  const product = productsList.find((item) => item.id === id)

  // Caso o produto não seja encontrado ou ainda não tenha sido carregado
  if (!product) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <button type="button" onClick={() => router.push('/')}>
        home
      </button>
      <div>
        <h3>{product.name}</h3>
        <h5>{product.description}</h5>
        <img src={product.image_url} alt={product.name} />
      </div>
      <button type="button" onClick={() => ''}>
        Adicionar ao carrinho
      </button>
    </div>
  )
}
