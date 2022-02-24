$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/Logout.feature");
formatter.feature({
  "name": "user should be able to logout",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Verify user is able to logout",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.step({
  "name": "user is on the login page",
  "keyword": "Given "
});
formatter.step({
  "name": "user logs in as \"\u003cuserType\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks logout button",
  "keyword": "When "
});
formatter.step({
  "name": "verify user is on the login page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "userType"
      ]
    },
    {
      "cells": [
        "driver"
      ]
    },
    {
      "cells": [
        "sales manager"
      ]
    },
    {
      "cells": [
        "store manager"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify user is able to logout",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepDefs.userIsOnTheLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user logs in as \"driver\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepDefs.user_logs_in_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks logout button",
  "keyword": "When "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepDefs.user_clicks_logout_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify user is on the login page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepDefs.verify_user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify user is able to logout",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepDefs.userIsOnTheLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user logs in as \"sales manager\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepDefs.user_logs_in_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks logout button",
  "keyword": "When "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepDefs.user_clicks_logout_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify user is on the login page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepDefs.verify_user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify user is able to logout",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepDefs.userIsOnTheLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user logs in as \"store manager\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepDefs.user_logs_in_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks logout button",
  "keyword": "When "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepDefs.user_clicks_logout_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify user is on the login page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepDefs.verify_user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});