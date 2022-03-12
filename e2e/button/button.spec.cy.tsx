import { mount } from '@cypress/vue'
import { ElButton } from 'element-plus'

const AXIOM = 'rem is the best girl'

describe('Cypress Button', () => {
  describe('when initialized', () => {
    it('render correctly', () => {
      mount(() => <ElButton>{AXIOM}</ElButton>)

      cy.get('.el-button').should('have.text', AXIOM)
    })
  })
})
