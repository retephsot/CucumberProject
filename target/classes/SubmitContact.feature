Feature: Submit a valid contact form use dataTable

	@Application
  Scenario: Submit form using valid data
    Given I am on the zoo site
    When I navigate to contact
    And I submit the form with valid data
      | Fields   | Value                  |
      | Name     | Roger Smith            |
      | Adress   | 777 Happy Land         |
      | Postcode |                  32123 |
      | Email    | iWillSubScrib@Yess.com |
    Then I check that the form has been submitted
