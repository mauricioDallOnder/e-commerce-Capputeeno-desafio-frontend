import styled from 'styled-components'

export const CartStyle = styled.div`
  display: flex;
  align-items: baseline;
  position: relative;
`

export const Elipse = styled.div`
  width: 17px;
  height: 17px;
  background: var(--delete-color);
  border-radius: 50%;
  position: absolute;
  left: 15px;
  bottom: 0;
  top: 15px;
  span {
    position: absolute;
    width: 7px;
    height: 26px;
    left: 5px;
    top: -5px;
    font-style: normal;
    font-weight: 500;
    font-size: 10px;
    line-height: 26px;

    display: flex;
    align-items: center;
    text-align: center;

    color: #ffffff;
  }
`
