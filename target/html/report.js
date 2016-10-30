$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("PageHeadingScenarioOutLine.feature");
formatter.feature({
  "line": 1,
  "name": "Test Page Heading Scenario Outline",
  "description": "",
  "id": "test-page-heading-scenario-outline",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Test Contact Page Heading",
  "description": "",
  "id": "test-page-heading-scenario-outline;test-contact-page-heading",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@TestRoom"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on zoo site",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on \u003cLink\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I check I am on \u003cTitle\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I close browser",
  "keyword": "And "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "test-page-heading-scenario-outline;test-contact-page-heading;",
  "rows": [
    {
      "cells": [
        "Link",
        "Title"
      ],
      "line": 11,
      "id": "test-page-heading-scenario-outline;test-contact-page-heading;;1"
    },
    {
      "cells": [
        "adoption_link",
        "Adoption"
      ],
      "line": 12,
      "id": "test-page-heading-scenario-outline;test-contact-page-heading;;2"
    },
    {
      "cells": [
        "about_link",
        "About"
      ],
      "line": 13,
      "id": "test-page-heading-scenario-outline;test-contact-page-heading;;3"
    },
    {
      "cells": [
        "contact_link",
        "Contact"
      ],
      "line": 14,
      "id": "test-page-heading-scenario-outline;test-contact-page-heading;;4"
    },
    {
      "cells": [
        "home_link",
        "Home"
      ],
      "line": 15,
      "id": "test-page-heading-scenario-outline;test-contact-page-heading;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 8146291569,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Test Contact Page Heading",
  "description": "",
  "id": "test-page-heading-scenario-outline;test-contact-page-heading;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@TestRoom"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on zoo site",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on adoption_link",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I check I am on Adoption",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I close browser",
  "keyword": "And "
});
formatter.match({
  "location": "CommonPageStepDefinition.shouldNavigateToZoo()"
});
formatter.result({
  "duration": 2441225806,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "adoption_link",
      "offset": 11
    }
  ],
  "location": "CommonPageStepDefinition.clickContactLink(String)"
});
formatter.result({
  "duration": 517571870,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Adoption",
      "offset": 16
    }
  ],
  "location": "CommonPageStepDefinition.verifyZooTitle(String)"
});
formatter.result({
  "duration": 510394181,
  "status": "passed"
});
formatter.match({
  "location": "CommonPageStepDefinition.closeBrowser()"
});
formatter.result({
  "duration": 69225438,
  "status": "passed"
});
formatter.after({
  "duration": 1420788446,
  "status": "passed"
});
formatter.before({
  "duration": 5960947616,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Test Contact Page Heading",
  "description": "",
  "id": "test-page-heading-scenario-outline;test-contact-page-heading;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@TestRoom"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on zoo site",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on about_link",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I check I am on About",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I close browser",
  "keyword": "And "
});
formatter.match({
  "location": "CommonPageStepDefinition.shouldNavigateToZoo()"
});
formatter.result({
  "duration": 1762237251,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "about_link",
      "offset": 11
    }
  ],
  "location": "CommonPageStepDefinition.clickContactLink(String)"
});
formatter.result({
  "duration": 355732338,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "About",
      "offset": 16
    }
  ],
  "location": "CommonPageStepDefinition.verifyZooTitle(String)"
});
formatter.result({
  "duration": 540708868,
  "status": "passed"
});
formatter.match({
  "location": "CommonPageStepDefinition.closeBrowser()"
});
formatter.result({
  "duration": 79637683,
  "status": "passed"
});
formatter.after({
  "duration": 727485567,
  "status": "passed"
});
formatter.before({
  "duration": 6096525201,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Test Contact Page Heading",
  "description": "",
  "id": "test-page-heading-scenario-outline;test-contact-page-heading;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@TestRoom"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on zoo site",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on contact_link",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I check I am on Contact",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I close browser",
  "keyword": "And "
});
formatter.match({
  "location": "CommonPageStepDefinition.shouldNavigateToZoo()"
});
formatter.result({
  "duration": 1336649723,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "contact_link",
      "offset": 11
    }
  ],
  "location": "CommonPageStepDefinition.clickContactLink(String)"
});
formatter.result({
  "duration": 381889599,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Contact",
      "offset": 16
    }
  ],
  "location": "CommonPageStepDefinition.verifyZooTitle(String)"
});
formatter.result({
  "duration": 929136551,
  "status": "passed"
});
formatter.match({
  "location": "CommonPageStepDefinition.closeBrowser()"
});
formatter.result({
  "duration": 70259150,
  "status": "passed"
});
formatter.after({
  "duration": 741405782,
  "status": "passed"
});
formatter.before({
  "duration": 5936330659,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Test Contact Page Heading",
  "description": "",
  "id": "test-page-heading-scenario-outline;test-contact-page-heading;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@TestRoom"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on zoo site",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on home_link",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I check I am on Home",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I close browser",
  "keyword": "And "
});
formatter.match({
  "location": "CommonPageStepDefinition.shouldNavigateToZoo()"
});
formatter.result({
  "duration": 1312481065,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "home_link",
      "offset": 11
    }
  ],
  "location": "CommonPageStepDefinition.clickContactLink(String)"
});
formatter.result({
  "duration": 376191868,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Home",
      "offset": 16
    }
  ],
  "location": "CommonPageStepDefinition.verifyZooTitle(String)"
});
formatter.result({
  "duration": 239805541,
  "status": "passed"
});
formatter.match({
  "location": "CommonPageStepDefinition.closeBrowser()"
});
formatter.result({
  "duration": 238198731,
  "status": "passed"
});
formatter.after({
  "duration": 856065277,
  "status": "passed"
});
formatter.uri("SubmitContact.feature");
formatter.feature({
  "line": 1,
  "name": "Submit a valid contact form use dataTable",
  "description": "",
  "id": "submit-a-valid-contact-form-use-datatable",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5927790837,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Submit form using valid data",
  "description": "",
  "id": "submit-a-valid-contact-form-use-datatable;submit-form-using-valid-data",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@Application"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on zoo site",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I navigate to contact",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I submit the form with valid data",
  "rows": [
    {
      "cells": [
        "Fields",
        "Value"
      ],
      "line": 8
    },
    {
      "cells": [
        "Name",
        "Roger Smith"
      ],
      "line": 9
    },
    {
      "cells": [
        "Adress",
        "777 Happy Land"
      ],
      "line": 10
    },
    {
      "cells": [
        "Postcode",
        "32123"
      ],
      "line": 11
    },
    {
      "cells": [
        "Email",
        "iWillSubScrib@Yess.com"
      ],
      "line": 12
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I check that the form has been submitted",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonPageStepDefinition.shouldNavigateToZoo()"
});
formatter.result({
  "duration": 1686546803,
  "status": "passed"
});
formatter.match({
  "location": "CommonPageStepDefinition.navigateToContactsPage()"
});
formatter.result({
  "duration": 355728233,
  "status": "passed"
});
formatter.match({
  "location": "CommonPageStepDefinition.submitTheContactForm(DataTable)"
});
formatter.result({
  "duration": 6943925855,
  "status": "passed"
});
formatter.match({
  "location": "CommonPageStepDefinition.checkTheConfirmationPage()"
});
formatter.result({
  "duration": 140982199,
  "status": "passed"
});
formatter.after({
  "duration": 769460097,
  "status": "passed"
});
formatter.uri("adoptionScenarioHook.feature");
formatter.feature({
  "line": 1,
  "name": "Adopt an animal Scenario Hooks",
  "description": "",
  "id": "adopt-an-animal-scenario-hooks",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5970091737,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Adopt an available animal",
  "description": "",
  "id": "adopt-an-animal-scenario-hooks;adopt-an-available-animal",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@TestRoom"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am at the zoo site",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I navigate to adoption",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I check for an available animal",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I populate the form",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "There should be a confirmation message",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonPageStepDefinition.shouldNavigateToZooSite()"
});
formatter.result({
  "duration": 1313747136,
  "status": "passed"
});
formatter.match({
  "location": "CommonPageStepDefinition.navigateToAdoption()"
});
formatter.result({
  "duration": 391310006,
  "status": "passed"
});
formatter.match({
  "location": "CommonPageStepDefinition.checkAvailableAnimal()"
});
formatter.result({
  "duration": 2395906287,
  "status": "passed"
});
formatter.match({
  "location": "CommonPageStepDefinition.populateForm()"
});
formatter.result({
  "duration": 7843344628,
  "status": "passed"
});
formatter.match({
  "location": "CommonPageStepDefinition.verifyConfirmMessageAvilable()"
});
formatter.result({
  "duration": 2075746690,
  "status": "passed"
});
formatter.after({
  "duration": 732117155,
  "status": "passed"
});
formatter.uri("contactConfirmation.feature");
formatter.feature({
  "line": 1,
  "name": "To test contact form works when there are no errors",
  "description": "",
  "id": "to-test-contact-form-works-when-there-are-no-errors",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5950705330,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Check form is validated when there are no errors",
  "description": "",
  "id": "to-test-contact-form-works-when-there-are-no-errors;check-form-is-validated-when-there-are-no-errors",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@TestRoom"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on my zoo website",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click the contact link",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "populate the contact form",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I should be on the contact confirmation page",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonPageStepDefinition.shouldGoToZooSite()"
});
formatter.result({
  "duration": 3330745907,
  "status": "passed"
});
formatter.match({
  "location": "CommonPageStepDefinition.shouldClickOnContactLink()"
});
formatter.result({
  "duration": 436292480,
  "status": "passed"
});
formatter.match({
  "location": "CommonPageStepDefinition.shouldPopulateContactForm()"
});
formatter.result({
  "duration": 3905731476,
  "status": "passed"
});
formatter.match({
  "location": "CommonPageStepDefinition.checkOnContactConfirmationPage()"
});
formatter.result({
  "duration": 313043079,
  "status": "passed"
});
formatter.after({
  "duration": 777940393,
  "status": "passed"
});
formatter.uri("myFeature.feature");
formatter.feature({
  "line": 1,
  "name": "Adopt an animal Scenario Hooks",
  "description": "",
  "id": "adopt-an-animal-scenario-hooks",
  "keyword": "Feature"
});
formatter.before({
  "duration": 6001832191,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Adopt an available animal",
  "description": "",
  "id": "adopt-an-animal-scenario-hooks;adopt-an-available-animal",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@TestRoom"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am at the zoo site",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I navigate to adoption",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I check for an available animal",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I populate the form",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "There should be a confirmation message",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonPageStepDefinition.shouldNavigateToZooSite()"
});
formatter.result({
  "duration": 3170779208,
  "status": "passed"
});
formatter.match({
  "location": "CommonPageStepDefinition.navigateToAdoption()"
});
formatter.result({
  "duration": 632538029,
  "status": "passed"
});
formatter.match({
  "location": "CommonPageStepDefinition.checkAvailableAnimal()"
});
formatter.result({
  "duration": 1781059181,
  "status": "passed"
});
formatter.match({
  "location": "CommonPageStepDefinition.populateForm()"
});
formatter.result({
  "duration": 6293995358,
  "status": "passed"
});
formatter.match({
  "location": "CommonPageStepDefinition.verifyConfirmMessageAvilable()"
});
formatter.result({
  "duration": 2068106337,
  "status": "passed"
});
formatter.after({
  "duration": 839005748,
  "status": "passed"
});
formatter.before({
  "duration": 6003125767,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Adopt an available animal",
  "description": "",
  "id": "adopt-an-animal-scenario-hooks;adopt-an-available-animal",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@TestRoom"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I am at the zoo site",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I navigate to adoption",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I check for an available animal",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I populate the form",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "There should be a confirmation text",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonPageStepDefinition.shouldNavigateToZooSite()"
});
formatter.result({
  "duration": 1759533507,
  "status": "passed"
});
formatter.match({
  "location": "CommonPageStepDefinition.navigateToAdoption()"
});
formatter.result({
  "duration": 366488606,
  "status": "passed"
});
formatter.match({
  "location": "CommonPageStepDefinition.checkAvailableAnimal()"
});
formatter.result({
  "duration": 1898114112,
  "status": "passed"
});
formatter.match({
  "location": "CommonPageStepDefinition.populateForm()"
});
formatter.result({
  "duration": 5873178586,
  "status": "passed"
});
formatter.match({
  "location": "CommonPageStepDefinition.verifyConfirmTextAvilable()"
});
formatter.result({
  "duration": 2062440627,
  "status": "passed"
});
formatter.after({
  "duration": 770992191,
  "status": "passed"
});
formatter.uri("selectAnimalFromAnimalSelectPage.feature");
formatter.feature({
  "line": 1,
  "name": "To test Simba Lion can be selected in the Animal page.",
  "description": "",
  "id": "to-test-simba-lion-can-be-selected-in-the-animal-page.",
  "keyword": "Feature"
});
formatter.before({
  "duration": 6008268873,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Navigate to Animal Selection page and select Simba Lion.",
  "description": "",
  "id": "to-test-simba-lion-can-be-selected-in-the-animal-page.;navigate-to-animal-selection-page-and-select-simba-lion.",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@AnimalSelect"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on Animal Select page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I select Simba the Lion",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "click on the CONTINUE link",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I should be on the Thank you page",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonAnimalSelectPageStepDefinition.navigateToAnimalSelectPage()"
});
formatter.result({
  "duration": 1986879495,
  "status": "passed"
});
formatter.match({
  "location": "CommonAnimalSelectPageStepDefinition.i_select_Simba_the_Lion()"
});
formatter.result({
  "duration": 543229516,
  "status": "passed"
});
formatter.match({
  "location": "CommonAnimalSelectPageStepDefinition.clickCONTINUElink()"
});
formatter.result({
  "duration": 1581047030,
  "status": "passed"
});
formatter.match({
  "location": "CommonAnimalSelectPageStepDefinition.verifyThankyouPageMessage()"
});
formatter.result({
  "duration": 262813224,
  "status": "passed"
});
formatter.after({
  "duration": 702222440,
  "status": "passed"
});
});