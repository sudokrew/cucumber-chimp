Feature: Manipulating inputs

  We should be able to manipulate inputs on a page.

  Background:
    Given I am at "http://localhost:8080/search.html"
  
  Scenario Outline: We want to test setting the value of an input.
    When I enter "<value>" into the "Search" field
    Then The "Search" input should be "<value>"
    
    Examples:
      | value |
      | foo   |
      | bar   |

  Scenario: We want to submit a form.
    When I enter "Hello" into the "Search" field
     And I submit the form
    Then I should be at "http://localhost:8080/results.html?q=Hello"
