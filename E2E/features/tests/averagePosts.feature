Feature: The DDD-Forum Website - The average of posts per user for a specific day

  Scenario Outline: As a user, I can log into the ddd-forum
    Given I am on the login page
    When I login with <username> and <password>
    Then I should see a flash message saying <message>
    Then I should see the <username> on the page top-right
    Then I should be see the statistics option
    When I click the statistics option
    Then I should see the statistics page
    When I select a <date> average posts date
    Then I get the <expectedAverage> average posts

    Examples: 
      | username | password   | message       | date       | expectedAverage    |
      | testuser | complexPwd | Logged in! 🤠 | 01/10/2023 |                1.5 |
      | testuser | complexPwd | Logged in! 🤠 | 05/10/2023 | 1.3333333333333333 |
      | testuser | complexPwd | Logged in! 🤠 | 09/10/2023 |                  1 |
      | testuser | complexPwd | Logged in! 🤠 | 12/10/2023 |                3.5 |
      | testuser | complexPwd | Logged in! 🤠 | 01/11/2023 |                  2 |
      | testuser | complexPwd | Logged in! 🤠 | 01/01/2023 |                  0 |
      | testuser | complexPwd | Logged in! 🤠 | 01/01/2024 |                  0 |
