Feature: To test Simba Lion can be selected in the Animal page.

	@AnimalSelect
  Scenario: Navigate to Animal Selection page and select Simba Lion.
    Given I am on Animal Select page
    When I select Simba the Lion
    And click on the CONTINUE link
    Then I should be on the Thank you page
