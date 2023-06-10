import styled from 'styled-components'

type ButtonProps = {
  selected: boolean
}

export const ProductFilterBar = styled.div`
  margin-top: 34px;
  display: flex;
  width: 90%;
  align-items: center;
  justify-content: space-between; // Adiciona essa linha
`

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const StyledButton = styled.button<ButtonProps>`
  border: none;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  text-transform: uppercase;
  color: ${(props) => (props.selected ? '#41414D' : '#737380')};
  background: transparent;
  cursor: pointer;
  width: 100%;

  &:hover {
    color: #41414d;
  }
`

export const ActiveBar = styled.div`
  width: 100%;
  height: 4px;
  margin-top: 4px;
  background: #ffa585;
`
