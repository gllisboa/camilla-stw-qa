# 2. Integration Tests:

* **Pre-conditions:** The database should be empty

<br>

### **Test 2.1:** Register New Account with Unique Parameters Email & Username - AC1

    **Test-Steps:**
        // Arrange:
        Username: "adminuser"
        Email: "adminuser@gmail.com"
        Password: "adminuser"

        // Act:
        Invoke the method `users.post`

    **Expected result:**
        // Assert:
        Return Status Code `200-ok`

<br>
<hr>        
        
### **Test 2.2:** Register New Account with parameters from an already existant Account - AC6

>**Test 2.2.1:** Register New Account with the Email already existing in the system - AC6

    **Test-Steps:**
        // Arrange:
        username: string = "Grupo-3";
        email: string = "adminuser@gmail.com";
        password: string = "Grupo-3";

        // Act:
        Invoke the method `users.post`

    **Expected result:**
        // Assert:
        Return Status Code `409-conflict`

<br>

>**Test 2.2.2:** Register New Account with the Username already existing in the system - AC6

    **Test-Steps:**
        // Arrange:
        username: string = "adminuser";
        email: string = "grupo3@isep.ipp.pt";
        password: string = "Grupo-3";
        
        // Act:
        Invoke the method `users.post`

    **Expected result:**
        // Assert:
        Return Status Code `409-conflict`

<br>
<hr>

### **Test 2.3:** Register New Account with Invalid Parameters - AC2 / AC3 / AC4 / AC5

>**Test 2.3.1:** Register New Account with Invalid - Email - AC2 / AC3

    **Test-Steps:**
        // Arrange:
        username: string = "Grupo-SwitchQA";
        email: string = "grupo-SwitchQA_isep.ipp.pt";
        password: string = "Grupo-3";

        // Act:
        Invoke the method `users.post`

    **Expected result:**
        // Assert:
        Return Status Code `500-Internal Server Error`

<br>

>**Test 2.3.2:** Register New Account with Invalid - Username (less than 2 characters) - AC2 / AC4

    **Test-Steps:**
        // Arrange:
        username: string = "A";
        email: string = "";
        password: string = "Grupo-3";

        // Act:
        Invoke the method `users.post`

    **Expected result:**
        // Assert:
        Return Status Code `500-Internal Server Error`

<br>

>**Test 2.3.3:** Register New Account with Invalid - Username (bigger than 15 characters) - AC2 / AC4

    **Test-Steps:**
        // Arrange:
        username: string = "123456789_ABCDEFGH";
        email: string = "grupo-SwitchQA@isep.ipp.pt";
        password: string = "Grupo-3";

        // Act:
        Invoke the method `users.post`

    **Expected result:**
        // Assert:
        Return Status Code `500-Internal Server Error`

<br>

>**Test 2.3.4:** Register New Account with Invalid - Password (less than 6 characters) - AC2 / AC5

    **Test-Steps:**
        // Arrange:
        username: string = "Grupo-SwitchQA";
        email: string = "grupo@isep.ipp.pt";
        password: string = "Grupo";

        // Act: 
        Invoke the method `users.post`

    **Expected result:**
        // Assert:
        Return Status Code `500-Internal Server Error`

<br>
<hr>

### **Test 2.4:** Register New Account with Missing Parameters - AC1

>**Test 2.4.1:** Register New Account with Missing - Email - AC1

    **Test-Steps:**
        // Arrange:
        username: string = "Grupo-SwitchQA";
        email: string = "";
        password: string = "Grupo-3";

        // Act:
        Invoke the method `users.post`

    **Expected result:**
        // Assert:
        Return Status Code `500-Internal Server Error`

<br>

>**Test 2.4.2:** Register New Account with Missing - Username - AC1

    **Test-Steps:**
        // Arrange:
        username: string = "";
        email: string = "grupo-SwitchQA@isep.ipp.pt";
        password: string = "Grupo-3";

        // Act:
        Invoke the method `users.post`

    **Expected result:**
        // Assert:
        Return Status Code `500-Internal Server Error`

<br>

>**Test 2.4.3:** Register New Account with Missing - Password - AC1

    **Test-Steps:**
        // Arrange:
        username: string = "Grupo-SwitchQA";
        email: string = "grupo-SwitchQA@isep.ipp.pt";
        password: string = "";

        // Act:
        Invoke the method `users.post`

    **Expected result:**
        // Assert:
        Return Status Code `500-Internal Server Error`

<br>
<hr>
