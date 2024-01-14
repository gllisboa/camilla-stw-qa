# Tests - US017 - View top 3 Members that published more Comments for a Specific Day

* **Pre-conditions:** The database should be empty

<br>

## 0. Test enviroment Pre-setup

* After cleaning the DB and prior to running any Integrations tests/ Functional Accceptance Tests, a SQL script will be run to inject data into the DB in order to prepare a test environment.

* **Run the US017.api.test.ts file to test the API and cover all case scenarios for the US017**

### **[Test Environment Pre-setup Specification](./aux-docs/00_test_enviroment_setup.md)**

<br>

## 1. Integration Tests:

* **Run the US017.api.test.ts file to test the API and cover all case scenarios for the US017**

### **[Integration Tests Specification](./aux-docs/01_int_tests.md)**

## 2. Functional Acceptance Tests:

### **[Functional Acceptance Tests Specification](./aux-docs/02_func_accept_tests.md)**

### **Covered AC´s:**

<br>

<h6 align="center">

![**MISSING**](https://png.pngtree.com/png-vector/20220801/ourmid/pngtree-missing-heterogeneous-red-rubber-vector-png-image_14259036.png)

</h6>

<br>

# Acceptance Criteria for "View Top 3 Members - Comments on Specific Day"

# AC 1: 

Successful Retrieval: System responds with HTTP 200 when users request the top 3 members for a specific day.

# AC 2: 

Correct Data Structure: Response includes an array of three members, each with valid details and comment counts.

# AC 3: 

Correct Sorting Order: Members in the response are sorted in descending order based on comment counts.

# AC 4: 

Valid Member Details: Each member in the response has valid and complete details.

# AC 5: 

No Comments on Specified Day: System indicates the absence of comments when users request the top 3 members for a day with no comments.

