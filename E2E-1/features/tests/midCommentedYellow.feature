Feature: Highlight posts between 1/3 and 2/3 of comments in Yellow on the recent posts section

  Background: Background
    Given I am on the login page
    And I login with "testuser" and "complexPwd"
    And I go to Ascending posts section

  @CT-AscendingYellow0001
  Scenario: Single post in the ascending posts section
    When I have just 1 post in the ascending posts section
    Then I should not see any posts highlighted with a Yellow background

  @CT-AscendingYellow0002
  Scenario: No posts highlighted in yellow when all posts are highly commented
    When I have no posts with one third or less of the total comments
    Then I should not see any posts highlighted with a Yellow background

  @CT-AscendingYellow0003
  Scenario: Highlight posts between 1/3 and 2/3 of comments in Yellow
    When I have posts between one thrid and two thrids of the total comments
    Then I should see the posts with one third or less of the total comments must be highlighted with a red background
