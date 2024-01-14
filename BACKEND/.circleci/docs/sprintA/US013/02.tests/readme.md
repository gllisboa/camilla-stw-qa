## Acceptance Tests

### AC00 - Create a User

#### Test 0: Create User Functionality

* **AC1:** All 3 fields (Email/Username/Password) must be filled with valid and unique inputs, including alphanumeric and/or special and case-sensitive characters; otherwise, a suitable prompt message must be displayed.

   - **Test 0.1:** Verify user creation with valid and unique inputs in all fields:
     - Fill all three fields with valid and unique inputs.
     - Ensure the user is successfully created.

### AC01 - Member Login Requirement

#### Test 1: Login Functionality

- **AC1:** Successful member login:
  - Open the system.
  - Log in as a member.
  - Verify the display of a success message stating "logged in."

### AC02 - Test Member Information Page Delete Button Visibility

#### Test 2: Examine Delete Button Visibility

- **AC2:** Visibility of delete button:
  - Open the Information Member interface with a Visitor.
  - Verify the presence of an error message.
  
- **AC2.1:** Visibility of delete button:
  - Open the Information Member interface with a Member.
  - Verify the presence of a success message.

### AC03 - Username Text Box

#### Test 3: Username Text Box Existence

- **AC3:** Verification of username text box:
  - Open the user interface.
  - Check for the presence of a text box for entering the username.

### AC04 - Delete User Functionality

#### Test 4: User Deletion Scenarios

- **AC4:** Deletion scenarios and messages:
  - Attempt deletion with usernames having posts, comments, or replies.
  - Check for the error message "not exist usernames"
  - Attempt deletion with usernames having no posts, comments, or replies.
  - checks that the username has automatically disappeared from the list

### AC05 - Login Attempt with Deleted User

#### Test 5: Attempting Login with Deleted User

- **AC5:** Login attempt with a deleted username:
  - Open the system.
  - Try to log in as a member with a deleted username.
  - Ensure the appearance of an error message indicating an unsuccessful login.

### AC06 - Visitor Access and Display Message

#### Test 6: Visitor Access to Usernames Availability

- **AC6:** Visitor access without usernames for deletion:
  - Access the system as a visitor.
  - Verify the appearance of the message "No usernames available" instead of the list of usernames meeting deletion conditions.
