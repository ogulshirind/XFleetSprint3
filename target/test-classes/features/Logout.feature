Feature: user should be able to logout


  @verify_logout
  Scenario Outline: Verify user is able to logout and lands on logout page
    Given user is on the login page
    And user logs in as "<userType>"
    When user clicks logout button
    Then verify user is on the login page
    Examples:
      | userType      |
      | driver        |
      | sales manager |
      | store manager |


  @back_button_takes_to_login_page_not_back_page @wip
  Scenario Outline: user can not go to the home page again by clicking the step back button after logging out
    Given user is on the login page
    And user logs in as "<userType>"
    When user clicks logout button
    And user navigates back to home page by back arrow button
    Then verify user is on the login page
    Examples:
      | userType      |
      | driver        |
      | sales manager |
      | store manager |
