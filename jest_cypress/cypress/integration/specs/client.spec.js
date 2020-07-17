/// <reference types="cypress" />

context('Actions', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000')
    })

  
    it('in access home webpage, list 10 client', () => {
      cy.get('tbody tr').should('to.have.length', 10)
    })
  
  })
  