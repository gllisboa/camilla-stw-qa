Feature: Highlight post date text on posts with less than 2 days old

  Background: Background
    Given I am on the login page
    And I login with "joaoatrocha" and "1234ameez"

  @TC_01
  Scenario: Single post on Ascending posts page
    When I go to Ascending posts in the posts section
    Then I should see 1 post on the page highlighted green