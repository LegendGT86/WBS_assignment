Tests Chosen:
A Ui based test has been created to confirm the functionality of the "Contact Us" form located at the bottom of the page. The test involves filling in the required fields, submitting the form and verifying the "Successful submission" message appears.
An API test has been created to test the entire flow associated with the booking system, including creating the booking, updating it and finally deleting it.

Reason for chosen tests:
Following the critical user path, the two most likely used features on the website would be that of making the booking as well as submitting a form (Comment/complaint/query). Ui testing was used for this because currently it presents the least flakey ui testing possible (Many bugs were found with other aspects of the website and booking proved unstable at times). However the booking system is the primary feature of the website, and an API test was used to test the full end-to-end CRUD for booking. API is used due to its speed and efficiency for testing

Desired future improvements:
- More API helpers & general helpers to neaten api & ui test pages
- Expand the amount of browsers/ devices tested on (allowing parallel worker testing)
- An api test to confirm the details of the form submission performed in ui test
- Larger datasets so as to confirm over wider spread
- Proper intergrations into CI/CD pipeline
- Expanded regression test on homepage once all bugs are fixed (e.g href link tests, navbar link tests)