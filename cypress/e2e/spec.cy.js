describe('UX testing', () => {
  it('Sign-up, log-in, access, and message posting.', () => {
    cy.visit('http://localhost:3000/');

    cy.contains('SIGN UP').click();
    cy.url().should('include', '/sign-up');

    cy.get('.username').type('testUser').should('have.value', 'testUser');
    cy.get('.password')
      .type('testPassword')
      .should('have.value', 'testPassword');
    cy.get('.confirmPassword')
      .type('testPassword')
      .should('have.value', 'testPassword');
    cy.get('.i-no').click();
    cy.get('.signup__button').click();

    cy.contains('LOG IN').click();
    cy.url().should('include', '/log-in');

    cy.get('.username').type('testUser');
    cy.get('.password').type('testPassword');

    cy.get('.login__button').click();

    cy.contains('ADMIN ACCESS').click();
    cy.url().should('include', '/admin');

    cy.get('.admin').type('SOCIETY');
    cy.get('.access__button').click();
    cy.get('.return').click();

    cy.contains('NEW MESSAGE').click();
    cy.url().should('include', '/new-message');

    cy.get('.subject').type('Cypress');
    cy.get('.message').type('Cypress testing works!');
    cy.get('.login__button').click();
  });
});
