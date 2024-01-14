Feature: The DDD-Forum Website - The Hour of the day with more Posts

  Scenario Outline: As a user, I can log into the ddd-forum

    Given I am on the login page
    When I login with <username> and <password>
    Then I should see a flash message saying <message>
    Then I should see the <username> on the page top-right
    Then I should be see the statistics option
    When I click the statistics option
    Then I should see the statistics page
    When I select a <date> Hour of the day with more Posts
    Then I should see the <expectedHourWithPos> Hour of the day with more posts



    Examples:
      | username | password   | message        | date       | expectedHourWithPos |
      | testuser | complexPwd | Logged in! 🤠 | 03/10/2023 | 8:00                |
      | testuser | complexPwd | Logged in! 🤠 | 04/10/2023 | 9:00                |
      | testuser | complexPwd | Logged in! 🤠 | 05/10/2023 | 2:00                |
      | testuser | complexPwd | Logged in! 🤠 | 06/10/2023 | 8:00                |
      | testuser | complexPwd | Logged in! 🤠 | 07/10/2023 | 12:00               |

