$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("myFeature.feature");
formatter.feature({
  "line": 1,
  "name": "Adopt an animal Scenario Hooks",
  "description": "",
  "id": "adopt-an-animal-scenario-hooks",
  "keyword": "Feature"
});
formatter.before({
  "duration": 10175268003,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Adopt an available animal",
  "description": "",
  "id": "adopt-an-animal-scenario-hooks;adopt-an-available-animal",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I am at the zoo site",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I navigate to adoption",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I check for an available animal",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I populate the form",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "There should be a confirmation message",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.shouldNavigateToZooSite()"
});
formatter.result({
  "duration": 1390014947,
  "status": "passed"
});
formatter.match({
  "location": "Steps.navigateToAdoption()"
});
formatter.result({
  "duration": 288033775,
  "status": "passed"
});
formatter.match({
  "location": "Steps.checkAvailableAnimal()"
});
formatter.result({
  "duration": 2315591361,
  "status": "passed"
});
formatter.match({
  "location": "Steps.populateForm()"
});
formatter.result({
  "duration": 5088961243,
  "status": "passed"
});
formatter.match({
  "location": "Steps.verifyConfirmMessageAvilable()"
});
formatter.result({
  "duration": 2054668516,
  "status": "passed"
});
formatter.after({
  "duration": 30019119,
  "status": "passed"
});
formatter.before({
  "duration": 6487687617,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Adopt an available animal",
  "description": "",
  "id": "adopt-an-animal-scenario-hooks;adopt-an-available-animal",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "I am at the zoo site",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I navigate to adoption",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I check for an available animal",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I populate the form",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "There should be a confirmation text",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.shouldNavigateToZooSite()"
});
formatter.result({
  "duration": 1296234093,
  "status": "passed"
});
formatter.match({
  "location": "Steps.navigateToAdoption()"
});
formatter.result({
  "duration": 281983397,
  "status": "passed"
});
formatter.match({
  "location": "Steps.checkAvailableAnimal()"
});
formatter.result({
  "duration": 1381572006,
  "status": "passed"
});
formatter.match({
  "location": "Steps.populateForm()"
});
formatter.result({
  "duration": 5341643948,
  "status": "passed"
});
formatter.match({
  "location": "Steps.verifyConfirmTextAvilable()"
});
formatter.result({
  "duration": 50813648,
  "error_message": "junit.framework.ComparisonFailure: 2nd assert failed. expected:\u003c[YOUR ADOPTION HAS BEEN SET UP]\u003e but was:\u003c[fail]\u003e\r\n\tat junit.framework.Assert.assertEquals(Assert.java:100)\r\n\tat com.cucumber.CucumberProject.Steps.verifyConfirmTextAvilable(Steps.java:177)\r\n\tat ✽.Then There should be a confirmation text(myFeature.feature:15)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 11294066,
  "status": "passed"
});
});