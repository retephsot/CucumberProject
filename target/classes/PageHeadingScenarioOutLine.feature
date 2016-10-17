Feature: Test Page Heading Scenario Outline

  Scenario Outline: Test Contact Page Heading
    Given I am on zoo site
    When I click on <Link>
    Then I check I am on <Title>
    And I close browser

    Examples: 
      | Link          | Title    |
      | adoption_link | Adoption |
      | about_link    | About    |
      | contact_link  | Contact  |
      | home_link     | Home     |