Feature: Login Page

  Scenario Outline: User visits the login page and logs in
    Given I am on the landing page
    When I click on the Login button
    Then I should be redirected to the Login page
    Then I should see the Sign In button
    Then I should see the Sign Up button
    When I signin with valid email "<email>" and valid password "<password>"
    Then I should be logged in

    Examples:
      | email               | password   |
      | testing_1@email.com | password   |
      | testing_2@email.com | anotherpwd |