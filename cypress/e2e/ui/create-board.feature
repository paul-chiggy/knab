Feature: Create new boards via UI

  I want to create a new board via UI

  Background:
    Given I am on the boards page

  @smoke
  @ui
  Scenario: Board created with valid input
    When I click on Create new board button
      And I fill in board name
      And I click Create button
    Then FE adds a valid board with given name