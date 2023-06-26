import { ArrowIcon } from '@/assets/icons/arrowIcon'
import { useEffect, useRef, useState } from 'react'
import {
  addProducts,
  setSortMethod,
  sortProducts,
  selectSortMethod,
  SortMethod,
} from '@/redux/features/productSlice'
import { useAppSelector, useAppDispatch } from '@/hooks/reduxhooks'
import { useProducts } from '@/hooks/useProductsHook'
import { FilterContainer, PriorityFilter, PriorityFilterItem } from '@/styles/dropdown.styles'


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
    if (newMethod !== '') {
      dispatch(sortProducts(newMethod))
    }
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
    <FilterContainer ref={node} data-testid="filter-container">
      <button onClick={() => setIsOpen((prev) => !prev)}>
        {getSortMethodLabel(sortMethod)}
        <ArrowIcon />
      </button>
      {isOpen && (
        <PriorityFilter data-testid="priority-filter">
          <PriorityFilterItem
            data-testid="sort-by-default"
            onClick={() => handleSortMethodChange('')}
          >
            Organizar por
          </PriorityFilterItem>
          <PriorityFilterItem
            data-testid="sort-by-novidades"
            onClick={() => handleSortMethodChange('novidades')}
          >
            Novidades
          </PriorityFilterItem>
          <PriorityFilterItem
            data-testid="sort-by-preco-maior"
            onClick={() => handleSortMethodChange('preco-maior')}
          >
            Preço: Maior - menor
          </PriorityFilterItem>
          <PriorityFilterItem
            data-testid="sort-by-preco-menor"
            onClick={() => handleSortMethodChange('preco-menor')}
          >
            Preço: Menor - maior
          </PriorityFilterItem>
          <PriorityFilterItem
            data-testid="sort-by-mais-vendidos"
            onClick={() => handleSortMethodChange('mais-vendidos')}
          >
            Mais vendidos
          </PriorityFilterItem>
        </PriorityFilter>
      )}
    </FilterContainer>
  )
}
