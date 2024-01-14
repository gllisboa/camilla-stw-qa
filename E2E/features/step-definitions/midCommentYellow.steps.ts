import { When, Then } from "@wdio/cucumber-framework";
import ascendingPage from "../pageobjects/ascending.page";


When(/^I go to Ascending posts section$/, async () => {
    await ascendingPage.ascendingPostLMenu.click();
    await browser.pause(2000);
   });
  
  
  //
  //@CT-NewYelloCommented0001 - Scenario: Single post in the recent posts section
  When(/^I have just 1 post in the ascending posts section$/, async () => {
    await ascendingPage.runAscendingCT0001();
    await browser.pause(2000);
    return true;
  });
  
  //@CT-NewYelloCommented0002 -Scenario: No posts highlighted in yellow when all posts are highly commented
  When(
    /^When I have no posts with one third or less of the total comments$/,
    async () => {
      await ascendingPage.runAscendingCT0002();
      await browser.pause(2000);
      return true;
    });
  
  //Resultado esperado para @CT-NewYelloCommented0001 e @CT-NewYelloCommented0002
  Then(
    /^Then I should not see any posts highlighted with a Yellow background$/,
    async () => {
      await ascendingPage.checkNoPostYellowHighlighted();
      await browser.pause(2000);
    });
  
  //T@CT-NewYelloCommented0003 - Scenario: Highlight posts between 1/3 and 2/3 of comments in Yellow
  When(
    /^I have posts between one thrid and two thrids of the total comments$/,
    async () => {
      await ascendingPage.runAscendingCT0003();
      await browser.pause(2000);
      return true;
    });
  
  Then(
    /^I should see the posts with one third or less of the total comments must be highlighted with a red background$/,
    async () => {
      await ascendingPage.checkYellowHighlighted();
      await browser.pause(2000);
    });