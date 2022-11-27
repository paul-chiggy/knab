import { After, Given, Then, When, And } from "cypress-cucumber-preprocessor/steps";

// vars for tests

var boardName;
var endpointUrl;
var statusOk;
var statusBadRequest;
var boardIds = new Array();
const boardNameUI = "UI_test_KNAB";


// UI tests step definitions

Given("I am on the boards page", () => {
  cy.visit(Cypress.env("boardsPage"));
});

When("I provide valid input data", () => {
  boardName = "Cypress_test_KNAB";
});

When("I provide invalid input data", () => {
  boardName = "";
});

When("I click on Create new board button", () => {
  cy.get("li[data-test-id='create-board-tile']").click();
});

And("I fill in board name", () => {
  cy.get("input[data-test-id='create-board-title-input']").type(boardNameUI);
});

And("I click Create button", () => {
  cy.get("button[data-test-id='create-board-submit-button']").click();
});

Then("FE adds a valid board with given name", () => {
  cy.url().should("include", boardNameUI);
});


// API tests step definitions

Given("There is a createBoard API endpoint", () => {
  endpointUrl = Cypress.env("baseUrl") + "/1/boards/?name=";
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


// this will get called before each scenario

After({ tags: "@api" }, () => {
  deleteCreatedBoards();
});

After({ tags: "@ui" }, () => {
  deleteCreatedBoards();
});


// custom methods to be used in these step definitions

function deleteCreatedBoards() {
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
}

function processRequest(res) {
  if(boardName == "") statusBadRequest = res.status;
  else {
    statusOk = res.status;
    boardIds.push(res.body.id);
  }
}