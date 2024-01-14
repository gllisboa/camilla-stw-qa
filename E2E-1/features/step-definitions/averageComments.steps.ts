import { When, Then } from "@wdio/cucumber-framework";
import StatisticPage from "../pageobjects/statistic.page";
import statisticPage from "../pageobjects/statistic.page";

When(/^I enter the statistics 2 page$/, async () => {
  await StatisticPage.open();
  await browser.pause(2000);
});

When(/^I select a average comment date "([^"]*)"$/, async (date) => {
  await StatisticPage.inputDateAverageComments.setValue(date);
  await browser.pause(2000);
});

When(/^I click on the average button Refresh$/, async () => {
  await StatisticPage.buttonAverageCommented.click();
  await browser.pause(2000);
});

//Scenario 001: User chooses a specific date there are no comments created
Then(/^I should see average comments 0$/, async () => {
  await statisticPage.runUS014dbSetup();
  const averageComments = await StatisticPage.getAverageComments();
  expect(averageComments).toBe(0);
  await browser.pause(2000);
});

//Scenario 002: User chooses a specific date there is only one comment created
Then(/^I should see average comments 9$/, async () => {
  await statisticPage.runUS014dbSetup();
  const averageComments = await StatisticPage.getAverageComments();
  expect(averageComments).toBe(0);
  await browser.pause(2000);
});

// Scenario 003: User chooses a specific date there three comments created
Then(/^I should see average comments 3$/, async () => {
  await statisticPage.runUS014dbSetup();
  const averageComments = await StatisticPage.getAverageComments();
  expect(averageComments).toBe(0);
  await browser.pause(2000);
});
