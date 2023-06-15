import styled from 'styled-components'

export const OrderConfirmedContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  margin-top: 5rem;

  h1 {
    color: #c47f17;
  }

  > section {
    display: flex;
    align-items: center;
    justify-content: center; // adiciona os itens no centro ao longo do eixo horizontal
    gap: 2.5rem; // adiciona algum espaço entre os itens
  }
`
export const CenteredTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const OrderDetailsContainer = styled.div`
  padding: 2.5rem;
  border-radius: 6px 36px 6px 36px;
  position: relative;
  background: #fafafa;
  min-width: 32rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  &::before {
    content: '';
    position: absolute;
    inset: -1px;
    z-index: -1;
    border-radius: 7px 37px 7px 37px;
    background: linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8 98.76%);
  }
`

interface TitleTextProps {
  color?: 'title' | 'subtitle' | 'text'
  size?: 'xl' | 'l' | 'm' | 's' | 'xs'
  weight?: string | number
}

interface RegularTextProps {
  size?: 'l' | 'm' | 's'
  color?: 'text' | 'subtitle' | 'label'
  weight?: string | number
}

export const TitleText = styled.h1<TitleTextProps>`
  color: #272221;
  font-size: medium;
  line-height: 130%;
  font-weight: 800;
`

export const RegularText = styled.p<RegularTextProps>`
  color: #574f4d;
  font-size: medium;
  line-height: 130%;
  font-weight: 400;
`
export const InfoWithIconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

interface IconsContainerProps {
  iconBg: string
}

export const IconContainer = styled.div<IconsContainerProps>`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background: ${({ iconBg }) => iconBg};
  color: #fafafa;
  display: flex;
  align-items: center;
  justify-content: center;
`
