import { When, Then } from "@wdio/cucumber-framework";
import PopularPage from "../pageobjects/popular.page";

When(/^I go to Popular posts in the popular posts section$/, async () => {
  await PopularPage.popularPostLMenu.click();
  await browser.pause(2000);
});

//@CT-001: I have posts with no comments in the popular posts section
When(
  /^I have posts without comments in the popular posts section$/, async () => {
    await PopularPage.runUS16dbCT01();
    await browser.pause(2000);
  }
);

Then(
  /^I should not see posts highlighted with a green background$/,
  async () => {
    await PopularPage.checkZeroGreenHighlighted();
    await browser.pause(2000);
  }
);

//@CT-002: I have single  post in the popular posts section
When(/^I have only one posts in the popular posts section$/, async () => {
  await PopularPage.runUS16dbCT02();
  await browser.pause(2000);
});

Then(
  /^I should'nt see posts highlighted with a green background$/,
  async () => {
    await PopularPage.checkSingleGreenHighlighted();
    await browser.pause(2000);
  }
);

//@CT-003: Highlight highest commented posts in the popular posts section
// When(
//   /^I have posts with two third or more of the total comments$/,
//   async () => {
//     await PopularPage.runUS16dbCT03();
//     await browser.pause(2000);
//   }
// );

Then(
  /^I should see the posts with two third or more of the total comments highlighted with a green background$/,
  async () => {
    await PopularPage.checkGreenHighlighted();
    await browser.pause(2000);
  }
);
