Feature: Highlighted 2/3 highest comment

    Background: Background
        Given I am on the login page
        And I login with "testuser" and "complexPwd"
        And I go to Popular posts in the popular posts section

    @CT-001
    Scenario: I have posts with no comments in the popular posts section
        When I have posts without comments in the popular posts section
        Then I should not see posts highlighted with a green background

    @Ct-002
    Scenario: I have single  post in the popular posts section
        When I have only one posts in the popular posts section
        Then I should'nt see posts highlighted with a green background

    @Ct-003
    Scenario: Highlight highest commented posts in the popular posts section
        When I have posts with two third or more of the total comments
        Then I should see the posts with two third or more of the total comments highlighted with a green background