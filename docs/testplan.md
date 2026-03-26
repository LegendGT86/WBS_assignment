WBS assessment TestPlan
Tester: Dylan Matheson

Objective
Cover critical customer path when navigating the booking website, focusing on 2 areas.

In scope
- Functional UI tests for the Landing page,Reservation page 
- API tests for booking creation and amendment
- Useable reports on test findings
- Bug creation in /bugs folder

Out of scope
- Extensive backend API testing
- Cloud/database testing
- Third party testing (e.g. UI testing wont allow map access on google maps and payment page non-functional to test pay app/services)

Deliverables:
 - Test reports (Allure & HTML)
 - Screenshots of any failed steps
 - Testcases listed below


Testcases:
API testcases covering scenarios:
    Given a user creates a booking
    When the user submits their booking details
    Then the booking details should be available on database for retrieval

    Given a user updates their existing booking
    When the user submits the updated booking details
    Then the updates should reflect the updated changes

    Given the user decides to delete/remove their booking
    When the request is made
    Then the booking should be successfuly removed from database

UI testcase coveratge:
    Given a user is on the landing page
    And the user scrolls to the bottom of said page
    When the user fills out the required fields in the "Contact us" form
    And the user Clicks the submit button
    Then the form should disappear
    And a pop up dialog box should appear confirming the form submission