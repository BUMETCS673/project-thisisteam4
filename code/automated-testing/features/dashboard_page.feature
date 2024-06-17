Feature: Dashboard Page

  Scenario: User searches for a project on the dashboard
    Given I am on the dashboard page
    When I enter "AI" in the search bar
    When I select "Class 1" from the class dropdown
    When I click the submit button
    Then I should see the search results for "AI"
