/* eslint-disable no-undef */
import { DropDownMenu } from '@/components/dropDownFilter'
import { store } from '@/redux/store'
import { mount } from 'cypress/react18'
import { Provider } from 'react-redux'

describe('DropDownMenu Component', () => {
  beforeEach(() => {
    mount(
      <Provider store={store}>
        <DropDownMenu />
      </Provider>,
    )
  })

  it('verifica se o menu abre e fecha ao clicar no botão', () => {
    cy.get('button').click()
    cy.get('[data-testid="priority-filter"]').should('be.visible')

    cy.get('button').click()
    cy.get('[data-testid="priority-filter"]').should('not.exist')
  })

  it('verifica a seleção dos diferentes métodos de classificação', () => {
    const options = [
      { id: 'sort-by-default', label: '' },
      { id: 'sort-by-novidades', label: 'Novidades' },
      { id: 'sort-by-preco-maior', label: 'Preço: Maior - menor' },
      { id: 'sort-by-preco-menor', label: 'Preço: Menor - maior' },
      { id: 'sort-by-mais-vendidos', label: 'Mais vendidos' },
    ]

    options.forEach((option) => {
      cy.get('button').click()
      cy.get(`[data-testid="${option.id}"]`).click()
      cy.contains(option.label || 'Organizar por')
    })
  })
})
