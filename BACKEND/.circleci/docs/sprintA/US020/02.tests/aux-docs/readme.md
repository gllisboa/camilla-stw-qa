# Tests - US020 - As a Member, I wish to know the hour of the day with more posts for a specific day 

## Pre-Commit Hook:

- Runs the Test Environment Pre-setup and loads the data into the DB

- Runs the US020.api.test.ts file wich includes the Regression and INteegrations tests of the API and covers all case scenarios for the US020

 # 1. Test enviroment Pre-setup:
- Pre-conditions: The database should be empty

- Prior to running any Regression Tests/ Integrations tests/ Functional Accceptance Tests, a SQL script needs to be run to inject data into the DB in order to prepare a test environment.

## Test Environment Pre-setup Specification

### 2. Regression Tests:

-  Due to the nature of the concernig functionality and its dependency of other user stories, the regression tests will be performed in the following order:

[US001 - Register New Account](/docs/sprintA/US001/01.requirements-engineering/US001.md)
[US005 - Create a Post](/docs/sprintA/US005/01.requirements-engineering/US005.md)
[US007 - Comment a Post](/docs/sprintA/US007/01.requirements-engineering/US007.md)
[US009 - Vote on Post](/docs/sprintA/US009/01.requirements-engineering/US009.md)
[US010 - Vote on Comment](/docs/sprintA/US010/01.requirements-engineering/US010.md)

## 3. Integration Tests:
Covered AC´s: AC.1 / AC.2 / AC.8 / AC.9 / AC.11 + FURPS
Integration Tests Specification

## 4. Functional Acceptance Tests:
- Covered AC´s: AC.3 / AC.4 / AC.5 / AC.6 / AC.7 / AC.8 / AC.9 / AC.10 / AC.12 / AC.13 / AC.14 / AC.15
- Functional Acceptance Tests Specification

## 5. Jest Test Report

## 6. Code Coverage Report:
 * Due to incompatibilities between Stryker and the project Node JS Version 12.22.12, code coverage report is not working properly, the coverage report will not be available.

💥 Breaking changes
This is the list of breaking changes.

10d874 node: Drop support for Node 12. Minimal version is now Node 14.18.0.