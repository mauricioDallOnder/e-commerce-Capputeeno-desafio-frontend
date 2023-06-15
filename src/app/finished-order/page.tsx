'use client'
import { MapPin, Clock, CurrencyDollar } from 'phosphor-react'
import {
  CenteredTextContainer,
  OrderConfirmedContainer,
  OrderDetailsContainer,
  RegularText,
  TitleText,
} from '../../../styles/pageOrderConfirmedStyle'
import { InfoWithIcon } from '@/assets/icons/InfoWithIcon'
import ConfirmedOrderIllustration from '../../assets/confirmed-order.svg'
import BackButton from '@/components/BackButton'

export default function OrderConfirmedPage() {
  return (
    <>
      <BackButton />

      <OrderConfirmedContainer className="container">
        <CenteredTextContainer>
          <TitleText size="l">Uhu! Pedido confirmado</TitleText>
          <RegularText size="l" color="subtitle">
            Agora é só aguardar que logo o produto chegará até você
          </RegularText>
        </CenteredTextContainer>

        <section>
          <OrderDetailsContainer>
            <InfoWithIcon
              icon={<MapPin weight="fill" />}
              iconBg={'#8047F8'}
              text={
                <RegularText>
                  Entrega em <strong>Avenida Silva da Silva</strong>, Numero 23
                  <br />
                  Cidade Japoti
                </RegularText>
              }
            />
            <InfoWithIcon
              icon={<Clock weight="fill" />}
              iconBg={'#DBAC2C'}
              text={
                <RegularText>
                  Previsão de entrega
                  <br />
                  <strong>5 dias</strong>
                </RegularText>
              }
            />
            <InfoWithIcon
              icon={<CurrencyDollar weight="fill" />}
              iconBg={'#C47F17'}
              text={
                <RegularText>
                  Pagamento na entrega
                  <br />
                  <strong>Cartao de Credito</strong>
                </RegularText>
              }
            />
          </OrderDetailsContainer>

          <ConfirmedOrderIllustration />
        </section>
      </OrderConfirmedContainer>
    </>
  )
}
