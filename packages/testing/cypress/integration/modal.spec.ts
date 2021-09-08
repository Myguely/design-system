import { app } from '../support/app'

describe('Modal', () => {
  let page = app.getModalPage()

  it('should open and close Modal', () => {
    page.open()
    cy.get(page.modal).balModalIsClosed()
    cy.get(page.openModalButton).click()
    cy.get(page.modal).balModalIsOpen()
    cy.get(page.closeModalButton).click()
    cy.get(page.modal).balModalIsClosed()
  })

  it('should contain title', () => {
    page.open()
    cy.get(page.modal).find('bal-modal-header').contains('Modal Title')
  })
})
