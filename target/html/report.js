$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("myFeature.feature");
formatter.feature({
  "line": 1,
  "name": "Adopt an animal Scenario Hooks",
  "description": "",
  "id": "adopt-an-animal-scenario-hooks",
  "keyword": "Feature"
});
formatter.before({
  "duration": 1984114166,
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
  "duration": 2653708043,
  "status": "passed"
});
formatter.match({
  "location": "Steps.navigateToAdoption()"
});
formatter.result({
  "duration": 651888167,
  "status": "passed"
});
formatter.match({
  "location": "Steps.checkAvailableAnimal()"
});
formatter.result({
  "duration": 452584096,
  "status": "passed"
});
formatter.match({
  "location": "Steps.populateForm()"
});
formatter.result({
  "duration": 5364754682,
  "status": "passed"
});
formatter.match({
  "location": "Steps.verifyConfirmMessageAvilable()"
});
formatter.result({
  "duration": 2070795741,
  "status": "passed"
});
formatter.after({
  "duration": 126472106,
  "status": "passed"
});
formatter.before({
  "duration": 1173337286,
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
  "duration": 4952712797,
  "status": "passed"
});
formatter.match({
  "location": "Steps.navigateToAdoption()"
});
formatter.result({
  "duration": 1487521353,
  "status": "passed"
});
formatter.match({
  "location": "Steps.checkAvailableAnimal()"
});
formatter.result({
  "duration": 2488416717,
  "status": "passed"
});
formatter.match({
  "location": "Steps.populateForm()"
});
formatter.result({
  "duration": 5516295336,
  "status": "passed"
});
formatter.match({
  "location": "Steps.verifyConfirmTextAvilable()"
});
formatter.result({
  "duration": 69601512,
  "error_message": "junit.framework.ComparisonFailure: 2nd assert failed. expected:\u003c[YOUR ADOPTION HAS BEEN SET UP]\u003e but was:\u003c[fail]\u003e\r\n\tat junit.framework.Assert.assertEquals(Assert.java:100)\r\n\tat com.cucumber.CucumberProject.Steps.verifyConfirmTextAvilable(Steps.java:146)\r\n\tat ✽.Then There should be a confirmation text(myFeature.feature:15)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1313005849,
  "status": "passed"
});
});