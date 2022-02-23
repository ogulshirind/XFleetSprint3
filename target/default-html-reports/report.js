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
  "name": "login as a given user \"\u003cuserName\u003e\"",
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
  "name": "user logs in the following credentials",
  "keyword": "When ",
  "rows": [
    {
      "cells": [
        "username",
        "\u003cuserName\u003e"
      ]
    },
    {
      "cells": [
        "password",
        "\u003cpassword\u003e"
      ]
    }
  ]
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "userName",
        "password"
      ]
    },
    {
      "cells": [
        "user1",
        "UserUser123"
      ]
    },
    {
      "cells": [
        "sales_manager90",
        "UserUser123"
      ]
    },
    {
      "cells": [
        "store_manager101",
        "UserUser123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "login as a given user \"user1\"",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user logs in the following credentials",
  "rows": [
    {},
    {}
  ],
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "login as a given user \"sales_manager90\"",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user logs in the following credentials",
  "rows": [
    {},
    {}
  ],
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "login as a given user \"store_manager101\"",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user logs in the following credentials",
  "rows": [
    {},
    {}
  ],
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});