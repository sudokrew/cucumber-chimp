Feature: Navigating via clicking links

  We should be able to nagivate a page by clicking on links.

  Background:
    Given I am at "http://localhost:8080/"

  Scenario: We want to test navigating via clicking a link.
    When I click the "About Cucumber" link
    Then I should be at "http://localhost:8080/about.html"
