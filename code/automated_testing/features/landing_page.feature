Feature: Project Portal Landing Page

  @smoke_suite
  @regression_suite
  @demo
  Scenario: Navigate to About Page
    Given I am on the landing page
    Then I wait for "10" seconds
    When I click on the About button
    Then I wait for "10" seconds
    Then I should be redirected to the About page

  @smoke_suite
  @regression_suite
  @demo
  Scenario: Navigate to Dashboard Page
    Given I am on the landing page
    Then I wait for "10" seconds
    When I click on the Dashboard button
    Then I wait for "10" seconds
    Then I should be redirected to the Dashboard page

  @smoke_suite
  @regression_suite
  Scenario: Navigate to Login Page
    Given I am on the landing page
    Then I wait for "10" seconds
    When I click on the Login button
    Then I wait for "10" seconds
    Then I should be redirected to the Login page
