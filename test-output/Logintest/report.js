$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "login test",
  "description": "\r\nDescription:",
  "id": "login-test",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 6,
  "name": "scenario description",
  "description": "",
  "id": "login-test;scenario-description",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "user navigate to http://www.gcreddy.com/project1/login.php",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "user enter emailid and password",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user clicks on sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User is on Home Page",
  "keyword": "Then "
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
  "duration": 14532381800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_enter_emailid_and_password()"
});
formatter.result({
  "duration": 184345100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_clicks_on_sign_in_button()"
});
formatter.result({
  "duration": 5881473000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 41300,
  "status": "passed"
});
});