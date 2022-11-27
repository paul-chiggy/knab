Feature: Create new boards via API

  I want to create a new board via API

  Background:
    Given I have api key and token
  
  @smoke
  @regression
  Scenario: Creating a board with valid input
    When I call createBoard endpoint
    And provide valid input data
    Then API retuns successful response
    And new board gets added

  @regression
  Scenario: Creating a board with invalid input
    When I call createBoard endpoint
    And provide invalid input data
    Then API retuns successful response
    And new board gets added