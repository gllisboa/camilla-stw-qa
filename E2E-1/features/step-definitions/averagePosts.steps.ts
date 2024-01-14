import { When, Then } from "@wdio/cucumber-framework";
import { expect } from "@wdio/globals";

import SecurePage from "../pageobjects/secure.page";
import Statistics from "../pageobjects/statistic.page";

Then(/^I should be see the statistics option$/, async () => {
  await expect(SecurePage.statisticsButton).toBeExisting();
  await expect(SecurePage.statisticsButton).toHaveTextContaining("Statistics");
});

Then(/^I should see the (.*) on the page top-right$/, async (username) => {
  await expect(SecurePage.userName).toBeExisting();
  await expect(SecurePage.userName).toHaveTextContaining(username + " /");
});

When(/^I click the statistics option$/, async () => {
  await SecurePage.statisticsButton.click();
  await browser.pause(2000);
});

Then(/^I should see the statistics page$/, async () => {
  await expect(Statistics.title).toBeExisting();
  await expect(Statistics.title).toHaveTextContaining("Statistics");
});

When(/^I select a (.*) average posts date$/, async (date) => {
  await Statistics.getAveragePostsPerDay(date);
});

Then(/^I get the (.*) average posts$/, async (expectedAverage) => {
  await expect(Statistics.averagePostsResult).toBeExisting();
  await expect(Statistics.averagePostsResult).toHaveTextContaining(
    expectedAverage
  );
});
