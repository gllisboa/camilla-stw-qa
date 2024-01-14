import { When, Then } from "@wdio/cucumber-framework";
import { expect } from "@wdio/globals";
import PopularPage from "../pageobjects/popular.page";
import PostPage from "../pageobjects/post.page";


// US024 - acceptancetests -  post 5 days ago (date red)

When(/^I click on Popular button$/, async () => {
  await PopularPage.buttonPopular.click();
});

Then(/^I can see the post 1 day ago$/, async () => {
  await expect(PopularPage.date1dayAgo).toBeDisplayed();
});

Then(/^I can see the post 2 days ago$/, async () => {
  await expect(PopularPage.date2daysAgo).toBeDisplayed();
});

Then(/^I can see the post 3 days ago$/, async () => {
  await expect(PopularPage.date3daysAgo).toBeDisplayed();
});

Then(/^I can see the post 6 days ago$/, async () => {
  await expect(PopularPage.date6daysAgo).toBeDisplayed();
});

Then(/^I can see the post 7 days ago$/, async () => {
  await expect(PopularPage.date7daysAgo).toBeDisplayed();
});

Then(/^I can see the post 2 months ago$/, async () => {
  await expect(PopularPage.date2monthsAgo).toBeDisplayed();
});
