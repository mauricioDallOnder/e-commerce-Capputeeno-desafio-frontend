import styled from 'styled-components'

export const ProductBoxContainer = styled.div`
  padding: 12px 24px;
  background-color: var(--bg-primary);
  margin: 0 auto;
  display: flex;
  height: fit-content;
  overflow: hidden;
  flex-direction: column;
  justify-content: flex-start;

  @media (max-width: 768px) {
    padding: 12px 16px;
  }
  @media (max-width: 480px) {
    padding: 12px 8px;
  }
`
export const ProductArticle = styled.article`
  display: flex;
  gap: 32px;
  justify-content:center;
  max-width:480px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
`;

export const BoxDescription = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin-top: 71px;
  width: 100%;
  align-items: center;
`;

export const ProductFigure = styled.div`
  section {
    display: flex;
    justify-content: center;
    width: 100%;
    gap: 32px;
    margin-top: 24px;

    img {
      max-width: 640px;
      width: 100%;
    }
  
    @media (max-width: 768px) {
     
      gap: 20px;
    }
    @media (max-width: 480px) {
      gap: 16px;
    }
  }
`

export const ProductInfo = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
  padding: 0 20px;
  
  @media (max-width: 768px) {
    padding: 0 16px;
    
  }
  @media (max-width: 480px) {
    padding: 0 8px;
   max-width:80%;
   display:flex;
   flex-direction:column;
   justify-content:center;
   align-items:center;
  }
`

export const HeaderSection = styled.header`
  span {
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: var(--text-dark-2);
  }

  h2 {
    font-weight: 300;
    font-size: 32px;
    line-height: 150%;
    color: var(--text-dark-2);
    margin-top: 12px;
  }

  p {
    font-weight: 600;
    font-size: 20px;
    line-height: 150%;
    color: var(--shapes-dark);
    margin-top:4px;
  }
`

export const DescriptionSection = styled.section`
  span{
    font-weight: 400;
    font-size: 12px;
    line-height: 150%;
    display: flex;
    align-items: center;
    color:var(--text-dark);
    margin-bottom:58px;
    margin-top:24px;
  }
  h3{
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    display: flex;
    align-items: center;
    text-transform: uppercase;
    color: var(--shapes-dark);
  }
  p{
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    display: flex;
    align-items: center;
    text-align:left;
    color: #41414D;
  }
`

export const ProductFooter = styled.footer`
  button {
    width: 448px;
    height: 44px;
    background: #115D8C;
    mix-blend-mode: multiply;
    border-radius: 4px;
    cursor: pointer;
    margin-top:200px;
    >span{
      font-weight: 500;
      font-size: 16px;
      line-height: 150%;
      display:flex;
      justify-content:center;
      gap:15px;
      color: #F5F5FA
    }
    @media (max-width: 768px) {
      width: 100%;
      margin-top:100px;
    }
    @media (max-width: 480px) {
      width: 100%;
      height: 40px;
      margin-top:80px;
      >span{
       padding-left:10px;
       padding-right:10px;
      }
    }
  }
`
