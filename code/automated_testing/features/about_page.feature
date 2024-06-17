Feature: About Page

  @regression_suite
  Scenario: About Page Regression
    Given I am on the landing page
    When I click on the About button
    Then I should be redirected to the About page
    Then I should see the About Us section
    Then I should see the Mission Statement section