Feature: Manipulating selects

  We should be able to manipulate selects on a page.

  Background:
    Given I am at "http://localhost:8080/search.html"

  Scenario: We want to check whether a dropdown has a option
    Then the "Color" dropdown should contain the options: "Red, Yellow, Blue"
     And the "Color" dropdown should not contain the option: "Black"

  Scenario: We want to check whether a multiselect has a option
    Then the "Tags" multiselect should contain the options: "Events, Promos, Places, Featured"
     And the "Tags" multiselect should not contain the option: "News"
     And the "Tags" multiselect should not contain the options: "News, Local"

  Scenario: We want to select a dropdown option
    When I select the "Red" option from the "Color" dropdown
    Then the "Color" dropdown should have the "Red" option selected
     And the "Color" dropdown should not have the "Select color" option selected

  Scenario: We want to select multiselect options
    When I select the "Events, Promos" options from the "Tags" multiselect
    Then the "Tags" multiselect should have the "Events, Promos" options selected
     And the "Tags" multiselect should not have the "Places" option selected
     And the "Tags" multiselect should not have the "Places, Featured" options selected
