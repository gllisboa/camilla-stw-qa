import { When, Then } from "@wdio/cucumber-framework";
import { expect } from "@wdio/globals";

import Statistics from "../pageobjects/statistic.page";

When(/^I select a (.*) Hour of the day with more Posts$/, async (date) => {
  await Statistics.getHourMostPostByDate(date);
});

Then(/^I should see the (.*) Hour of the day with more posts$/, async (expectedHourWithPost) => {
  await expect(Statistics.hourMostPostResult).toBeExisting();
  await expect(Statistics.hourMostPostResult).toHaveTextContaining(
    expectedHourWithPost);
});