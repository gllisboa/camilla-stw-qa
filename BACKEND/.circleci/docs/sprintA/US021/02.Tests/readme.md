# US021 -  Highlight 2/3 highest commented post

### Acceptance Criteria

   @CT-001
   - **Scenario:** I have posts with no comments in the popular posts section
   - Given I am on the login page
   - And I login with <username> and <password>
   - When I have posts with no comments in the popular posts section
   - Then I should not see any posts highlighted with a green background

    @Ct-002
   - **Scenario:** I have single  post in the popular posts section
   - Given I am on the login page
   - And I login with <username> and <password>
   - When I have only one posts in the popular posts section
   - Then I should not see any posts highlighted with a green background

    @Ct-003
   - **Scenario:** Highlight highest commented posts in the popular posts section
   - Given I am on the login page
   - And I login with <username> and <password>
   - When I have posts with two third or more of the total comments
   - Then I should see the posts with two third or more of the total comments highlighted with a green background