@login
Feature: user should be able to login


  Scenario: login as a user
    Given user is on the login page
    When user logs in using "user1" and "UserUser123"
    Then the title contains "Dashboard"

  @wip
  Scenario Outline: login as a <user>
    Given user is on the login page
    When user logs in as "<user>"
    Then the title contains "Dashboard"

    Examples:
      | user          |
      | driver        |
      | sales_manager |
      | store_manager |