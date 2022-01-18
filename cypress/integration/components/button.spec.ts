context('ElButton', () => {
  beforeEach(() => {
    cy.visit('component/button.html')
  })

  it('should be able to render button on the screen', () => {
    cy.screenshot()
    cy.get('.el-button').should('have.lengthOf', 68)
  })
})
