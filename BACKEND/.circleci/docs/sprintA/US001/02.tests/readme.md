# Tests - US001 - Register of a New Account

* **Pre-conditions:** The database should be empty

<br>

## 1. Manual Functional Tests:

### **[Manual Functional Tests Specification](./aux-docs//01_man_func_tests.md)**

### **Covered AC´s:** AC1 / AC2 / AC3 / AC4 / AC5 / AC6

<br>

## 2. Black Box Tests:

### [Black Box Tests Specification](./aux-docs/02_black_box_test.md)

### **Covered AC´s:** AC1 / AC2 / AC3 / AC4 / AC5 / AC6

<br>

## 3. Integration Tests:

* **Run the US001.api.test.ts file to test the API and cover all case scenarios for the US001**


````shell
npm run test:api:us001
````

<br>

### **[Integration Tests Specification](./aux-docs/03_int_tests.md)**

### **Covered AC´s:** AC1 / AC2 / AC3 / AC4 / AC5 AC6 + FURPS

### **[Jest Test Report](../../../../test-report.html)**

<br>

## 4. **Code Coverage Report:**

* Due to incompatibilities between Stryker and the project Node JS Version 12.22.12, code coverage report is not working properly, the coverage report will not be available.

<br>

```diff	
💥 Breaking changes
This is the list of breaking changes.

10d874 node: Drop support for Node 12. Minimal version is now Node 14.18.0.
```

**Source:** <a href="https://stryker-mutator.io/blog/stryker-js-v6-expeditious-superior-mutations/#-breaking-changes">(May 4, 2022) Stryker Mutator - Drops Support on Node 12</a>
