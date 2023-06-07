import styled from "styled-components";

export const CartStyle = styled.div`
  display: flex;
  align-items: baseline;
  position: relative; /* New */
`;

export const Elipse = styled.div`
  width: 17px;
  height: 17px;
  background: var(--delete-color);
  border-radius: 50%;
  position: absolute;
  left: 15px; /* New */
  bottom: 0; /* New */
  top: 15px;
  span {
    position: absolute;
    width: 7px;
    height: 26px;
    left: 5px; /* New */
    top: -5px;
    font-style: normal;
    font-weight: 500;
    font-size: 10px;
    line-height: 26px;

    /* identical to box height, or 260% */
    display: flex;
    align-items: center;
    text-align: center;

    color: #ffffff;
  }
`;
