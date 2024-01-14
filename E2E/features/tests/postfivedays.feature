

Scenario: User Experience Validation on DDD Forum
  Given I am a registered member within the DDD Forum web application
  And I am logged in with valid credentials
  When I access the main page
  Then I should have access to specific functionalities
  And I should see a dedicated "Popular" button
  And I should be able to click on it to view the most popular posts
  When I view the list of posts
  Then I should see posts with dates older than five days highlighted in red text
  And I should be able to distinguish the older posts from the rest

Examples:

   | username | password   | message       | date                |
   | testuser | complexPwd | Logged in! 🤠 | 1 days ago          |
   | testuser | complexPwd | Logged in! 🤠 | 2 days ago          |
   | testuser | complexPwd | Logged in! 🤠 | 3 days ago          |
   | testuser | complexPwd | Logged in! 🤠 | 6 days ago          |
   | testuser | complexPwd | Logged in! 🤠 | 7 days ago          |
   | testuser | complexPwd | Logged in! 🤠 | 2 months ago        | 


