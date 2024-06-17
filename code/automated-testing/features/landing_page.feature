Feature: Project Portal Landing Page

  Scenario: Navigate to About Page
    Given I am on the landing page
    When I click on the About button
    Then I should be redirected to the About page

  Scenario: Navigate to Dashboard Page
    Given I am on the landing page
    When I click on the Dashboard button
    Then I should be redirected to the Dashboard page

  Scenario: Navigate to Login Page
    Given I am on the landing page
    When I click on the Login button
    Then I should be redirected to the Login page
