/* eslint-disable no-undef */

import { ProductList } from '@/components/ProductList'
import { store } from '@/redux/Store'
import { mount } from 'cypress/react18'
import { Provider } from 'react-redux'

const testProduct = {
  id: '1',
  name: 'Test Product',
  image_url: '',
  price_in_cents: 1000,
  category: 'Test Category',
  created_at: new Date(),
  sales: 0,
}

const testProducts = Array(13).fill(testProduct)

describe('Pagination Component', () => {
  beforeEach(() => {
    cy.intercept('POST', process.env.NEXT_PUBLIC_API_URL as string, {
      body: {
        data: {
          allProducts: testProducts,
        },
      },
    }).as('apiCheck')

    mount(
      <Provider store={store}>
        <ProductList />
      </Provider>,
    )

    cy.wait('@apiCheck')
  })

  it('Renders successfully', () => {
    cy.get('[data-cy="product-card"]').debug().should('be.visible')
  })

  it('navigates to next page on next button click', () => {
    cy.get('[data-cy="next-button"]').click()
    cy.get('[data-cy="product-card"]').should('be.visible')
  })

  it('navigates to previous page on previous button click', () => {
    cy.get('[data-cy="next-button"]').click()
    cy.get('[data-cy="prev-button"]').click()
    cy.get('[data-cy="product-card"]').should('be.visible')
  })

  it('navigates to specific page on page number click', () => {
    cy.get('[data-cy="page-button-2"]').click()
    cy.get('[data-cy="product-card"]').should('be.visible')
  })
})
