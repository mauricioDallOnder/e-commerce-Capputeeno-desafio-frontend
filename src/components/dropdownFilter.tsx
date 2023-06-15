import { ArrowIcon } from '@/assets/icons/arrowIcon'
import {
  FilterContainer,
  PriorityFilter,
  PriorityFilterItem,
} from '../../styles/Dropdown.styles'
import { useEffect, useRef, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/Reduxhooks'
import {
  addProducts,
  setSortMethod,
  sortProducts,
  selectSortMethod,
  SortMethod,
} from '@/redux/features/ProductSlice'
import { useProducts } from '../../hooks/useProductsHook'

export function DropDownMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const sortMethod = useAppSelector(selectSortMethod)

  const productsList = useProducts()
  const dispatch = useAppDispatch()
  const node = useRef<HTMLDivElement>(null) // Referência ao nó do dropdown

  useEffect(() => {
    dispatch(addProducts(productsList))
  }, [dispatch, productsList])

  // Adiciona um event listener quando o componente é montado e o remove quando é desmontado
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      // Verifica se o clique foi fora do nó do dropdown(se for fora fecha o menu)
      if (node.current && !node.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      // Limpa o event listener no desmonte do componente
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleSortMethodChange = (newMethod: SortMethod) => {
    dispatch(setSortMethod(newMethod))
    dispatch(sortProducts(newMethod))
    setIsOpen(false)
  }

  const getSortMethodLabel = (method: SortMethod) => {
    switch (method) {
      case '':
        return 'Organizar por'
      case 'novidades':
        return 'Novidades'
      case 'preco-maior':
        return 'Preço: Maior - menor'
      case 'preco-menor':
        return 'Preço: Menor - maior'
      case 'mais-vendidos':
        return 'Mais vendidos'
      default:
        return 'Organizar por'
    }
  }

  return (
    <FilterContainer ref={node}>
      <button onClick={() => setIsOpen((prev) => !prev)}>
        {getSortMethodLabel(sortMethod)}
        <ArrowIcon />
      </button>
      {isOpen && (
        <PriorityFilter>
          <PriorityFilterItem onClick={() => handleSortMethodChange('')}>
            Organizar por
          </PriorityFilterItem>
          <PriorityFilterItem
            onClick={() => handleSortMethodChange('novidades')}
          >
            Novidades
          </PriorityFilterItem>
          <PriorityFilterItem
            onClick={() => handleSortMethodChange('preco-maior')}
          >
            Preço: Maior - menor
          </PriorityFilterItem>
          <PriorityFilterItem
            onClick={() => handleSortMethodChange('preco-menor')}
          >
            Preço: Menor - maior
          </PriorityFilterItem>
          <PriorityFilterItem
            onClick={() => handleSortMethodChange('mais-vendidos')}
          >
            Mais vendidos
          </PriorityFilterItem>
        </PriorityFilter>
      )}
    </FilterContainer>
  )
}
