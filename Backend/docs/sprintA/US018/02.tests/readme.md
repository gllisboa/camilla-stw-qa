# Tests - US018 - Member view Members without any activity (Posts and Comments) for a Specific Day

* **Pre-conditions:** The database should be empty

## 1. Regression Tests:

* Due to the nature of the concernig functionality and its dependency of other user stories, the regression tests will be performed in the following order:

````bash
npm run test:api:regression
````

* ### [Jest Test Report](../../../../test-report.html)

<br>

## 2. Integration Tests:

### **Covered AC´s:** AC1 / AC3 / AC8 / AC10 / AC11 / AC12 / AC13 + FURPS

* ### **[Test Environment Pre-setup Specification](./aux-docs/01_test_enviroment_setup.md)**

* ### **[Integration Tests Specification](./aux-docs/03_int_tests.md)**

>* Run the test file **US018.int.test.ts** to automaticall load the pre-test environment with all the control variables and run the API tests for the functionality of the "View Members without any activity (Posts and Comments) for a Specific Day".

````bash
npm run test:api:us018
````

* ### [Jest Test Report](../../../../test-report.html)

<br>

## 3. **Code Coverage Report:**

* Due to incompatibilities between Stryker and the project Node JS Version 12.22.12, code coverage report is not working properly, the coverage report will not be available.

<br>

```diff	
💥 Breaking changes
This is the list of breaking changes.

10d874 node: Drop support for Node 12. Minimal version is now Node 14.18.0.
```

**Source:** <a href="https://stryker-mutator.io/blog/stryker-js-v6-expeditious-superior-mutations/#-breaking-changes">(May 4, 2022) Stryker Mutator - Drops Support on Node 12</a>
