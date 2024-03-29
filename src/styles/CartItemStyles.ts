import styled from 'styled-components'

export const CartItemContainer = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 210px;
  max-width: 736px;
  border-radius: 8px;
  background-color: white;
  position: relative;

  button {
    position: absolute;
    top: 16px;
    right: 24px;
    border: none;
    background: transparent;
    cursor: pointer;
  }

  img {
    max-height: 100%;
    width: 256px;
    border-radius: 8px 0 0 8px;
  }

  @media (max-width: 768px) {
    // Tela de tablet
    flex-direction: column; // Ajusta o layout para uma coluna
    height: auto; // Permite que o contêiner cresça conforme necessário

    img {
      width: 100%; // A imagem ocupa toda a largura
      border-radius: 8px 8px 0 0; // Ajusta os cantos arredondados
    }
  }
`

export const CardContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  padding: 16px 24px;
  line-height: 150%;
  color: var(--text-dark-2);

  h4 {
    font-weight: 300;
    font-size: 20px;
  }

  p {
    font-weight: 400;
    font-size: 12px;
    max-height: 50%;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    span {
      font-weight: 600;
      font-size: 16px;
      color: var(--shapes-dark);
    }
  }

  @media (max-width: 768px) {
    // Tela de tablet
    height: auto; // Permite que o contêiner cresça conforme necessário
    padding: 12px; // Reduz o preenchimento

    h4,
    p,
    div {
      font-size: 16px; // Reduz o tamanho da fonte
    }
  }
`

export const SelectQuantity = styled.select`
  padding: 8px;
  border: 1.5px solid var(--border-color);
  border-radius: 8px;
  background-color: var(--bg-secondary);
  color: var(--text-dark);
  font-weight: 400;
  font-size: 16px;
`
