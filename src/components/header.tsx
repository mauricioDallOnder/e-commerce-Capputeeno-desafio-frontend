/* eslint-disable camelcase */
'use client'
import {
  InputContainer,
  TagHeader,
  TagLogo,
  TagSearchBar,
} from '../../styles/headerStyle'
import { Saira_Stencil_One } from 'next/font/google'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import CartControl from './cartTotalAmount'
import { useAppDispatch } from '../../hooks/Reduxhooks'
import { ChangeEvent, useState } from 'react'
import { setFilter } from '@/redux/features/productSlice'

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
    <TagHeader>
      <TagLogo className={sairaStencil.className}>Capputeeno</TagLogo>
      <div style={{ display: 'flex', alignItems: 'center', gap: '28px' }}>
        <InputContainer>
          <TagSearchBar
            placeholder="Procurando por algo específico?"
            value={inputValue}
            onChange={handleChange}
          />
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            style={{ color: '#737380' }}
          />
        </InputContainer>
        <CartControl />
      </div>
    </TagHeader>
  )
}
