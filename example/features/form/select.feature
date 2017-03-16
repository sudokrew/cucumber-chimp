Feature: Manipulating selects

  We should be able to manipulate selects on a page.

  Background:
    Given I am at "http://localhost:8080/search.html"

  Scenario: We want to check whether a dropdown has a option
    Then the "Color" dropdown should contain the options: "Red, Yellow, Blue"
     And the "Color" dropdown should not contain the option: "Black"

  Scenario: We want to check whether a multiselect has a option
    Then the "Tags" multiselect should contain the options: "Events, Promos"
     And the "Tags" multiselect should not contain the option: "News"

  Scenario: We want to select a dropdown option
    When I select the "Red" option from the "Color" dropdown
