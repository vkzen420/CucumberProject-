$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Loginnew.feature");
formatter.feature({
  "line": 1,
  "name": "loginnew test",
  "description": "\r\nDescription: Check login with diff data driven techniques",
  "id": "loginnew-test",
  "keyword": "Feature"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "user navigate to http://www.gcreddy.com/project1/login.php",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.gcreddy.com/project1/login.php",
      "offset": 17
    }
  ],
  "location": "LoginStepDefination.user_navigate_to_http_www_gcrit_com_build_login_php(String)"
});
formatter.result({
  "duration": 6511024600,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 9,
      "value": "# Data driven With using the data tables"
    }
  ],
  "line": 10,
  "name": "Verify that user is able to login to application successfully with diff data driven methods",
  "description": "",
  "id": "loginnew-test;verify-that-user-is-able-to-login-to-application-successfully-with-diff-data-driven-methods",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "user enter emailid and password",
  "rows": [
    {
      "cells": [
        "Rahul1993@gmail.com",
        "Admin@123"
      ],
      "line": 13
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "user clicks on sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User is on Home Page",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "User close the browser",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefination.user_enter_emailid_and_password(DataTable)"
});
formatter.result({
  "duration": 25839200,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d73.0.3683.103)\n  (Driver info: chromedriver\u003d2.40.565498 (ea082db3280dd6843ebfb08a625e3eb905c4f5ab),platform\u003dWindows NT 10.0.17763 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.141.5\u0027, revision: \u0027d54ebd709a\u0027, time: \u00272018-11-06T11:42:16\u0027\nSystem info: host: \u0027LAPTOP-PNMKV3LP\u0027, ip: \u0027192.168.1.5\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_162\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.40.565498 (ea082db3280dd6..., userDataDir: C:\\Users\\vkjai\\AppData\\Loca...}, cssSelectorsEnabled: true, databaseEnabled: false, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 73.0.3683.103, webStorageEnabled: true}\nSession ID: 4f390e4c43ca6f4d7a5b33070d70ee7f\n*** Element info: {Using\u003dxpath, value\u003d//input[@name \u003d \u0027email_address\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat StepDefination.LoginStepDefination.user_enter_emailid_and_password(LoginStepDefination.java:75)\r\n\tat ✽.When user enter emailid and password(Loginnew.feature:12)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginStepDefination.user_clicks_on_sign_in_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefination.user_is_on_Home_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefination.user_close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "user navigate to http://www.gcreddy.com/project1/login.php",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.gcreddy.com/project1/login.php",
      "offset": 17
    }
  ],
  "location": "LoginStepDefination.user_navigate_to_http_www_gcrit_com_build_login_php(String)"
});
formatter.result({
  "duration": 18864063900,
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d73.0.3683.103)\n  (Driver info: chromedriver\u003d2.40.565498 (ea082db3280dd6843ebfb08a625e3eb905c4f5ab),platform\u003dWindows NT 10.0.17763 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.141.5\u0027, revision: \u0027d54ebd709a\u0027, time: \u00272018-11-06T11:42:16\u0027\nSystem info: host: \u0027LAPTOP-PNMKV3LP\u0027, ip: \u0027192.168.1.5\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_162\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.40.565498 (ea082db3280dd6..., userDataDir: C:\\Users\\vkjai\\AppData\\Loca...}, cssSelectorsEnabled: true, databaseEnabled: false, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 73.0.3683.103, webStorageEnabled: true}\nSession ID: dfcadd1c087088ad0555e047ffe159c7\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat StepDefination.LoginStepDefination.user_navigate_to_http_www_gcrit_com_build_login_php(LoginStepDefination.java:30)\r\n\tat ✽.Given user navigate to http://www.gcreddy.com/project1/login.php(Loginnew.feature:7)\r\n",
  "status": "failed"
});
formatter.scenario({
  "comments": [
    {
      "line": 19,
      "value": "# Data driven With using the Maps"
    }
  ],
  "line": 20,
  "name": "Verify that user is able to login to application successfully with diff data driven methods",
  "description": "",
  "id": "loginnew-test;verify-that-user-is-able-to-login-to-application-successfully-with-diff-data-driven-methods",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 22,
  "name": "user enter emailid1 and password1",
  "rows": [
    {
      "cells": [
        "emailid",
        "Password"
      ],
      "line": 23
    },
    {
      "cells": [
        "Rahul1993@gmail.com",
        "Admin@123"
      ],
      "line": 24
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "user clicks on sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "User is on Home Page",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "User close the browser",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefination.user_enter_emailid1_and_password1(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefination.user_clicks_on_sign_in_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefination.user_is_on_Home_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefination.user_close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "login test",
  "description": "\r\nDescription: Check login with diff data driven techniques",
  "id": "login-test",
  "keyword": "Feature"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "user navigate to http://www.gcreddy.com/project1/login.php",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.gcreddy.com/project1/login.php",
      "offset": 17
    }
  ],
  "location": "LoginStepDefination.user_navigate_to_http_www_gcrit_com_build_login_php(String)"
});
formatter.result({
  "duration": 14255307400,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 8,
      "value": "# Data driven Without examples keywords"
    }
  ],
  "line": 9,
  "name": "Verify that user is able to login to application successfully",
  "description": "",
  "id": "login-test;verify-that-user-is-able-to-login-to-application-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "user enter emailid \"Rahul1993@gmail.com\" and password \"Admin@123\"",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "user clicks on sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User is on Home Page",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "User close the browser",
  "keyword": "When "
});
formatter.match({
  "arguments": [
    {
      "val": "Rahul1993@gmail.com",
      "offset": 20
    },
    {
      "val": "Admin@123",
      "offset": 55
    }
  ],
  "location": "LoginStepDefination.user_enter_emailid_and_password(String,String)"
});
formatter.result({
  "duration": 293751600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_clicks_on_sign_in_button()"
});
formatter.result({
  "duration": 7822207300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 3059767300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_close_the_browser()"
});
formatter.result({
  "duration": 91543200,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 18,
      "value": "# Data driven With examples keywords"
    }
  ],
  "line": 19,
  "name": ": scenario description",
  "description": "",
  "id": "login-test;:-scenario-description",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 21,
  "name": "user enter emailid \"\u003cemailid\u003e\" and password \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "user clicks on sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User is on Home Page",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "User close the browser",
  "keyword": "When "
});
formatter.examples({
  "line": 26,
  "name": "",
  "description": "",
  "id": "login-test;:-scenario-description;",
  "rows": [
    {
      "cells": [
        "emailid",
        "password"
      ],
      "line": 27,
      "id": "login-test;:-scenario-description;;1"
    },
    {
      "cells": [
        "Rahul1993@gmail.com",
        "Admin@123"
      ],
      "line": 28,
      "id": "login-test;:-scenario-description;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "user navigate to http://www.gcreddy.com/project1/login.php",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.gcreddy.com/project1/login.php",
      "offset": 17
    }
  ],
  "location": "LoginStepDefination.user_navigate_to_http_www_gcrit_com_build_login_php(String)"
});
formatter.result({
  "duration": 19656836300,
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d73.0.3683.103)\n  (Driver info: chromedriver\u003d2.40.565498 (ea082db3280dd6843ebfb08a625e3eb905c4f5ab),platform\u003dWindows NT 10.0.17763 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.141.5\u0027, revision: \u0027d54ebd709a\u0027, time: \u00272018-11-06T11:42:16\u0027\nSystem info: host: \u0027LAPTOP-PNMKV3LP\u0027, ip: \u0027192.168.1.5\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_162\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.40.565498 (ea082db3280dd6..., userDataDir: C:\\Users\\vkjai\\AppData\\Loca...}, cssSelectorsEnabled: true, databaseEnabled: false, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 73.0.3683.103, webStorageEnabled: true}\nSession ID: 8fb5572007ebc5a6104735d9da412c25\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat StepDefination.LoginStepDefination.user_navigate_to_http_www_gcrit_com_build_login_php(LoginStepDefination.java:30)\r\n\tat ✽.Given user navigate to http://www.gcreddy.com/project1/login.php(login.feature:6)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 28,
  "name": ": scenario description",
  "description": "",
  "id": "login-test;:-scenario-description;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 21,
  "name": "user enter emailid \"Rahul1993@gmail.com\" and password \"Admin@123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "user clicks on sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User is on Home Page",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "User close the browser",
  "keyword": "When "
});
formatter.match({
  "arguments": [
    {
      "val": "Rahul1993@gmail.com",
      "offset": 20
    },
    {
      "val": "Admin@123",
      "offset": 55
    }
  ],
  "location": "LoginStepDefination.user_enter_emailid_and_password(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefination.user_clicks_on_sign_in_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefination.user_is_on_Home_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefination.user_close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "user navigate to http://www.gcreddy.com/project1/login.php",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.gcreddy.com/project1/login.php",
      "offset": 17
    }
  ],
  "location": "LoginStepDefination.user_navigate_to_http_www_gcrit_com_build_login_php(String)"
});
formatter.result({
  "duration": 6738641600,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 32,
      "value": "# Data driven With using the data tables"
    }
  ],
  "line": 33,
  "name": "Verify that user is able to login to application successfully with diff data driven methods",
  "description": "",
  "id": "login-test;verify-that-user-is-able-to-login-to-application-successfully-with-diff-data-driven-methods",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 35,
  "name": "user enter emailid and password",
  "rows": [
    {
      "cells": [
        "Rahul1993@gmail.com",
        "Admin@123"
      ],
      "line": 36
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "user clicks on sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "User is on Home Page",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "User close the browser",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefination.user_enter_emailid_and_password(DataTable)"
});
formatter.result({
  "duration": 12291500,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d73.0.3683.103)\n  (Driver info: chromedriver\u003d2.40.565498 (ea082db3280dd6843ebfb08a625e3eb905c4f5ab),platform\u003dWindows NT 10.0.17763 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.141.5\u0027, revision: \u0027d54ebd709a\u0027, time: \u00272018-11-06T11:42:16\u0027\nSystem info: host: \u0027LAPTOP-PNMKV3LP\u0027, ip: \u0027192.168.1.5\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_162\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.40.565498 (ea082db3280dd6..., userDataDir: C:\\Users\\vkjai\\AppData\\Loca...}, cssSelectorsEnabled: true, databaseEnabled: false, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 73.0.3683.103, webStorageEnabled: true}\nSession ID: e32d20df7fbf4dc6bad657a472d6cf24\n*** Element info: {Using\u003dxpath, value\u003d//input[@name \u003d \u0027email_address\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat StepDefination.LoginStepDefination.user_enter_emailid_and_password(LoginStepDefination.java:75)\r\n\tat ✽.When user enter emailid and password(login.feature:35)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginStepDefination.user_clicks_on_sign_in_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefination.user_is_on_Home_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefination.user_close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "user navigate to http://www.gcreddy.com/project1/login.php",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.gcreddy.com/project1/login.php",
      "offset": 17
    }
  ],
  "location": "LoginStepDefination.user_navigate_to_http_www_gcrit_com_build_login_php(String)"
});
formatter.result({
  "duration": 5959806600,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 42,
      "value": "# Data driven With using the Maps"
    }
  ],
  "line": 43,
  "name": "Verify that user is able to login to application successfully with diff data driven methods",
  "description": "",
  "id": "login-test;verify-that-user-is-able-to-login-to-application-successfully-with-diff-data-driven-methods",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 45,
  "name": "user enter emailid1 and password1",
  "rows": [
    {
      "cells": [
        "emailid",
        "Password"
      ],
      "line": 46
    },
    {
      "cells": [
        "Rahul1993@gmail.com",
        "Admin@123"
      ],
      "line": 47
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 48,
  "name": "user clicks on sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "User is on Home Page",
  "keyword": "Then "
});
formatter.step({
  "line": 50,
  "name": "User close the browser",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefination.user_enter_emailid1_and_password1(DataTable)"
});
formatter.result({
  "duration": 20155600,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d73.0.3683.103)\n  (Driver info: chromedriver\u003d2.40.565498 (ea082db3280dd6843ebfb08a625e3eb905c4f5ab),platform\u003dWindows NT 10.0.17763 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.141.5\u0027, revision: \u0027d54ebd709a\u0027, time: \u00272018-11-06T11:42:16\u0027\nSystem info: host: \u0027LAPTOP-PNMKV3LP\u0027, ip: \u0027192.168.1.5\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_162\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.40.565498 (ea082db3280dd6..., userDataDir: C:\\Users\\vkjai\\AppData\\Loca...}, cssSelectorsEnabled: true, databaseEnabled: false, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 73.0.3683.103, webStorageEnabled: true}\nSession ID: 12fac3b157f21410c3ac6af865747f2d\n*** Element info: {Using\u003dxpath, value\u003d//input[@name \u003d \u0027email_address\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat StepDefination.LoginStepDefination.user_enter_emailid1_and_password1(LoginStepDefination.java:90)\r\n\tat ✽.When user enter emailid1 and password1(login.feature:45)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginStepDefination.user_clicks_on_sign_in_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefination.user_is_on_Home_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefination.user_close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
});