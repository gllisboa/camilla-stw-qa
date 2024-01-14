Feature: Highlighted 1/3 less comment

  Background: Background
    Given I am on the login page
    And I login with "testuser" and "complexPwd"
    

  #@CT-0001
  Scenario: Single post in the recent posts section
    When I go to New posts in the recent posts section
    And I have just 1 post in the recent posts section
    Then I should not see any posts highlighted with a red background

  #@Ct-0002
  Scenario: No posts highlighted when all posts are highly commented
    When I go to New posts in the recent posts section
    And I have no posts with one third or less of the total comments
    Then I should see no posts highlighted with a red background

  #@CT-0003
  Scenario: Highlight less commented posts in the recent posts section
    When I go to New posts in the recent posts section
    And I have posts with one third or less of the total comments
    Then I should see the posts with one third or less of the total comments must be highlighted with a red background
