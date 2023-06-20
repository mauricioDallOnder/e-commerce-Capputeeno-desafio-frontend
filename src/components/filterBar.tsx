import React, { useState } from 'react'
import {
  ActiveBar,
  ButtonContainer,
  StyledButton,
  ProductFilterBar,
} from '../../styles/FilterBar.styles'
import { useAppDispatch } from '../../hooks/Reduxhooks'
import { setFilterCategory } from '@/redux/features/ProductSlice'
import { DropDownMenu } from './DropDownFilter'


export function FilterBar() {
  const [selectedButton, setSelectedButton] = useState('todos os produtos')
  const dispatch = useAppDispatch()

  const handleClick = (category: string, button: string) => {
    setSelectedButton(button)
    dispatch(setFilterCategory(category))
  }

  return (
    <ProductFilterBar data-category={selectedButton}>
      <div style={{ display: 'flex', gap: '40px' }}>
        {[
          { label: 'todos os produtos', category: 'all' },
          { label: 'camisetas', category: 't-shirts' },
          { label: 'canecas', category: 'mugs' },
        ].map((button) => (
          <ButtonContainer key={button.label}>
            <StyledButton
              onClick={() => handleClick(button.category, button.label)}
              selected={selectedButton === button.label}
            >
              {button.label}
            </StyledButton>
            {selectedButton === button.label && <ActiveBar />}
          </ButtonContainer>
        ))}
      </div>
      <DropDownMenu />
    </ProductFilterBar>
  )
}
