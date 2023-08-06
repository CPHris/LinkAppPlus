describe('Register test user and test response if user exists.', () => {
  it('passes', () => {
    // Creates user on first run. Tests response on consecutive runs.

    cy.visit('http://localhost:3000');
    cy.contains('Sign in ');
    cy.get('a[href="/register"]').click();
    cy.url().should('eq', 'http://localhost:3000/register');

    cy.get('input[type="text"]').type('testuser');
    cy.get('input[type="email"]').type('test@user.com');
    cy.get("[placeholder='password']").type('test1234');
    cy.get('#reg-pass-2').type('test1234');
    cy.get('#reg-btn').click();

    cy.contains('User already exists');
  })
})