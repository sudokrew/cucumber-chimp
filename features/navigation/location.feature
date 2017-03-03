Feature: Navigating via browser location

  We should be able to navigate by setting the URL location.
  
  Scenario: We want to test navigating via setting an absolute URL.
    When I am at "http://localhost:8080/"
    Then I should be at "http://localhost:8080/"
  
  Scenario: We want to test navigating via setting a relative URL.
    When I am at "/"
    Then I should be at "http://localhost:8080/"
