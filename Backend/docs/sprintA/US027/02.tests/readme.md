# US027 - As a member, when I look at the popular posts, posts that have no comments should display a purple text stating “Please comment me”. This text should link to the comment posting page for that specific post. 

# 1. Tests 

While accessing the Forum page we must garantee the following:

**Test 1:** Check that for members the "Please Comment me" (in purple) option appears in the Popular Posts Lists for posts that have 0 comments - AC1

Feature: The DDD-Forum Website - The posts without comments should display a purple text stating “Please comment me”

Scenario Outline: As a logged in user I'm asked to comment uncommented posts 1
   Given I'm logged in as member
   When I create a post with <title> and <text>
   Then On the most popular page I should see a post with a purple link saying "Please comment me"

    Examples: 
      | title  |  text                                      |
      | Post 1 | This is my first post to test this feature |

Scenario Outline: As a logged in user I'm asked to comment uncommented posts 2
   Given I'm logged in as member
   When I click "Please comment me" on the most popular page
   Then I'm redirected to the post details page

Scenario Outline: As a logged in user I'm asked to comment uncommented posts 3
   Given I'm logged in as member
   When I add the comment <comment> to the after clicking "Please comment me" and I click "Back to all discussions"
   Then I should see 1 comment

    Examples: 
      | comment                                             |
      | This is the post first comment to check if it is ok | 
