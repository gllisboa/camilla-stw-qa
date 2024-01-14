import { When, Then } from "@wdio/cucumber-framework";
import StatisticPage from "../pageobjects/statistic.page";


When(/^I enter the statistics page$/, async () => {
  await StatisticPage.open();
  await browser.pause(2000);
});

When(/^I select a specific top comment date "([^"]*)"$/, async (date) => {
  await StatisticPage.inputDateMoreComments.setValue(date);
  await browser.pause(2000);
  return true;
});

When(/^I click on the button Refresh$/, async () => {
  await StatisticPage.buttonMostCommentedPost.click();
  await StatisticPage.runUS016dbSetup();
  await browser.pause(2000);
  return true;
});

//Scenario 001: User search date where there are no posts
Then(/^I should see mensage: No posts found$/, async () => {
  await expect(StatisticPage.noTopPost).toBeExisting();
  await expect(StatisticPage.noTopPost).toHaveText("No posts found");
});

// Scenario 002: User enters a date where there is no post with comments
Then(/^I should see mensage: No comments found$/, async () => {
  await expect(StatisticPage.noTopCommentedPost).toBeExisting();
  await expect(StatisticPage.noTopCommentedPost).toHaveText("No comments found");
});

// Scenario 003: User search date where have two post with same number of comments
Then(/^I should see the two top commented posts of the day$/, async () => {
  await expect(await StatisticPage.listTopCommentedPost).toBeExisting();
  await expect(await StatisticPage.listTopCommentedPost.length).toBe(2);
});

