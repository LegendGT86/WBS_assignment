Key Notes:
- To simplify the testing, .env is included and has sensitive data (dummy username/password). Standard practice would be to set these values as secret but for simplicity they have been added

- Workflow will skip PR and go from branch -> merge main


Reason for chosen tests:
Following the critical user path, the homepage is one of the primary entry points. So basic functionality must be tested. However to speed up testing while providing similar test results I will apply API testing to the booking feature. This is also primarily due to the fact that the booking system on UI does not work properly, nor does the payment, so to avoid flakey tests the backend logic will only for now be tested