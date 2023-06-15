import styled from 'styled-components'

export const PageLayoutContainer = styled.div`
  padding: 12px 24px;
  background-color: var(--bg-primary);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: center;
  gap: 32px;
  @media (min-width: ${(props) => props.theme.desktopBreakpoint}) {
    grid-template-columns: 2fr 1fr;
  }
`

export const CartListContainer = styled.div`
  h3 {
    font-size: 24px;
    font-weight: 500;
    line-height: 150%;
    text-transform: uppercase;
    color: var(--text-dark-2);
    margin-top: 24px;
  }

  p {
    font-weight: 300;
    font-size: 16px;
    line-height: 150%;
    color: var(--text-dark-2);

    span {
      font-weight: 600;
    }
  }
`

export const CartList = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  margin-top: 24px;
`

export const CartResultContainer = styled.div`
  max-width: fit-content;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 16px 24px;

  background: white;

  h3 {
    font-weight: 600;
    font-size: 20px;
    color: var(--text-dark-2);
    text-transform: uppercase;
    margin-bottom: 30px;
  }
`

export const TotalItem = styled.div<{ isBold: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 78px;
  font-weight: ${(props) => (props.isBold ? '600' : '400')};
  font-size: 16px;
  line-height: 150%;

  margin-bottom: 12px;
`

export const ShopBtn = styled.button`
  color: white;
  border-radius: 4px;
  background: #51b853;
  padding: 12px;
  width: 100%;
  border: none;
  margin-top: 40px;
  cursor: pointer;
  &:disabled {
    background: var(--text-dark);
    cursor: not-allowed;
  }
`
export const Divider = styled.span`
  width: 100%;
  height: 1px;
  margin: 8px auto;
  padding: 0px;
  background: var(--shapes);
`
