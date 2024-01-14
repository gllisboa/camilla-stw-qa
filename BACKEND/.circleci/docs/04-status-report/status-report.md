<h1 align="center">Status Report - Sprint F</h1>

<h4 align="center">

<img src="https://portotechhub.com/wp-content/uploads/2022/12/SWitCH_QA.png" alt="SwitchQA" title="SwitchQA" width="600px">

</h4>

# Status Report - Sprint G (Dating: 11-12-2023)

## **1. Documentation:**

* **Missing**

>* US023 - Member View Unpopular posts, with more than 1/3 and less than 2/3 of the comments highlighted in yellow.

>* US026 - As a member, when I look at the recent posts, posts older than two days and newer than seven days should have the date in yellow text.

>* US030  - Sprint 7 - Post Label - My Comments

* **Needs Fixing**

>* **Global Artifacts**

>* US012 - View Member Details - Check Documentation

>* US013  - Delete User - Documentation Update

>* US018 - Member view Members without any activity (Posts and Comments) for a Specific Day

>* US019 - Percentage of Post Without Comments for a Specific Date

>* US020 - Member view hour of the day with more Posts for a Specific Day

>* US024 - Member View Popular posts, with more than five days should have the date in red

<br>

## **2. Back-end Dev:**

* **Missing**

>* US030  - Sprint 7 - Post Label - My Comments

* **Needs Fixing**

>* US012 - View Member Details - Missing Username witg greatest number of commments and corresponding number of comments Route

>* US013 - Delete User - Missing route to return listing of users with no activity

>* US018 - Member view Members without any activity (Posts and Comments) for a Specific Day

<br>


## **3. Front-end Dev:**

* **Missing**

>* US030  - Sprint 7 - Post Label - My Comments

* **Needs Fixing**

>* US012 - View Member Details - Missing Username with greatest number of commments and corresponding number of comments - Required Change from a static webpage to a dynamic page

>* US013 - Delete User - Required incorporation of listing of users with no activity and add delete functionality

>* US018 - Member view Members without any activity (Posts and Comments) for a Specific Day

<br>

## **4. Integration Testing:**

* **Missing**

>* US030  - Sprint 7 - Post Label - My Comments

* **Needs Fixing**

>* global.api.test.ts needs to be removed from API tests directory, regression tests already running in the main pipeline

>* users.api.test.ts needs to be removed from API tests directory, regression tests already running in the main pipeline

>* US012.api.test.ts needs tiding-up of API tests

>* US013 - Delete User  - Check API Tests

>* US018.api.test.ts needs coverage to all the remain boundary conditions

<br>

## **5. Regression Testing:**

* **Missing**

* **Needs Fixing**

>* Activate Regression tests on the Pre-commit Hook

<br>

## **6. Functional Testing:**

* **Missing**

>* US011 - Sort Post by Ascending Order	- Acceptance Test
		
>* US012 - View Member Details 	- Acceptance Test

>* US013 - Delete User 	- Acceptance Test

>* US014 - Member view average of Comments for a Specific Day

>* US018 - Member view Members without any activity (Posts and Comments) for a Specific Day - Acceptance Test

>* US023 - Member View Unpopular posts, with more than 1/3 and less than 2/3 of the comments highlighted in yellow. - Acceptance Test

>* US024 - Member View Popular posts, with more than five days should have the date in red - Acceptance Test

>* US026 - Member View Popular posts, older than two days and newer than seven days should have the date in yellow text - Acceptance Test

* **Needs Fixing**

>* US019 - Member view percentage of Posts without any Comment for a Specific Day - Acceptance Test

>* US020 - Member view hour of the day with more Posts for a Specific Day - Acceptance Test

>* US021 - Member View Popular posts, with more than 2/3 of the comments highlighted in green. - Acceptance Test

>* US030 - Sprint 7 - Post Label - My Comments - Acceptance Test


<br>

## **6. Non Functional Testing:**

* **Missing**


* **Needs Fixing**

>* JMeter - Required to change JMeter test file to ouptut in one test scenario the report based on adjustable number of users

<br>

## **7. Bad/ Test Smells Testing:**

* **Missing**

>* Installation of esLint

>* Installation of Test Smells

<br>

## **8. Sytem Set-up**

>* Main Repo Node updated to Version 20

>* Stryker Installation / Code Coverage

>* Smoke Tests Postman & CURL Set-up to run throught Node JS instead 

<br>
<br>
<br>

# Status Report (SORTED Issues) - Sprint G (Dating: 20-12-2023)

## **1. SORTED - Documentation:**

>* US020 - Member view hour of the day with more Posts for a Specific Day

>* US024 - Member View Popular posts, with more than five days should have the date in red 

>* US023 - Member View Unpopular posts, with more than 1/3 and less than 2/3 of the comments highlighted in yellow.

>* US026 - As a member, when I look at the recent posts, posts older than two days and newer than seven days should have the date in yellow text.

>* **Global Artifacts**

>* US018 - Member view Members without any activity (Posts and Comments) for a Specific Day

>* US019 - Percentage of Post Without Comments for a Specific Date

<br>

## **2. SORTED - Back-end Dev:**

>* US013 - Delete User - Missing route to return listing of users with no activity

>* US018 - Member view Members without any activity (Posts and Comments) for a Specific Day

<br>


## **3. SORTED - Front-end Dev:**

>* US013 - Delete User - Required incorporation of listing of users with no activity and add delete functionality

>* US018 - Member view Members without any activity (Posts and Comments) for a Specific Day

<br>

## **4. SORTED - Integration Testing:**

>* global.api.test.ts needs to be removed from API tests directory, regression tests already running in the main pipeline

>* users.api.test.ts needs to be removed from API tests directory, regression tests already running in the main pipeline

>* US013 - Delete User  - Check API Tests

>* US018.api.test.ts needs coverage to all the remain boundary conditions

<br>cla

## **6. Non Functional Testing:**

* **Missing**


* **Needs Fixing**

>* JMeter - Required to change JMeter test file to ouptut in one test scenario the report based on adjustable number of users

<br>

## **7. Bad/ Test Smells Testing:**

* **Missing**

>* Installation of esLint

>* Installation of Test Smells

<br>

## **8. Sytem Set-up**

>* Smoke Tests Postman & CURL Set-up to run throught Node JS instead 

