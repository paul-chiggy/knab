import { Before } from "cypress-cucumber-preprocessor/steps";
  
// this will only get called before scenarios tagged with @ui
Before({ tags: "@ui" }, () => {
  // cy.login(Cypress.env("username"), Cypress.env("password"));
});