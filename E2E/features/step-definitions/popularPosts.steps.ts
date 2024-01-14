<<<<<<< HEAD
// import { When, Then } from "@wdio/cucumber-framework";
// import { expect } from "@wdio/globals";
// import PopularPage from "../pageobjects/popular.page";

=======
import { When, Then } from "@wdio/cucumber-framework";
import { expect } from "@wdio/globals";
import PopularPage from "../pageobjects/popular.page";
import PostPage from "../pageobjects/post.page";
>>>>>>> 4e01416fefbeeb8899488b0fe057d60462e83129

When(/^I click \"submit\"$/, async () => {
  await PopularPage.buttonSubmit.click();
  await browser.pause(2000);
});

Then(
  /^I should create a post with the title (.*) and text (.*)$/,
  async (title, text) => {
    await PostPage.createPost(title, text);
  }
);

When(/^I click \"Popular\"$/, async () => {
  await PopularPage.buttonPopular.click();
  await browser.pause(2000);
});

Then(/^I should see a post with \"Please comment me\" in purple$/, async () => {
  await expect(PopularPage.firstPostPleaseCommentMe).toBeExisting();
  await expect(PopularPage.firstPostPleaseCommentMe).toHaveTextContaining(
    "Please comment me"
  );
});

When(/^I click "Please comment me"$/, async () => {
  await PopularPage.firstPostPleaseCommentMe.click();
  await browser.pause(2000);
});

Then(/^I should be redirected to the post details page$/, async () => {});

When(
  /^I add a comment saying (.*) and I click "Back to all discussions"$/,
  async (comment) => {
    await PostPage.createComment(comment);
    await browser.pause(2000);
    await PostPage.backToAllDiscussions();
  }
);

When(/^I create a post with (.*) and (.*)$/, async (title, text) => {
  await PopularPage.buttonPopular.click();
  await browser.pause(2000);

  await PopularPage.buttonSubmit.click();
  await browser.pause(2000);

  await PostPage.createPost(title, text);
  await browser.pause(2000);
});

Then(
  /^On the most popular page I should see a post with a purple link saying "Please comment me"$/,
  async () => {
    await PopularPage.buttonPopular.click();
    await browser.pause(2000);

    await expect(PopularPage.firstPostPleaseCommentMe).toBeExisting();
    await expect(PopularPage.firstPostPleaseCommentMe).toHaveTextContaining(
      "Please comment me"
    );
  }
);

When(/^I click "Please comment me" on the most popular page$/, async () => {
  await PopularPage.firstPostPleaseCommentMe.click();
  await browser.pause(2000);
});

Then(/^I'm redirected to the post details page$/, async () => {
  await expect(PostPage.inputComment).toBeExisting();
});

When(
  /^I add the comment (.*) to the after clicking "Please comment me" and I click "Back to all discussions"$/,
  async (comment) => {
    await PopularPage.buttonPopular.click();
    await browser.pause(2000);

    await PopularPage.firstPostPleaseCommentMe.click();
    await browser.pause(2000);

    await PostPage.createComment(comment);
    await browser.pause(2000);

    await PostPage.backToAllDiscussions();
  }
);

Then(/^I should see comments$/, async () => {
  await PopularPage.buttonPopular.click();
  await browser.pause(2000);

  await expect(PopularPage.firstPostNumberOfComments).toBeExisting();
});
