import styled from 'styled-components'

type ButtonProps = {
  selected?: boolean
}

export const ProductCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 256px); /* Cria 4 colunas iguais */
  grid-gap: 32px; /* Espaço entre os itens */
  width: 100%;
  margin-top: 32px;
  margin-bottom: 174px;
  justify-content: center; // Adiciona essa linha
  align-items: start; // Adiciona essa linha

  @media (max-width: 768px) {
    // Tela de tablet
    grid-template-columns: repeat(
      auto-fill,
      minmax(200px, 1fr)
    ); // Ajusta o número de colunas
  }

  @media (max-width: 480px) {
    // Tela de celular
    grid-template-columns: 1fr; // Ajusta o número de colunas para 1
    margin-left: 80px;
  }
`
export const PaginationList = styled.ul`
  display: flex;
  width: 90%;
  align-items: flex-end;
  align-content: flex-end;
  justify-content: flex-end;
  list-style-type: none;
`

export const PaginationButton = styled.button<ButtonProps>`
  width: 32px;
  height: 32px;
  margin-top: 24px;
  margin-bottom: 24px;
  /* Shapes Light / 88 Gray */
  background: #e9e9f0;
  border-radius: 8px;
  border: ${(props) => (props.selected ? '1px solid #FFA585' : 'none')};
  cursor: pointer;
  margin-left: 4px;

  p {
    width: 24px;
    height: 24px;

    font-weight: 400;
    font-size: 16px;
    line-height: 150%;

    /* identical to box height, or 24px */
    padding-left: 4px;
    text-align: center;
    text-transform: uppercase;
    color: ${(props) => (props.selected ? '#FFA585' : '#737380')};
  }

  @media (max-width: 768px) {
    // Tela de tablet
    width: 28px;
    height: 28px;

    p {
      font-size: 14px;
    }
  }

  @media (max-width: 480px) {
    // Tela de celular
    width: 24px;
    height: 24px;

    p {
      padding-top: 2px;
      padding-right: 4px;
      font-size: 12px;
    }
  }
`
