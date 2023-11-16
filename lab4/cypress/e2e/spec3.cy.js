describe('Cypress Test', () => {
  it('user registration', () => {
    cy.visit('http://demo-store.seleniumacademy.com/customer/account/create/')
    let emailGeneration = Math.floor(Math.random() * (200 - 0 + 1))
    cy.get('input[id = "firstname"]').type('name')
    cy.get('input[id = "lastname"]').type('surname')
    cy.get('input[id = "email_address"]').type(emailGeneration + '@mail.com')
    cy.get('input[id = "password"]').type('password')
    cy.get('input[id = "confirmation"]').type('password')
    cy.get('button[title = "Register"]').click()
    cy.visit('http://demo-store.seleniumacademy.com/customer/account/')
    cy.get('h1').should('have.text', 'My Dashboard');
  })
});