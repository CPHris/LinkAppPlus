describe('Login, create page, delete page, logout', () => {
  it('passes', () => {
    // login test user
    cy.visit('http://localhost:3000');
    cy.contains('Sign in ');
    cy.get('a[href="/login"]').click();
    cy.url().should('eq', 'http://localhost:3000/login');
    cy.get('input[type="text"]').type('testuser');
    cy.get("[placeholder='password']").type('test1234');
    cy.get('button').click();
    cy.url().should('eq', 'http://localhost:3000/user/testuser');
    cy.contains('My Link Pages');
    // create new page
    cy.get('#user-page-add-btn').click();
    cy.contains('Avatar');
    cy.get('#add-name-input').type('-test-page');
    cy.get('button[type="submit"]').click();
    // test new page
    cy.get('.edit-btn-class').last().click();
    cy.get('#goto-btn').click();
    cy.contains('test-page');
    cy.visit('http://localhost:3000/user/testuser');
    // test edit page
    cy.get('#edit-btn').last().click();
    cy.contains('Change your Link Page URL');
    cy.get('a[href*="user"]').click(); //cancel btn
    // delete page
    cy.get('#page-del-btn').last().click();
    cy.contains('page deleted succesfully');
    // logout
    cy.get('#menu-btn').click();
    cy.get('#logout-btn').click();
    cy.url().should('eq', 'http://localhost:3000/login');
    cy.contains('Login');
  })
})
// TESTUSER DATA:
// testuser
// test@user.com
// test1234