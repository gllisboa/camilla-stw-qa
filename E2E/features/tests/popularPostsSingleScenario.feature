Feature: The DDD-Forum Website - The posts without comments should display a purple text stating “Please comment me”

  Scenario Outline: As a user, I can log into the ddd-forum
    Given I am on the login page
    When I login with <username> and <password>

    Then I should see a flash message saying <message>
    Then I should see the <username> on the page top-right

    When I click "submit"
    Then I should create a post with the title <title> and text <text>

    When I click "Popular"
    Then I should see a post with "Please comment me" in purple

    When I click "Please comment me"
    Then I should be redirected to the post details page

    When I add a comment saying <comment> and I click "Back to all discussions"
    Then I should see comments

    Examples: 
      | username  | password   | message        | title  |  text                                      | comment                                             |
      | testuser  | complexPwd | Logged in! 🤠 | Post 1 | This is my first post to test this feature | This is the post first comment to check if it is ok |              
