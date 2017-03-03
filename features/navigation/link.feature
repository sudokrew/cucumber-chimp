Feature: Navigating via clicking links

  We should be able to nagivate a page by clicking on links.

  Scenario: We want to test navigating via clicking a link.
    When I click the "Home" link
    Then I should be at "http://localhost:8080/"
