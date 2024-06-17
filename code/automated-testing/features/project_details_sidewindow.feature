Feature: Login Page

  Scenario: User visits the login page and logs in
    Given I am on the landing page
    When I click on the Dashboard button
    Then I see the dashboard page with projects
    When I click on the first project card for more details
    Then I see projects details