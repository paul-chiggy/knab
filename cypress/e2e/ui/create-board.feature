Feature: Create new boards via API

  I want to create a new board via API

  Background:
    Given There is a createBoard API endpoint
  
  @smoke
  @regression
  Scenario: Creating a board with valid input
    When I provide valid input data
    And I call createBoard endpoint
    Then API creates a valid board

  @regression
  Scenario: Creating a board with invalid input
    When I provide invalid input data
    And I call createBoard endpoint
    Then API returns Bad request response