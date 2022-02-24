$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/Login.feature");
formatter.feature({
  "name": "user should be able to login",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.scenarioOutline({
  "name": "password or username empty",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@password_or_username_empty"
    },
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
  "name": "the user logs in using \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "error message displays \"Please fill out this field.\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "",
        "UserUser123"
      ]
    },
    {
      "cells": [
        "user1",
        ""
      ]
    },
    {
      "cells": [
        "",
        ""
      ]
    }
  ]
});
formatter.scenario({
  "name": "password or username empty",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@password_or_username_empty"
    },
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
  "name": "the user logs in using \"\" and \"UserUser123\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepDefs.the_user_logs_in_using_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "error message displays \"Please fill out this field.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepDefs.error_message_displays(java.lang.String)"
});
formatter.result({
  "error_message": "java.lang.NullPointerException\n\tat com.vytrack.step_definitions.LoginStepDefs.error_message_displays(LoginStepDefs.java:155)\n\tat ✽.error message displays \"Please fill out this field.\"(file:///Users/olivetti/IdeaProjects/XFleetSprint3/src/test/resources/features/Login.feature:43)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png", "screenshot");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "password or username empty",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@password_or_username_empty"
    },
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
  "name": "the user logs in using \"user1\" and \"\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepDefs.the_user_logs_in_using_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "error message displays \"Please fill out this field.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepDefs.error_message_displays(java.lang.String)"
});
formatter.result({
  "error_message": "java.lang.NullPointerException\n\tat com.vytrack.step_definitions.LoginStepDefs.error_message_displays(LoginStepDefs.java:158)\n\tat ✽.error message displays \"Please fill out this field.\"(file:///Users/olivetti/IdeaProjects/XFleetSprint3/src/test/resources/features/Login.feature:43)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded1.png", "screenshot");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "password or username empty",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@password_or_username_empty"
    },
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
  "name": "the user logs in using \"\" and \"\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepDefs.the_user_logs_in_using_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "error message displays \"Please fill out this field.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepDefs.error_message_displays(java.lang.String)"
});
formatter.result({
  "error_message": "java.lang.NullPointerException\n\tat com.vytrack.step_definitions.LoginStepDefs.error_message_displays(LoginStepDefs.java:155)\n\tat ✽.error message displays \"Please fill out this field.\"(file:///Users/olivetti/IdeaProjects/XFleetSprint3/src/test/resources/features/Login.feature:43)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded2.png", "screenshot");
formatter.after({
  "status": "passed"
});
});