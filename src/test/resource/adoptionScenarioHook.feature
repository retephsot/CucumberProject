Feature: Adopt an animal Scenario Hooks

  @web
  Scenario: Adopt an available animal
    Given I am at the zoo site
    When I navigate to adoption
    And I check for an available animal
    And I populate the form
    Then There should be a confirmation message