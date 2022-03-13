import { createApp } from 'vue'
import { renderToString } from '@vue/server-renderer'
import ElementPlus from 'element-plus'

import type { DefineComponent } from 'vue'

type ESModule = {
  default: DefineComponent
}

type ParsedDemo = {
  filename: string
  Module: DefineComponent
}

const demoPrefix = '../../docs/examples'
const demos: ParsedDemo[] = Object.entries(
  (import.meta as any).globEager('../../docs/examples/button/*.vue')
).map(([file, module]) => {
  return {
    filename: file.slice(demoPrefix.length),
    Module: (module as ESModule).default,
  }
})
describe('Cypress Button', () => {
  afterEach(() => {
    document.body.innerHTML = ''
  })

  describe('when initialized', () => {
    demos.forEach(({ Module, filename }) => {
      it('render correctly', (done) => {
        cy.wrap(() => {
          return new Cypress.Promise(async (resolve) => {
            const app = createApp(<Module />).use(ElementPlus)
            const string = await renderToString(app)
            document.body.innerHTML = string

            cy.screenshot(filename)
            resolve()
            done()
          })
        }).should('not.throw')
      })
    })
  })
})
