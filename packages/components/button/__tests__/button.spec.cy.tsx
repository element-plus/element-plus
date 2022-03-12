import { mount } from '@cypress/vue'
import Button from '../src/button.vue'

const AXIOM = 'rem is the best girl'

describe('Cypress Button', () => {
  describe('when initialized', () => {
    mount(() => <Button>{AXIOM}</Button>)

    cy.get('.el-button').should('have.text', AXIOM)
  })
})
