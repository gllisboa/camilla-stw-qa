import { When, Then } from "@wdio/cucumber-framework";
import NewPage from "../pageobjects/new.page";

When(/^I go to New posts in the recent posts section$/, async () => {
  await NewPage.newPostLMenu.click();
  await browser.pause(2000);
});

//@CT-0001
When(/^I have just 1 post in the recent posts section$/, async () => {
  await NewPage.runUS022CT0001();
  await browser.pause(2000);
});

Then(
  /^I should not see any posts highlighted with a red background$/,
  async () => {
    await NewPage.checkSinglePostRedHighlighted();
    await browser.pause(2000);
  }
);

//@CT-0002
When(
  /^I have no posts with one third or less of the total comments$/,
  async () => {
    await NewPage.runUS022CT0002();
    await browser.pause(2000);
  }
);

Then(/^I should see no posts highlighted with a red background$/, async () => {
  await NewPage.checkNoPostRedHighlighted();
  await browser.pause(2000);
});

//@CT-003
<<<<<<< HEAD
When(
  /^I have posts with one third or less of the total comments$/,
  async () => {
    await NewPage.runUS022CT0003();
    await browser.pause(2000);
  }
);

Then(
  /^I should see the posts with one third or less of the total comments must be highlighted with a red background$/,
  async () => {
    await NewPage.checkRedHighlighted();
    await browser.pause(2000);
  }
);
=======
When(/^I have posts with one third or less of the total comments$/, async() => {
  console.log('CT-0001');
  await NewPage.runCT0001();
  await browser.pause(2000);
  return true;
 });

//@CT-003
Then(/^I should see the posts with one third or less of the total comments must be highlighted with a red background$/,  async() => {
  await NewPage.checkRedHighlighted();
  await browser.pause(2000);
});
>>>>>>> 4e01416fefbeeb8899488b0fe057d60462e83129
