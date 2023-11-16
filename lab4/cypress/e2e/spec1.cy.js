describe('Cypress Test', () => {
  it('Should perform math operations', () => {
    cy.visit("https://suninjuly.github.io/math.html");
    cy.get("#input_value").then(($input) => {
      const x = parseInt($input.text());
      const result = Math.log(Math.abs(12 * Math.sin(x)));
      cy.get("#answer").type(result);
      cy.get("#robotCheckbox").check();
      cy.get("[value='robots']").check();
      cy.get("button[type='submit']").click();
    });
  });
});