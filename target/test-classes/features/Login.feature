@login
Feature: user should be able to login


  @login_with_valid_credentials
  Scenario: Verify that login with valid credentials
    Given user is on the login page
    And user checks checkbox
    When the user logs in using "user1" and "UserUser123"
    Then the title contains "Dashboard"


  @login_as_a_user_type @verify_page_header
  Scenario Outline: login as a user
    Given user is on the login page
    And user checks checkbox
    When user logs in as "<userType>"
    Then the title contains "Dashboard"
    And page header is "<pageHeader>" in "<userType>"
    Examples:
      | userType      | pageHeader      |
      | driver        | Quick Launchpad |
      | sales_manager | Quick Launchpad |
      | store manager | Dashboard       |


  @invalid_user_credentials
  Scenario Outline: login with invalid credentials
    Given user is on the login page
    When the user logs in using "<username>" and "<password>"
    Then error message displays
    Examples:
      | username         | password         |
      | invalid username | UserUser123      |
      | user1            | invalid password |
      | invalid username | invalid password |


  @password_or_username_empty
  Scenario Outline: password or username empty
    Given user is on the login page
    When the user logs in using "<username>" and "<password>"
    Then error message displays "Please fill out this field."
    Examples:
      | username | password    |
      |          | UserUser123 |
      | user1    |             |
      |          |             |




    @forgot_your_password_link_validation
      Scenario: validate forgot your password link works and lands on respective page
      Given user is on the login page
      When user clicks forgot password link
      Then the title contains "Forgot Password"
