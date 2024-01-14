# Tests - US019 - Member view percentage of posts wihout comments on a Specific Day

**Pre-Commit Hook:**

* **Runs the Test Environment Pre-setup and loads the data into the DB**

* **Runs the US019.api.test.ts file wich includes the Regression and Integrations tests of the API and covers all case scenarios for the US019**

## 1. Test enviroment Pre-setup:

* **Pre-conditions:** The database should be empty

* Prior to running any Regression Tests/ Integrations tests/ Functional Accceptance Tests, a SQL script needs to be run to inject data into the DB in order to prepare a test environment.

### **[Test Environment Pre-setup Specification](./aux-docs/01_test_enviroment_setup.md)**

<br>

## 2. Regression Tests:

* Due to the nature of the concernig functionality and its dependency of other user stories, the regression tests will be performed in the following order:

<br>

### US001 - Register New Account

+ [Documentation - US001 - Register New Account](../../US001/readme.md)

### US005 - Create a Post

* [Documentation - US005 - Create a Post](../../US005/readme.md)

### US007 - Comment a Post

* [Documentation - US007 - Comment a Post](../../US007/readme.md)

### US009 - Vote on Post

* [Documentation - US009 - Vote on Post](../../US009/readme.md)

### US010 - Vote on Comment

* [Documentation - US010 - Vote on Comment](../../US010/readme.md)

<br>

## 3. Integration Tests:

### **Covered AC´s:** AC.1 / AC.2 / AC.8 / AC.9 / AC.11 + FURPS

### **[Integration Tests Specification](./aux-docs/03_int_tests.md)**

<br>

## 4. Functional Acceptance Tests:

### **Covered AC´s: AC.3 / AC.4 / AC.5 / AC.6 / AC.7 / AC.8 / AC.9 / AC.10 / AC.12 / AC.13 / AC.14 / AC.15**

### **[Functional Acceptance Tests Specification](./aux-docs/04_func_accept_tests.md)**

<br>

## 5. [Jest Test Report](../../../../test-report.html)

<br>

## 6. **Code Coverage Report:**

* Due to incompatibilities between Stryker and the project Node JS Version 12.22.12, code coverage report is not working properly, the coverage report will not be available.

<br>

```diff	
💥 Breaking changes
This is the list of breaking changes.

10d874 node: Drop support for Node 12. Minimal version is now Node 14.18.0.
```

**Source:** <a href="https://stryker-mutator.io/blog/stryker-js-v6-expeditious-superior-mutations/#-breaking-changes">(May 4, 2022) Stryker Mutator - Drops Support on Node 12</a>
