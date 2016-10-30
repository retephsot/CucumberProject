$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("SubmitContact.feature");
formatter.feature({
  "line": 1,
  "name": "Submit a valid contact form use dataTable",
  "description": "",
  "id": "submit-a-valid-contact-form-use-datatable",
  "keyword": "Feature"
});
formatter.before({
  "duration": 8056226040,
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
  "duration": 2460676257,
  "status": "passed"
});
formatter.match({
  "location": "CommonPageStepDefinition.navigateToContactsPage()"
});
formatter.result({
  "duration": 466997990,
  "status": "passed"
});
formatter.match({
  "location": "CommonPageStepDefinition.submitTheContactForm(DataTable)"
});
formatter.result({
  "duration": 6521755569,
  "status": "passed"
});
formatter.match({
  "location": "CommonPageStepDefinition.checkTheConfirmationPage()"
});
formatter.result({
  "duration": 247227904,
  "status": "passed"
});
formatter.after({
  "duration": 1011754264,
  "status": "passed"
});
});