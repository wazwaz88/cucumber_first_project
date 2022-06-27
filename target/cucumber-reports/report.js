$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/carvana.feature");
formatter.feature({
  "name": "Validate Carvana Home-Page Functionalities",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.scenario({
  "name": "Validate CAR FINDER menu item",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on \"https://www.carvana.com/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "BaseSteps.user_is_on(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on \"CAR FINDER\" menu item",
  "keyword": "When "
});
formatter.match({
  "location": "CarvanaSteps.userClicksOnMenuItem(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be navigated to \"https://www.carvana.com/help-me-search/\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CarvanaSteps.user_should_be_navigated_to(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see \"WHAT CAR SHOULD I GET?\" text",
  "keyword": "And "
});
formatter.match({
  "location": "CarvanaSteps.user_should_see_text(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see \"Car Finder can help! Answer a few quick questions to find the right car for you.\" text",
  "keyword": "And "
});
formatter.match({
  "location": "CarvanaSteps.user_should_see_text(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see \"TRY CAR FINDER\" link",
  "keyword": "And "
});
formatter.match({
  "location": "CarvanaSteps.user_should_see_link(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on \"TRY CAR FINDER\" link",
  "keyword": "When "
});
formatter.match({
  "location": "CarvanaSteps.user_clicks_on_link(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be navigated to \"https://www.carvana.com/help-me-search/qa\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CarvanaSteps.user_should_be_navigated_to(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see \"WHAT IS MOST IMPORTANT TO YOU IN YOUR NEXT CAR?\" text",
  "keyword": "And "
});
formatter.match({
  "location": "CarvanaSteps.user_should_see_text(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see \"Select up to 4 in order of importance\" text",
  "keyword": "And "
});
formatter.match({
  "location": "CarvanaSteps.user_should_see_text(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate SELL/TRADE invalid vin search",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on \"https://www.carvana.com/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "BaseSteps.user_is_on(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on \"SELL/TRADE\" menu item",
  "keyword": "When "
});
formatter.match({
  "location": "CarvanaSteps.userClicksOnMenuItem(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be navigated to \"https://www.carvana.com/sell-my-car\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CarvanaSteps.user_should_be_navigated_to(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see \"GET A REAL OFFER IN 2 MINUTES\" text",
  "keyword": "And "
});
formatter.match({
  "location": "CarvanaSteps.user_should_see_text(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see \"We pick up your car. You get paid on the spot.\" text",
  "keyword": "And "
});
formatter.match({
  "location": "CarvanaSteps.user_should_see_text(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on \"VIN\" button",
  "keyword": "When "
});
formatter.match({
  "location": "CarvanaSteps.userClicksOnButton(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters vin number as \"00000000000000000\"",
  "keyword": "And "
});
formatter.match({
  "location": "CarvanaSteps.userEntersVinNumberAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on \"GET MY OFFER\" button",
  "keyword": "And "
});
formatter.match({
  "location": "CarvanaSteps.userClicksOnButton(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see \"We couldn’t find that VIN. Please check your entry and try again.\" text",
  "keyword": "Then "
});
formatter.match({
  "location": "CarvanaSteps.user_should_see_text(String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat steps.CarvanaSteps.user_should_see_text(CarvanaSteps.java:83)\r\n\tat ✽.user should see \"We couldn’t find that VIN. Please check your entry and try again.\" text(src/test/resources/features/carvana.feature:26)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate AUTO LOAN CALCULATOR under FINANCING menu item",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on \"https://www.carvana.com/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "BaseSteps.user_is_on(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user hovers over on \"FINANCING\" menu item",
  "keyword": "When "
});
formatter.match({
  "location": "CarvanaSteps.userHoversOverOnMenuItem(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on \"AUTO LOAN CALCULATOR\" menu item",
  "keyword": "And "
});
formatter.match({
  "location": "CarvanaSteps.userClicksOnMenuItem(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"Cost of Car I want\" as \"10,000\"",
  "keyword": "When "
});
formatter.match({
  "location": "CarvanaSteps.userEntersAs(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects \"What’s Your credit Score?\" as \"Excellent: 780\"",
  "keyword": "And "
});
formatter.match({
  "location": "CarvanaSteps.userSelectsAs(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects \"Choose Your Loan Terms\" as \"60 Months\"",
  "keyword": "And "
});
formatter.match({
  "location": "CarvanaSteps.userSelectsAs(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"What is Your Down Payment?\" as \"1,500\"",
  "keyword": "And "
});
formatter.match({
  "location": "CarvanaSteps.userEntersAs(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see the monthly payment as \"154.00\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CarvanaSteps.userShouldSeeTheMonthlyPaymentAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});