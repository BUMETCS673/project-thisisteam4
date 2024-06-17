Feature: Login Page

  Scenario: User visits the login page and logs in
    Given I am on the landing page
    Then I should see the Sign In button
    Then I should see the Sign Up button
    Then I should see the email label
    When I enter "someone@example.com" in the email field
    When I enter "password" in the password field
    When I click on the Login button
    Then I should be logged in