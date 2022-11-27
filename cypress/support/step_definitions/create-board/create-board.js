import { After, Given, Then, When, And } from "cypress-cucumber-preprocessor/steps";

// vars for tests
var boardName;
var statusOk;
var statusBadRequest;
var boardIds = new Array();

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
  expect(statusOk).to.eq(200);
});

Then("API returns Bad request response", () => {
  expect(statusBadRequest).to.eq(400);
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
      cy.log(res.status);
      console.log(res);
      if(boardName == "") statusBadRequest = res.status;
      else {
        statusOk = res.status;
        boardIds.push(res.body.id);
      }
    });
  cy.log("I call createBoard endpoint");
});

// this will get called before each scenario
After(() => {
  boardIds.forEach(id => {
    cy.request(
      {
        method: "DELETE",
        url: "https://api.trello.com/1/boards/" + id + "?key=" + Cypress.env("apiKey") + "&token=" + Cypress.env("token"),
        body: {},
        failOnStatusCode: false
      });
    cy.log("Deleting board " + id);
  });
  boardIds.splice(0, boardIds.length);
});
  
// this will only get called before scenarios tagged with @smoke
// After({ tags: "@smoke" }, () => {
//   cy.log("smoke after");
// });
