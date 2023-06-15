/* eslint-disable camelcase */
'use client'
import {
  SearchInputContainer,
  StyledHeaderContainer,
  StyledLogoContainer,
  StyledSearchInput,
} from '../../styles/Header.styles'
import { Saira_Stencil_One } from 'next/font/google'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import CartControl from './CartCount'
import { useAppDispatch } from '../../hooks/Reduxhooks'
import { ChangeEvent, useState } from 'react'
import { setFilter } from '@/redux/features/ProductSlice'

const sairaStencil = Saira_Stencil_One({
  weight: '400',
  subsets: ['latin'],
})
export default function HeaderComponent() {
  const dispatch = useAppDispatch()
  const [inputValue, setInputValue] = useState('')
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
    dispatch(setFilter(e.target.value))
  }
  return (
    <StyledHeaderContainer>
      <StyledLogoContainer className={sairaStencil.className}>
        Capputeeno
      </StyledLogoContainer>
      <div style={{ display: 'flex', alignItems: 'center', gap: '28px' }}>
        <SearchInputContainer>
          <StyledSearchInput
            placeholder="Procurando por algo específico?"
            value={inputValue}
            onChange={handleChange}
          />
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            style={{ color: '#737380' }}
          />
        </SearchInputContainer>
        <CartControl />
      </div>
    </StyledHeaderContainer>
  )
}
