describe('Cypress Test', () => {
  it('visit all links', () => {
    cy.visit('http://demo-store.seleniumacademy.com/');
    cy.get('a').each(page => {
      cy.request(page.prop('href'))
    })
  });
});