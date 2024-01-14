# Switch-QA Project for the 1st Semester 2023

## How to generate the svg files

These templates use [PlantUML](https://plantuml.com) to generate the diagrams that are displayed in the readme. You may use any tool you choose.

If you want to use PlantUML, on project root folder, run the following script:

Remarks: it works for Linux and MacOS. For Windows, you have to adapt the script.

```shell
$ bin/generate-plantuml-diagrams.sh
```


## 1. Team Members

The team consists of students identified in the following table.

| Student Number | Name              |
|----------------|-------------------|
| **1222650**    | Nuno Faria        |
| **1222646**    | Vitor Pereira     |
| **1222640**    | Olga Cadavez      |
| **1222627**    | Camilla Souza     |
| **1222644**    | Sandra Silva      |
| **1222645**    | Sandro Santos     |
| **1222635**    | João Rocha        |

## 2. Task Distribution

Throughout the project's development period, the distribution of _tasks / requirements / features_ by the team members
was carried out as described in the following table.

**Keep this table must always up-to-date.**

| Task                                              | [Sprint A](sprintA/readme.md)                                                              | [Sprint B]()                                                                               | [Sprint C](/docs/sprintC/BuggedStories.md)        | [Sprint D](/docs/sprintD/Sprint4Goals.pdf)        | [Sprint E](/docs/sprintE/Sprint5Goals.pdf)    | [Sprint F](/docs/sprintF/Sprint6Goals.pdf)    | [Sprint G](/docs/sprintG/Sprint7Goals.pdf) |
|---------------------------------------------------|--------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------|---------------------------------------------------|---------------------------------------------------|-----------------------------------------------|-----------------------------------------------|--------------------------------------------|
| Architecture                                      | [all](sprintA/global-artifacts/00.architecture/architecture.md)                            | [all](sprintB/global-artifacts/00.architecture/architecture.md)                            |...                                                |                                                   |                                               |                                               | |
| Glossary                                          | [all](sprintA/global-artifacts/01.requirements-engineering/glossary.md)                    | [all](sprintB/global-artifacts/00.engineering-requirements/glossary.md)                    |...                                                |                                                   |                                               |                                               | |
| Use Case Diagram (UCD)                            | [all](sprintA/global-artifacts/01.requirements-engineering/use-case-diagram.md)            | [all](sprintB/global-artifacts/00.engineering-requirements/use-case-diagram.md)            |...                                                |                                                   |                                               |                                               | |
| Supplementary Specification                       | [all](sprintA/global-artifacts/01.requirements-engineering/supplementary-specification.md) | [all](sprintB/global-artifacts/00.engineering-requirements/supplementary-specification.md) |...                                                |                                                   |                                               |                                               | |
| US001 (Register New Account)                      | [1222645](sprintA/US001/readme.md)                                                         |                                                                                            |...                                                |                                                   |                                               |                                               | |
| US002 (View Individual Post)                      | [1222640](sprintA/US002/01.requirements-engineering/readme.md)                             |                                                                                            |...                                                |                                                   |                                               |                                               | |
| US003 (View Member Info)                          | [1222635](sprintA/US003/01.requirements-engineering/US003.md)                              |                                                                                            |...                                                |                                                   |                                               |                                               | |
| US004 (Visualization of Popular Posts List)       | [1222640](sprintA/US004/01.requirements-engineering/readme.md)                             |                                                                                            |...                                                |                                                   |                                               |                                               | |
| US005 (Create a Post)                             | [1222650](sprintA/US005/01.requirements-engineering/US005.md)                              |                                                                                            |...                                                |                                                   |                                               |                                               | |
| US006 (Visualization of New Posts List)           | [1222650](sprintA/US006/01.requirements-engineering/US006.md)                              |                                                                                            |...                                                |                                                   |                                               |                                               | |
| US007 (Comment Post)                              | [1222644](sprintA/US007/01.requirements-engineering/US007.md)                              |                                                                                            |...                                                |                                                   |                                               |                                               | |
| US008 (Reply to Comments)                         | [1222646](sprintA/US008/01.requirements-engineering/US008.md)                              |                                                                                            |...                                                |                                                   |                                               |                                               | |
| US009 (Vote on Posts)                             | [1222646](sprintA/US009/01.requirements-engineering/US009.md)                              |                                                                                            |...                                                |                                                   |                                               |                                               | |
| US010 (Vote on Comments)                          | [1222627](sprintA/US010/01.requirements-engineering/US010.md)                              |                                                                                            |...                                                |                                                   |                                               |                                               | |
| API - Comment                                     | ...                                                                                        | [all](sprintB/api/comment.md)                                                              |...                                                |                                                   |                                               |                                               | |
| API - Member                                      | ...                                                                                        | [all](sprintB/api/member.md)                                                               |...                                                |                                                   |                                               |                                               | |
| API - Post                                        | ...                                                                                        | [all](sprintB/api/post.md)                                                                 |...                                                |                                                   |                                               |                                               | |
| API - Users                                       | ...                                                                                        | [all](sprintB/api/users.md)                                                                |...                                                |                                                   |                                               |                                               | |
| Bugged Stories                                    | ...                                                                                        | ...                                                                                        | [all](/docs/sprintC/BuggedStories.md)             |                                                   |                                               |                                               | |
| Development of New Functionalities:               | ...                                                                                        | ...                                                                                        |...                                                |                                                   |                                               |                                               | |
| **US011 - Sort Post by Ascending Order**          | ...                                                                                        | ...                                                                                        |...                                                | [**1222640**]()                                   |                                               |                                               | |
|                                                   | ...                                                                                        | ...                                                                                        |...                                                | [**1222635**]()                                   |                                               |                                               | |
| **US012 - View Member Details**                   | ...                                                                                        | ...                                                                                        |...                                                | [**1222646**]()                                   |                                               |                                               | |
|                                                   | ...                                                                                        | ...                                                                                        |...                                                | [**1222645**]()                                   |                                               |                                               | |
|                                                   | ...                                                                                        | ...                                                                                        |...                                                | [**1222644**]()                                   |                                               |                                               | |
| **US013 - Delete User**                           | ...                                                                                        | ...                                                                                        |...                                                | [**1222650**]()                                   |                                               |                                               | |
|                                                   | ...                                                                                        | ...                                                                                        |...                                                | [**1222627**]()                                   |                                               |                                               | |
| **Acceptance Tests of New Functionalities:**      | ...                                                                                        | ...                                                                                        |...                                                |                                                   |                                               |                                               | |
| **Statistics Page US´s:**                         | ...                                                                                        | ...                                                                                        |...                                                |                                                   |                                               |                                               | |
| US014 - Member view average of Comments for a Specific Day  | ...                                                                              | ...                                                                                        |...                                                |                                                   | [**1222644**]()                               |                                               | |
| US015 - Member view average of Posts for a Specific Day     | ...                                                                              | ...                                                                                        |...                                                |                                                   | [**1222640**]()                               |                                               | |
| US016 - Member view Post with more Comments for a Specific Day | ...                                                                           | ...                                                                                        |...                                                |                                                   | [**1222627**](/docs/sprintA/US016/readme.md)  |                                               | |                                              
| US017 - Member view top 3 Members that published more Comments for a Specific Day | ...                                                        | ...                                                                                        |...                                                |                                                   | [**1222635**]()                               |                                               | |
| US018 - Member view Members without any activity (Posts and Comments) for a Specific Day | ...                                                 | ...                                                                                        |...                                                |                                                   | [**1222645**](sprintA/US018/readme.md)        |                                               | |
| US019 - Member view percentage of Posts without any Comment for a Specific Day | ...                                                           | ...                                                                                        |...                                                |                                                   | [**1222646**]()                               |                                               | |
| US020 - Member view hour of the day with more Posts for a Specific Day | ...                                                                   | ...                                                                                        |...                                                |                                                   | [**1222650**]()                               |                                               | |
| **Unit Tests Revision**                           | ...                                                                                        | ...                                                                                        |...                                                |                                                   |[all]()                                        |                                               | |
| **US021 - Member View Popular posts, with more than 2/3 of the comments highlighted in green.**  | ...                                         | ...                                                                                        |...                                                |                                                   |                                               | [**1222644**](/docs/sprintA/US021/readme.md)  | |
| **US022 - Member View Recent posts, with less than 1/3 of the comments highlighted in red.**               | ...                               | ...                                                                                        |...                                                |                                                   |                                               | [**1222627**](/docs/sprintA/US022/readme.md)  | |
| **US023 - Member View Unpopular posts, with more than 1/3 and less than 2/3 of the comments highlighted in yellow.** | ...                     | ...                                                                                        |...                                                |                                                   |                                               | [**1222646**](/docs/sprintA/US023/readme.me)  | |
| **US024 - Member View Popular posts, with more than five days should have the date in red**     | ...                                          | ...                                                                                        |...                                                |                                                   |                                               | [**1222650**](/docs/sprintA/US024/readme.me)  | |
| **US025 - Member View Unpopular posts, with less than two days should have the date in green**  | ...                                          | ...                                                                                        |...                                                |                                                   |                                               | [**1222635**](/docs/sprintA/US025/readme.md)  | |
| **US026 - Member View Popular posts, older than two days and newer than seven days should have the date in yellow text**  | ...                | ...                                                                                        |...                                                |                                                   |                                               | [**1222646**](/docs/sprintA/US023/readme.me)  | |
| **US027 - Member View Popular posts, posts that have no comments should display a purple text**        | ...                                   | ...                                                                                        |...                                                |                                                   |                                               | [**1222640**](/docs/sprintA/US027/readme.md)  | |
| ...                                               | ...                                                                                        | ...                                                                                        |...                                                |                                                   |                                               |                                               | |
| ...                                               | ...                                                                                        | ...                                                                                        |...                                                |                                                   |                                               |                                               | |
| ...                                               | ...                                                                                        | ...                                                                                        |...                                                |                                                   |                                               |                                               | |


<br>

## 3. Sprints

**Project:** DDD Forum ISEP

### **3.1 Sprint A**

* **Goal:** To produce the specification of the existing version of the system

* **User Story:** As a project manager, I want the team to produce the specification of the existing version of the system

* The specificcation should follow the templates, as presented here and in the referenced links.

The Specification should include:
    - User Stories (~Use Cases)
    - Tests

<br>

**Scope of Sprint A:** 

* Sprint A goal:

    - Production of documentation regarding the requirements of the current version of the system
    - US description and respective tests

* Task organization (i.e., how you applied SCRUM, how you organized and tracked your work, how you divided tasks):

    - Creation of backlog - issues in project / beginning in US
    - After that global artifacts
    - Test descriptions for each of the US
    - Daily scrum and continuous search for difficulties or individual blocks and improvement points

* What was left to do?

    -  Found some possible US (comment detail view)

* Brief presentation of difficulties or other observations:

    - Organization of the structure and division of tasks right at the beginning
    - Subjectivity in web application analysis
    - Erratic behavior of some web options (votes, comments)

<br>
<hr>

### **3.2 Sprint B**

* **Goal:** To document the API and implement API tests to the full set of functional endpoints (of the backend)

* **User Story:** As a project manager, I want the team to specify (document) the API and implement API tests

* The specification of the API should include for each route:

    - the action (GET, POST, etc.)
    - a small description
    - parameters
    - possible response codes and results
    - reference to related use cases and acceptance criteria

* You should place the API specification in the **docs/sprintB/api** folder. Inside this folder, you should create a file for each route. The file name should be the route name, with the extension **.md**. For example, the route **/api/v1/users** should be documented in the file **docs/sprintB/api/users.md**.

* The implementation of the API tests should follow the examples, as described in the root **readme** file and the code, as presented in the **src/api_test** folder

<br>
<hr>

### **3.3 Sprint C**

**Goal:** Produce the required docmentation to track all identified Bugs / solve the bugs

**On your repository documentation, create a “BuggedStories.md” file**

* This file must contain a list of links to every user story that contains bugs or disparities between your application’s front-end and back-end

* Every link should have the User Story title or short description

* The list should be sorted from the user story that mostly affects the user experience (UIX) to the one that least affects the UIX

**Sprint 3 Goals – User Stories “Bugs” section**

* If you have not done it yet, create a “Bugs” section for each user story

* On this section, describe the bug(s) that affects the user story

* Match each bug to the acceptance criteria that it breaks

* Create a a Sequence Diagram (SD) for the objects on each bugged user story

* Do it for each user story, accordingly to your previous sorting

* Do it by starting on the first back-end API-call that is made

* Focus on the objects and their interactions (methods/functions)

**Sprint 3 Goals – Solve Some User Stories**

* After the previous work, students will be requested to solve some of the bugs on the back-end of the application

<br>
<hr>

### **3.4 Sprint D**

**Goal:**  Add New Functionalities to the Application

**Add a new functionality that displays the Posts by ascending order regarding the number of votes**

* This should result in a new section/tab in the main page of the app

* Update the user profile page so that it:

* **Displays the following:**

>* User name; email;

>* Number of Posts of this user; 

>* number of comments of this user;

>* User name that has the greatest number of comments and his/her number of comments.

>* includes a “delete” button that can be used to delete the user (only if he/she does not have posts and comments)

**Coding Standards:**

* Define a set of coding standards to be used in the project

* Apply these coding rules using Prettier

* Explore also best practices for code documentation and try some 
implementation with Tsdoc
    
**Other Considerations:**

* Be aware that the new functionality may require updating the backend and the frontend and, eventually, the database.

* For new functionalities, a User Story should be created and documented, according to the existing template.

* Do not forget to develop tests for the new functionality (focusing on the backend)

* Apply pair-programming.

<br>
<hr>

### **3.5 Sprint E**

### Acceptance Tests

* Following the developments of the previous sprint, each team should design and implement acceptance tests for the user stories of the previous sprint.

* As the Product Owner, I wish to have automatic acceptance tests for the front-end functionalities developed on Sprint 4.

>* AC1. Tests should be specified using Gherkin

>* AC2. Tests should be implemented/run using WebdriverIO.

<br>

### Statistics Page

* Consider also the following set of US. For this set of US, each student should select one of them to develop individually during the sprint. 

* These USs regard a new page in the App that displays statistics about the forum. This page should be accessed from a button in the header of the App. 

*  Each US should be implemented as a React component that is part of the page. Each React component should display the statistical value as well as include a text field to input a date, and a button to refresh the value. 

**The USs are:**

>* 1. As a Member, I wish to know the average of comments for a specific day

>* 2. As a Member, I wish to know the average of posts for a specific day

>* 3. As a Member, I wish to know the post with more comments for a specific day

>* 4. As a Member, I wish to know the top 3 members that published more comments for a specific day

>* 5. As a Member, I wish to know the members without any activity (posts and comments) for a specific day

>* 6. As a Member, I wish to know the percentage of posts without any comment for a specific day

>* 7. As a Member, I wish to know the hour of the day with more posts for a specific day 

* Remember that each use story should follow the proposed engineering process, including its documentation, acceptance tests, backend and frontend. You should follow, as much as possible, a BDD approach

<br>

### Unit Tests Revision (As per AAA pattern):

* Each team should review all the existing unit tests to be in accordance with the AAA (Arrange-Act-Assert) model.

* Coverage reports should be produce

<br>
<hr>

### **3.6 Sprint F**

### Functional Requirements

* As a member, when I look at the popular posts, I want posts that have more than 2/3 of the comments from the post with the highest comments on the webpage to be highlighted with a green background.

* As a member, when I look at the recent posts, I want posts that have less than 1/3 of the comments from the post with the highest comments on the webpage to be highlighted with a red background.

* As a member, when I look at the unpopular posts, post that have more than 1/3 and less than 2/3 of the comments from the post with the highest comments on the webpage to be highlighted with a yellow background.

* As a member, when I look at the popular, posts with more than five days should have the date in red text.

* As a member, when I look at the unpopular posts, posts with less than two days should have the date in green text.

* As a member, when I look at the recent posts, posts older than two days and newer than seven days should have the date in yellow text.

* As a member, when I look at the popular posts, posts that have no comments should display a purple text stating “Please comment me”. This text should link to the comment posting page for that specific post.

<br>

### Non-Functional Requirements

* Each team should design and implement test cases in accordance with black box criteria to be published/announced 

* Each team should verify if the unit tests already developed (or existing) in the project violate the unique responsibility principle (or other) and, if so, correct them

* Each team should develop a continuous integration approach in GitHub, that at least should:

>* Compile the frontend and backend in each commit

>* Execute the unit tests in each commit

>* Design and implement a “smoke test”, tun run in each commit, that checks the “app” for a minimum of functionality

>* The results of these actions should be published in GitHub

* Develop new features by using BDD and TDD approach

* You should provide clear evidence on the Git commit message about which 

* Software Development Phase the commit is being worked by appending the phase to the beginning of the commit message e.g.:

>* [Analysis]

>* [Design]

>* [Test]

>* [Development]

* Automate the generation of throughput/capacity reports from your application

* Provide a Test Scenario where there are at least 25 posts with at least 3 comments each

* Use JMeter to execute a set of tests that:

>* perform a login on the application

>* requests the popular posts

>* requests the recent posts

>* requests the unpopular posts

>* Executes all the statistical operations

>* Assertions

>* Assert that the results for each statistic operation is correct

>* Assert that the colours for the background, date and new text are correct.

>* This set of tests should be run for 10, 50, 100 and 200 simultaneous users

>* Furthermore, you should increase the number of users to specify above which number of users the statistics results fall below 75% when running with 10 users

>* Each set of tests should be run at least 3 times

<br>
<hr>

### **3.7 Sprint G**

### State of the Project

* To be produced during the first week (until the end of December 18)
* Produce a report of the state of the user stories, their documentation and tests (integration and functional)
• Define a plan to correct/fix what is incomplete/incorrect from the previous sprints
• Taking into consideration the previous plan, decide what new functionalities from the next slide can also be part of the final sprint (this is not mandatory , please consider the team capacity to develop these new functionalities until December 20)

### New USs for the Final Version

* The member profile should include the avatar of the member as well as his/her nickname. The avatar can be a pre-defined icon or an image selected/loaded by the member.

* The main page should include a new tab to show the posts of the member (My Posts)

* The main page should include a new tab to show the posts that have comments made by the member (My Comments)

* The header of the (main) page should include a section to display the avatars of all the members that have active 
sessions. By clicking the avatar the page with the public profile of the member should be displayed.

* Comments and posts should include the avatar and nick name of the author

<br>

**The final version should be produced until the end of December 20**

* This version should be tagged (“final-version”) in both repositories of the team

* Read permissions should be given to the other teams

* The goal is for each team to evaluate the quality of the other projects (of the other teams), trying to discover defects 
in the other projects (until January 5)

* Each team should publish a report of this evaluation (to be included in the main repository of the team)

* This report should be concluded until the final sprint review, January 5 (and tagged as “final-report”)

<br>

### Non-Functional Requirements
* Each team must ensure that its code does not exceed a certain level of complexity, in terms of cyclomatic complexity. To this, the ESLint tool must be used.

* Each team should check the existence of code smell and test smells in their code, and report it. If a tool is used, it is chosen by the team

<br>
<hr>

## [**4. Project Coding Standards Guide Book**](docs/coding-standards.md)

<br>

## **5. Other Sources of Informations:**

* ## [**5.1. GitHub Branch Creation CLI**](/docs/github/github.md)

* ## [**5.2 - Prettier Installation Set-up**](/docs/prettier/prettier.md)