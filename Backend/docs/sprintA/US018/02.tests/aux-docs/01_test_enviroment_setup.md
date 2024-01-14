# Test enviroment Pre-setup

* **Pre-conditions:** The database should be empty

* Prior to running any Integration Tests, a SQL script needs to be run to inject data into the DB in order to prepare a test environment.

>* The SQL script path: <code>src/db_test_env_prep/acc_db_test_env_prep.sql</code>

>* Run the test file **US018.int.test.ts** to automaticall load the pre-test environment with all the control variables and run the API tests for the functionality of the "View Members without any activity (Posts and Comments) for a Specific Day".

````bash
npm run test:api:us018
````

## **The SQL script will cover the following Case Scenarios:**

>* Posts created at diferent dates and times.

>* Members with posts creacted with comments and votes, without comments, without votes and cases without comment and without votes.

<br>

* The Test Environment wil inject in the dababase control variables, users, members, posts, comments and votes, that will include:

>1. Creation of 9 Users / Member Accounts (from user-number1 to user-number9) and between dates (2023-10-01 to 2023-10-09 and 1 more user-number9 created at the time of the test execution)

>2. Creation of 31 Posts (from user-number1 to user-number9) and between dates (2023-10-03 to current date).

>3. Creation of 19 Comments (from user-number1 to user-number9) and between dates (2023-10-15 to current date).

<br>

## The SQL script will be run in the following order:

### **1.1. Register New Accounts for 9 New Users:**

**Test Inputs:**

| Member | Username | Email | Password |
| :---: | :---: | :---: | :---: |
| **user-number1** | "user-number1" | "user-number1@gmail.com" | "user-number1" |
| **user-number2** | "user-number2" | "user-number2@gmail.com" | "user-number2" |
| **user-number3** | "user-number3" | "user-number3@gmail.com" | "user-number3" |
| **user-number4** | "user-number4" | "user-number4@gmail.com" | "user-number4" |
| **user-number5** | "user-number5" | "user-number5@gmail.com" | "user-number5" |
| **user-number6** | "user-number6" | "user-number6@gmail.com" | "user-number6" |
| **user-number7** | "user-number7" | "user-number7@gmail.com" | "user-number7" |
| **user-number8** | "user-number8" | "user-number8@gmail.com" | "user-number8" |
| **user-number9** | "user-number9" | "user-number9@gmail.com" | "user-number9" |
|                  |                |                          |                |

<br>
<br>

### **1.2. Creation of 31 New Posts**

**Test Inputs:**

