const {
    Given,
    Then,
    When,
    And
} = require("cypress-cucumber-preprocessor/steps");

Given("I have api key and token", () => {
    cy.visit(Cypress.env("baseUrl"));
});

When("I call createBoard endpoint", () => {
    cy.log("I call createBoard endpoint");
});

Then("API retuns successful response", () => {
    cy.log("API retuns successful response");
});

And("new board gets added", () => {
    cy.log("new board gets added");
});

And("provide invalid input data", () => {
    cy.log("provide invalid input data");
});

And("provide valid input data", () => {
    cy.log("provide valid input data");
});
