2. Functional Acceptance Tests:

## Acceptance Tests

### User

- **AC1:** User must be a registered member.
  - **Test 1:** Attempt to access a member-exclusive feature without logging in.
    - Verify that accessing the feature prompts a login requirement.

- **AC2:** Login required as a member.
  - **Test 2:** Attempt to log in with valid credentials.
    - Verify successful login as a member.

- **AC3:** "Statistics" button should be visible in the header for accessing statistics.
  - **Test 3:** Check the header for the presence of the "Statistics" button.
    - Verify that the button is visible when logged in as a member.

- **AC4:** Visibility of "Statistics" button restricted to logged-in members.
  - **Test 4:** Log out and verify the absence of the "Statistics" button.
    - Ensure that the button is not visible when not logged in as a member.

- **AC5:** Clicking "Statistics" redirects to the corresponding page.
  - **Test 5:** Click the "Statistics" button.
    - Verify redirection to the correct statistics page.

- **AC6:** Statistics page should display the time with the most posts on a specific day.
  - **Test 6:** Check for the presence of the metric showing the time with the most posts.
    - Verify that the information is displayed accurately.

- **AC7:** The metric related to this must occupy the seventh position on the page.
  - **Test 7:** Count the position of the metric on the statistics page.
    - Ensure that the metric occupies the seventh position on the page.

- **AC8:** Date input field required in the format yyyy-mm-dd.
  - **Test 8:** Attempt to input a date in a different format.
    - Verify that the system only accepts dates in the yyyy-mm-dd format.

- **AC9:** Date input should only accept the yyyy-mm-dd format.
  - **Test 9:** Enter a valid date in the yyyy-mm-dd format.
    - Ensure that the system accepts and processes the input correctly.

- **AC10:** An "Update" button to retrieve relevant data.
  - **Test 10:** Click the "Update" button after inputting a date.
    - Verify that relevant data related to the date inputted is displayed.

- **AC11:** Clicking "Update" should display the times with the most posts on a specific day.
  - **Test 11:** Click the "Update" button and observe the displayed data.
    - Ensure that the displayed data corresponds to the times with the most posts on the specified day.
