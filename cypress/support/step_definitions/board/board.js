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
    // cy.request(
    //   "POST", 
    //   "https://api.trello.com/1/boards/?name=Cypress_test_Board&key=" + Cypress.env("apiKey") + "&token=" + Cypress.env("token"), {
    //   title: "Cypress",
    //   body: {},
    // });
});

When("I call deleteBoard endpoint", () => {
    cy.log("I call deleteBoard endpoint");
    // cy.request(
    //   "POST", 
    //   "https://api.trello.com/1/boards/{id}?key=" + Cypress.env("apiKey") + "&token=" + Cypress.env("token"), {
    //   title: "Cypress",
    //   body: {},
    // });
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
