Feature: Project Details Sidewindow

  Scenario: User visits the login page and logs in
    Given I am on the landing page
    When I click on the Dashboard button
    Then I see the dashboard page with projects
    When I click on the first project card for more details
    Then I see projects details

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
    When I click on Create button
    Then I see the form for creating a project
    When I create a project with valid inputs
    Then I see project created successfully

    Examples:
      | password       |
      | T9@bRg78BwhS&% |