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
formatter.scenario({
  "name": "validate forgot your password link works and lands on respective page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@forgot_your_password_link_validation"
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
  "name": "user clicks forgot password link",
  "keyword": "When "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepDefs.user_clicks_forgot_password_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the title contains \"Forgot Password\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepDefs.the_title_contains(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});