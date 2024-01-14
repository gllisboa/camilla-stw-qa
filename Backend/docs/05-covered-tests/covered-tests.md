<h1 align="center">Covered Tests</h1>

<h4 align="center">

<img src="https://portotechhub.com/wp-content/uploads/2022/12/SWitCH_QA.png" alt="SwitchQA" title="SwitchQA" width="600px">

</h4>

# Covered Tests

## 1. Smoke Tests:

### 1.1 Smoke Tests - CURL

* The Smoke tests with CURL are already included in the CI main pipeline

* To run  independently the CURL Smoke tests, run the following command:

````shell
npm run smokeTestCurl
````

### 1.2 Smoke Tests - Postman

* The Smoke tests with Postman are already included in the CI main pipeline

* To run  independently the Postman Smoke tests, run the following command:

````shell
npm run smokeTestNewman
````

<br>

## 2. Regression Testing

* The regression tests are already included in the CI main pipeline and thorugh a pre-commit hook.

* To run  independently the regression tests, run the following command:

````shell
npm run test:api:regression
````

[Link to Report](/test-report.html)

* Some Integration Tests, require a Test Environment Set-Up  where an SQL script is runned and injects data into the DB in order to prepare a test environment.

>* The SQL script path: <code>src/db_test_env_prep/acc_db_test_env_prep.sql</code>

* The Regression Tests, test the API´s for **All** the following functionalities:

| UC/US  | Description                                                                                                                                                                    |
|:-------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| US001 | [Register New Account](../../US001/01.requirements-engineering/US001.md)                                                                                                        |
| US002 | [View Individual Post](../../US002/01.requirements-engineering/readme.md)                                                                                                       |
| US003 | [View Member Info](../../US003/01.requirements-engineering/US003.md)                                                                                                            |
| US004 | [View Popular Posts List](../../US004/01.requirements-engineering/readme.md)                                                                                                    |
| US005 | [Create a Post](../../US005/01.requirements-engineering/US005.md)                                                                                                               |
| US006 | [View New Posts List](../../US006/01.requirements-engineering/US006.md)                                                                                                         |
| US007 | [Comment Post](../../US007/01.requirements-engineering/US007.md)                                                                                                                |
| US008 | [Reply to Comments](../../US008/01.requirements-engineering/US008.md)                                                                                                           |
| US009 | [Vote on Post](../../US009/01.requirements-engineering/US009.md)                                                                                                                |
| US010 | [Vote on Comment](../../US010/01.requirements-engineering/US010.md)                                                                                                             |
| US011 | [Sort Post by Ascending Order](../../US011/01.requirements-engineering/US011.md)                                                                                                |
| US012 | [View Member Details](../../US012/01.requirements-engineering/US012.md)                                                                                                         |
| US013 | [Delete User](../../US013/01.requirements-engineering/US013.md)                                                                                                                 |
| US014 | [Member view average of Comments for a Specific Day](../../US014/01.requirements-engineering/US014.md)                                                                          |
| US015 | [Member view average of Posts for a Specific Day](../../US015/01.requirements-engineering/US015.md)                                                                             |
| US016 | [Member view Post with more Comments for a Specific Day](../../US016/01.requirements-engineering/US016.md)                                                                      |
| US017 | [Member view top 3 Members that published more Comments for a Specific Day](../../US017/01.requirements-engineering/US017.md)                                                   |
| US018 | [Member view Members without any activity (Posts and Comments) for a Specific Day](../../US018/01.requirements-engineering/US018.md)                                            |
| US019 | [Member view percentage of Posts without any Comment for a Specific Day](../../US019/01.requirements-engineering/US019.md)                                                      |
| US020 | [Member view hour of the day with more Posts for a Specific Day](../../US020/01.requirements-engineering/US020.md)                                                              |

<br>

## 3. Integration Tests

* To run independently each of the integration tests, for each of the corresponding US´s / functionalities, please check the correspondent script in the pakage.json file

````shell
npm run test:api:<usrefcode>
````

[Link to Report](/test-report.html)

<br>

## 4. Bad Smells Tests + Test Smells Test - tsLint

* The Bad Smells tests & Test Smells tests are already excuted through a pre-commit hook.

* To run  independently the Bad Smells tests, run the following command:

````shell
npm run lint
````

<br>

## 5. Non Functional Acceptance Tests - JMeter

* The Non Functional Acceptance Tests required a Test Environment Set-Up  where an SQL script is runned and injects data into the DB in order to prepare a test environment.

>* The SQL script path: <code>src\db_test_env_prep\non_func_test\non_func_db_test_env_prep.sql</code>

* The Non Functional Acceptance Tests with JMeter are already included in the CI release pipeline

* To run independently the Non Functional Tests, run the following commands:

<br>

**Tests Case Scenario 1 - 10 Users - 1 Iteration - 5s Ramp-Up Period - 3 Loop Count**

````shell
npm run nonFuncTest10Users
````

[Link to Report](/src/non_fun_test/report_10/index.html)

**Tests Case Scenario 2 - 50 Users - 1 Iteration - 5s Ramp-Up Period - 3 Loop Count**

````shell
npm run nonFuncTest50Users
````

[Link to Report](/src/non_fun_test/report_50/index.html)

**Tests Case Scenario 3 - 100 Users - 1 Iteration - 5s Ramp-Up Period - 3 Loop Count**

````shell
npm run nonFuncTest100Users
````

[Link to Report](/src/non_fun_test/report_100/index.html)

**Tests Case Scenario 4 - 200 Users - 1 Iteration - 5s Ramp-Up Period - 3 Loop Count**

````shell
npm run nonFuncTest200Users
````

[Link to Report](/src/non_fun_test/report_200/index.html)

**Tests Case Scenario 5 - Variable Number of Users - 1 Iteration - 5s Ramp-Up Period - 3 Loop Count**

````shell
npm run nonFuncTest -- <number_of_users>
````

<br>

## 6. Acceptance tests - Gherkin

* Before running the tests we should run pre-requisites (ddd forum project)

````shell
npm run db:delete:create:migrate:dev
npm run db:seed15:dev
````

* To run tests (acceptance project):

````shell
npx wdio .\wdio.conf.ts
````