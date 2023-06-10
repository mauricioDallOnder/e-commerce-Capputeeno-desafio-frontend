import styled from 'styled-components'

export const TagHeader = styled.header`
  background: #ffffff;
  height: 80px;
  left: 0;
  top: 0;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding-top: 20px;
  padding-bottom: 20px;
`
export const TagLogo = styled.a`
  display: flex;
  align-items: center;
  line-height: 150%;
  font-size: 2.5rem;
  font-weight: 400;
  color: var(--logo-color);
`

export const TagSearchBar = styled.input`
  padding-left: 16px;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: var(--input-backgroud);
  border-radius: 8px;
  width: 352px;
  font-weight: 400;
  font-size: 0.875rem;
  font-family: inherit;
  line-height: 22px;
  color: var(--text-dark);
  border: none;

  &:focus {
    border-color: yellow; // Muda a cor do texto para amarelo quando o input é selecionado
  }
`

export const InputContainer = styled.div`
  position: relative;
  width: 352px;
  svg {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
  }
`
