Feature: Dashboard Page

  Scenario: User searches for a project on the dashboard
    Given I am on the landing page
    When I click on the Dashboard button
    Then I see the dashboard page with projects
    When I select Class 2 from the class dropdown
    When I enter "AI" in the search bar
    When I click the submit button
    Then I should see the search results for "AI"