import { Given, Then, When, And } from "cypress-cucumber-preprocessor/steps";

Given("I have api key and token", () => {
  cy.visit(Cypress.env("baseUrl"));
});

When("I provide valid input data", () => {
  cy.log("I provide valid input data");
  // cy.request(
  //   "POST", 
  //   "https://api.trello.com/1/boards/?name=Cypress_test_Board&key=" + Cypress.env("apiKey") + "&token=" + Cypress.env("token"), {
  //   title: "Cypress",
  //   body: {},
  // });
  cy.request(
    "GET", 
    "https://api.trello.com/1/boards/?id=6005af6affd5445e26a629ef&key=" + Cypress.env("apiKey") + "&token=" + Cypress.env("token"), {
      title: "Cypress",
      body: {},
    }).then(res => {
    cy.log(res);
  });
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

And("I call createBoard endpoint", () => {
  cy.log("I call createBoard endpoint");
});
