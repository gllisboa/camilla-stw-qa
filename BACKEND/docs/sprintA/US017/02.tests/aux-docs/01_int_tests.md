# 1. Integration Tests:

* **Pre-conditions:** The database should be empty

### **Test 1:** Register New Account Requirement - AC.1

* **Dependency of:** [US001 - Registration of a New Account API Unit Tests](/docs/sprintA/US001//02.tests/readme.md)

* Run the US001.api.test.ts file to test the API and cover all case scenarios for the Registration of a New Account and the creation of the 1st account **"adminuser"** with the following credentials:

| Member | Username | Email | Password |
| :---: | :---: | :---: | :---: |
| **adminuser** | adminuser | adminuser@gmail.com | adminuser |
|                  |                |                          |                |

<br>

* Replication of US001 **"Happy Path"** for the registration of a 5 new accountss for aditional 5 users (total of 6 users) to test the API and cover all case scenarios for the Registration of a New Account:

**Test Inputs:**

| Member | Username | Email | Password |
| :---: | :---: | :---: | :---: |
| **user-number1** | "user-number1" | "user-number1@gmail.com" | "user-number1" |
| **user-number2** | "user-number2" | "user-number2@gmail.com" | "user-number2" |
| **user-number3** | "user-number3" | "user-number3@gmail.com" | "user-number3" |
| **user-number4** | "user-number4" | "user-number4@gmail.com" | "user-number4" |
| **user-number5** | "user-number5" | "user-number5@gmail.com" | "user-number5" |
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

### **Test 2:** Member Login - AC.2

**Test Inputs:**

| Member | Username | Password |
| :---: | :---: | :---: |
| **adminuser** | adminuser | adminuser |
| **user-number1** | "user-number1" | "user-number1" |
| **user-number2** | "user-number2" | "user-number2" |
| **user-number3** | "user-number3" | "user-number3" |
| **user-number4** | "user-number4" | "user-number4" |
| **user-number5** | "user-number5" | "user-number5" |
|                  |                |                |

<br>

**Test Specification:**

### **Test 2.1:** Valid login credentials:

    **Test-Steps:**
        Username: "adminuser"
        Password: "adminuser"
        Invoke the method `users.post`

    **Expected result:**
        Return Status Code `200-ok`
    
<br>
<hr>


* Open the system
* Log in as a member
* Verify that a success message "logged in" is displayed
* **Test 1.1:** invalid login credentials:
* Attempt to log in with invalid credentials (username)
* Verify that an error message is displayed "Had some trouble logging in. An unexpected error occurred"" 
* Attempt to log in with invalid credentials (Password)
* Verify that an error message is displayed "Had some trouble logging in. Password doesn't match error"

<br>
