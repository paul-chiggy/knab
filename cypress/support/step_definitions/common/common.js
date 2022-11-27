import { Before } from "cypress-cucumber-preprocessor/steps";

// this will get called before each scenario
Before(() => {
  cy.log("common before");
});
  
// this will only get called before scenarios tagged with @smoke
Before({ tags: "@smoke" }, () => {
  cy.log("smoke before");
});