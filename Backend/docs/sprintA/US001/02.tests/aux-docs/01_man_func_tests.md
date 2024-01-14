# 1. Manual Functional Tests:

* **Pre-conditions:** The database should be empty

<br>

### **Test 1.1:** Register New Account with Unique Parameters Email & Username - AC1
* Access to the system main page via Web Browser: localhost:3000
* Click on the button "Join" to open the "Account Registration" Page.
* Fill the fields "Username", "Email" and "Password" with valid and unique values.
>* Username: "adminuser"
>* Email: "adminuser@gmail.com"
>* Password: "adminuser"
* Click on the button "Submit" to conclude the registration.
* Ensure that the system displays "You're all signed up! Logging you in." prompt message to validate the registration.

<br>
<hr>

### **Test 1.2:** Register New Account with parameters from an already existant Account - AC6

>**Test 1.2.1:** Register New Account with the Email already existing in the system - AC6
* Access to the system main page via Web Browser: localhost:3000
* Click on the button "Join" to open the "Account Registration" Page.
* Fill the fields "Username", "Email" and "Password" for a Dummy account to be inserted in the system.
>* Username: "Grupo-3"
>* Email: "grupo3@isep.ipp.pt"
>* Password: "Grupo-3"
* Click on the button "Submit" to conclude the registration.
* Fill the fields "Username", "Email" and "Password" with the same email as the one in the Dummy account previously inserted in the system.
>* Username: "Grupo-SwitchQA"
>* Email: "grupo3@isep.ipp.pt"
>* Password: "Grupo-3"
* Click on the button "Submit" to conclude the registration.
* Ensure that the system displays "Yeahhhhh, The email grupo3@isep.ipp.pt associated for this account already exists" prompt message.

<br>

>**Test 1.2.2:** Register New Account with the Username already existing in the system - AC6
* Access to the system main page via Web Browser: localhost:3000
* Click on the button "Join" to open the "Account Registration" Page.
* Fill the fields "Username", "Email" and "Password" for a Dummy account to be inserted in the system.
>* Username: "Grupo-3"
>* Email: "grupo3@isep.ipp.pt"
>* Password: "Grupo-3"
* Click on the button "Submit" to conclude the registration.
* Fill the fields "Username", "Email" and "Password" with the same Username as the one in the Dummy account previously inserted in the system.
>* Username: "Grupo-3"
>* Email: "grupo-SwitchQA@isep.ipp.pt"
>* Password: "Grupo-3"
* Click on the button "Submit" to conclude the registration.
* Ensure that the system displays "Yeahhhhh, The username Grupo-3 associated for this account already exists" prompt message.

<br>
<hr>

### **Test 1.3:** Register New Account with Invalid Parameters - AC3 / AC4 / AC5

>**Test 1.3.1:** Register New Account with Invalid - Email - AC3
* Access to the system main page via Web Browser: localhost:3000
* Click on the button "Join" to open the "Account Registration" Page.
* Fill the fields "Username", "Email" and "Password" with invalid (Email).
>* Username: "Grupo-SwitchQA"
>* Email: "grupo-SwitchQA_isep.ipp.pt"
>* Password: "Grupo-3"
* Ensure that the system must display "Yeahhhhh, Want to try that again with a valid email?" prompt.

<br>

>**Test 1.3.2:** Register New Account with Invalid - Username (less than 2 characters) - AC4
* Access to the system main page via Web Browser: localhost:3000
* Click on the button "Join" to open the "Account Registration" Page.
* Fill the fields "Username", "Email" and "Password" with invalid (Username).
>* Username: "A"
>* Email: "grupo-SwitchQA@isep.ipp.pt"
>* Password: "Grupo-3"
* Ensure that the system must display "Yeahhhhh, TypeError: Cannot read property 'toString' of undefined" prompt.

<br>

>**Test 1.3.3:** Register New Account with Invalid - Username (bigger than 15 characters) - AC4
* Access to the system main page via Web Browser: localhost:3000
* Click on the button "Join" to open the "Account Registration" Page.
* Fill the fields "Username", "Email" and "Password" with invalid (Username).
>* Username: "123456789_ABCDEFGH"
>* Email: "grupo-SwitchQA@isep.ipp.pt"
>* Password: "Grupo-3"
* Ensure that the system must display "Yeahhhhh, Error: InvalidOperation: A failing result needs to contain an error message" prompt.

<br>

>**Test 1.3.4:** Register New Account with Invalid - Password (less than 6 characters) - AC5
* Access to the system main page via Web Browser: localhost:3000
* Click on the button "Join" to open the "Account Registration" Page.
* Fill the fields "Username", "Email" and "Password" with invalid (Password).
>* Username: "Grupo-SwitchQA"
>* Email: ""grupo-SwitchQA@isep.ipp.pt"
>* Password: "12345"
* Ensure that the system must display "Yeahhhhh, your password should be at least 6 chars" prompt.

<br>
<hr>

### **Test 1.4:** Register New Account with Missing Parameters - AC2

>**Test 1.4.1:** Register New Account with Missing - Email - AC2
* Access to the system main page via Web Browser: localhost:3000
* Click on the button "Join" to open the "Account Registration" Page.
* Fill the fields "Username" and "Password".
>* Username: "Grupo-SwitchQA
>* Email: ""
>* Password: "Grupo_3"
* Ensure that the system must display "Yeahhhhh, Want to try that again with a valid email?" prompt.

<br>

>**Test 1.4.2:** Register New Account with Missing - Username - AC2
* Access to the system main page via Web Browser: localhost:3000
* Click on the button "Join" to open the "Account Registration" Page.
* Fill the fields "Email" and "Password".
>* Username: ""
>* Email: "grupo-SwitchQA@isep.ipp.pt"
>* Password: "Grupo_3"
* Ensure that the system must display "Yeahhhhh, you forgot your username." prompt.

<br>

>**Test 1.4.3:** Register New Account with Missing - Password - AC2
* Access to the system main page via Web Browser: localhost:3000
* Click on the button "Join" to open the "Account Registration" Page.
* Fill the fields "Username" and "Email".
>* Username: "Grupo-SwitchQA"
>* Email: "grupo-SwitchQA@isep.ipp.pt"
>* Password: ""
* Ensure that the system must display "Yeahhhhh, your password should be at least 6 chars" prompt.

<br>
<hr>