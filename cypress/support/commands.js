// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("login", (email, password) => { 
  cy.clearLocalStorage(); // clear cache to make sure Cypress not keep the state.
  cy.clearCookies();
  cy.visit(Cypress.env("loginPage"));
  // eslint-disable-next-line cypress/no-unnecessary-waiting
  cy.wait(2000);
  cy.get("button[class='gdpr-cookie-consent-button']").click();
  cy.get("input[placeholder='Enter email']").type(email, {delay: 100});
  cy.get("input[id='login']").click();
  // eslint-disable-next-line cypress/no-unnecessary-waiting
  cy.wait(2000);
  cy.get("input[name='password']").type(password, {delay: 100});
  // eslint-disable-next-line cypress/no-unnecessary-waiting
  cy.wait(2000);
  cy.get("button[id='login-submit']").click();
  // eslint-disable-next-line cypress/no-unnecessary-waiting
  cy.wait(1000);
});
