Feature: user should be able to logout



  Scenario Outline: Verify user is able to logout
    Given user is on the login page
    And user logs in as "<userType>"
    When user clicks logout button
    Then verify user is on the login page

    Examples:
      | userType      |
      | driver        |
      | sales manager |
      | store manager |
