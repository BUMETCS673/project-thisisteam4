Feature: Login Page

  Scenario Outline: User visits the login page and logs in
    Given I am on the landing page
    When I click on the Login button
    Then I should be redirected to the Login page
    Then I should see the Sign In button
    Then I should see the Sign Up button
    When I click on the Sign Up button
    Then I see the Sign Up Form
    When I sign up with valid email and valid password "<password>"
    Then I should see the sign in page
    When I sign in with valid email and valid password "<password>"
    Then I should be signed in successfully
    When I click on the Profile button
    Then I see my email address displayed in Profile page

    Examples:
      | password       |
      | T9@bRg78BwhS&% |

  Scenario Outline: User visits the login page and logs in
    Given I am on the landing page
    When I click on the Login button
    Then I should be redirected to the Login page
    Then I should see the Sign In button
    Then I should see the Sign Up button
    When I click on the Sign Up button
    Then I see the Sign Up Form
    When I sign up with invalid email "<email>" and invalid password "<password>"
    Then I see that sign up is not successful

    Examples:
      | email                     | password   |
      | invalidemail@123email.com | invalidpwd |