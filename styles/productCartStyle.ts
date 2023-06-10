import styled from 'styled-components'

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;

  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(10px);
  border-radius: 0px 0px 4px 4px;
  width: 256px;

  h3 {
    font-weight: 300;
    font-size: 16px;
    line-height: 150%;
    display: flex;
    align-items: center;
    color: var(--text-dark-2);
    padding-left: 12px;
    padding-right: 12px;
    margin-top: 8px;
  }

  p {
    font-weight: 600;
    font-size: 14px;
    line-height: 150%;
    display: flex;
    align-items: center;
    color: var(--shapes-dark);
    padding-left: 12px;
    padding-right: 12px;
    margin-bottom: 8px;
  }
  > div {
    width: 228px;
    height: 1px;
    margin: 8px 0px;
    background: var(--shapes);
  }
  img {
    width: 256px;
    height: 300px;
  }
`