| Post | Member | Type | Title | text | Created_at | Updated_at |
| :---: | :---: | :---: | :---: | :---: | :---: |:---: |
| **This concerns the 1st post from User1** | @memberUserNumber1Id | text | This concerns the 1st post from User1 | This concerns the 1st post from User1 | 2023-10-03 08:10:10 | 2023-10-03 08:10:10 |
| **This concerns the 2nd post from User1** | @memberUserNumber1Id | text | This concerns the 2nd post from User1 | This concerns the 2nd post from User1 | 2023-10-03 09:10:10 | 2023-10-03 09:10:10 |
| **This concerns the 3rd post from User1** | @memberUserNumber1Id | text | This concerns the 3rd post from User1 | This concerns the 3rd post from User1 | 2023-10-03 02:10:10 | 2023-10-03 02:10:10 |
| **This concerns the 4th post from User1** | @memberUserNumber1Id | text | This concerns the 4th post from User1 | This concerns the 4th post from User1 | 2023-10-03 08:10:10 | 2023-10-03 08:10:10 |
| **This concerns the 5th post from User1** | @memberUserNumber1Id | text | This concerns the 5th post from User1 | This concerns the 5th post from User1 | 2023-10-03 10:10:10 | 2023-10-03 10:10:10 |
| **This concerns the 1st post from User2** | @memberUserNumber2Id | text | This concerns the 1st post from User2 | This concerns the 1st post from User2 | 2023-10-03 08:10:10 | 2023-10-03 08:10:10 |
| **This concerns the 2nd post from User2** | @memberUserNumber2Id | text | This concerns the 2nd post from User2 | This concerns the 2nd post from User2 | 2023-10-03 08:10:10 | 2023-10-03 08:10:10 |
| **This concerns the 3rd post from User2** | @memberUserNumber2Id | text | This concerns the 3rd post from User2 | This concerns the 3rd post from User2 | 2023-10-03 08:10:10 | 2023-10-03 08:10:10 |
| **This concerns the 4th post from User2** | @memberUserNumber2Id | text | This concerns the 4th post from User2 | This concerns the 4th post from User2 | 2023-10-03 12:10:10 | 2023-10-03 12:10:10 |
| **This concerns the 1st post from User3** | @memberUserNumber3Id | text | This concerns the 1st post from User3 | This concerns the 1st post from User3 | 2023-10-03 02:10:10 | 2023-10-03 02:10:10 |
| **This concerns the 2nd post from User3** | @memberUserNumber3Id | text | This concerns the 2nd post from User3 | This concerns the 2nd post from User3 | 2023-10-03 08:10:10 | 2023-10-03 08:10:10 |
| **This concerns the 3rd post from User3** | @memberUserNumber3Id | text | This concerns the 3rd post from User3 | This concerns the 3rd post from User3 | 2023-10-03 08:10:10 | 2023-10-03 08:10:10 |
| **This concerns the 1st post from User4** | @memberUserNumber4Id | text | This concerns the 1st post from User4 | This concerns the 1st post from User4 | 2023-10-03 08:10:10 | 2023-10-03 08:10:10 |
| **This concerns the 2nd post from User4** | @memberUserNumber4Id | text | This concerns the 2nd post from User4 | This concerns the 2nd post from User4 | 2023-10-03 08:10:10 | 2023-10-03 08:10:10 |
| **This concerns the 1st post from User5** | @memberUserNumber5Id | text | This concerns the 1st post from User5 | This concerns the 1st post from User5 | 2023-10-03 08:10:10 | 2023-10-03 08:10:10 |
| **Post made 1 day ago by User1** | @memberUserNumber1Id | text | Post made 1 day ago by User1 | Post made 1 day ago by User1 | Current Date - 1 day | Current Date - 1 day |
| **Post made 2 days ago by User1** | @memberUserNumber1Id | text | Post made 2 days ago by User1 | Post made 2 days ago by User1 | Current Date - 2 days | Current Date - 2 days |
| **Post made 3 days ago by User1** | @memberUserNumber1Id | text | Post made 3 days ago by User1 | Post made 3 days ago by User1 | Current Date - 3 days | Current Date - 3 days |
| **Post made 4 days ago by User1** | @memberUserNumber1Id | text | Post made 4 days ago by User1 | Post made 4 days ago by User1 | Current Date - 4 days | Current Date - 4 days |
| **Post made 5 days ago by User1** | @memberUserNumber1Id | text | Post made 5 days ago by User1 | Post made 5 days ago by User1 | Current Date - 5 days | Current Date - 5 days |
| **Post made 6 days ago by User1** | @memberUserNumber1Id | text | Post made 6 days ago by User1 | Post made 6 days ago by User1 | Current Date - 6 days | Current Date - 6 days |
| **Post made 7 days ago by User1** | @memberUserNumber1Id | text | Post made 7 days ago by User1 | Post made 7 days ago by User1 | Current Date - 7 days | Current Date - 7 days |
| **This concerns All Users Post in the same day - post from User1** | @memberUserNumber1Id | text | This concerns All Users Post in the same day - post from User1 | This concerns All Users Post in the same day - post from User1 | Current Date | Current Date |
| **This concerns All Users Post in the same day - post from User2** | @memberUserNumber2Id | text | This concerns All Users Post in the same day - post from User2 | This concerns All Users Post in the same day - post from User2 | Current Date | Current Date |
| **This concerns All Users Post in the same day - post from User3** | @memberUserNumber3Id | text | This concerns All Users Post in the same day - post from User3 | This concerns All Users Post in the same day - post from User3 | Current Date | Current Date |
| **This concerns All Users Post in the same day - post from User4** | @memberUserNumber4Id | text | This concerns All Users Post in the same day - post from User4 | This concerns All Users Post in the same day - post from User4 | Current Date | Current Date |
| **This concerns All Users Post in the same day - post from User5** | @memberUserNumber5Id | text | This concerns All Users Post in the same day - post from User5 | This concerns All Users Post in the same day - post from User5 | Current Date | Current Date |
| **This concerns All Users Post in the same day - post from User6** | @memberUserNumber6Id | text | This concerns All Users Post in the same day - post from User6 | This concerns All Users Post in the same day - post from User6 | Current Date | Current Date |
| **This concerns All Users Post in the same day - post from User7** | @memberUserNumber7Id | text | This concerns All Users Post in the same day - post from User7 | This concerns All Users Post in the same day - post from User7 | Current Date | Current Date |
| **This concerns All Users Post in the same day - post from User8** | @memberUserNumber8Id | text | This concerns All Users Post in the same day - post from User8 | This concerns All Users Post in the same day - post from User8 | Current Date | Current Date |
| **This concerns All Users Post in the same day - post from User9** | @memberUserNumber9Id | text | This concerns All Users Post in the same day - post from User9 | This concerns All Users Post in the same day - post from User9 | Current Date | Current Date |

