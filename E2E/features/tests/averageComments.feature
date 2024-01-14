Feature: Average number of comments for a specific day

  Background: Background
    Given I am on the login page
    And I login with "testuser" and "complexPwd"
    And I enter the statistics page

  Scenario: User chooses a specific date there are no comments created
    When I select a average comment date "01-12-2023"
    And I click on the average button Refresh
    Then I should see average comments 0

  Scenario: User chooses a specific date there is only one comment created
    When I select a average comment date "02-12-2023"
    And I click on the average button Refresh
    Then I should see average comments 9

  Scenario: User chooses a specific date there three comments created
    When I select a average comment date "03-12-2023"
    And I click on the average button Refresh
    Then I should see average comments 3

