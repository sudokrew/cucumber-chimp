Feature: Clicking elements
  
  We should be able to interact with a page by clicking elements.
  
  Background:
    Given I am at "http://localhost:8080/"
  
  Scenario: I click the "About Cucumber" link
    When I click the "a:nth-of-type(1)"
    Then I should be at "http://localhost:8080/about.html"
    
  Scenario: I click the "Search Cucumber" link
    When I click the "a:nth-of-type(2)"
    Then I should be at "http://localhost:8080/search.html"
    
  Scenario: I click the header element
    When I click the "h1"
    Then I should be at "http://localhost:8080/"
