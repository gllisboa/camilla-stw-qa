# US022 -  Highlight 1/3 less commented

## Acceptance Tests

### AC1: Given that there are posts on the recent posts area, when the user opens the recent posts section, then the 1/3 least commentd posts must be highlighted in red.
**Test 1:** Highlight less commented posts in the recent posts section
	  Given I am on the login page
  	When I login with <username> and <password>
   	When I have posts with one third or less of the total comments
   	And I go to New posts in the recent posts section
   	Then I should see the posts with one third or less of the total comments must be highlighted with a red background

### AC2: Given that there are no posts commented on the recent posts area, when the user opens the recent posts section, then there should be nos highlighted.
**Test 2:** No posts highlighted when all posts are highly commented
   	Given I am on the login page
  	And I login with <username> and <password>
   	And I have no posts with one third or less of the total comments
   	When I go to New posts in the recent posts section
   	Thnen I should not see any posts highlighted with a red background

### AC3:** Given that all the posts on the recent posts area present the same amount of comments, when the user opens the recent posts section, then no post should be highlighted.
**Test 3:** Highlight less commented posts in the recent posts section
	  Given I am on the login page
  	When I login with <username> and <password>
   	When I have posts with one third or less of the total comments
   	And I go to New posts in the recent posts section
   	Then I should see the posts with one third or less of the total comments must be highlighted with a red background

### AC4:** Given that ther is only one post on the recent posts area, when the user opens the recent posts section, then no post should be highlighted.
**Test 4:** Single post in the recent posts section
   	Given I am on the login page
   	And I login with <username> and <password>
   	When I have just 1 post in the recent posts section
   	And I go to New posts in the recent posts section
   	Then I should not see any posts highlighted with a red background

 

 
   
  