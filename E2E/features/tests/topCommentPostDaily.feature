Feature: Top Commented Post Daily

  Background: Background
    Given I am on the login page
<<<<<<< HEAD
    And I login with "testuser" and "complexPwd"
    And I enter the statistics page
=======
    And I login with testuser and complexPwd

  Scenario: User specifies a specific date
    When I enter the statistics page
    And I select a specific top comment date "08-12-2023"
    And I click on the button Refresh
    Then I should see the top commented post of the selected date

  Scenario: User enters a date where there is no post with comments
    When I enter the statistics page
    And I select a specific top comment date "17-12-2023"
    And I click on the button Refresh
    Then I should see mensage: No comments found
>>>>>>> 4e01416fefbeeb8899488b0fe057d60462e83129

  Scenario: User enter a data Where there is no post
    When I select a specific top comment date "30-11-2023"
    And I click on the button Refresh
    Then I should see mensage: No posts found

  Scenario: User enters a date where there is no post with comments
    When I select a specific top comment date "01-12-2023"
    And I click on the button Refresh
    Then I should see mensage: No comments found
  
  Scenario: User search date where have two post with same number of comments
    When I select a specific top comment date "02-12-2023"
    And I click on the button Refresh
    Then I should see the two top commented posts of the day
