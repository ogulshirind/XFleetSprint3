@login
Feature: user should be able to login



  @wip
  Scenario: Verify that login with valid credentials
    Given user is on the login page
    And user checks checkbox
    When the user logs in using "user1" and "UserUser123"
    Then the title contains "Dashboard"





  Scenario Outline: login as a user
    Given user is on the login page
    When user logs in as "<userType>"
    And user checks checkbox
    Then the title contains "Dashboard"
    And page header is "<pageHeader>" in "<userType>"

    Examples:
      | userType      | pageHeader      |
      | driver        | Quick Launchpad |
      | sales manager | Dashboard       |
      | store manager | Dashboard       |

