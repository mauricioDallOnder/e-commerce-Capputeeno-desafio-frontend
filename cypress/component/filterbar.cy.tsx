/* eslint-disable no-undef */
import { FilterBar } from '@/components/FilterBar'
import { store } from '@/redux/Store'
import { mount } from 'cypress/react18'
import { Provider } from 'react-redux'

describe('FilterBar Component', () => {
  beforeEach(() => {
    mount(
      <Provider store={store}>
        <FilterBar />
      </Provider>,
    )
  })

  it('Verifica a seleção de todos os produtos', () => {
    cy.get('button').contains('todos os produtos').click()
    // Verifica se a categoria todos os produtos corretamente foi definida
    cy.get('[data-category="todos os produtos"]').should('exist')
  })

  it('Verifica a seleção de camisetas', () => {
    cy.get('button').contains('camisetas').click()
    // Verifica se a categoria camisetas corretamente foi definida
    cy.get('[data-category="camisetas"]').should('exist')
  })

  it('Verifica a seleção de canecas', () => {
    cy.get('button').contains('canecas').click()
    // Verifica se a categoria canecas corretamente foi definida
    cy.get('[data-category="canecas"]').should('exist')
  })
})
