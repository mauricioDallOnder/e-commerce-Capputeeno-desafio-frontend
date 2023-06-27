'use client'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Helmet } from 'react-helmet'
import { MapPin, Clock, CurrencyDollar } from 'phosphor-react'
import { InfoWithIcon } from '@/assets/icons/InfoWithIcon'
import ConfirmedOrderIllustration from '../../assets/confirmed-order.svg'
import BackButton from '@/components/BackButton'

import { clearCart } from '@/redux/features/shoppingCartSlice'
import { OrderConfirmedContainer, CenteredTextContainer, TitleText, RegularText, OrderDetailsContainer } from '@/styles/OrderSuccessPageStyles'

export default function OrderConfirmedPage() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(clearCart())
  }, [])

  return (
    <>
      <Helmet>
        <title>Confirmação de Pedido - E-commerce--capputeeno</title>
        <meta
          name="description"
          content="Página de confirmação de pedido da loja Capputeeno. Agradecemos pela sua compra!"
        />
      </Helmet>

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
                  Previsão de entrega:
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
                  Tipo de pagamento:
                  <br />
                  <strong>Lorem ipsum </strong>
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
