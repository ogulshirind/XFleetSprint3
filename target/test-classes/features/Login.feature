@login
Feature: user should be able to login

  @wip
  Scenario Outline: login as a given user "<userName>"
    Given user is on the login page
    When user logs in the following credentials
      | username | <userName> |
      | password | <password> |
    Examples:
      | userName         | password    |
      | user1            | UserUser123 |
      | sales_manager90  | UserUser123 |
      | store_manager101 | UserUser123 |

