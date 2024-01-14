# 1. Integration Tests:

* **Pre-conditions:** The database should be empty

* Run the test file **US018.int.test.ts** to automaticall load the pre-test environment with all the control variables and run the API tests for the functionality of the "View Members without any activity (Posts and Comments) for a Specific Day".

````bash
npm run test:api:us018
````

<br>

### **Test Case 1:** Register New Account Requirement - AC.1

* **Dependency of:** [US001 - Registration of a New Account API Unit Tests](/docs/sprintA/US001//02.tests/readme.md)

| Member | Username | Email | Password |
| :---: | :---: | :---: | :---: |
| **adminuser** | adminuser | adminuser@gmail.com | adminuser |
|                  |                |                          |                |

<br>

**Test Specification:**
<br>

    **Test-Steps:**
        // Arrange:
        Username: <"Username Input">
        Email: <"Email Input">
        Password: <"Password Input">

        // Act:
        Invoke the method `users.post`

    **Expected result:**
        // Assert:
        Return Status Code `200-ok`

<br>
<hr> 

### **Test Case 2:** Return Status Code 500 - With No users inactive for Current Date

* Check SQL script for test environment awareness: <code>src/db_test_env_prep/acc_db_test_env_prep.sql</code>

<br>

**Test Specification:**
<br>

    **Test-Steps:**
        // Arrange:
        Date: <"Current Date">

        // Act:
        Invoke the method 'posts.getUsernamesWithoutPostsAndWithoutCommentsByDateController'

    **Expected result:**
        // Assert:
        Return Status Code `500`

<br>
<hr> 

### **Test Case 3:**  Return Status Code 200 - For date = 03-10-2023, with 1/2 of the registered users inactive

* Check SQL script for test environment awareness: <code>src/db_test_env_prep/acc_db_test_env_prep.sql</code>

<br>

**Test Specification:**
<br>

    **Test-Steps:**
        // Arrange:
        Date: <"2023-10-03">

        // Act:
        Invoke the method 'posts.getUsernamesWithoutPostsAndWithoutCommentsByDateController'

    **Expected result:**
        // Assert:
        Return Status Code `200-ok`

<br>
<hr> 

### **Test Case 4:** Return Status Code 200 - For date = 01-10-2023, with All users Inactive

* Check SQL script for test environment awareness: <code>src/db_test_env_prep/acc_db_test_env_prep.sql</code>

<br>

**Test Specification:**
<br>

    **Test-Steps:**
        // Arrange:
        Date: <"2023-10-01">

        // Act:
        Invoke the method 'posts.getUsernamesWithoutPostsAndWithoutCommentsByDateController'

    **Expected result:**
        // Assert:
        Return Status Code `200-ok`

<br>
<hr> 

### **Test Case 5:** Return Status Code 500 -  For invalid date (1 day after Current Date)

* Check SQL script for test environment awareness: <code>src/db_test_env_prep/acc_db_test_env_prep.sql</code>

<br>

**Test Specification:**
<br>

    **Test-Steps:**
        // Arrange:
        Date: <"Current Date + 1 day">

        // Act:
        Invoke the method 'posts.getUsernamesWithoutPostsAndWithoutCommentsByDateController'

    **Expected result:**
        // Assert:
        Return Status Code `500`

<br>
<hr> 

### **Test Case 6:** Return Empty List of Users - For Current Date All Users are active

* Check SQL script for test environment awareness: <code>src/db_test_env_prep/acc_db_test_env_prep.sql</code>

<br>

**Test Specification:**
<br>

    **Test-Steps:**
        // Arrange:
        Date: <"Current Date">

        // Act:
        Invoke the method 'posts.getUsernamesWithoutPostsAndWithoutCommentsByDateController'

    **Expected result:**
        // Assert:
        Return Data: 
            "usernames": []

<br>
<hr> 


### **Test Case 7:** Return List of All Users - For date = 01-10-2023 with all Users inactive

* Check SQL script for test environment awareness: <code>src/db_test_env_prep/acc_db_test_env_prep.sql</code>

<br>

**Test Specification:**
<br>

    **Test-Steps:**
        // Arrange:
        Date: <"2023-10-01">

        // Act:
        Invoke the method 'posts.getUsernamesWithoutPostsAndWithoutCommentsByDateController'

    **Expected result:**
        // Assert:
        Return Data: 
            "usernames": [
                "user-number1",
                "user-number2",
                "user-number3",
                "user-number4",
                "user-number5",
                "user-number6",
                "user-number7",
                "user-number8",
                "user-number9",
                "adminuser"
            ] 

<br>
<hr> 

### **Test Case 8:** Return List of 1/2 Users - For date = 03-10-2023, with 1/2 of the registered users inactive

* Check SQL script for test environment awareness: <code>src/db_test_env_prep/acc_db_test_env_prep.sql</code>

<br>

**Test Specification:**
<br>

    **Test-Steps:**
        // Arrange:
        Date: <"2023-10-2023">

        // Act:
        Invoke the method 'posts.getUsernamesWithoutPostsAndWithoutCommentsByDateController'

    **Expected result:**
        // Assert:
        Return Data: 
            "usernames": [
                "user-number6",
                "user-number7",
                "user-number8",
                "user-number9",
                "adminuser"
            ]

<br>
<hr> 

### **Test Case 9:** Error Handling - Return Error Message for no available inactive users for the concerning date

* Check SQL script for test environment awareness: <code>src/db_test_env_prep/acc_db_test_env_prep.sql</code>

<br>

**Test Specification:**
<br>

    **Test-Steps:**
        // Arrange:
        Date: <"Current Date">
        
        // Act:
        Invoke the method 'posts.getUsernamesWithoutPostsAndWithoutCommentsByDateController'

    **Expected result:**
        // Assert:
        Return Error Message `No users found for the requested date.`

<br>
<hr> 

### **Test Case 10:** Error Handling - Return Error Message for invalid date

* Check SQL script for test environment awareness: <code>src/db_test_env_prep/acc_db_test_env_prep.sql</code>

<br>

**Test Specification:**
<br>

    **Test-Steps:**
        // Arrange:
        Date: <"Current Date">

        // Act:
        Invoke the method 'posts.getUsernamesWithoutPostsAndWithoutCommentsByDateController'

    **Expected result:**
        // Assert:
        Return Error Message `The date supplied is not valid.`

<br>
<hr> 






````typescript
describe("TC-US018 - Integration Tests - Member view Members without any activity (Posts and Comments) for a Specific Day", (): void => {
    it("TC-US018/1 - Return Status Code 500 - With No users inactive for Current Date (Post or Comment Submission)", async (): Promise<void> => {
      // Arrange:
      const currentDate = new Date();

      // Act:
      const response =
        await posts.getUsernamesWithoutPostsAndWithoutCommentsByDateController(
          accessToken,
          currentDate
        );

      // Assert:
      expect(response.status).toBe(500);
    });

    it("TC-US018/2 - Return Status Code 200 - For date = 03-10-2023, with 1/2 of the registered users inactive (Post or Comment Submission)", async (): Promise<void> => {
      // Arrange:
      const day = 3;
      const month = 10;
      const year = 2023;

      // Act:
      const date = new Date(year, month - 1, day);
      const response =
        await posts.getUsernamesWithoutPostsAndWithoutCommentsByDateController(
          accessToken,
          date
        );

      // Assert:
      expect(response.status).toBe(200);
    });

    it("TC-US018/3 - Return Status Code 200 - For date = 01-10-2023, with All users Inactive (Post or Comment Submission)", async (): Promise<void> => {
      // Arrange:
      const day = 1;
      const month = 10;
      const year = 2023;

      // Act:
      const date = new Date(year, month - 1, day);
      const response =
        await posts.getUsernamesWithoutPostsAndWithoutCommentsByDateController(
          accessToken,
          date
        );
      // Assert:
      expect(response.status).toBe(200);
    });

    it("TC-US018/4 - Return Status Code 500 - For date after Current Date, with No users Active (Post or Comment Submission)", async (): Promise<void> => {
      // Arrange:
      const date = new Date();
      const datePlusOne = new Date(date.setDate(date.getDate() + 1));

      //console.log("date >>>>>>>>>>>>>>>>>>>>>>>>>>>>" + date);
      //console.log("datePlusOne >>>>>>>>>>>>>>>>>>>>>>>>>>>>" + datePlusOne);

      // Act:
      const response =
        await posts.getUsernamesWithoutPostsAndWithoutCommentsByDateController(
          accessToken,
          datePlusOne
        );

      //console.log("response >>>>>>>>>>>>>>>>>>>>>>>>>>>>" + response.data);

      // Assert:
      expect(response.status).toBe(500);
    });

    it("TC-US018/5 - Return Empty List of Users - For Current Date All Users are active (Post or Comment Submission)", async (): Promise<void> => {
      // Arrange:
      const date = new Date();
      const usersList = [];

      // Act:
      const response =
        await posts.getUsernamesWithoutPostsAndWithoutCommentsByDateController(
          accessToken,
          date
        );

      // Assert:
      expect(response.data.usernames).toEqual(
        expect.arrayContaining(usersList)
      );
    });

    it("TC-US018/6 - Return List of All Users - For date = 01-10-2023 with all Users inactive (Post or Comment Submission)", async (): Promise<void> => {
      // Arrange:
      const day = 1;
      const month = 10;
      const year = 2023;
      const usersList = [
        "user-number1",
        "user-number2",
        "user-number3",
        "user-number4",
        "user-number5",
        "user-number6",
        "user-number7",
        "user-number8",
        "user-number9",
        "adminuser"
      ];

      // Act:
      const date = new Date(year, month - 1, day);
      const response =
        await posts.getUsernamesWithoutPostsAndWithoutCommentsByDateController(
          accessToken,
          date
        );

      // Assert:
      expect(response.data.usernames).toEqual(
        expect.arrayContaining(usersList)
      );
    });

