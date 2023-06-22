/* eslint-disable no-undef */

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

describe('Testing the Home Page', () => {
  // Visita a página inicial antes de cada teste
  beforeEach(() => {
    cy.intercept(
      {
        method: 'POST',
        url: 'http://localhost:3333',
      },
      {
        body: {
          data: {
            allProducts: testProducts,
          },
        },
      },
    ).as('apiCheck')

    cy.visit('/')
    cy.wait('@apiCheck')
  })

  it('Should select product categories using FilterBar', () => {
    const categories = ['todos os produtos', 'camisetas', 'canecas']

    categories.forEach((category) => {
      cy.get('button').contains(category).click()
      cy.get(`[data-category="${category}"]`).should('exist')
    })
  })

  it('Should navigate between pages', () => {
    cy.get('[data-cy="next-button"]').click()
    cy.get('[data-cy="product-card"]').should('be.visible')
    cy.get('[data-cy="prev-button"]').click()
    cy.get('[data-cy="product-card"]').should('be.visible')
  })

  it('Should navigate to specific page on page number click', () => {
    cy.get('[data-cy="page-button-2"]').click()
    cy.get('[data-cy="product-card"]').should('be.visible')
  })
})
