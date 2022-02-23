@login
Feature: user should be able to login


  Scenario: login as a user
    Given user is on the login page
    When user logs in using "user1" and "UserUser123"
    Then the title contains "Dashboard"


  Scenario Outline: login as a <user>
    Given user is on the login page
    When user logs in as "<user>"
    Then the title contains "Dashboard"
    And the user lands on <page> "<page>"

    Examples:
      | user          | page            |
      | driver        | Quick Launchpad |
      | sales_manager | Dashboard       |
      | store_manager | Dashboard       |


  @FLTAPS460 @FLTAPS461
  Scenario Outline: login with invalid credentials
    Given user is on the login page
    When user logs in using "<username>" and "<password>"
    Then message "Invalid user name or password." should be displayed

    Examples:
      | username         | password         |
      | user1            | invalid password |
      | invalid username | UserUser123      |
      | invalid username | invalid password |


  @FLTAPS462 @FLTAPS463
  Scenario Outline: missing username or password or both
    Given user is on the login page
    When user logs in using "<username>" and "<password>"
    Then message displays "Please fill out this field."

    Examples:
      | username | password    |
      | user1    |             |
      |          | UserUser123 |
      |          |             |


  Scenario: forgot password link functional verification
    Given user is on the login page
    When user clicks "Forgot your password?" link
    Then the title contains "Forgot Password"


  Scenario: verify remember me checkbox exists and clickable
    Given user is on the login page
    Then remember me checkbox is clickable


  Scenario: verify password is masked
    Given user is on the login page
    When user inputs "password"
    Then password is masked

  @wip
  Scenario: after logging in user sees full name
    Given user is on the login page
    When user logs in as "driver"
    Then user sees full name