<br>
<br>


## 1.3. Creation of 19 New Comments

| Comment | Member | Post | text | Created_at | Updated_at |
| :---: | :---: | :---: | :---: | :---: |:---: |
| **This concerns the 1st comment from User1** | @memberUserNumber1Id | @post1UserNumber2Id | This concerns the 1st comment from User1 | 2023-10-15 08:10:10 | 2023-10-15 08:10:10 |
| **This concerns the 2nd comment from User1** | @memberUserNumber1Id | @post2UserNumber2Id | This concerns the 2nd comment from User1 | 2023-10-15 09:10:10 | 2023-10-15 09:10:10 |
| **This concerns the 1st comment from User2** | @memberUserNumber2Id | @post1UserNumber1Id | This concerns the 1st comment from User2 | 2023-10-15 10:10:10 | 2023-10-15 10:10:10 |
| **This concerns the 2nd comment from User2** | @memberUserNumber2Id | @post2UserNumber1Id | This concerns the 2nd comment from User2 | 2023-10-15 11:10:10 | 2023-10-15 11:10:10 |
| **This concerns the 1st comment from User3** | @memberUserNumber3Id | @post1UserNumber1Id | This concerns the 1st comment from User3 | 2023-10-15 12:10:10 | 2023-10-15 12:10:10 |
| **This concerns the 2nd comment from User3** | @memberUserNumber3Id | @post2UserNumber4Id | This concerns the 2nd comment from User3 | 2023-10-15 13:10:10 | 2023-10-15 13:10:10 |
| **This concerns the 1st comment from User4** | @memberUserNumber4Id | @post1UserNumber3Id | This concerns the 1st comment from User4 | 2023-10-15 14:10:10 | 2023-10-15 14:10:10 |
| **This concerns the 2nd comment from User4** | @memberUserNumber4Id | @post2UserNumber3Id | This concerns the 2nd comment from User4 | 2023-10-15 15:10:10 | 2023-10-15 15:10:10 |
| **This concerns the 1st comment from User6** | @memberUserNumber6Id | @post1UserNumber1Id | This concerns the 1st comment from User6 | 2023-10-15 16:10:10 | 2023-10-15 16:10:10 |
| **This concerns the 2nd comment from User6** | @memberUserNumber6Id | @post2UserNumber1Id | This concerns the 2nd comment from User6 | 2023-10-15 17:10:10 | 2023-10-15 17:10:10 |
| **This concerns All Users Post in the same day - comment from User1** | @memberUserNumber1Id | @postAllUsersNumber1Id | This concerns All Users Post in the same day - comment from User1 | Current Date | Current Date |
| **This concerns All Users Post in the same day - comment from User2** | @memberUserNumber2Id | @postAllUsersNumber1Id | This concerns All Users Post in the same day - comment from User2 | Current Date | Current Date |
| **This concerns All Users Post in the same day - comment from User3** | @memberUserNumber3Id | @postAllUsersNumber1Id | This concerns All Users Post in the same day - comment from User3 | Current Date | Current Date |
| **This concerns All Users Post in the same day - comment from User4** | @memberUserNumber4Id | @postAllUsersNumber1Id | This concerns All Users Post in the same day - comment from User4 | Current Date | Current Date |
| **This concerns All Users Post in the same day - comment from User5** | @memberUserNumber5Id | @postAllUsersNumber1Id | This concerns All Users Post in the same day - comment from User5 | Current Date | Current Date |
| **This concerns All Users Post in the same day - comment from User6** | @memberUserNumber6Id | @postAllUsersNumber1Id | This concerns All Users Post in the same day - comment from User6 | Current Date | Current Date |
| **This concerns All Users Post in the same day - comment from User7** | @memberUserNumber7Id | @postAllUsersNumber1Id | This concerns All Users Post in the same day - comment from User7 | Current Date | Current Date |
| **This concerns All Users Post in the same day - comment from User8** | @memberUserNumber8Id | @postAllUsersNumber1Id | This concerns All Users Post in the same day - comment from User8 | Current Date | Current Date |
| **This concerns All Users Post in the same day - comment from User9** | @memberUserNumber9Id | @postAllUsersNumber1Id | This concerns All Users Post in the same day - comment from User9 | Current Date | Current Date |
