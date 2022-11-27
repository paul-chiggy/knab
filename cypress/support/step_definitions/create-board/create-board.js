import { After, Given, Then, When, And } from "cypress-cucumber-preprocessor/steps";

// vars for tests
var boardName;
var endpointUrl;
var statusOk;
var statusBadRequest;
var boardIds = new Array();

Given("There is a createBoard API endpoint", () => {
  endpointUrl = Cypress.env("baseUrl") + "/1/boards/?name=";
});

When("I provide valid input data", () => {
  boardName = "Cypress_test_KNAB";
});

When("I provide invalid input data", () => {
  boardName = "";
});

Then("API creates a valid board", () => {
  // check that response is OK
  expect(statusOk).to.eq(200);
  // get the newly created board and check for ID
  cy.request(
    {
      method: "GET",
      url: Cypress.env("baseUrl") + "/1/boards/" + boardIds[0] + "?key=" + Cypress.env("apiKey") + "&token=" + Cypress.env("token"),
      body: {},
      failOnStatusCode: false
    })
    .then(res => { 
      expect(res.status).to.eq(200);
      expect(res.body.id).to.eq(boardIds[0]);
    });
});

Then("API returns Bad request response", () => {
  expect(statusBadRequest).to.eq(400);
});

And("I call createBoard endpoint", () => {
  cy.request(
    {
      method: "POST",
      url: endpointUrl + boardName + "&key=" + Cypress.env("apiKey") + "&token=" + Cypress.env("token"),
      body: {},
      failOnStatusCode: false
    })
    .then(res => { processRequest(res); });
});

function processRequest(res) {
  if(boardName == "") statusBadRequest = res.status;
  else {
    statusOk = res.status;
    boardIds.push(res.body.id);
  }
}

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
