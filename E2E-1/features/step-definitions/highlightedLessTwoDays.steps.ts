import { When, Then } from "@wdio/cucumber-framework";
import { expect } from "@wdio/globals";
import Ascending from "../pageobjects/ascending.page";

// @TC_01

When(/^I go to Ascending posts in the posts section$/, async () => {
    await Ascending.runTC_01();
    Ascending.clickAscending();
    await browser.pause(2000);
});

Then(/^I should see 1 post on the page highlighted green$/, async() => {
    await expect(await Ascending.getNumberofposts()).toBe(0);
});


