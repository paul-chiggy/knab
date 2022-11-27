import { Given, Then, When, And } from "cypress-cucumber-preprocessor/steps";

// vars for tests
var boardName;

Given("I have api key and token", () => {
  cy.log("key: " + Cypress.env("apiKey") + " | token: " + Cypress.env("token"));
});

When("I provide valid input data", () => {
  boardName = "Cypress_test_KNAB";
  cy.log("I provide valid input data: " + boardName);
});

When("I provide invalid input data", () => {
  boardName = "";
  cy.log("I provide invalid input data: " + boardName);
});

Then("API creates a valid board", () => {
  cy.log("API retuns successful response");
});

Then("API returns Bad request response", () => {
  cy.log("API retuns bad request response");
});

And("I call createBoard endpoint", () => {
  cy.request(
    {
      method: "POST",
      url: "https://api.trello.com/1/boards/?name=" + boardName + "&key=" + Cypress.env("apiKey") + "&token=" + Cypress.env("token"),
      body: {},
      failOnStatusCode: false
    })
    .then(res => {
      cy.log(res);
      console.log(res);
    });
  cy.log("I call createBoard endpoint");
});
