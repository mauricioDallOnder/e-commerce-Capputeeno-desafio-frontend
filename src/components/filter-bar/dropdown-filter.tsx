import { ArrowIcon } from "@/assets/icons/arrow-icon";
import { FilterContainer, PriorityFilter, PriorityFilterItem } from "./dropDownStyle";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/Reduxhooks";
import { addProducts, setSortMethod, sortProducts, selectSortMethod, SortMethod } from "@/redux/features/productSlice";
import { useProducts } from "../../../hooks/useProductsHook";


export function DropDownMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const sortMethod = useAppSelector(selectSortMethod);
    
    const productsList = useProducts(); // usar o hook aqui
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(addProducts(productsList));
      }, [dispatch, productsList]);
  
    

    const handleSortMethodChange = (newMethod: SortMethod) => {
        dispatch(setSortMethod(newMethod));
        dispatch(sortProducts(newMethod));
        setIsOpen(false);
    }

    const getSortMethodLabel = (method: SortMethod) => {
        switch(method) {
          case '':
            return 'Organizar por';
          case 'novidades':
            return 'Novidades';
          case 'preco-maior':
            return 'Preço: Maior - menor';
          case 'preco-menor':
            return 'Preço: Menor - maior';
          case 'mais-vendidos':
            return 'Mais vendidos';
          default:
            return 'Organizar por';
        }
    }

    return (
        <FilterContainer>
            <button onClick={() => setIsOpen(prev => !prev)}>
                {getSortMethodLabel(sortMethod)}
                <ArrowIcon />
            </button>
            {isOpen &&
                <PriorityFilter>
                    <PriorityFilterItem onClick={() => handleSortMethodChange('')}>Limpar Filtros</PriorityFilterItem>
                    <PriorityFilterItem onClick={() => handleSortMethodChange('novidades')}>Novidades</PriorityFilterItem>
                    <PriorityFilterItem onClick={() => handleSortMethodChange('preco-maior')}>Preço: Maior - menor</PriorityFilterItem>
                    <PriorityFilterItem onClick={() => handleSortMethodChange('preco-menor')}>Preço: Menor - maior</PriorityFilterItem>
                    <PriorityFilterItem onClick={() => handleSortMethodChange('mais-vendidos')}>Mais vendidos</PriorityFilterItem>
                </PriorityFilter>
            }
        </FilterContainer>
    )
}
