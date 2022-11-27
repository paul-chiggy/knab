Feature: Create new boards via API

  I want to create a new board via API

  Background:
    Given I have api key and token
  
  @smoke
  @regression
  Scenario: Creating a board with valid input
    When I provide valid input data
    And I call createBoard endpoint
    Then API retuns successful response
    And new board gets added

  @regression
  Scenario: Creating a board with invalid input
    When I provide invalid input data
    And I call createBoard endpoint
    Then API retuns successful response
    And new board gets added